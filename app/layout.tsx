import type { Metadata } from "next";

import "./globals.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ToastProvider from "./components/toast-provider";
import { FitlogProvider } from "./context/fitlog-context";

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description:
    "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FitlogProvider>
          <Navbar />

          <main className="min-h-[calc(100vh-76px)]">
            {children}
          </main>

          <Footer />

          <ToastProvider />
        </FitlogProvider>
      </body>
    </html>
  );
}