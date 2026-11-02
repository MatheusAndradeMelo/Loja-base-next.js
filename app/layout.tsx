import type { Metadata } from "next";
import "./globals.css";
import { storeConfig } from "./src/store.config";

export const metadata: Metadata = {
  title: storeConfig.name,
  description: storeConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}