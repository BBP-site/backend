import { IsString, IsEmail, IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from "class-transformer";

class Phone {
  @IsString()
  number?: string;

  @IsString()
  @IsOptional()
  desc?: string
}

export class UpdateContactDto {
  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => Phone)
  phones?: Phone[];

  @IsOptional()
  @IsEmail()
  email?: string;
}
