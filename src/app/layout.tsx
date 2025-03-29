import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import classNames from "classnames";

const geistMono = Zen_Maru_Gothic({
  weight: ["400", "700"],
  variable: "--font-zen-maru-gothic",
  subsets: [],
});

export const metadata: Metadata = {
  title: "HITSUJI-RERE",
  description: "My portfolio webpage",
  appleWebApp: {
    title: "HITSUJI-RERE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={classNames("min-h-screen bg-base-200", geistMono.className)}
      >
        {children}
      </body>
    </html>
  );
}
