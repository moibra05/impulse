"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const schema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
});

export default function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 w-full max-w-[500px] p-8 m-6 rounded bg-secondary"
      >
        <h2 className="">Welcome Back.</h2>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="submit">
          Reset Password
        </Button>
        <div className="flex items-center px-2">
          <div className="flex-1 h-[2px] bg-muted mr-3"></div>
        </div>
        <div className="flex justify-end gap-6">
          <Button variant="link" size="link">
            <Link href="login">Login</Link>
          </Button>
          <Button variant="link" size="link">
            <Link href="sign-up">Register</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
