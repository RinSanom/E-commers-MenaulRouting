import { ProductCart } from "../components/ProductCart.js";


export async function ProductPage(){
    const productCart = await ProductCart();
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
}