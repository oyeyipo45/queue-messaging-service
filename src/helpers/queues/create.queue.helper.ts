import { sqsClient } from '../sqs.client';
import { CreateQueueCommand } from '@aws-sdk/client-sqs';



// Set the parameters
const params = {
  QueueName: 'SQS_QUEUE_NAME', //SQS_QUEUE_URL
  Attributes: {
    DelaySeconds: '60', // Number of seconds delay.
    MessageRetentionPeriod: '86400', // Number of seconds delay.
  },
};

const run = async () => {
  try {
    const data = await sqsClient.send(new CreateQueueCommand(params));
    console.log('Success', data);
    return data; // For unit tests.
  } catch (err) {
    console.log('Error', err);
  }
};