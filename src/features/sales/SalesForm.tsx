"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { PhoneInput } from "@/components/ui/phone-input";

const formSchema = z.object({
  nameSurname: z.string().min(2, {
    message: "Имя и фамилия должны содержать не менее 2 символов.",
  }),
  phone: z.string().length(12, {
    message:
      "Введите корректный номер телефона в формате +7 (XXX) - XXX - XXXX",
  }),
});

export const SalesForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameSurname: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    console.log(values);
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
    }, 2000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="nameSurname"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Ваше имя и фамилия"
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PhoneInput
                  placeholder="+ 7 (___) - ___ - ____"
                  defaultCountry="KZ"
                  international={true}
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : "Оставить заявку"}
        </Button>
      </form>
    </Form>
  );
};
