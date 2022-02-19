import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { QuestionsService } from 'src/questions/sevices/questions/questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsServices: QuestionsService) {}

  @Get()
  getQuestions() {
    return this.questionsServices.getQuestions();
  }

  @Get(':id')
  getQuestion(@Param('id') id: any) {
    return this.questionsServices.getQuestion(id);
  }

  @Post()
  createQuestion(@Body() payload: any) {
    return this.questionsServices.createQuestion(payload);
  }

  @Patch(':id')
  updateQuestion(@Param('id') id: any, @Body() payload: any) {
    return this.questionsServices.updateQuestion(id, payload);
  }

  @Delete(':id')
  deleteQuestion(@Param('id') id: any) {
    return this.questionsServices.deleteQuestion(id);
  }
}
