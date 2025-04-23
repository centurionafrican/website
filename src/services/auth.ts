import { LoginResponse, ApiResponse } from "@/types";
import { APIFetch } from "@/utils/api-requests";

export const loginUser = async (credentials: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const response = await APIFetch.post<LoginResponse>(
    "client/auth/login",
    credentials
  );

  if (response.status === "error") {
    throw response;
  }

  return response.response as LoginResponse;
};

export const signupUser = async (credentials: {
  email: string;
  password: string;
}): Promise<ApiResponse<any>> => {
  const response = await APIFetch.post<ApiResponse<any>>(
    "auth/register",
    credentials
  );

  if (response.status === "error") {
    throw response;
  }

  return response;
};

export const forgotPassword = async (credentials: {
  email: string;
}): Promise<ApiResponse<any>> => {
  const response = await APIFetch.post<ApiResponse<any>>(
    "auth/forgot-password",
    credentials
  );

  if (response.status === "error") {
    throw response;
  }

  return response;
};

export const resetPassword = async (credentials: {
  token: string;
  new_password: string;
}): Promise<ApiResponse<any>> => {
  const response = await APIFetch.post<ApiResponse<any>>(
    "auth/reset-password",
    credentials
  );

  if (response.status === "error") {
    throw response;
  }

  return response;
};

export const verifyAccount = async (
  token: string
): Promise<ApiResponse<any>> => {
  const response = await APIFetch.post<ApiResponse<any>>(
    `auth/verify-account/${token}`,
    {}
  );

  if (response.status === "error") {
    throw response;
  }

  return response;
};

export const resendToken = async (credentials: {
  email: string;
}): Promise<ApiResponse<any>> => {
  const response = await APIFetch.post<ApiResponse<any>>(
    "auth/resend-token",
    credentials
  );

  if (response.status === "error") {
    throw response;
  }

  return response;
};
