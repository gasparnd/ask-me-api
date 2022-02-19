import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionsService {
  getQuestions() {
    return { message: 'Questions listed', data: [] };
  }

  getQuestion(id: any) {
    return {
      message: 'Question',
      data: {
        question: 'Hello',
      },
    };
  }

  createQuestion(payload: any) {
    return {
      message: 'Question created',
      data: payload,
    };
  }

  updateQuestion(id: any, payload: any) {
    return {
      message: 'Question updated',
      data: payload,
    };
  }

  deleteQuestion(id: any) {
    return {
      message: 'Question deleted',
    };
  }
}
