import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  question: string;
}
