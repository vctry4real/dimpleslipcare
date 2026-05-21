import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

export const Roles = (...roles: string[]) =>
  Reflect.metadata('roles', roles)

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(ctx: ExecutionContext): boolean {
    const required = this.reflector.get<string[]>('roles', ctx.getHandler())
    if (!required?.length) return true
    const { user } = ctx.switchToHttp().getRequest()
    return required.includes(user?.role)
  }
}
