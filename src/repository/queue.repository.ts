import { createSqsQueue } from '../helpers/queues/create.queue.helper';

export const createQueues = async (body: string): Promise<any> => {
  try {
    const queues = await createSqsQueue(body);

    console.log(queues, 'queues');
  } catch (error) {
    console.log(error, 'error');
  }
};
