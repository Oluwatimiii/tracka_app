import getUserBalance from "@/app/actions/getUserBalance";
import { addCommas } from "@/lib/utils";
import React from "react";

const Balance = async () => {
  const { balance } = await getUserBalance();
  console.log(balance)

  return (
    <div className="font-semibold py-3">
      <h2>Available Balance</h2>
      <p>${addCommas(Number(balance?.toFixed(2) ?? 0))}</p>
    </div>
  );
};

export default Balance;
