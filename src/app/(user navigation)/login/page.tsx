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
  password: z.string().trim().min(1, { message: "Password is required" }),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 w-full max-w-[500px] p-8 m-6 rounded bg-secondary h-fit"
      >
        <h2>Welcome Back</h2>
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="&#183; &#183; &#183; &#183; &#183; &#183; &#183; &#183;"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <Button variant="link" size="link" className="ml-auto">
                <Link href="/forgot-password">Forgot your password?</Link>
              </Button>
            </FormItem>
          )}
        />
        <Button type="submit" size="submit">
          Login
        </Button>
        <div className="flex items-center">
          <div className="flex-1 h-[2px] bg-muted mr-3"></div>
          Or
          <div className="flex-1 h-[2px] bg-muted ml-3"></div>
        </div>
        <div className="flex items-center justify-center">
          <p>Don&apos;t have an account yet?</p>
          <Button variant="link" size="link" className="ml-2">
            <Link href="sign-up">Sign up</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
