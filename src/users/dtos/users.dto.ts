import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "User's name" })
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "User's last name" })
  readonly lastName: string;

  @IsNotEmpty()
  @IsString()
  @Length(4, 20)
  @ApiProperty({ description: "User's nikname" })
  readonly nikName: string;

  @IsString()
  @IsEmail()
  @ApiProperty({ description: "User's email" })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8)
  @ApiProperty({ description: "User's password" })
  readonly password: string;

  @IsString()
  @IsArray()
  @IsOptional()
  readonly questions: string[];
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
