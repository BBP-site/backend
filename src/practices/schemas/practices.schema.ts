import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PracticeDocument = Practice & Document;

@Schema()
export class Practice {
    @Prop()
    id: string;

    @Prop()
    title: string;

    @Prop()
    content: string;
}

export const PracticeSchema = SchemaFactory.createForClass(Practice);
