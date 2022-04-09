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
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/users.dto';
import { UsersService } from 'src/users/sevices/users.service';

@UseGuards(ApiKeyGuard, JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @Public()
  @Get()
  getUsers() {
    return this.usersServices.getUsers();
  }

  @Public()
  @Get(':id')
  getUser(@Param('id') id: MongoIdPipe) {
    return this.usersServices.getUser(id);
  }

  @Public()
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
