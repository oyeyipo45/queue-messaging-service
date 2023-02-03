import express from 'express';
import { createQueue } from '../controllers/queue';
import { listSqsQueues } from '../repository/user.repository';

const router = express.Router();

router.get('/list/queue', listSqsQueues);
router.post('/queue', createQueue);

export default router;
