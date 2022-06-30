import { IsString, IsArray, IsOptional } from 'class-validator';

export class UpdateCollegiumDto {
    @IsOptional()
    @IsString()
    startText?: string;

    @IsOptional()
    @IsString()
    secondText?: string;

    @IsOptional()
    @IsString()
    referenceText?: string;

    @IsOptional()
    @IsArray()
    historyText?: string[];

    @IsOptional()
    @IsString()
    careerText?: string;
}
