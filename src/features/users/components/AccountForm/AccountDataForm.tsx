"use client";

import React, { useEffect, useState } from "react";
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
import { useAuth } from "@/features/auth/providers/client";
import { User } from "@/types";

const accountSchema = z.object({
  fullname: z
    .string()
    .trim()
    .min(1, { message: "Поле обязательно для заполнения" }),
  username: z
    .string()
    .trim()
    .min(1, { message: "Поле обязательно для заполнения" }),
});

type FormData = z.infer<typeof accountSchema>;

export const AccountDataForm: React.FC<{
  setChangePassword: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setChangePassword }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { user, updateUser } = useAuth();

  const form = useForm<FormData>({
    resolver: zodResolver(accountSchema),
    defaultValues: {},
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = form;

  const onSubmit = async (values: FormData) => {
    if (!user) return;
    const { success } = await UsersService().updateUserData(values);
    if (success) {
      const updated_user: User = {
        ...user,
        fullname: values.fullname,
        username: values.username,
      };
      updateUser(updated_user);
      setSuccess("Аккаунт успешно обновлен.");
      setError("");
    } else {
      setError("Возникла проблема с обновлением вашего аккаунта..");
    }
  };

  useEffect(() => {
    if (user) {
      reset({
        username: user.username,
        fullname: user.fullname,
      });
    }
  }, [user, reset]);

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-5 gap-6 flex flex-col items-start bg-white p-6 md:rounded-xl rounded-md"
      >
        {error && <FormMessage>{error}</FormMessage>}
        {success && (
          <FormMessage className="text-green-500">{success}</FormMessage>
        )}
        <p className="text-sm">
          {"Чтобы изменить свой пароль, "}
          <button
            type="button"
            className="text-blue-500 underline"
            onClick={() => setChangePassword(true)}
          >
            нажмите сюда
          </button>
          .
        </p>
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
        </div>
        <Button size="sm" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Обработка..." : "Обновить профиль"}
        </Button>
      </form>
    </Form>
  );
};
