import getTransactions from "@/app/actions/getTranscations";
import { Transaction } from "@/types/Transaction";
import React from "react";
import TransactionItem from "./TransactionItem";

const TranscationList = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div>
      <h2>History</h2>

      <ul className="list">
        {transactions &&
          transactions.map((transaction: Transaction) => {
            return (
              <>
                <TransactionItem
                  key={transaction.iD}
                  transaction={transaction}
                />
              </>
            );
          })}
      </ul>
    </div>
  );
};

export default TranscationList;
