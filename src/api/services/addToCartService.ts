import type { UpdateCartRequest, CartResponse } from "../models/cartModel.js";
export async function addToCart(
  cartId: number,
  products: { id: number; quantity: number }[],
  merge: boolean = true
): Promise<CartResponse> {
  const response = await fetch(`https://dummyjson.com/carts/${cartId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      merge,
      products,
    } as UpdateCartRequest),
  });

  if (!response.ok) {
    throw new Error("Failed to update cart");
  }

  return await response.json();
}


export async function fetchCartById(cartId: number): Promise<CartResponse> {
  const response = await fetch(`https://dummyjson.com/carts/${cartId}`);
  if (!response.ok) throw new Error("Failed to fetch cart");
  return await response.json();
}