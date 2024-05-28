import Transaction, {ITransaction} from "../../models/Transaction";
import {TransactionsGetDTO} from "../../dto/transactions/TransactionsGetDTO";

export const getAllTransactions = async(): Promise<ITransaction[]> => {
    const transactions = await Transaction.find({});
    return transactions;
}