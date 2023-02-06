import express from 'express';
import { consumeMessage, createMessage, createQueue,  } from '../controllers/queue';
import { listSqsQueues } from '../repository/user.repository';

const router = express.Router();

router.get('/list/queue', listSqsQueues);
router.post('/queue', createQueue);
router.post('/message', createMessage);
router.post('/message/consume', consumeMessage);

export default router;
