import { IsString, IsEmail, IsArray, IsOptional } from 'class-validator';

export class UpdateContactDto {
  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsArray()
  phones?: { number: string; desc: string }[];

  @IsOptional()
  @IsEmail()
  email?: string;
}
