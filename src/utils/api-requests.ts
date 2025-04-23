import { ApiResponse } from "@/types";

const baseUrl: string = process.env.NEXT_PUBLIC_BACKEND_URL || "";

export class APIFetch {
  static getAccessToken(): string | null {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem("access_token");
    }
    return null;
  }

  static async request<T>(
    method: string,
    url: string,
    data: Record<string, any> = {}
  ): Promise<ApiResponse<T>> {
    const access_token = this.getAccessToken();
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: access_token ? `Bearer ${access_token}` : ""
      }
    };

    if (["POST", "PUT", "PATCH", "DELETE"].includes(method.toUpperCase())) {
      options.body = JSON.stringify(data);
    }

    try {
      const response: Response = await fetch(`${baseUrl}/api/${url}`, options);
      const result: ApiResponse<T> = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          if (typeof window !== "undefined" && window.localStorage) {
            localStorage.removeItem("access_token");
          }
        }
        throw result;
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  static async get<T>(url: string): Promise<ApiResponse<T>> {
    return await this.request<T>("GET", url);
  }

  static async post<T>(
    url: string,
    data: Record<string, any>
  ): Promise<ApiResponse<T>> {
    return await this.request<T>("POST", url, data);
  }

  static async delete<T>(
    url: string,
    data: Record<string, any>
  ): Promise<ApiResponse<T>> {
    return await this.request<T>("DELETE", url, data);
  }

  static async put<T>(
    url: string,
    data: Record<string, any>
  ): Promise<ApiResponse<T>> {
    return await this.request<T>("PUT", url, data);
  }

  static async patch<T>(
    url: string,
    data?: Record<string, any>
  ): Promise<ApiResponse<T>> {
    return await this.request<T>("PATCH", url, data);
  }
}
