var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function addToCart(cartId_1, products_1) {
    return __awaiter(this, arguments, void 0, function* (cartId, products, merge = true) {
        const response = yield fetch(`https://dummyjson.com/carts/${cartId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                merge,
                products,
            }),
        });
        if (!response.ok) {
            throw new Error("Failed to update cart");
        }
        return yield response.json();
    });
}
export function fetchCartById(cartId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://dummyjson.com/carts/${cartId}`);
        if (!response.ok)
            throw new Error("Failed to fetch cart");
        return yield response.json();
    });
}
