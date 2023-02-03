import * as queueRepository from '../repository/queue.repository'

export const createQueues = async (body: string): Promise<any> => {
  try {
    const queue = await queueRepository.createQueues(body);

    return queue;
  } catch (error) {
    throw error;
  }
};
