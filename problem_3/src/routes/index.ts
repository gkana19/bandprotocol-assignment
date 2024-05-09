import express, { Router } from 'express';
import transactionRouter from './transaction.routes';

const router: Router = express.Router();

router.use('/transaction', transactionRouter);

export default router;
