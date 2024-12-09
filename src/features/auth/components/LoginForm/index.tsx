"use client";

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
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

const loginSchema = z.object({
  email: z.string().email("Неверный адрес электронной почты"),
  password: z
    .string()
    .min(8, { message: "Пароль должен содержать минимум 8 символов" })
    .regex(/[A-Z]/, {
      message: "Пароль должен содержать хотя бы одну заглавную букву",
    }),
});

type FormData = z.infer<typeof loginSchema>;

export const LoginForm: React.FC = () => {
  const searchParams = useSearchParams();
  const allParams = searchParams.toString()
    ? `?${searchParams.toString()}`
    : "";
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);

  const { user, updateUser } = useAuth();

  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormData) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    const { success, data } = await AuthService().login(formData);
    if (success) {
      localStorage.setItem("access-token", data.access_token);
      localStorage.setItem("refresh-token", data.refresh_token);
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

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 items-end"
      >
        <FormMessage className="mb-2 text-left w-full">{error}</FormMessage>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Введите ваш email" {...field} />
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
                <PasswordInput placeholder="Введите ваш пароль" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
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
