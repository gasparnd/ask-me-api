import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/entities/user.entity';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUsers() {
    const users = await this.userModel.find().exec();
    return { message: 'Users listed', data: users };
  }

  async getUser(id: any) {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`The user with rhe id ${id} was not founded`);
    }
    return {
      message: 'User',
      data: user,
    };
  }

  async createUser(payload: CreateUserDto) {
    const user = await new this.userModel(payload);
    user.save();
    return {
      message: 'User created',
    };
  }

  async updateUser(id: any, payload: UpdateUserDto) {
    const user = await this.userModel.findByIdAndUpdate(
      id,
      { $set: payload },
      { new: true },
    );

    if (!user) {
      throw new NotFoundException(`The user with rhe id ${id} was not founded`);
    }
    return {
      message: 'User updated',
      data: user,
    };
  }

  async deleteUser(id: any) {
    const user = await this.userModel.findByIdAndDelete(id);
    if (!user) {
      throw new NotFoundException(`The user with rhe id ${id} was not founded`);
    }
    return {
      message: 'User deleted',
    };
  }
}
