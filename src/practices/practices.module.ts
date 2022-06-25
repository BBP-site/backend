import { Module } from '@nestjs/common';
import { PracticesController } from './practices.controller';
import { PracticesService } from './practices.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Practice, PracticeSchema} from "./schemas/practices.schema";

@Module({
  imports: [
      MongooseModule.forFeature([
        {name: Practice.name, schema: PracticeSchema}
      ])
  ],
  controllers: [PracticesController],
  providers: [PracticesService],
})
export class PracticesModule {}
