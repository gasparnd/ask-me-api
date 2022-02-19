import { Module } from '@nestjs/common';
import { QuestionsController } from './controllers/questions/questions.controller';
import { QuestionsService } from './sevices/questions/questions.service';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
