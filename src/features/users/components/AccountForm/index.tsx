"use client";

import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
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
import { UsersService } from "@/features/users/api/users.service";
import { PasswordInput } from "@/components/ui/password-input";
import { useAuth } from "@/features/auth/providers/client";

const accountSchema = z
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
      .min(6, { message: "Пароль должен содержать минимум 6 символов" })
      .optional()
      .or(z.literal("")),
    passwordConfirm: z.string().optional().or(z.literal("")),
  })
  .refine((data) => !data.password || data.password === data.passwordConfirm, {
    message: "Пароли не совпадают",
  });

type FormData = z.infer<typeof accountSchema>;

export const AccountForm: React.FC = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { user, updateUser } = useAuth();
  const [changePassword, setChangePassword] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(accountSchema),
    defaultValues: user
      ? {
          password: "",
          passwordConfirm: "",
        }
      : {},
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = form;

  const password = useRef<string | undefined>();
  password.current = watch("password");

  const onSubmit = useCallback(
    async (values: FormData) => {
      if (user) {
        const { data, success } = await UsersService().updateUserData(values);
        if (success) {
          const updated_user = data;
          updateUser(updated_user);
          setSuccess("Successfully updated account.");
          setError("");
          setChangePassword(false);
          reset({
            password: "",
            passwordConfirm: "",
          });
        } else {
          setError("There was a problem updating your account.");
        }
      }
    },
    [user, updateUser, reset]
  );

  useEffect(() => {
    if (user) {
      reset({
        username: user.username,
        email: user.email,
        fullname: user.fullname,
        password: "",
        passwordConfirm: "",
      });
    }
  }, [user, reset, changePassword]);

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-5 gap-6 flex flex-col items-start bg-white p-6 md:rounded-xl rounded-md"
      >
        {error && <FormMessage>{error}</FormMessage>}
        {success && (
          <FormMessage className="text-green-400">{success}</FormMessage>
        )}
        {!changePassword ? (
          <p className="text-sm">
            {"Чтобы изменить свой пароль, "}
            <button
              type="button"
              className="text-blue-500 underline"
              onClick={() => setChangePassword(!changePassword)}
            >
              нажмите сюда
            </button>
            .
          </p>
        ) : (
          <p className="text-sm">
            {"Измените свой пароль ниже, или "}
            <button
              type="button"
              className="text-blue-500 underline"
              onClick={() => setChangePassword(!changePassword)}
            >
              отмена
            </button>
            .
          </p>
        )}

        {!changePassword ? (
          <div className="space-y-2 max-w-md w-full">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>ФИО</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите ваше ФИО" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите ваш email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ) : (
          <div className="space-y-2 max-w-md w-full">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Новый пароль</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder="Введите новый пароль"
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
                      placeholder="Подтвердите новый пароль"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
        <Button size="sm" type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Обработка..."
            : changePassword
            ? "Изменить пароль"
            : "Обновить профиль"}
        </Button>
      </form>
    </Form>
  );
};
