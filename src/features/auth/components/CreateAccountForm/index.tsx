"use client";

import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { PasswordInput } from "@/components/ui/password-input";
import { Textarea } from "@/components/ui/textarea";
import { AuthService } from "../../api/auth.service";
import { useAuth } from "../../providers/client";

const createAccountSchema = z
  .object({
    profile: z.object({
      name: z.string().trim().min(1),
      about: z.string().trim().min(1),
      city: z.string().trim().optional(),
    }),
    username: z.string().trim().min(1),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    passwordConfirm: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

type FormData = z.infer<typeof createAccountSchema>;

export const CreateAccountForm: React.FC = () => {
  const searchParams = useSearchParams();
  const allParams = searchParams.toString()
    ? `?${searchParams.toString()}`
    : "";
  const { login } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(createAccountSchema),
  });

  const onSubmit = useCallback(
    async (values: FormData) => {
      const { success, data } = await AuthService().create(values);

      if (!success) {
        const message = data || "There was an error creating the account.";
        setError(message);
        return;
      }

      const redirect = searchParams.get("redirect");
      const timer = setTimeout(() => {
        setLoading(true);
      }, 1000);

      const res = await AuthService().login(values);
      if (res.success) {
        login(res.data);
        clearTimeout(timer);
        if (redirect) router.push(redirect as string);
        else
          router.push(
            `/account?success=${encodeURIComponent(
              "Account created successfully",
            )}`,
          );
      } else {
        clearTimeout(timer);
        setError(
          "There was an error with the credentials provided. Please try again.",
        );
      }
    },
    [login, router, searchParams],
  );

  return (
    <Card className="max-w-md w-full">
      <CardHeader className="flex flex-row items-center gap-2">
        <ArrowLeft onClick={() => router.back()} />
        <h1 className="text-3xl">Authorization</h1>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-1 items-end"
          >
            <FormMessage className="mb-2">{error}</FormMessage>

            <FormField
              control={form.control}
              name="profile.name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profile.about"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>About</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none"
                      placeholder="Enter your bio"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profile.city"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email Address</FormLabel>
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
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder="Confirm your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-4">
              {loading ? "Processing" : "Create Account"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <div className="text-sm">
          {"Already have an account? "}
          <Link className="hover:underline" href={`/auth/login${allParams}`}>
            Login
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
