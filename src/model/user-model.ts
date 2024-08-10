import { User } from '@prisma/client';

export type UserResponse = {
  username: string;
  name: string;
};

export type CreateUserRequest = {
  username: string;
  name: string;
  password: string;
};

export const toUserResponse = (user: User): UserResponse => {
  return {
    name: user.name,
    username: user.username,
  };
};
