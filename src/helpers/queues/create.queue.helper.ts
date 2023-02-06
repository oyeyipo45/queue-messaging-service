import { sqsClient } from '../sqs.client';
import { CreateQueueCommand } from '@aws-sdk/client-sqs';
import { config } from '../../config/config';



// Set the parameters


export const createSqsQueue = async (body : string) => {

  console.log(body, "dgfdfvhdvfdfd");
  
    const params = {
      QueueName: body, //SQS_QUEUE_URL
      Attributes: {
        DelaySeconds: '60', // Number of seconds delay.
        MessageRetentionPeriod: '86400', // Number of seconds delay.
      },
    };

  try {
    const data = await sqsClient.send(new CreateQueueCommand(params));
    return data; // For unit tests.
  } catch (err : any ) {
    throw err
  }
};