import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Response } from "@common/schemas/common-response-data.schema";

export type TPracticeDocument = Practice & Document;

@Schema()
export class Practice extends Response {
  @Prop()
  title: string;

  @Prop()
  content: string;
}

export const PracticeSchema = SchemaFactory.createForClass(Practice);
