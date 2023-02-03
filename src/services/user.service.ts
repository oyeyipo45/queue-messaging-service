
import { User } from '../entities/user.entity';
import * as userRepository from '../repository/user.repository';

export const createUser = async (body: User): Promise<any> => {
  try {
    const user = await userRepository.createUser(body);

    return user;
  } catch (error) {
    throw error;
  }
};
