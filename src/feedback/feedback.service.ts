import { Injectable } from '@nestjs/common';

import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbackService {
  createFeedback(feedback: CreateFeedbackDto) {
    console.log(feedback);
  }
}
