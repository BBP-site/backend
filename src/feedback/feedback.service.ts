import { Injectable } from '@nestjs/common';

import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { MailService } from "../mail/mail.service";

@Injectable()
export class FeedbackService {
  constructor(private mailService: MailService) {}

  async createFeedback(feedback: CreateFeedbackDto): Promise<void> {
    return await this.mailService.sendFeedbackMail(feedback);
  }
}
