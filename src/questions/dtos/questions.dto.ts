import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateQuetion {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly question: string;

  @IsNotEmpty()
  @IsMongoId()
  readonly user: string;
}

export class AnswerQuestion {
  @IsNotEmpty()
  @IsString()
  readonly answer: string;

  // @IsDate()
  // @IsNotEmpty()
  // readonly answerDate: string;
}
