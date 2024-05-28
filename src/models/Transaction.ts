import mongoose, {Document, Schema} from 'mongoose';

export interface ITransaction extends Document {
    id: number;
    account_id: number;
    type: string;
    amount: number;
    status: string;
    date: Date;
    description: string;
}

const transactionSchema = new Schema<ITransaction>({
    _id: Number,
    account_id: Number,
    type: String,
    amount: Number,
    status: String,
    date: Date,
    description: String
});

const Transaction = mongoose.model<ITransaction>('Transaction', transactionSchema);

export default Transaction;