export interface CartProduct {
  id: number;
  quantity: number;
}

export interface UpdateCartRequest {
  merge: boolean;
  products: CartProduct[];
}

export interface CartResponse {
  id: number;
  products: Array<{
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
  }>;
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}