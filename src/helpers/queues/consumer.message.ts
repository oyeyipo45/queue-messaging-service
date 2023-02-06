import { User } from '../../entities/user.entity';
import { AppDataSource } from '../Data-Source';


const userRepository = AppDataSource.getRepository(User);


export const consumeMessagesHandler = async (data : any) => {
    try {
        
      
    const createUser = userRepository.create(data);


    if (createUser) {
      const savedUser = await userRepository.save(createUser);


      return savedUser;
    }

  } catch (err) {
    console.log('Error', err);
  }
};
