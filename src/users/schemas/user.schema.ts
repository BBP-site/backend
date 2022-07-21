import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Response } from "@common/schemas/common-response-data.schema";

export type TUserDocument = User & Document;

@Schema()
export class User extends Response {
  @Prop()
  login: string;

  @Prop()
  password: string;

  @Prop()
  salt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
