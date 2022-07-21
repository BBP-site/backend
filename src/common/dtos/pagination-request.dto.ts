import { IsInt } from 'class-validator';
import { IOffsetPaginationQuery } from '@common/interfaces';

export class PaginationRequestDto {
  @IsInt()
  readonly limit: number;

  @IsInt()
  readonly offset: number;

  constructor({ limit, offset }: IOffsetPaginationQuery) {
    this.limit = limit;
    this.offset = offset;
  }
}
