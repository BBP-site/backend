import { IsInt } from 'class-validator';
import { IOffsetPagination } from '@common/interfaces';

export class PaginationResponseDto {
  @IsInt()
  readonly limit: number = 10;

  @IsInt()
  readonly offset: number = 0;

  @IsInt()
  readonly total: number;

  constructor({ limit, offset, total }: IOffsetPagination) {
    if (limit) this.limit = limit;
    if (offset) this.offset = offset;
    if (total) this.total = total;
  }
}
