import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactsDocument = Contacts & Document;

@Schema()
export class Contacts {
    @Prop()
    address: string;

    @Prop()
    phones: { number: string; desc: string }[];

    @Prop()
    email: string;
}

export const ContactsSchema = SchemaFactory.createForClass(Contacts);
