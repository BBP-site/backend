import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema()
export class Contact {
  @Prop()
  address: string;

  @Prop()
  phones: { number: string; desc: string }[];

  @Prop()
  email: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
