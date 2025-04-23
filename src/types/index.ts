export * from "./user.interface";
export * from "./vehicle.interface";
export * from "./insurer.interface";
export * from "./subscriber.interface";
export * from "./quotation.interface";
export * from "./policy.interface";
export * from "./icons";
export * from "./transaction.interface";
export * from "./payment.interface";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
  getLayout?: () => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type ChildrenProps = {
  children: ReactNode;
};

export type IToken = {
  accessToken: string;
  refreshToken?: string;
};

export interface CurrentUserProps {
  currentUser?: {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
    password: string | null;
    isAdmin: boolean;
  } | null;
}

export interface ApiResponse<T> {
  status: "success" | "error";
  message: string;
  pagination: {
    pages: number;
    page: number;
    next: number | null;
    prev: number | null;
    count: number;
  } | null;
  response: T | null;
  errors?: {
    code: string;
  };
}

export interface LoginResponse {
  access_token: string;
  error?: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}
