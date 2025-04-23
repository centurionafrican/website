import { ApiResponse } from "@/types";
import { APIFetch } from "@/utils/api-requests";
import { IPolicy } from "@/types";

export const fetchPolicies = async (
  page: number = 1
): Promise<ApiResponse<IPolicy[]>> => {
  try {
    const response = await APIFetch.get<IPolicy[]>(
      `client/policies`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
