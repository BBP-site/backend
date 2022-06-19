export interface OffsetPaginationQuery {
  limit: number;
  offset: number;
}

export interface OffsetPagination extends OffsetPaginationQuery {
  total: number;
}
