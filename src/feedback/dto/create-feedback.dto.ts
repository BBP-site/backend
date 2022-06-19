import { IsString, IsEmail } from 'class-validator';

export class CreateFeedbackDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  question: string;
}
