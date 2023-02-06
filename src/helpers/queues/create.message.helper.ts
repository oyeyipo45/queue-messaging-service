import { ReceiveMessageCommand, SendMessageCommand } from '@aws-sdk/client-sqs';
import { Consumer } from 'sqs-consumer';
import { CreateMessageInterface } from '../../dtos/create.queue.dto';
import { sqsClient } from '../sqs.client';

// Set the parameters


const users = [
  {
    firstname: 'damilola1',
    lastname: 'oyeyipo1',
    email: 'oyeyipo4@gmail.com1',
  },
  ,
  {
    firstname: 'damilola2',
    lastname: 'oyeyipo2',
    email: 'oyeyipo4@gmail.com2',
  },
  ,
  {
    firstname: 'damilola3',
    lastname: 'oyeyipo3',
    email: 'oyeyipo4@gmail.com3',
  },
];




export const sendMessage = async (body: CreateMessageInterface) => {

    try {
      
    for (let index = 0; index < users.length; index++) {
        const element = users[index];

        const params = {
        MessageAttributes: {
            FirstName: {
            DataType: 'String',
            StringValue:   `${element?.firstname}`,
            },
            Lastname: {
            DataType: 'String',
            StringValue:   `${element?.lastname}`,
            },
            Email: {
            DataType: 'String',
            StringValue:   `${element?.email}`,
            },
        },
        MessageBody: 'Information about Damilola Oyeyipo',
        QueueUrl: 'https://sqs.eu-west-1.amazonaws.com/072247013230/messages.fifo',
        MessageGroupId: 'DamilolaDetails',
        MessageDeduplicationId: 'TheDamilola',
        };

        const data = await sqsClient.send(new SendMessageCommand(params));
        console.log(data);

        console.log('Success, message sent. MessageID:', data.MessageId);
        return data; // For unit tests.
    }

     
  } catch (err) {
    console.log('Error', err);
  }
};
