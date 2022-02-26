import { Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(@Inject('MONGO') private database: Db) {}

  async getUsers() {
    const usersCollection = this.database.collection('users');
    const users = await usersCollection.find().toArray();
    return { message: 'Users listed', data: users };
  }

  getUser(id: any) {
    return {
      message: 'User',
      data: {
        User: 'Hello',
      },
    };
  }

  createUser(payload: any) {
    return {
      message: 'User created',
      data: payload,
    };
  }

  updateUser(id: any, payload: any) {
    return {
      message: 'User updated',
      data: payload,
    };
  }

  deleteUser(id: any) {
    return {
      message: 'User deleted',
    };
  }
}
