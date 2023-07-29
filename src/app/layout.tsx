import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "THS Informática",
  description:
    "Loja de artigos de informática e manutenção em Santa Rita do Passa Quatro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-Br">
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
