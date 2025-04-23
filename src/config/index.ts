const SALT_WORK_FACTOR = 10;

export { SALT_WORK_FACTOR };

export const ADMIN_FEE = 2500;

export enum QUOTATION_STATUS {
  PENDING = "pending",
  ACTIVE = "active",
  INACTIVE = "inactive",
  APPROVED = "approved",
  PAID = "paid",
}

export enum PAYMENT_PROVIDER {
  FLUTTERWAVE = "Flutterwave",
  MTN = "MTN",
  AIRTEL = "Airtel",
}

export enum QUOTATION_TYPE {
  DEFAULT = "default",
  AMENDED = "amended",
}
