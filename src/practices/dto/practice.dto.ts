import { IsString } from 'class-validator';

export class PracticeDto {
  @IsString()
  title: string;

  @IsString()
  content: string;
}
