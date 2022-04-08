import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { environments } from './environments';
import { AuthModule } from './auth/auth.module';
import config from './config';

@Module({
  imports: [
    QuestionsModule,
    UsersModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: ['.dev.env', '.prod.env'],
      isGlobal: true,
      load: [config],
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
