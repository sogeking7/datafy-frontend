"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PasswordInput } from "@/components/ui/password-input";
import { AuthService } from "../../api/auth.service";
import { useAuth } from "../../providers/client";

const createAccountSchema = z
  .object({
    fullname: z
      .string()
      .trim()
      .min(1, { message: "Поле обязательно для заполнения" }),
    username: z
      .string()
      .trim()
      .min(1, { message: "Поле обязательно для заполнения" }),
    email: z.string().email("Неверный адрес электронной почты"),
    password: z
      .string()
      .min(8, { message: "Пароль должен содержать минимум 8 символов" })
      .regex(/[A-Z]/, {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      }),
    passwordConfirm: z
      .string()
      .min(8, { message: "Пароль должен содержать минимум 8 символов" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Пароли не совпадают",
  });

type FormData = z.infer<typeof createAccountSchema>;

export const CreateAccountForm: React.FC = () => {
  const searchParams = useSearchParams();
  const allParams = searchParams.toString()
    ? `?${searchParams.toString()}`
    : "";
  const { updateUser } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      fullname: "-",
      username: "-",
    },
  });

  const onSubmit = async (values: FormData) => {
    const { passwordConfirm, ...restValues } = values;
    const { success, data } = await AuthService().create({
      ...restValues,
      about: "-",
      city: "-",
    });

    if (!success) {
      setError("Произошла ошибка при создании аккаунта.");
      return;
    }

    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    const res = await AuthService().login(formData);
    if (res.success) {
      localStorage.setItem("access-token", res.data.access_token);
      localStorage.setItem("refresh-token", res.data.refresh_token);
      const me = await AuthService().getMe();
      if (me.success) {
        setError("");
        updateUser(me.data);
        router.push(
          `/account/profile?success=${encodeURIComponent(
            "Аккаунт успешно создан"
          )}`
        );
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
        className="flex flex-col gap-2"
      >
        <FormMessage className="mb-2">{error}</FormMessage>

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
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Подтверждение пароля</FormLabel>
              <FormControl>
                <PasswordInput placeholder="Повторите пароль" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-4" size={"sm"}>
          {loading ? "Обработка" : "Зарегистрироваться"}
        </Button>
      </form>
    </Form>
  );
};
