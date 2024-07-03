import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { verifyUser } from "@/lib/verifyUser";

export const Header = async () => {
  const user = await verifyUser()

  return (
    <div className="navbar py-2">
      <div className="navbar-container">
        <h2>Expense Tracker</h2>

        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};
