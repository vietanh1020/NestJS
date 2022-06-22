import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  name?: string;
  age?: number;
  password?: string;
  email?: string;
  address?: string;
}
