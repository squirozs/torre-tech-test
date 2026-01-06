import type { Metadata } from "next";
import localFont from "next/font/local"; // O Inter de google
import { Toaster } from "@/components/ui/sonner";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Torre Tech Test",
  description: "Assessment for Torre.ai",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
            {children}
            <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}