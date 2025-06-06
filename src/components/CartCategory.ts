import { fetchAllProducts } from "../api/services/productService.js";

export async function CartCategory(): Promise<string> {
  const products = await fetchAllProducts();
  console.log(products)
  const seenCategories = new Set<string>();
  const uniqueCategoryProducts = [];

  for (const product of products) {
    if (!seenCategories.has(product.category)) {
      seenCategories.add(product.category);
      uniqueCategoryProducts.push(product);
    }
    if (uniqueCategoryProducts.length === 4) break; 
  }

  const html = uniqueCategoryProducts
    .map(
      (pro) => `
        <div class="bg-gray-50 rounded shadow p-4">
          <img
            src="${Array.isArray(pro.images) ? pro.images[0] : pro.images}"
            alt="${pro.title}"
            class="h-[250px] w-full object-cover rounded mb-3"
          />
          <h3 class="text-lg font-semibold text-gray-800 ">${pro.category}</h3>
        </div>
      `
    )
    .join("");

  return `

      ${html}

  `;
}
