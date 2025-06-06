var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ProductCart } from "../components/ProductCart.js";
export function ProductPage() {
    return __awaiter(this, void 0, void 0, function* () {
        const productCart = yield ProductCart();
        return `
       <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
           <div class="mt-16">
               <h3 class="text-2xl font-bold mb-6">You might also like</h3>
               <div class="grid grid-cols-2 md:grid-cols-3  gap-6">
                   ${productCart}
               </div>
           </div>
       </section>
    `;
    });
}
