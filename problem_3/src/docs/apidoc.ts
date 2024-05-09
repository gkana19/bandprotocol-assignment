import { broadcastBody, broadCastTransaction, checkTransaction, txStatus } from './transactions';

const apiDocumentation = {
	openapi: '3.0.0',
	info: {
		title: 'Transaction API Documentation',
		version: '1.0.0',
		description: `Problem 3: Transaction Broadcasting and Monitoring Client. Interacts with an HTTP server.`,
		contact: {
			name: 'Kanawat Gumkuntee',
			url: 'https://github.com/gkana19',
			email: 'kanawat1912@gmail.com',
		},
	},
	servers: [
		{
			url: 'http://localhost:8000/api',
			description: 'Local Server',
		},
	],
	tags: [
		{
			name: 'Transactions',
		},
	],
	paths: {
		'/transaction/broadcast': {
			post: broadCastTransaction,
		},
		'/transaction/check/{tx_hash}': {
			get: checkTransaction,
		},
	},
	components: {
		schemas: {
			broadcastBody,
			txStatus,
		},
	},
};

export { apiDocumentation };
