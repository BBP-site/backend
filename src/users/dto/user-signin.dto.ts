import { IsString } from 'class-validator';

export class UserSigninDto {
  @IsString()
  login: string;

  @IsString()
  password: string;
}
