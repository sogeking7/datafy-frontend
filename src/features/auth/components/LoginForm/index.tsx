"use client";

import React, { useCallback, useRef } from "react";
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
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { PasswordInput } from "@/components/ui/password-input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthService } from "../../api/auth.service";
import { useAuth } from "../../providers/client";

const loginSchema = z.object({
  email: z.string().email("Неверный адрес электронной почты"),
  password: z
    .string()
    .min(6, { message: "Пароль должен содержать минимум 6 символов" }),
});

type FormData = z.infer<typeof loginSchema>;

export const LoginForm: React.FC = () => {
  const searchParams = useSearchParams();
  const allParams = searchParams.toString()
    ? `?${searchParams.toString()}`
    : "";
  const redirect = useRef(searchParams.get("redirect"));
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback(
    async (values: FormData) => {
      const { success, data } = await AuthService().login(values);
      if (success) {
        // TODO: fix
        // login(data);
        if (redirect?.current) router.push(redirect.current as string);
        else router.push("/account");
      } else {
        setError(
          "Произошла ошибка при вводе данных. Пожалуйста, попробуйте еще раз.",
        );
      }
    },
    [login, router],
  );

  return (
    <Card className="max-w-md w-full">
      <CardHeader className="flex flex-row items-center gap-2">
        <ArrowLeft onClick={() => router.back()} />
        <h1 className="text-3xl">Вход</h1>
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
                    <PasswordInput
                      placeholder="Введите ваш пароль"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="mt-4"
            >
              {form.formState.isSubmitting ? "В процессе..." : "Войти"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <div>
          <Link
            className="text-sm hover:underline"
            href={`/auth/create-account${allParams}`}
          >
            Создать аккаунт
          </Link>
          <br />
        </div>
      </CardFooter>
    </Card>
  );
};
