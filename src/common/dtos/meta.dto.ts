import { IMetaDtoParameters } from '@common/interfaces';
import { PaginationResponseDto } from '@common/dtos/pagination-response.dto';

export class MetaDto {
  readonly pagination: PaginationResponseDto;

  constructor({ commonRequestDto, total }: IMetaDtoParameters) {
    this.pagination = new PaginationResponseDto({
      ...commonRequestDto.pagination,
      total,
    });
  }
}
