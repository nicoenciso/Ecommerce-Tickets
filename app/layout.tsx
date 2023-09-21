import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import SearchSection from "@/components/SearchSection";

export const metadata: Metadata = {
  title: "Ecommerce-Tickets",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SearchSection />
        <section>{children}</section>
      </body>
    </html>
  );
}
