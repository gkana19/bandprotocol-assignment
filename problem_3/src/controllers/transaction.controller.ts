import { NextFunction, Request, Response } from 'express';
import { BroadcastPayload, BroadcastResponse, TxStatus } from '../models/transaction.model';
import axios from 'axios';

export default class TransactionController {
	public async broadCastTransaction(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const payload: BroadcastPayload = {
				symbol: req.body.symbol,
				price: req.body.price,
				timestamp: req.body.timestamp,
			};

			const response = await axios.post(`https://mock-node-wgqbnxruha-as.a.run.app/broadcast`, payload);
			const data: BroadcastResponse = response.data;

			if (response.status === 200) {
				res.status(200).json(data);
			} else {
				res.status(400).send('Error broadcast transaction');
			}
		} catch (error) {
			console.log(error);
			next(error);
		}
	}

	public async checkTransaction(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { tx_hash } = req.params;
			const response = await axios.get(`https://mock-node-wgqbnxruha-as.a.run.app/check/${tx_hash}`);

			const data: TxStatus = response.data;

			if (response.status === 200) {
				res.status(200).json(data);
			} else {
				res.status(400).send('Error checking transaction');
			}
		} catch (error) {
			console.log(error);
			res.status(500).send('Internal server error');
			next(error);
		}
	}
}
