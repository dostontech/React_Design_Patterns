import { useState, useEffect } from "react";
import { mockData } from "../ContainerPresentation/transactionsData";
import type { Transaction } from "../ContainerPresentation/Transaction";


export const useBankTransactions = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setTransactions(mockData);
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return { transactions, loading };
};
