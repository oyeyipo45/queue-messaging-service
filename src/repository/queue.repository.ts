import { CreateQueueInterface } from '../dtos/create.queue.dto';
import { createSqsQueue } from '../helpers/queues/create.queue.helper';

export const createQueues = async (body: CreateQueueInterface): Promise<any> => {
  try {
    const { name }: CreateQueueInterface = body;

    const queues = await createSqsQueue(name);

      console.log(queues, 'queues');
      return queues
  } catch (error : any ) {
    throw error
  }
};
