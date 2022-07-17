import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ContactsModule } from './contacts/contacts.module';
import { FeedbackModule } from './feedback/feedback.module';
import { PracticesModule } from './practices/practices.module';
import { CollegiumModule } from "./collegium/collegium.module";
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    MongooseModule.forRoot('mongodb://mongo/27017'),
    AuthModule,
    ContactsModule,
    FeedbackModule,
    PracticesModule,
    CollegiumModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
