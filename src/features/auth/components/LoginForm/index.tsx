"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
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

import { PasswordInput } from "@/components/ui/password-input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthService } from "../../api/auth.service";
import { useAuth } from "../../providers/client";
import { Checkbox } from "@/components/ui/checkbox";

const loginSchema = z.object({
  email: z.string().email("Неверный адрес электронной почты"),
  password: z
    .string()
    .min(8, { message: "Пароль должен содержать минимум 8 символов" })
    .regex(/[A-Z]/, {
      message: "Пароль должен содержать хотя бы одну заглавную букву",
    }),
  rememberMe: z.boolean().optional(),
});

type FormData = z.infer<typeof loginSchema>;

export const LoginForm: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  const { user, updateUser } = useAuth();

  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  useEffect(() => {
    // Client-side initialization
    setIsClient(true);

    // Check for saved credentials on component mount
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberMe = localStorage.getItem("rememberMe") === "true";

    if (rememberedEmail) {
      form.setValue("email", rememberedEmail);
      form.setValue("rememberMe", rememberMe);
    }

    // Auto-login check
    const autoLogin = async () => {
      const accessToken = localStorage.getItem("access-token");

      if (accessToken) {
        try {
          const me = await AuthService().getMe();
          if (me.success) {
            updateUser(me.data);
            router.push("/account/profile");
          }
        } catch (err) {
          // Clear invalid tokens
          [
            "access-token",
            "refresh-token",
            "rememberedEmail",
            "rememberMe",
          ].forEach((key) => localStorage.removeItem(key));
        }
      }
    };

    autoLogin();
  }, []);

  const onSubmit = async (values: FormData) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    const { success, data } = await AuthService().login(formData);
    if (success) {
      // Handle Remember Me functionality
      if (values.rememberMe) {
        localStorage.setItem("rememberedEmail", values.email);
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberMe");
      }

      // Store tokens
      localStorage.setItem("access-token", data.access_token);
      localStorage.setItem("refresh-token", data.refresh_token);

      // Fetch user details
      const me = await AuthService().getMe();
      if (me.success) {
        setError("");
        updateUser(me.data);
        router.push("/account/profile");
      } else {
        setError(me.data);
      }
    } else {
      setError("Неправильное имя пользователя или пароль");
    }
  };

  // Prevent hydration errors by checking if we're on the client
  if (!isClient) {
    return null;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <FormMessage className="mb-2 text-left w-full">{error}</FormMessage>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Введите email" {...field} />
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
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <PasswordInput placeholder="Введите пароль" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rememberMe"
          render={({ field }) => (
            <div className="flex w-full justify-between items-center mt-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Запомнить меня
                </label>
              </div>
            </div>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="mt-4"
          size={"sm"}
        >
          {form.formState.isSubmitting ? "В процессе..." : "Войти"}
        </Button>
      </form>
    </Form>
  );
};
