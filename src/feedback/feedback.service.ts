import { Injectable } from '@nestjs/common';

import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Feedback, FeedbackDocument } from "./schemas/feedback.schema";

@Injectable()
export class FeedbackService {
  constructor(@InjectModel(Feedback.name) private feedbackModel: Model<FeedbackDocument>) {};

  async getAll(): Promise<Feedback[]> {
    return this.feedbackModel.find().exec();
  }

  async getFeedback(id: string): Promise<Feedback> {
    return this.feedbackModel.findById(id);
  }
  
  async createFeedback(feedback: CreateFeedbackDto): Promise<Feedback> {
    const newFeedback = new this.feedbackModel(feedback);
    return newFeedback.save();
  }

  async removeFeedback(id: string): Promise<Feedback> {
    return this.feedbackModel.findByIdAndRemove(id);
  }
}
