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


export const createMessage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const body = req.body;

    const message = await QueueService.createMessages(body);

    res.status(201).json({
      message,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error?.message,
    });
  }
};

export const consumeMessage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const body = req.body;

    const message = await QueueService.createMessages(body);

    res.status(201).json({
      message,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error?.message,
    });
  }
};