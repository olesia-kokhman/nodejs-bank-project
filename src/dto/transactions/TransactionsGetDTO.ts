export interface TransactionsGetDTO {
    _id: number;
    account_id: number;
    type: string;
    amount: number;
    status: string;
    date: Date;
    description: string;
}