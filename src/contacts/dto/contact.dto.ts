import { IsString, IsArray, IsEmail } from 'class-validator';

export class ContactDto {
  @IsString()
  address: string;

  @IsArray()
  phones?: { number: string; desc: string }[];

  @IsEmail()
  email: string;
}
