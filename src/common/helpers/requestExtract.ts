import { SortOrder } from 'mongoose';

import { CommonRequestDto } from '@common/dtos';

export const extractFilter = (
  commonRequestDto: CommonRequestDto,
  like: string[] = [],
) => {
  if (!commonRequestDto.filter) return undefined;

  return {
    ...commonRequestDto.filter,
    ...(like.length &&
      like.reduce(
        (filters, filterName) => ({
          ...filters,
          ...(commonRequestDto.filter?.[filterName] && {
            [filterName]: {
              $regex: commonRequestDto.filter[filterName],
              $options: 'i',
            },
          }),
        }),
        {},
      )),
  };
};

export const extractSort = (commonRequestDto: CommonRequestDto) => {
  if (commonRequestDto?.sort) return undefined;
  const sortDirection: SortOrder = /^-/.test(commonRequestDto.sort) ? -1 : 1;
  const sortKey =
    sortDirection < 0 ? commonRequestDto.sort.slice(1) : commonRequestDto.sort;
  return { [sortKey]: sortDirection };
};
