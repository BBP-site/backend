import { Injectable } from '@nestjs/common';

import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Feedback, FeedbackDocument } from "./schemas/feedback.schema";

@Injectable()
export class FeedbackService {
  constructor(@InjectModel(Feedback.name) private feedbackModel: Model<FeedbackDocument>) {}

  async createFeedback(feedback: CreateFeedbackDto): Promise<Feedback> {    console.log(feedback);
    const newFeedback = new this.feedbackModel(feedback);
    return newFeedback.save();
  }
}
