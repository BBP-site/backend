import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { CommonRequestDto, CommonResponseDto, MetaDto } from '@common/dtos';
import { PracticeUpdateDto } from './dto/practice-update.dto';
import { Practice, PracticeDocument } from "./schemas/practices.schema";

@Injectable()
export class PracticesService {
  constructor(@InjectModel(Practice.name) private practiceModel: Model<PracticeDocument>) {}

  //удалить
  private practicesArr = [
    {
      id: '11',
      title: 'praktika 1',
      content: 'aaaa',
    },
    {
      id: '12',
      title: 'praktika 2',
      content: 'gggggg',
    },
    {
      id: '13',
      title: 'praktika 3',
      content: 'ccccc',
    },
    {
      id: '14',
      title: 'praktika 4',
      content: 'ddddd',
    },
  ];

  //сам давай делай что ты там хотел, я ничего не понял
  practices(commonRequestDto: CommonRequestDto) {
    let sorted = this.practicesArr;
    if (commonRequestDto.sort) {
      const sortMultiplier = /^-/.test(commonRequestDto.sort) ? -1 : 1;
      const sortKey =
        sortMultiplier < 0
          ? commonRequestDto.sort.slice(1)
          : commonRequestDto.sort;

      sorted = this.practicesArr.sort((a, b) => {
        if (a[sortKey] > b[sortKey]) return 1 * sortMultiplier;
        if (a[sortKey] < b[sortKey]) return -1 * sortMultiplier;
        return 0;
      });
    }

    const filtered =
      commonRequestDto.filter && Object.keys(commonRequestDto.filter).length
        ? sorted.filter((d) => {
            let isOk = true;
            for (const [key, value] of Object.entries(
              commonRequestDto.filter,
            )) {
              if (d[key] !== value) {
                isOk = false;
                return;
              }
            }
            return isOk;
          })
        : sorted;

    const total = filtered.length;
    const meta = new MetaDto({ commonRequestDto, total });
    const data = filtered.slice(
      meta.pagination.offset * meta.pagination.limit,
      meta.pagination.offset * meta.pagination.limit + meta.pagination.limit,
    );

    return new CommonResponseDto(data, meta);
  }

  async getAll(): Promise<Practice[]> {
    return this.practiceModel.find().exec();
  }

  async getById(id: string): Promise<Practice> {
    return this.practiceModel.findById(id);
  }

  async update(id: string, practiceDto: PracticeUpdateDto): Promise<Practice> {
    return this.practiceModel.findByIdAndUpdate(id, practiceDto, {new: true});
  }

  async remove(id: string): Promise<Practice> {
    return this.practiceModel.findByIdAndRemove(id);
  }
}
