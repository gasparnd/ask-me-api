import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { MongoIdPipe } from 'src/common/mongo-id.pipe';
import {
  AnswerQuestion,
  CreateQuetion,
} from 'src/questions/dtos/questions.dto';
import { QuestionsService } from 'src/questions/sevices/questions.service';

@UseGuards(ApiKeyGuard, JwtAuthGuard)
@Controller('questions')
export class QuestionsController {
  constructor(private questionsServices: QuestionsService) {}

  @Public()
  @Get()
  getQuestions() {
    return this.questionsServices.getQuestions();
  }

  @Public()
  @Get(':id')
  getQuestion(@Param('id') id: MongoIdPipe) {
    return this.questionsServices.getQuestion(id);
  }

  @Public()
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
