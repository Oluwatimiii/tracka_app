import AddTranscation from "@/components/AddTransactions";
import Balance from "@/components/Balance";
import Guest from "@/components/Guest";
import IncomeExpense from "@/components/IncomeExpense";
import TranscationList from "@/components/TranscationList";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser()

  if(!user) {
    return <Guest />
  }

  return (
    <main className="min-h-screen w-full mx-auto">
      <h1>Welcome {user.firstName}</h1>
      <Balance />
      <IncomeExpense />
      <AddTranscation />
      <TranscationList />
    </main>
  );
}
