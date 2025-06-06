var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchAllProducts } from "../api/services/productService.js";
export function CartCategory() {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield fetchAllProducts();
        console.log(products);
        const seenCategories = new Set();
        const uniqueCategoryProducts = [];
        for (const product of products) {
            if (!seenCategories.has(product.category)) {
                seenCategories.add(product.category);
                uniqueCategoryProducts.push(product);
            }
            if (uniqueCategoryProducts.length === 4)
                break;
        }
        const html = uniqueCategoryProducts
            .map((pro) => `
        <div class="bg-gray-50 rounded shadow p-4">
          <img
            src="${Array.isArray(pro.images) ? pro.images[0] : pro.images}"
            alt="${pro.title}"
            class="h-[250px] w-full object-cover rounded mb-3"
          />
          <h3 class="text-lg font-semibold text-gray-800 ">${pro.category}</h3>
        </div>
      `)
            .join("");
        return `

      ${html}

  `;
    });
}
