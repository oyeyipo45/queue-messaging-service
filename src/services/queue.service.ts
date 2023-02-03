import { CreateQueueInterface } from '../dtos/create.queue.dto';
import * as queueRepository from '../repository/queue.repository'

export const createQueues = async (body: CreateQueueInterface): Promise<any> => {
  try {
    const queue = await queueRepository.createQueues(body);

    return queue;
  } catch (error : any ) {
    throw error;
  }
};
