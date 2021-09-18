import { ProductQuantity } from "../../types/orders/productQuantity";

/**
 * Type guard for a Product Quantity input value
 * @param value the value to check
 * @returns true if the value is a ProductQuantity
 */
export const isProductQuantity = (value: unknown): value is ProductQuantity => {
  if (typeof value !== "object") {
    return false;
  }

  // Product id is required, quantity is not
  return (
    "productId" in (value as ProductQuantity) &&
    typeof (value as ProductQuantity).productId === "number"
  );
};
