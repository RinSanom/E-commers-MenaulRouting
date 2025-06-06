import { fetchAllProducts } from "../api/services/productService.js";

export async function ProductCart(): Promise<string> {
  const products = await fetchAllProducts();

  if (!products || products.length === 0) {
    return `<div class="text-center text-gray-500">No products available</div>`;
  }

  return products
    .map(
      (pro: any) => `
      <a href="#/products/${pro.id}" class="group block">
        <div class="relative h-[350px] sm:h-[450px] bg-white p-2">
          <img
            src="${Array.isArray(pro.images) ? pro.images[0] : pro.images}"
            alt="${pro.title}"
            class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300"
            loading="lazy"
            onerror="this.onerror=null;this.src='https://via.placeholder.com/500?text=Product+Image'"
          />

          <img
            src="${Array.isArray(pro.images) && pro.images[1] ? pro.images[1] : (Array.isArray(pro.images) ? pro.images[0] : pro.images)}"
            alt="${pro.title}"
            class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
            onerror="this.onerror=null;this.src='https://via.placeholder.com/500?text=Product+Image'"
          />
        </div>

        <div class="relative bg-white pt-3">
          <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
            ${pro.title}
          </h3>

          <div class="mt-1.5 flex items-center justify-between text-gray-900">
            <p class="tracking-wide">$${pro.price}</p>
            <p class="text-xs tracking-wide uppercase ${pro.stock > 0 ? 'text-green-600' : 'text-red-600'}">
              ${pro.stock > 0 ? `In Stock (${pro.stock})` : 'Out of Stock'}
            </p>
          </div>
        </div>
      </a>
    `
    )
    .join("");
}