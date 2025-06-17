import type { Metadata } from "next";
import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import MySidebar from "../components/sidebar";
import "../globals.css";

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
    <SidebarProvider>
      <MySidebar />
      <SidebarInset>
        <main className="p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
