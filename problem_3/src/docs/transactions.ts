const broadCastTransaction = {
	tags: ['Transactions'],
	summary: 'Broadcast a Transaction',
	requestBody: {
		required: true,
		content: {
			'application/json': {
				schema: {
					$ref: '#/components/schemas/broadcastBody',
				},
			},
		},
	},
	responses: {
		200: {
			description: 'Successful operation',
			content: {
				'application/json': {
					schema: {
						type: 'object',
						properties: {
							tx_hash: {
								type: 'string',
								example: '025a399945d32f7d2e9d8213c66ee3eeb62b7172c7ce2c94216b85b925b29b6d',
							},
						},
					},
				},
			},
		},
		400: {
			description: 'description: Error broadcasting transaction',
		},
	},
};

const broadcastBody = {
	type: 'object',
	properties: {
		symbol: {
			type: 'string',
			example: 'ETH',
		},
		price: {
			type: 'number',
			example: 4500,
		},
		timestamp: {
			type: 'number',
			example: 1678912345,
		},
	},
};

const checkTransaction = {
	tags: ['Transactions'],
	summary: 'Transaction Status Monitoring',
	parameters: [
		{
			name: 'tx_hash',
			in: 'path',
			required: true,
			description: 'Transaction hash',
			schema: {
				type: 'string',
				example: 'e97ae379d666eed7576bf285c451baf9f0edba93ce718bf15b06c8a85d07b8d1',
			},
		},
	],
	responses: {
		200: {
			description: `Transaction status, which acan be one of the following 'CONFIRMED', 'FAILED', 'PENDING', 'DNE'.`,
			content: {
				'application/json': {
					schema: {
						$ref: '#/components/schemas/txStatus',
					},
				},
			},
		},
		400: {
			description: 'description: Error broadcasting transaction',
		},
	},
};

const txStatus = {
	type: 'object',
	properties: {
		tx_status: {
			type: 'string',
			enum: ['CONFIRMED', 'FAILED', 'PENDING', 'DNE'],
			example: 'CONFIRMED',
		},
	},
};

export { broadCastTransaction, broadcastBody, checkTransaction, txStatus };
