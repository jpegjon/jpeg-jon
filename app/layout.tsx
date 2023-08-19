import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const unica = localFont({
  src: "./Unica77LLWeb-Regular.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jonathan Tsikniadopoulos",
  description: "Software engineer & project manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={unica.className}>{children}</body>
    </html>
  );
}
