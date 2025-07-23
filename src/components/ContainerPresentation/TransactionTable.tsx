import type { Transaction } from "./Transaction";

type TransactionTableProps = {
    transactions: Transaction[];
};

export const TransactionTable = ({ transactions }: TransactionTableProps) => {
    return (
        <div className="overflow-x-auto bg-white shadow w-full">
            <table className="w-full table-auto border-collapse border border-gray-800">
                <thead className="bg-gray-600">
                    <tr>
                        <th className="px-4 py-2 text-center font-medium text-gray-100">Date</th>
                        <th className="px-4 py-2 text-center font-medium text-gray-100">Description</th>
                        <th className="px-4 py-2 text-center font-medium text-gray-100">Amount</th>
                        <th className="px-4 py-2 text-center font-medium text-gray-100">Type</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-black">
                    {transactions.map((tx) => (
                        <tr key={tx.id}>
                            <td className="px-4 py-2 text-center">{tx.date}</td>
                            <td className="px-4 py-2 text-center">{tx.description}</td>
                            <td
                                className={`px-4 py-2 text-center font-semibold ${tx.amount > 0 ? "text-green-500" : "text-red-500"
                                    }`}
                            >
                                {tx.amount > 0 ? "+" : "-"}${Math.abs(tx.amount).toFixed(2)}
                            </td>
                            <td className="px-4 py-2 text-center">{tx.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
