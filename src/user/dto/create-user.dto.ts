// src/user/dto/create-user.dto.ts
import { IsEmail, IsNotEmpty, MinLength, IsString, IsOptional, IsPhoneNumber, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^01\d{9}$/, { message: 'Phone number must match the format 01#########' })
  phone: string; // Alternatively, use @IsPhoneNumber() with a locale if strict format is needed

  @IsOptional()
  @IsString()
  profilePicture?: string;

  @IsOptional()
  @IsString()
  role?: string;
}
