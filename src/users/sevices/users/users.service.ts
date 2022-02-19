import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers() {
    return { message: 'Users listed', data: [] };
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
