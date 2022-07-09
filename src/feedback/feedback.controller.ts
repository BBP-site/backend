import { Body, Controller, Post } from '@nestjs/common';

import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { FeedbackService } from './feedback.service';
import { Feedback } from './schemas/feedback.schema';

@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Post()
  createFeedback(
    @Body() createFeedbackDto: CreateFeedbackDto,
  ): Promise<Feedback> {
    return this.feedbackService.createFeedback(createFeedbackDto);
  }
}
