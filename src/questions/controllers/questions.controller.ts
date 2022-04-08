import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MongoIdPipe } from 'src/common/mongo-id.pipe';
import {
  AnswerQuestion,
  CreateQuetion,
} from 'src/questions/dtos/questions.dto';
import { QuestionsService } from 'src/questions/sevices/questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsServices: QuestionsService) {}

  @Get()
  getQuestions() {
    return this.questionsServices.getQuestions();
  }

  @Get(':id')
  getQuestion(@Param('id') id: MongoIdPipe) {
    return this.questionsServices.getQuestion(id);
  }

  @Post()
  createQuestion(@Body() payload: CreateQuetion) {
    return this.questionsServices.createQuestion(payload);
  }

  @Patch('answer/:id')
  answerQuestion(
    @Param('id') id: MongoIdPipe,
    @Body() payload: AnswerQuestion,
  ) {
    return this.questionsServices.answerQuestion(id, payload);
  }

  @Delete(':id')
  deleteQuestion(@Param('id') id: MongoIdPipe) {
    return this.questionsServices.deleteQuestion(id);
  }
}
