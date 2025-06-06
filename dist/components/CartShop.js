var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchCartById } from "../api/services/addToCartService";
export function CartShop() {
    return __awaiter(this, arguments, void 0, function* (cartId = 1) {
        const cart = yield fetchCartById(cartId);
        return `
  <div
    class="relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
    aria-modal="true"
    role="dialog"
    tabindex="-1"
  >
    <button class="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
      <span class="sr-only">Close cart</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <div class="mt-4 space-y-6">
      <ul class="space-y-4">
        ${cart.products.map((item, idx) => `
          <li class="flex items-center gap-4">
            <img
              src="https://dummyjson.com/image/i/products/${item.id}/1.jpg"
              alt="${item.title}"
              class="size-16 rounded-sm object-cover"
            />
            <div>
              <h3 class="text-sm text-gray-900">${item.title}</h3>
              <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt class="inline">Price:</dt>
                  <dd class="inline">$${item.price}</dd>
                </div>
              </dl>
            </div>
            <div class="flex flex-1 items-center justify-end gap-2">
              <form>
                <label for="Line${idx}Qty" class="sr-only"> Quantity </label>
                <input
                  type="number"
                  min="1"
                  value="${item.quantity}"
                  id="Line${idx}Qty"
                  class="h-8 w-12 rounded-sm border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600"
                />
              </form>
              <button class="text-gray-600 transition hover:text-red-600">
                <span class="sr-only">Remove item</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
            </div>
          </li>
        `).join("")}
      </ul>

      <div class="space-y-4 text-center">
        <div class="text-gray-700 font-semibold">Total: $${cart.total}</div>
        <a
          href="#"
          class="block rounded-sm border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
        >
          View my cart (${cart.totalProducts})
        </a>
        <a
          href="#"
          class="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
        >
          Checkout
        </a>
        <a
          href="#"
          class="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
        >
          Continue shopping
        </a>
      </div>
    </div>
  </div>
  `;
    });
}
