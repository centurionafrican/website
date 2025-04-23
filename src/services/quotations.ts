import { ApiResponse, IPayment } from "@/types";
import { APIFetch } from "@/utils/api-requests";
import { IQuotation } from "@/types/quotation.interface";
import { PAYMENT_PROVIDER } from "@/config";

export const createQuotation = async (
  quotation: Partial<IQuotation>
): Promise<ApiResponse<IQuotation>> => {
  try {
    const response = await APIFetch.post<IQuotation>("quotations", quotation);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateQuotation = async (
  quotation: Partial<IQuotation>
): Promise<ApiResponse<IQuotation>> => {
  try {
    const response = await APIFetch.patch<IQuotation>(
      `quotations/${quotation.id}`,
      quotation
    );
    return response;
  } catch (error) {
    console.error("Update quotation error:", error);
    throw error;
  }
};

export const fetchQuotations = async ({
  status,
  page = 1,
  perPage = 20,
  start_date,
  end_date,
  quote_number,
  plateNumber,
  search,
  sort,
  order,
}: {
  status?: string;
  page: number;
  perPage: number;
  start_date?: string;
  end_date?: string;
  quote_number?: string;
  plateNumber?: string;
  search?: string;
  sort?: string;
  order?: string;
}): Promise<IQuotation[]> => {
  try {
    const response = await APIFetch.get<IQuotation[]>(
      `client/quotations?page=${page}&perPage=${perPage}&start_date=${start_date}&end_date=${end_date}&quote_number=${quote_number}&plateNumber=${plateNumber}`
    );
    if (response.status === "error") {
      throw response;
    }

    return response.response as IQuotation[];
  } catch (error) {
    throw error;
  }
};

export const fetchQuotation = async (
  quotationId: string
): Promise<IQuotation> => {
  try {
    const response = await APIFetch.get<IQuotation>(
      `client/quotations/${quotationId}`
    );
    if (response.status === "error") {
      throw response;
    }

    return response.response as IQuotation;
  } catch (error) {
    throw error;
  }
};

export const approveQuotation = async (
  quotationId: string
): Promise<ApiResponse<IQuotation>> => {
  try {
    const response = await APIFetch.patch<IQuotation>(
      `quotations/${quotationId}/approve`
    );
    return response;
  } catch (error) {
    console.error("Failed to approve quotation:", error);
    throw error;
  }
};

export const markQuotationAsPaid = async (
  quotationId: string
): Promise<ApiResponse<IQuotation>> => {
  try {
    const response = await APIFetch.patch<IQuotation>(
      `quotations/${quotationId}/mark-as-paid`
    );
    return response;
  } catch (error) {
    console.error("Failed to mark quotation as paid:", error);
    throw error;
  }
};

export const cancelQuotation = async (
  quotationId: string
): Promise<IQuotation> => {
  try {
    const response = await APIFetch.patch<IQuotation>(
      `quotations/${quotationId}/cancel`
    );
    if (response.status === "error") {
      throw response;
    }

    return response.response as IQuotation;
  } catch (error) {
    throw error;
  }
};

export const fetchQuotationsByAccount = async (
  accountId: string,
  page: number = 1,
  perPage: number = 20,
  search?: string,
  sort?: string,
  order?: string
): Promise<ApiResponse<IQuotation[]>> => {
  try {
    const response = await APIFetch.get<IQuotation[]>(
      `quotations/account?account_id=${accountId}&page=${page}&perPage=${perPage}&search=${search}&sort=${sort}&order=${order}`
    );
    return response;
  } catch (error) {
    console.error("Failed to fetch quotations by account:", error);
    throw error;
  }
};

export const initializeQuotationPayment = async (
  id: string,
  reference_number: string,
  provider: string = PAYMENT_PROVIDER.MTN
): Promise<IPayment> => {
  try {
    const response = await APIFetch.post<IPayment>(
      `client/payment-proofs/${id}`,
      { id, reference_number, provider }
    );
    if (response.status === "error") {
      throw response;
    }

    return response.response as IPayment;
  } catch (error) {
    throw error;
  }
};
