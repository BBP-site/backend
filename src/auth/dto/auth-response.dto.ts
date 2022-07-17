import { IsObject } from 'class-validator';

export class AuthResponseDto {
  @IsObject()
  data?: {
    access_token: string;
  };
}
