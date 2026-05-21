import { IsEmail, IsString, MinLength, IsOptional, Matches } from 'class-validator'

export class RegisterDto {
  @IsEmail()
  email: string

  @IsString()
  @MinLength(8)
  password: string

  @IsString()
  @MinLength(1)
  firstName: string

  @IsString()
  @MinLength(1)
  lastName: string

  @IsOptional()
  @IsString()
  @Matches(/^[0-9+\s\-()]{7,15}$/, { message: 'Invalid phone number' })
  phone?: string
}
