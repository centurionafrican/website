import { ApiResponse } from "@/types";
import { APIFetch } from "@/utils/api-requests";
import {
  IVehicle,
  IVehicleMake,
  IVehicleType,
} from "@/types/vehicle.interface";

export const createVehicle = async (
  credentials: IVehicle
): Promise<ApiResponse<IVehicle>> => {
  try {
    const response = await APIFetch.post<IVehicle>("vehicles", credentials);
    return response;
  } catch (error) {
    console.error("Create vehicle error:", error);
    throw error;
  }
};

export const fetchVehicles = async (
  page: number = 1,
  showInactive: boolean = false
): Promise<ApiResponse<IVehicle[]>> => {
  try {
    const response = await APIFetch.get<IVehicle[]>(
      `client/vehicles?page=${page}&showInactive=${showInactive}`
    );
    return response;
  } catch (error) {
    console.error("Failed to fetch vehicles:", error);
    throw error;
  }
};

export const fetchVehicle = async (
  vehicleId: string
): Promise<ApiResponse<IVehicle>> => {
  try {
    const response = await APIFetch.get<IVehicle>(`vehicles/${vehicleId}`);
    return response;
  } catch (error) {
    console.error("Failed to fetch vehicle:", error);
    throw error;
  }
};

export const changeVehicleStatus = async (
  vehicleId: string,
  is_active: boolean
): Promise<ApiResponse<IVehicle>> => {
  try {
    const response = await APIFetch.patch<IVehicle>(
      `vehicles/${vehicleId}/status`,
      { is_active }
    );
    return response;
  } catch (error) {
    console.error("Failed to change vehicle status:", error);
    throw error;
  }
};

export const fetchBrands = async (
  page: number = 1,
  perPage: number = 80
): Promise<ApiResponse<IVehicleMake>> => {
  try {
    const response = await APIFetch.get<IVehicleMake>(
      `vehicle-makes?page=${page}&perPage=${perPage}`
    );
    return response;
  } catch (error) {
    console.error("Failed to fetch brands:", error);
    throw error;
  }
};

export const fetchTypes = async (
  page: number = 1,
  perPage: number = 80
): Promise<ApiResponse<IVehicleType[]>> => {
  try {
    const response = await APIFetch.get<IVehicleType[]>(
      `vehicle-types?page=${page}&perPage=${perPage}`
    );

    if (response.response) {
      response["response"] = response.response?.map((type: IVehicleType) => {
        return {
          ...type,
          use: JSON.parse(type.use as unknown as string),
        };
      });
    }

    return response;
  } catch (error) {
    console.error("Failed to fetch types:", error);
    throw error;
  }
};
