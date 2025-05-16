"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const schema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
      .string()
      .trim()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string({ required_error: "Password is required" })
      .trim()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirm: z.string({ required_error: "Confirm is required" }).trim(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export default function SignupForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit() {
    console.log("Account created!");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 w-full max-w-[500px] p-8 m-6 rounded bg-secondary"
      >
        <h2 className="">Create an Account</h2>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name*</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email*</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password*</FormLabel>
              <FormControl>
                <Input
                  placeholder="Create a password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormDescription>Must be as least 8 characters.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password*</FormLabel>
              <FormControl>
                <Input
                  placeholder="Create a password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="submit">
          Create account
        </Button>
        <div className="flex items-center">
          <div className="flex-1 h-[2px] bg-muted mr-3"></div>
          Or
          <div className="flex-1 h-[2px] bg-muted ml-3"></div>
        </div>
        <div className="flex items-center justify-center">
          <p>Already have an account?</p>
          <Button variant="link" size="link" className="ml-2">
            <Link href="login">Login</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
