import { fetchProductById } from "../api/services/productService.js";

export async function ProductDetail(id: number): Promise<string> {
  const product = await fetchProductById(id);
  console.log(product);

  if (!product) {
    return `<p class="text-red-600">Product not found.</p>`;
  }

  const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);
  const savedAmount = (product.price - parseFloat(discountedPrice)).toFixed(2);
  const formattedDate = (date: string) => new Date(date).toLocaleDateString("en-US", { 
    year: "numeric", 
    month: "short", 
    day: "numeric" 
  });

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    `).join('');
  };

  return `
  <section class="py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Product Image -->
        <div class="lg:w-1/2">
          <div class="sticky top-4">
            <div class="mb-4 rounded-xl overflow-hidden bg-white p-4 shadow-sm">
              <img src="${product.thumbnail}" alt="${product.title}" class="w-full h-96 object-contain" />
            </div>
            <div class="grid grid-cols-4 gap-3">
              ${product.images
                .slice(0, 4)
                .map(
                  (img:string) => `
                <div class="border rounded-lg p-2 cursor-pointer hover:border-rose-400">
                  <img src="${img}" alt="Thumbnail" class="w-full h-20 object-contain">
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>

        <!-- Product Info -->
        <div class="lg:w-1/2">
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <div class="flex justify-between items-start">
              <div>
                <h1 class="text-3xl font-bold text-gray-900">${product.title}</h1>
                <div class="flex items-center mt-2">
                  ${renderStars(Math.round(product.rating))}
                  <span class="text-gray-500 ml-2">(${product.reviews?.length || 0} reviews)</span>
                </div>
              </div>
              <span class="bg-rose-100 text-rose-800 text-sm font-semibold px-3 py-1 rounded-full">${product.discountPercentage.toFixed(
                0
              )}% OFF</span>
            </div>

            <div class="mt-6">
              <div class="flex items-center">
                <span class="text-3xl font-bold text-gray-900">$${discountedPrice}</span>
                <span class="text-lg text-gray-500 line-through ml-2">$${product.price}</span>
                <span class="text-rose-600 font-medium ml-2">Save $${savedAmount}</span>
              </div>

              <p class="mt-4 text-gray-600">${product.description}</p>

              <div class="mt-8 flex flex-col sm:flex-row gap-3">
                <div class="flex items-center border rounded-md">
                  <button class="px-4 py-2 text-gray-600 hover:text-gray-700">
                    <i class="fas fa-minus"></i>
                  </button>
                  <span class="px-4 py-2 text-gray-900">1</span>
                  <button class="px-4 py-2 text-gray-600 hover:text-gray-700">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                  <button id="add-to-cart-btn" data-product-id="${product.id}" class="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors">
                    Add to Bag
                  </button>
              </div>

              <div class="mt-8 pt-8 border-t border-gray-200">
                <h3 class="text-sm font-medium text-gray-900">Product Info</h3>
                <div class="mt-4 space-y-3 text-sm text-gray-600">
                  <p><strong>Brand:</strong> ${product.brand}</p>
                  <p><strong>SKU:</strong> ${product.sku}</p>
                  <p><strong>Category:</strong> ${product.category}</p>
                  <p><strong>Status:</strong> ${product.availabilityStatus}</p>
                  <p><strong>Stock:</strong> ${product.stock}</p>
                  ${product.weight ? `<p><strong>Weight:</strong> ${product.weight}g</p>` : ''}
                  ${product.dimensions ? `<p><strong>Dimensions:</strong> ${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} cm</p>` : ''}
                  ${product.warrantyInformation ? `<p><strong>Warranty:</strong> ${product.warrantyInformation}</p>` : ''}
                  ${product.shippingInformation ? `<p><strong>Shipping:</strong> ${product.shippingInformation}</p>` : ''}
                  ${product.returnPolicy ? `<p><strong>Return Policy:</strong> ${product.returnPolicy}</p>` : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Reviews Section -->
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
      
      ${product.reviews?.length > 0 ? `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${product.reviews
            .map(
              (review: any) => `
            <div class="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
              <div class="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                <div class="sm:order-last sm:shrink-0">
                  <img
                    alt="${review.reviewerName}"
                    src="https://ui-avatars.com/api/?name=${encodeURIComponent(review.reviewerName)}&background=random"
                    class="size-16 rounded-full object-cover sm:size-[72px]"
                  />
                </div>
                <div class="mt-4 sm:mt-0">
                  <div class="flex items-center gap-1 mb-2">
                    ${renderStars(review.rating)}
                  </div>
                  <h3 class="text-lg font-medium text-gray-900">${review.reviewerName}</h3>
                  <p class="mt-1 text-sm text-gray-500">${formattedDate(review.date)}</p>
                  <p class="mt-4 text-sm text-gray-700">
                    ${review.comment}
                  </p>
                </div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      ` : `
        <div class="text-center py-8">
          <p class="text-gray-500">No reviews yet. Be the first to review this product!</p>
        </div>
      `}
    </div>
  </section>
`;
}