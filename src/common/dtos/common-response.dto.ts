import { IsArray } from 'class-validator';

import { MetaDto } from './meta.dto';

export class CommonResponseDto<T> {
  @IsArray()
  readonly data: T[] | T;

  readonly meta: MetaDto | Record<string, unknown>;

  constructor(data: T[] | T, meta?: MetaDto) {
    this.data = data;
    this.meta = meta || {};
  }
}
