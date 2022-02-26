import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateQuetion {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly question: string;

  @IsDate()
  @IsNotEmpty()
  readonly date: string;
}

export class UpdateQuestion {
  @IsNotEmpty()
  @IsString()
  readonly answer: string;

  @IsDate()
  @IsNotEmpty()
  readonly answerDate: string;
}
