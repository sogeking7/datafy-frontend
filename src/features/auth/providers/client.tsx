"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "@/types";
import { AuthService } from "../api/auth.service";
export interface AuthContext {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

type UseAuth<T = User | null> = () => {
  user: T;
  login: (user: User) => void;
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
  }
  function login(user: User) {
    setUser(user);
  }
  const updateUser = (user: User) => setUser(user);
  return { user, logout, login, updateUser };
};

export const ProviderAuth: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchMe = async () => {
      const { success, data } = await AuthService().getMe();
      if (success) {
        console.log('user', data);
        setUser(data);
      } else {
        setUser(null);
      }
    };
    fetchMe();
  }, []);

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
