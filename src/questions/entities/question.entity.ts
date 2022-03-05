import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/entities/user.entity';

@Schema()
export class Question extends Document {
  @Prop({ require: true })
  question: string;

  @Prop()
  answer: string;

  @Prop()
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId: User | Types.ObjectId;

  // @Prop()
  // answerDate: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
