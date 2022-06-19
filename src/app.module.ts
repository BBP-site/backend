import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
      ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
      MongooseModule.forRoot('mongodb://mongo/27017')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
