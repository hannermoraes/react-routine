import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: "routine",
  description: "Gerencie seus hábitos na palma das suas mãos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Toaster />
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
