import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "LinnovateTech",
  description: "Soluções Digitais Inovadoras para o Seu Negócio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <main className="relative flex flex-col justify-betwenn h-full min-h-screen bg-gradient-to-b from-gray-200 to-gray-50">
          <div>
            <Navbar />
          </div>
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
