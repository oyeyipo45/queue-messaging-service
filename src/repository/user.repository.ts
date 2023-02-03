import { User } from '../entities/user.entity';
import { AppDataSource } from '../helpers/Data-Source';
import { listQueues } from '../helpers/queues/list.queue.helper';


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


export const listSqsQueues =  async () : Promise<any> => {
   try {
     const queues = await listQueues();

     console.log(queues, 'queues');
    
   } catch (error) {
     console.log(error, "error");
     
   }
}