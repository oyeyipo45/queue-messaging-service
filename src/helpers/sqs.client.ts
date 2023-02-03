import { SQSClient } from '@aws-sdk/client-sqs';
import { config } from '../config/config';
// Set the AWS Region.
const REGION = config.region; //e.g. "us-east-1"
// Create SQS service object.
const sqsClient = new SQSClient({ region: REGION });
export { sqsClient };
