import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  createFeedback(@Body() createFeedbackDto: CreateFeedbackDto): Promise<void> {
    return this.feedbackService.createFeedback(createFeedbackDto);
  }
}
