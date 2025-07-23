// src/components/HooksComposition/HooksComposition.tsx

import { useBankTransactions } from "./useDashboardSummary";

const HooksComposition = () => {
    const { transactions, loading } = useBankTransactions();

    if (loading) return <p>Loading transactions...</p>;

    return (
        <div>
            <h2>💳 Recent Bank Transactions</h2>
            <ul>
                {transactions.map((tx) => (
                    <li key={tx.id}>
                        <strong>{tx.date}</strong> - {tx.description} —{" "}
                        <span style={{ color: tx.amount < 0 ? "red" : "green" }}>
                            {tx.amount} USD
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HooksComposition;
