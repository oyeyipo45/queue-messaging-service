import { NextFunction, Response, Request } from 'express';
import * as QueueService from '../services/queue.service';

export const createQueue = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const body = req.body;

    const queue = await QueueService.createQueues(body);

    res.status(201).json({
      queue,
    });
  } catch (error : any ) {
     res.status(500).json({
       message : error?.message,
     });
  }
};
