"use client";

import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Пароль должен содержать минимум 8 символов" }),
    passwordConfirm: z
      .string()
      .min(8, { message: "Пароль должен содержать минимум 8 символов" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Пароли не совпадают",
  });

type FormData = z.infer<typeof passwordSchema>;

export const AccountPasswordForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { user, updateUser } = useAuth();

  const form = useForm<FormData>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = form;

  const onSubmit = useCallback(
    async (values: FormData) => {
      if (!user) return;
      const { success } = await UsersService().updateUserPassword(values);
      if (success) {
        setSuccess("Пароль успешно обновлен.");
        setError("");
        reset({
          password: "",
          passwordConfirm: "",
        });
      } else {
        setError("Возникла проблема с обновлением вашего пароля..");
      }
    },
    [user, updateUser, reset]
  );

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-6 flex flex-col items-start"
      >
        {error && <FormMessage>{error}</FormMessage>}
        {success && (
          <FormMessage className="text-green-500">{success}</FormMessage>
        )}
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
        <Button size="sm" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Обработка..." : "Изменить пароль"}
        </Button>
      </form>
    </Form>
  );
};
