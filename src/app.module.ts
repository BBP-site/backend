import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { FeedbackModule } from './feedback/feedback.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [FeedbackModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
