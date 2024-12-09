"use client";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { CreateAccountForm } from "@/features/auth/components/CreateAccountForm";
import { LoginForm } from "@/features/auth/components/LoginForm";
import { TabsContent, TabsList } from "@radix-ui/react-tabs";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export const TabForm = () => {
  return (
    <Card className="max-w-sm w-full !rounded-2xl">
      <CardHeader>
        <Tabs defaultValue={useSearchParams().get("tab") || "login"}>
          <TabsList className="bg-gray-50 p-1.5 rounded-lg mb-6">
            <TabsTrigger
              className="data-[state=active]:bg-white w-1/2"
              value="login"
            >
              Вход
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-white w-1/2"
              value="register"
            >
              Регистрация
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <CreateAccountForm />
          </TabsContent>
        </Tabs>
      </CardHeader>
      <CardFooter className="flex flex-col gap-3">
        <div className="relative w-full flex items-center py-2">
          <div className="relative w-full text-center">
            <div className="absolute inset-y-1/2 left-0 right-0 flex items-center">
              <div className="w-1/2 border-t border-gray-300"></div>
              <div className="w-1/2 border-t border-gray-300"></div>
            </div>
            <span className="relative z-10 font-medium bg-white px-3 text-sm text-accent-foreground">
              Войти с помощью
            </span>
          </div>
        </div>

        <div className="flex w-full gap-3">
          <Button variant={"secondary"} className="w-1/3 py-3 !h-11">
            <Image
              alt="logo"
              src={"/login/facebook.svg"}
              width={24}
              height={24}
            />
          </Button>
          <Button variant={"secondary"} className="w-1/3 py-3 !h-11">
            <Image
              alt="logo"
              src={"/login/google.svg"}
              width={24}
              height={24}
            />
          </Button>
          <Button variant={"secondary"} className="w-1/3 py-3 !h-11">
            <Image alt="logo" src={"/login/apple.svg"} width={24} height={24} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
