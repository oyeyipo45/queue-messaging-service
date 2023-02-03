import { User } from '../entities/user.entity';
import { AppDataSource } from '../helpers/Data-Source';


const userRepository = AppDataSource.getRepository(User);

export const createUser = async (body: User): Promise<any> => {
  try {
    const createUser = userRepository.create(body);

    console.log(createUser, 'createUser');

    if (createUser) {
      const savedUser = await userRepository.save(createUser);

      console.log(savedUser, 'savedUser');

      return savedUser;
    }
  } catch (error) {
    throw error;
  }
};
