import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { CommonResponseDto, CommonRequestDto } from '@common/dtos';

import { PracticesService } from './practices.service';
import { PracticeUpdateDto } from './dto/practice-update.dto';
import { Practice } from './schemas/practice.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('practices')
export class PracticesController {
  constructor(private practicesService: PracticesService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  practices(
    @Body() practiceRequestDto: CommonRequestDto,
  ): Promise<CommonResponseDto<Practice>> {
    return this.practicesService.practices(practiceRequestDto);
  }

  @Get()
  getAll(): Promise<Practice[]> {
    return this.practicesService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<CommonResponseDto<Practice>> {
    return this.practicesService.getById(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  update(
    @Param('id') id: string,
    @Body() practiceDto: PracticeUpdateDto,
  ): Promise<Practice> {
    return this.practicesService.update(id, practiceDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string): Promise<Practice> {
    return this.practicesService.remove(id);
  }
}
