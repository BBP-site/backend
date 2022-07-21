import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User, TUserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<TUserDocument>) {}

  async findOne(login: string): Promise<User> {
    return this.userModel.findOne({ login });
  }
}
