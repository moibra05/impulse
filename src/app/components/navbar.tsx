"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Settings, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sections = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "My Lists",
    href: "/lists",
  },
  {
    title: "Price History",
    href: "/history",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-3 z-50 m-3 rounded-xl border border-border/20 bg-gradient-to-r from-background/80 via-background/90 to-background/80 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/20">
      <div className="flex justify-between items-center p-4">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <Link
            href="/"
            className="flex items-center space-x-3 transition-all hover:scale-[101%] hover:-translate-y-[1px] duration-200"
          >
            <div className="relative">
              <Image
                src="/impulse-logo.svg"
                width={36}
                height={36}
                alt="logo"
                className=""
              />
            </div>
            <span className="hidden font-bold text-xl sm:inline-block bg-gradient-to-r from-impulse-yellow to-impulse-secondary-yellow bg-clip-text dark:text-transparent text-primary-foreground">
              Impulse
            </span>
          </Link>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="relative text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground group"
            >
              <span
                className={cn(
                  "relative z-10 text-base text-muted-foreground group-hover:text-foreground transition-colors",
                  pathname === section.href ? "text-foreground" : ""
                )}
              >
                {section.title}
              </span>
              <div
                className={cn(
                  "absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-impulse-yellow to-impulse-secondary-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full",
                  pathname === section.href ? "group-hover:scale-x-0" : ""
                )}
              ></div>
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <div className="p-1 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors">
            <ModeToggle />
          </div>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="border">
                {/* TODO: Update to show profile picture */}
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-background/95 backdrop-blur-md border-border/50"
            >
              <DropdownMenuItem className="hover:bg-impulse-yellow/10 transition-colors">
                {/* TODO: Update to link to profile page */}
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-impulse-yellow/10 transition-colors">
                {/* TODO: Update to link to settings page */}
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border/50" />
              <DropdownMenuItem className="text-destructive hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                {/* TODO: Add log out functionality */}
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
