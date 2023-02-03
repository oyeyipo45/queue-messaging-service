import dotenv from 'dotenv';

dotenv.config();

export const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  aws_key: process.env.AWS_KEY,
  aws_secret: process.env.AWS_SECRET,
  region: process.env.REGION,
  queue_name: process.env.QUEUE_NAME,
};