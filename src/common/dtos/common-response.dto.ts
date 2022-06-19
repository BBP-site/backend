import { IsArray } from 'class-validator';

import { MetaDto } from './meta.dto';

export class CommonResponseDto<T> {
  @IsArray()
  readonly data: T[];

  readonly meta: MetaDto;

  constructor(data: T[], meta: MetaDto) {
    this.data = data;
    this.meta = meta;
  }
}
