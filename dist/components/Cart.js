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
export function Cart() {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield fetchAllProducts();
        return products
            .map((pro) => `
<div class="min-w-[500px] bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex gap-6  duration-200">
  <!-- Image Container -->
  <div class="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
    <img
      alt="${pro.title}"
      src="${Array.isArray(pro.images) ? pro.images[0] : pro.images}"
      loading="lazy"
      class="w-full h-full object-cover transition-opacity duration-300 opacity-0 bg-gray-100 "
      onload="this.classList.remove('opacity-0')"
      onerror="this.onerror=null;this.src='https://via.placeholder.com/128?text=Image+Not+Available'"
    />
  </div>
  
  <!-- Content Container -->
  <div class="flex flex-col justify-between flex-1 min-w-0">
    <div>
      <h3 class="font-semibold text-gray-900  text-lg mb-1 truncate">${pro.title}</h3>
      <p class="text-gray-600  text-sm line-clamp-2 mb-4">${pro.description}</p>
    </div>
    
    <div class="mt-auto">
      <a
        class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        href="#/products/${pro.id}"
      >
        <span class="text-sm font-medium">See More</span>
        <svg
          class="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  </div>
</div>
  `)
            .join("");
    });
}
