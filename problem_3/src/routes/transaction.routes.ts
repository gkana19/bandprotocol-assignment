import express, { Router } from 'express';
import TransactionController from '../controllers/transaction.controller';

const router: Router = express.Router();
const transactionController = new TransactionController();

router.get('/check/:tx_hash', transactionController.checkTransaction);
router.post('/broadcast', transactionController.broadCastTransaction);

export default router;
