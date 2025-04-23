import { ApiResponse } from "@/types";
import { APIFetch } from "@/utils/api-requests";
import { IInsurer } from "@/types/insurer.interface";

export const fetchInsurers = async (
  isFavorite: boolean = true
): Promise<ApiResponse<IInsurer[]>> => {
  try {
    const response = await APIFetch.get<IInsurer[]>(
      `insurers?favorite=${isFavorite}`
    );
    return response;
  } catch (error) {
    console.error("Failed to fetch insurers:", error);
    throw error;
  }
};

export const fetchInsurer = async (
  insurerId: string
): Promise<ApiResponse<IInsurer>> => {
  try {
    const response = await APIFetch.get<IInsurer>(`insurers/${insurerId}`);
    return response;
  } catch (error) {
    console.error("Failed to fetch insurer:", error);
    throw error;
  }
};
