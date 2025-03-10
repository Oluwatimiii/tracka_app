import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@/components/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense tracker",
  description: "A tracker website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* AUTH COMPONENT */}
        <body className={roboto.className}>
          <Header />
          <main className="container">{children}</main>
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
