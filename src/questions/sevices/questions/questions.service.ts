import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from 'src/questions/entities/qiestion.entity';
import { Model } from 'mongoose';
import {
  AnswerQuestion,
  CreateQuetion,
} from 'src/questions/dtos/questions.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<Question>,
  ) {}
  async getQuestions() {
    const questions = await this.questionModel.find().exec();
    return { message: 'Questions listed', data: questions };
  }

  async getQuestion(id: any) {
    const question = await this.questionModel.findById(id).exec();
    if (!question) {
      throw new NotFoundException(
        `The question with the id ${id} was not founded`,
      );
    }
    return {
      message: 'Question',
      data: question,
    };
  }

  async createQuestion(payload: CreateQuetion) {
    const question = await new this.questionModel(payload);
    question.save();
    return {
      message: 'Question created',
    };
  }

  async answerQuestion(id: any, payload: AnswerQuestion) {
    const question = await this.questionModel.findByIdAndUpdate(
      id,
      { $set: payload },
      { new: true },
    );
    if (!question) {
      throw new NotFoundException(
        `The question with the id ${id} was not founded`,
      );
    }
    return {
      message: 'Question answered',
      data: question,
    };
  }

  async deleteQuestion(id: any) {
    const question = await this.questionModel.findByIdAndDelete(id);
    if (!question) {
      throw new NotFoundException(
        `The question with the id ${id} was not founded`,
      );
    }
    return {
      message: 'Question deleted',
    };
  }
}
