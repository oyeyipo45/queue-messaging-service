import express from 'express';
import { listSqsQueues } from '../repository/user.repository';

const router = express.Router();

router.get('/list/queue', listSqsQueues);

export default router;
