export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://your-production-api.com";

export const PRODUCTs_URL = "/api/products";
export const USERS_URL = "/api/products";
export const ORDERS_URL = "/api/products";
export const PAYPAL_URL = "/api/config/paypal";
