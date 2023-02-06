import { ListQueuesCommand } from '@aws-sdk/client-sqs';
import { sqsClient } from '../sqs.client';

export const listQueues = async () => {
  
  try {
    const data = await sqsClient.send(new ListQueuesCommand({}));
    console.log('Success', data);
    return data; // For unit tests.
  } catch (err : any) {
    console.error(err, err.stack);
  }
};
