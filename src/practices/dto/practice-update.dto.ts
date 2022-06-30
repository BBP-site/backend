import { IsString } from 'class-validator';

export class PracticeUpdateDto {
  @IsString()
  title: string;

  @IsString()
  content: string;
}
