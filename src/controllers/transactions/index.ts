import { Request, Response } from 'express';
import {getAllTransactions as getAllTransactionsApi} from "../../services/transactions";

export const getAllTransactions = async(req: Request, res: Response) => {
    try {
        const transactions = await getAllTransactionsApi();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch transactions', error });
    }
}