export type Transaction = {
    id: number;
    date: string;
    amount: number;
    type: "Deposit" | "Withdrawal" | "Transfer";
    description: string;
};
