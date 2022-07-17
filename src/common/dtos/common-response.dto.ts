import { MetaDto } from './meta.dto';

export class CommonResponseDto<T extends { _id?: string }> {
  readonly data: any;

  readonly meta: MetaDto | Record<string, unknown>;

  createId(data: T) {
    let newEl = JSON.parse(JSON.stringify(data));
    newEl = { id: newEl._id, ...newEl };
    delete newEl._id;
    return newEl;
  }

  constructor(data: T[] | T, meta?: MetaDto) {
    if (Array.isArray(data)) {
      this.data = data.map(el => {
        return this.createId(el);
      })
    } else {
      this.data = this.createId(data);
    }

    this.meta = meta || {};
  }
}
