import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { FeedbackModule } from './feedback/feedback.module';
import { PracticesModule } from './practices/practices.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.dev'],
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:27017/?authMechanism=DEFAULT&authSource=bbp`,
    ),
    ContactsModule,
    FeedbackModule,
    PracticesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
