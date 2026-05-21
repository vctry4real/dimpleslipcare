import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import * as bcrypt from 'bcryptjs'
import { createHash, randomBytes } from 'crypto'
import { PrismaService } from '../prisma/prisma.service'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import { Response } from 'express'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async register(dto: RegisterDto) {
    const exists = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    })
    if (exists) throw new ConflictException('Email already registered')

    const passwordHash = await bcrypt.hash(dto.password, 12)

    const user = await this.prisma.user.create({
      data: {
        email: dto.email.toLowerCase(),
        firstName: dto.firstName,
        lastName: dto.lastName,
        phone: dto.phone,
        passwordHash,
        loyalty: { create: { balance: 0 } },
      },
      select: { id: true, email: true, firstName: true, lastName: true, role: true },
    })

    return user
  }

  async login(dto: LoginDto, res: Response) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    })
    if (!user) throw new UnauthorizedException('Invalid credentials')

    const passwordMatch = await bcrypt.compare(dto.password, user.passwordHash)
    if (!passwordMatch) throw new UnauthorizedException('Invalid credentials')

    const tokens = await this.generateTokens(user.id, user.email, user.role)
    this.setRefreshCookie(res, tokens.refreshToken)

    return { accessToken: tokens.accessToken, user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    }}
  }

  async refresh(userId: string, rawRefreshToken: string, res: Response) {
    const tokenHash = createHash('sha256').update(rawRefreshToken).digest('hex')

    const stored = await this.prisma.refreshToken.findFirst({
      where: { userId, tokenHash, expiresAt: { gt: new Date() } },
    })
    if (!stored) throw new UnauthorizedException('Session expired')

    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: { id: true, email: true, role: true },
    })

    const tokens = await this.generateTokens(user.id, user.email, user.role)
    this.setRefreshCookie(res, tokens.refreshToken)

    // Rotate — delete old token
    await this.prisma.refreshToken.delete({ where: { id: stored.id } })

    return { accessToken: tokens.accessToken }
  }

  async logout(userId: string, rawRefreshToken: string, res: Response) {
    const tokenHash = createHash('sha256').update(rawRefreshToken).digest('hex')
    await this.prisma.refreshToken.deleteMany({ where: { userId, tokenHash } })
    res.clearCookie('refresh_token')
    return { message: 'Logged out' }
  }

  // ─── Helpers ───────────────────────────────────────────────────────────────

  private async generateTokens(userId: string, email: string, role: string) {
    const payload = { sub: userId, email, role }

    const accessToken = this.jwt.sign(payload, {
      secret: this.config.getOrThrow('JWT_SECRET'),
      expiresIn: this.config.get('JWT_EXPIRES_IN', '15m'),
    })

    const rawRefresh = randomBytes(40).toString('hex')
    const tokenHash = createHash('sha256').update(rawRefresh).digest('hex')

    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + 30)

    await this.prisma.refreshToken.create({
      data: { userId, tokenHash, expiresAt },
    })

    return { accessToken, refreshToken: rawRefresh }
  }

  private setRefreshCookie(res: Response, token: string) {
    res.cookie('refresh_token', token, {
      httpOnly: true,
      secure: this.config.get('NODE_ENV') === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      path: '/api/v1/auth',
    })
  }
}
