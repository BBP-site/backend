import { IsString } from 'class-validator';

export class UserDto {
  @IsString()
  _id: string;

  @IsString()
  login: string;

  @IsString()
  password: string;

  @IsString()
  salt: string;
}
