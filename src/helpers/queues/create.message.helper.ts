import { ReceiveMessageCommand, SendMessageCommand } from '@aws-sdk/client-sqs';
import { Consumer } from 'sqs-consumer';
import { CreateMessageInterface } from '../../dtos/create.queue.dto';
import { sqsClient } from '../sqs.client';

// Set the parameters
const params = {
  MessageAttributes: {
    FirstName: {
      DataType: 'String',
      StringValue: 'Damilola',
    },
    Lastname: {
      DataType: 'String',
      StringValue: 'Oyeyipo',
    },
    Age: {
      DataType: 'Number',
      StringValue: '29',
    },
  },
  MessageBody: 'Information about Damilola Oyeyipo',
  QueueUrl: 'https://sqs.eu-west-1.amazonaws.com/072247013230/messages.fifo',
  MessageGroupId: 'DamilolaDetails',
  MessageDeduplicationId: 'TheDamilola',
};


export const sendMessage = async (body: CreateMessageInterface) => {
  try {
      const data = await sqsClient.send(new SendMessageCommand(params));
      console.log(data);
      
    console.log('Success, message sent. MessageID:', data.MessageId);
    return data; // For unit tests.
  } catch (err) {
    console.log('Error', err);
  }
};



const paramst = {
  AttributeNames: ['SentTimestamp'],
  MaxNumberOfMessages: 1,
  MessageAttributeNames: ['All'],
  QueueUrl: params.QueueUrl,
  WaitTimeSeconds: 20,
};

export const messages = async () => {
    try {
      
   
        
        const app = await Consumer.create({
          queueUrl: 'https://sqs.eu-west-1.amazonaws.com/account-id/queue-name',
          handleMessage: async (message) => {
            // ...
          },
          sqs: sqsClient,
        });

        console.log(app);
        

        return app
  } catch (err) {
    console.log('Error', err);
  }
};