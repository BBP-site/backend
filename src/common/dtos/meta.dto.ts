import { MetaDtoParameters } from '@common/interfaces';
import { PaginationResponseDto } from '@common/dtos/pagination-response.dto';

export class MetaDto {
  readonly pagination: PaginationResponseDto;

  constructor({ commonRequestDto, total }: MetaDtoParameters) {
    this.pagination = new PaginationResponseDto({
      ...commonRequestDto.pagination,
      total,
    });
  }
}
