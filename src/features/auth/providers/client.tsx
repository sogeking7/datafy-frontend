"use client";

import Cookies from "js-cookie";
import dayjs from "dayjs";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthService } from "../api/auth.service";
import { removePayloadTokenClient, setPayloadTokenClient } from "@/lib/cookies";
import { User } from "@/types";
export interface AuthContext {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

type UseAuth<T = User | null> = () => {
  user: T;
  login: ({ token, user }: { token: string; user: User }) => void;
  logout: () => void;
  updateUser: (user: User) => void;
};
export const ContextAuth = createContext<AuthContext | undefined>(undefined);

export const useAuth: UseAuth = () => {
  const context = useContext(ContextAuth);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  const { user, setUser } = context;
  function logout() {
    setUser(null);
    removePayloadTokenClient();
  }
  function login({ token, user }: { token: string; user: User }) {
    setUser(user);
    setPayloadTokenClient(token);
  }
  const updateUser = (user: User) => setUser(user);
  return { user, logout, login, updateUser };
};

export const ProviderAuth: React.FC<{
  userInitial: User | null;
  children: React.ReactNode;
}> = ({ children, userInitial }) => {
  const [user, setUser] = useState<User | null>(userInitial);
  useEffect(() => {
    const refresh = async () => {
      const response = await AuthService().refreshToken();
      if (!response.success) {
        setUser(null);
        removePayloadTokenClient();
        return;
      }
      setUser(response.data.user);
      setPayloadTokenClient(response.data.refreshedToken);
    };
    const token = Cookies.get("payload-token-expires-at");
    if (!token) {
      if (user) {
        setUser(null);
      }
      return;
    }
    const dateToken = dayjs(new Date(token));
    const dateNow = dayjs();
    if (dateNow.add(1, "hour").isAfter(dateToken)) {
      refresh();
    }
  }, [userInitial]);

  return (
    <ContextAuth.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </ContextAuth.Provider>
  );
};
