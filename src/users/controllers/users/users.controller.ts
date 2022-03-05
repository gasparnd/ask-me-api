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
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/users.dto';
import { UsersService } from 'src/users/sevices/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @Get()
  getUsers() {
    return this.usersServices.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: MongoIdPipe) {
    return this.usersServices.getUser(id);
  }

  @Post()
  createUser(@Body() payload: CreateUserDto) {
    return this.usersServices.createUser(payload);
  }

  @Patch(':id/insertQuestion/:questionId')
  insertQuestion(
    @Param('id') id: MongoIdPipe,
    @Param('questionId') questionId: MongoIdPipe,
  ) {
    return this.usersServices.insertQuestion(id, questionId);
  }

  @Patch(':id')
  updateUser(@Param('id') id: MongoIdPipe, @Body() payload: UpdateUserDto) {
    return this.usersServices.updateUser(id, payload);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: MongoIdPipe) {
    return this.usersServices.deleteUser(id);
  }
}
