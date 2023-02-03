import { NextFunction, Response, Request } from 'express';
import * as UserService from '../services/user.service';
import { User } from '../entities/user.entity';

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log(req.body);

    const body = req.body;

    const user: User = await UserService.createUser(body);

    res.status(201).json({
      user,
    });
  } catch (error) {
    throw error;
  }
};
