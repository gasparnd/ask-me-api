import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from 'src/database/database.module';
import { UsersController } from './controllers/users/users.controller';
import { User, UserSchema } from './entities/user.entity';
import { UsersService } from './sevices/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class UsersModule {}
