"use client";

import React, { Fragment, useCallback, useRef, useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/features/auth/providers/client";

const accountSchema = z
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
      .min(6, "Password must be at least 6 characters")
      .optional()
      .or(z.literal("")),
    passwordConfirm: z.string().optional().or(z.literal("")),
  })
  .refine((data) => !data.password || data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
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
          username: user.username,
          email: user.email,
          profile: {
            name: user.profile.name,
            about: user.profile.about,
            city: user.profile.city || "",
          },
          password: "",
          passwordConfirm: "",
        }
      : {},
  });

  const {
    handleSubmit,
    // TODO: errors show on frontend
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = form;

  const password = useRef<string | undefined>();
  password.current = watch("password");

  const onSubmit = useCallback(
    async (values: FormData) => {
      if (user) {
        const { data, success } = await UsersService().updateUser(
          user.id,
          values,
        );
        if (success) {
          const updated_user = data;
          updateUser(updated_user);
          setSuccess("Successfully updated account.");
          setError("");
          setChangePassword(false);
          reset({
            // username: updated_user.username,
            email: updated_user.email,
            profile: {
              name: updated_user.profile.name,
              about: updated_user.profile.about,
              city: updated_user.profile.city || "",
            },
            password: "",
            passwordConfirm: "",
          });
        } else {
          setError("There was a problem updating your account.");
        }
      }
    },
    [user, updateUser, reset],
  );

  // useEffect(() => {
  //   if (user) {
  //     reset({
  //       username: user.username,
  //       email: user.email,
  //       profile: {
  //         name: user.profile.name,
  //         about: user.profile.about,
  //         city: user.profile.city || "",
  //       },
  //       password: "",
  //       passwordConfirm: "",
  //     });
  //   }
  // }, [user, router, reset, changePassword]);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {error && <FormMessage>{error}</FormMessage>}
        {success && (
          <FormMessage className="text-green-400">{success}</FormMessage>
        )}
        {!changePassword ? (
          <Fragment>
            <p className="text-sm">
              {"To change your password, "}
              <button
                type="button"
                className="text-blue-500 underline"
                onClick={() => setChangePassword(!changePassword)}
              >
                click here
              </button>
              .
            </p>
            <FormField
              control={form.control}
              name="profile.name"
              render={({ field }) => (
                <FormItem>
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
                <FormItem>
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
                <FormItem>
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Fragment>
        ) : (
          <Fragment>
            <p className="text-sm">
              {"Change your password below, or "}
              <button
                type="button"
                className="text-blue-500 underline"
                onClick={() => setChangePassword(!changePassword)}
              >
                cancel
              </button>
              .
            </p>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Fragment>
        )}
        <Button type="submit" className="mt-4" disabled={isSubmitting}>
          {isSubmitting
            ? "Processing"
            : changePassword
              ? "Change password"
              : "Update account"}
        </Button>
      </form>
      <div>
        You cannot change your username{" "}
        <span className="underline">{user?.username}</span>. It will be added in
        future.
      </div>
    </Form>
  );
};
