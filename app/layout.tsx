import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NG | Desinfecciones",
  description: "Desinfecciones y limpieza de espacios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
