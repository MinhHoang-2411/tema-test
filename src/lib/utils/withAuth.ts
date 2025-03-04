"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function withAuth(Component: React.ReactNode) {
  if (typeof window !== 'undefined'){
    return function ProtectedRoute() {
      const token = useSelector((state: RootState) => state.auth.token);
      const router = useRouter();
  
      useEffect(() => {
        if (!token) router.push("/sign-in");
      }, [token, router]);
  
      return token ? Component : null;
    };
  }
  return null
}
