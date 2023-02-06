import { Consumer } from 'sqs-consumer';
import { CreateMessageInterface, CreateQueueInterface } from '../dtos/create.queue.dto';
import { consumeMessagesHandler } from '../helpers/queues/consumer.message';
import { sendMessage, } from '../helpers/queues/create.message.helper';
import { createSqsQueue } from '../helpers/queues/create.queue.helper';

export const createQueues = async (body: CreateQueueInterface): Promise<any> => {
  try {
    const { name }: CreateQueueInterface = body;

    const queues = await createSqsQueue(name);

      console.log(queues, 'queues1');
      return queues
  } catch (error : any ) {
    throw error
  }
};


export const createMessages = async (body: CreateMessageInterface): Promise<any> => {
  try {

    const queues = await sendMessage(body);

    console.log(queues, 'queues2');
    return queues;
  } catch (error: any) {
    throw error;
  }
};



export const consumeMessages = async (body: any): Promise<any> => {
  try {
    const message = await consumeMessagesHandler(body);

    return message;
  } catch (error: any) {
    throw error;
  }
};