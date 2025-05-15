import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";
import { Libre_Franklin } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
  display: "swap",
});

const source_sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Impulse | Smart Shopping Tracker",
  description:
    "Impulse is a smart shopping list and price tracker that helps users \
    monitor product prices, manage purchases, and get notified about \
    deals—powered by AWS, Next.js, and Spring Boot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased flex justify-center min-h-screen ${source_sans.variable} ${libre_franklin.variable})`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
