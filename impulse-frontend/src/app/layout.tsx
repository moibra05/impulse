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
        className={`antialiased min-h-screen relative ${source_sans.variable} ${libre_franklin.variable})`}
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
      <footer className="absolute bottom-0 right-0 left-0 text-xs text-muted-foreground text-center py-4 border-t mt-12 mx-8">
        <p>© {new Date().getFullYear()} Impulse by Mohamed Ibrahim.</p>
      </footer>
    </html>
  );
}
