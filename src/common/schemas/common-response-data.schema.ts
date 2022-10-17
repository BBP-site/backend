import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Response {
    @Prop()
    _id: string;
}
