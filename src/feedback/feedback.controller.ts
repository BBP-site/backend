import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';

import { CreateFeedbackDto } from './dto/create-feedback.dto';

import { FeedbackService } from './feedback.service';
import { Feedback } from "./schemas/feedback.schema";

@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Get()
  getAll(): Promise<Feedback[]> {
    return this.feedbackService.getAll();
  }

  @Get(':id')
  getFeedback(@Param('id') id: string): Promise<Feedback> {
    return this.feedbackService.getFeedback(id);
  }

  @Post()
  createFeedback(@Body() createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    return this.feedbackService.createFeedback(createFeedbackDto);
  }

  @Delete(":id")
  removeFeedback(@Param('id') id: string): Promise<Feedback> {
    return this.feedbackService.removeFeedback(id);
  }
}
