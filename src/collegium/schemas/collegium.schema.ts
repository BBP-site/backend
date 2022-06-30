import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CollegiumDocument = Collegium & Document;

@Schema()
export class Collegium {
    @Prop()
    startText?: string;

    @Prop()
    secondText?: string;

    @Prop()
    referenceText?: string;

    @Prop()
    historyText?: string[];

    @Prop()
    careerText?: string;
}

export const CollegiumSchema = SchemaFactory.createForClass(Collegium);
