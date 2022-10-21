import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [ConfigModule.forRoot(), FeedbackModule],
})
export class AppModule {}
