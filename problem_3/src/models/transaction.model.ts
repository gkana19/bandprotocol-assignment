export interface BroadcastPayload {
	symbol: string; // Transaction symbol, e.g., BTC
	price: number; // Symbol price, e.g., 100000
	timestamp: number; // Timestamp of price retrieval
}

export interface BroadcastResponse {
	tx_hash: string;
}

export interface TxStatus {
	tx_status: 'CONFIRMED' | 'FAILED' | 'PENDING' | 'DNE';
}
