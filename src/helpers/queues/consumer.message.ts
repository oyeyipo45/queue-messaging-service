import { User } from '../../entities/user.entity';
import { AppDataSource } from '../Data-Source';


const userRepository = AppDataSource.getRepository(User);


export const consumeMessagesHandler = async (data : any) => {
    try {
      
    const createUser = userRepository.create(data);

    console.log(createUser, 'createUser');

    if (createUser) {
      const savedUser = await userRepository.save(createUser);

      console.log(savedUser, 'savedUser');

      return savedUser;
    }

  } catch (err) {
    console.log('Error', err);
  }
};
