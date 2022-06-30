import { IsInt } from 'class-validator';
import { OffsetPaginationQuery } from '@common/interfaces';

export class PaginationRequestDto {
  @IsInt()
  readonly limit: number;

  @IsInt()
  readonly offset: number;

  constructor({ limit, offset }: OffsetPaginationQuery) {
    this.limit = limit;
    this.offset = offset;
  }
}
