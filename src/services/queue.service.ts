import { CreateMessageInterface, CreateQueueInterface } from '../dtos/create.queue.dto';
import * as queueRepository from '../repository/queue.repository'

export const createQueues = async (body: CreateQueueInterface): Promise<any> => {
  try {
    const queue = await queueRepository.createQueues(body);

    return queue;
  } catch (error : any ) {
    throw error;
  }
};


export const createMessages = async (body: CreateMessageInterface): Promise<any> => {
  try {
    const message = await queueRepository.createMessages(body);

    return message;
  } catch (error: any) {
    throw error;
  }
};


export const  consumeMessage = async (body: CreateMessageInterface): Promise<any> => {
  try {
    const message = await queueRepository.consumeMessages(body);

    return message;
  } catch (error: any) {
    throw error;
  }
};