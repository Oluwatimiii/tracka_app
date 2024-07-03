"use client";
import deleteTransaction from "@/app/actions/deleteTransaction";
import { addCommas } from "@/lib/utils";
import { Transaction } from "@/types/Transaction";
import React from "react";
import { toast } from "react-toastify";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      "This permanently deletes the transaction!"
    );

    if (!confirmed) return;

    const { error, message } = await deleteTransaction(transactionId);
    if (error) {
      toast.error(error);
    }

    toast.success(message);
  };

  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        <span>
          {sign}
          {addCommas(Math.abs(transaction.amount))}
        </span>
        <button
          className="delete-btn"
          onClick={() => handleDeleteTransaction(transaction.iD)}
        >
          x
        </button>
      </li>
    </div>
  );
};

export default TransactionItem;
