import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from 'src/users/sevices/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @Get()
  getUsers() {
    return this.usersServices.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: any) {
    return this.usersServices.getUser(id);
  }

  @Post()
  createUser(@Body() payload: any) {
    return this.usersServices.createUser(payload);
  }

  @Patch(':id')
  updateUser(@Param('id') id: any, @Body() payload: any) {
    return this.usersServices.updateUser(id, payload);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: any) {
    return this.usersServices.deleteUser(id);
  }
}
