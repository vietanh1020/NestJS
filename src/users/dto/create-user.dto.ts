import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  password: string;

  @IsEmail()
  email: string;

  @IsString()
  address: string;
}
