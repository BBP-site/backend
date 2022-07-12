import { Module } from '@nestjs/common';

import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { MailModule } from "../mail/mail.module";

@Module({
  imports: [MailModule],
  providers: [FeedbackService],
  controllers: [FeedbackController],
})
export class FeedbackModule {}
