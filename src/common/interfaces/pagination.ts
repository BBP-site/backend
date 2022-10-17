export interface IOffsetPaginationQuery {
  limit: number;
  offset: number;
}

export interface IOffsetPagination extends IOffsetPaginationQuery {
  total: number;
}
