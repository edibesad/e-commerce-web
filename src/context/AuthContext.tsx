"use client";

import { User } from "@/types/user";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import jwt from "jsonwebtoken";
import { fetchUserById } from "@/repositories/userRepoistory";

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data: User = await res.json();
          setUser(data);
        }
      } catch (error) {
        console.error("Kullanıcı bilgisi alınamadı:", error);
      }
    };
    fetchUser();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const resJson = await res.json();

      if (!res.ok) throw new Error(resJson);

      const saveTokenRes = await fetch("/api/auth", {
        method: "POST",
        body: JSON.stringify(resJson.body),
      });

      const saveTokenResJson = await saveTokenRes.json();

      if (!saveTokenRes.ok) throw new Error(saveTokenResJson.error);
      const decoded = jwt.decode(resJson.body.token);
      const id =
        typeof decoded?.sub === "function" ? decoded.sub() : decoded?.sub;

      if (!id) throw new Error("Kullanıcı bilgisi alınamadı");

      const user = await fetchUserById({ id: parseInt(id.toString()) });

      setUser(user);
    } catch (error) {
      console.error("Giriş yapılamadı:", error);
      throw new Error(error);
    }
  };

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth hook'u: Eğer context boşsa hata vermesini sağla
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
