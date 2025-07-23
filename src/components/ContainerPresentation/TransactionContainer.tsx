import { useEffect, useState } from "react";
import { TransactionTable } from "./TransactionTable";
import type { Transaction } from "./Transaction";
import { mockData } from "./transactionsData";

export const TransactionContainer = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setTransactions(mockData);
            setLoading(false);
        }, 1000); // simulate delay
    }, []);

    return (
        <div className="mx-auto w-full">
            <h1 className="text-2xl font-bold mb-4 text-white">Recent Transactions(Container Presentation)</h1>
            {loading ? (
                <p className="text-gray-500">Loading...</p>
            ) : (
                <TransactionTable transactions={transactions} />
            )}
        </div>
    );
};
