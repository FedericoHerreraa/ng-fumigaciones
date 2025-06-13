import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileViewProvider } from "@/context/MobileViewContext";
import { WhatsappQuickAccess } from "@/components/WhatsappQuickAccess";

export const metadata: Metadata = {
  title: "NG Desinfecciones | Inicio",
  description: "Desinfecciones y limpieza de espacios",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
        <MobileViewProvider>
          <Header />
          {children}
          <Footer />
          <WhatsappQuickAccess />
        </MobileViewProvider>
      </body>
    </html>
  );
}
