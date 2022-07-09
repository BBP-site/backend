import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { extractFilter, extractSort } from '@common/helpers/requestExtract';
import { CommonRequestDto, CommonResponseDto, MetaDto } from '@common/dtos';

import { PracticeUpdateDto } from './dto/practice-update.dto';
import { Practice, PracticeDocument } from './schemas/practice.schema';

@Injectable()
export class PracticesService {
  constructor(
    @InjectModel(Practice.name) private practiceModel: Model<PracticeDocument>,
  ) {}

  async practices(
    commonRequestDto: CommonRequestDto,
  ): Promise<CommonResponseDto<Practice>> {
    const total = await this.practiceModel.estimatedDocumentCount();
    const meta = new MetaDto({ commonRequestDto, total });
    const filter = extractFilter(commonRequestDto, ['title']);
    const sort = extractSort(commonRequestDto);
    const data = await this.practiceModel
      .find(filter)
      .sort(sort)
      .skip(meta.pagination.offset * meta.pagination.limit)
      .limit(meta.pagination.limit);

    return new CommonResponseDto(data, meta);
  }

  async getAll(): Promise<Practice[]> {
    return this.practiceModel.find().exec();
  }

  async getById(id: string): Promise<CommonResponseDto<Practice>> {
    const data = await this.practiceModel.findById(id);
    return new CommonResponseDto(data);
  }

  async update(id: string, practiceDto: PracticeUpdateDto): Promise<Practice> {
    return this.practiceModel.findByIdAndUpdate(id, practiceDto, { new: true });
  }

  async remove(id: string): Promise<Practice> {
    return this.practiceModel.findByIdAndRemove(id);
  }
}
