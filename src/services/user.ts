import { IUser } from "../types/user.interface";
import { ApiResponse } from "@/types";
import { APIFetch } from "@/utils/api-requests";

export const fetchUserProfile = async (): Promise<ApiResponse<IUser>> => {
  try {
    const response = await APIFetch.get<IUser>(`users/profile`);
    return response;
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
    throw error;
  }
};

export const updateUserProfile = async (profileData: {
  first_name: string;
  last_name: string;
  phone_number: string;
  new_password?: string;
}): Promise<ApiResponse<IUser>> => {
  try {
    const response = await APIFetch.patch<IUser>("users/profile", profileData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const InitiatePhoneVerification = async (phoneNumber: string) => {
  try {
    const response = await APIFetch.post(
      "client/users/phone-number/initiate-verification",
      {
        phone_number: phoneNumber
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const verifyPhoneNumber = async (otpCode: string) => {
  try {
    const response = await APIFetch.post("client/users/phone-number/verify", {
      otp: otpCode
    });
    return response;
  } catch (error) {
    throw error;
  }
};
