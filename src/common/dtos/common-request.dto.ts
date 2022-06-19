import { IsObject, IsOptional, IsString } from 'class-validator';

import { PaginationRequestDto } from '@common/dtos/pagination-request.dto';

export class CommonRequestDto {
  @IsObject()
  @IsOptional()
  readonly filter: { [key: string]: string | number };

  @IsString()
  @IsOptional()
  readonly sort: string;

  @IsOptional()
  readonly pagination: PaginationRequestDto;
}
