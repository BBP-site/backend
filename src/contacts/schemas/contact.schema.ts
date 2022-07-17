import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Response } from "@common/schemas/common-response-data.schema";

export type TContactDocument = Contact & Document;

@Schema()
export class Contact extends Response {
  @Prop()
  address: string;

  @Prop()
  phones: { number: string; desc: string }[];

  @Prop()
  email: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
