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
      .min(6, { message: "Пароль должен содержать минимум 6 символов" }),
    passwordConfirm: z
      .string()
      .min(6, { message: "Пароль должен содержать минимум 6 символов" }),
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
  const { login } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      fullname: "",
      username: "",
    },
  });

  const onSubmit = useCallback(
    async (values: FormData) => {
      const { passwordConfirm, ...restValues } = values;
      const { success, data } = await AuthService().create({
        ...restValues,
        about: "",
        city: "",
      });

      if (!success) {
        const message = data || "Произошла ошибка при создании аккаунта.";
        setError(message);
        return;
      }

      const redirect = searchParams.get("redirect");
      const timer = setTimeout(() => {
        setLoading(true);
      }, 1000);

      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);

      const res = await AuthService().login(formData);
      if (res.success) {
        localStorage.setItem("access-token", res.data.access_token);
        // clearTimeout(timer);
        window.location.reload();
        router.push("/account");
        if (redirect) router.push(redirect as string);
        else
          router.push(
            `/account?success=${encodeURIComponent("Аккаунт успешно создан")}`
          );
      } else {
        clearTimeout(timer);
        setError(
          "Произошла ошибка с указанными данными. Пожалуйста, попробуйте снова."
        );
      }
    },
    [login, router, searchParams]
  );

  return (
    <Card className="max-w-md w-full">
      <CardHeader className="flex flex-row items-center gap-2">
        <ArrowLeft onClick={() => router.back()} />
        <h1 className="text-3xl">Авторизация</h1>
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
              name="fullname"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Полное имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите ваше полное имя" {...field} />
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
                  <FormLabel>Имя пользователя</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Введите ваше имя пользователя"
                      {...field}
                    />
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
                  <FormLabel>Электронная почта</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите вашу почту" {...field} />
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
                    <PasswordInput
                      placeholder="Введите ваш пароль"
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
                  <FormLabel>Подтверждение пароля</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder="Подтвердите ваш пароль"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-4">
              {loading ? "Обработка" : "Создать аккаунт"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <div className="text-sm">
          {"Уже есть аккаунт? "}
          <Link className="hover:underline" href={`/auth/login${allParams}`}>
            Войти
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
