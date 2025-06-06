var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Cart } from "../components/Cart.js";
import { CartCategory } from "../components/CartCategory.js";
export function HomePape() {
    return __awaiter(this, void 0, void 0, function* () {
        const cartHtml = yield Cart();
        const cartCategoryHtml = yield CartCategory();
        return `
    <section class="bg-gray-100 lg:grid lg:h-screen lg:place-content-center">
        <div class="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
            <div data-aos="fade-right" class="max-w-prose text-left">
                <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
                Everythink You
                <strong class="text-indigo-600"> Looking For </strong>
                Have In Here 
                </h1>
                <p class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
                    accusamus impedit minima harum corporis iusto.
                </p>
                <div class="mt-4 flex gap-4 sm:mt-6">
                    <a
                    class="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                    href="#"
                    >
                    Get Started
                    </a>

                    <a
                    class="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                    href="#"
                    >
                    Learn More
                    </a>
                </div>
            </div>
            <div data-aos="fade-left" >
                <img src="src/assets/headphone.png" alt="Headphones">
            </div>
        </div>
    </section>

    <section class="px-4 sm:px-8 lg:px-16 py-12 bg-white">
        <div class="max-w-7xl mx-auto">
            <div class="mb-10">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Shop By Category</h2>
                <p class="text-gray-500 max-w-2xl">Discover products in our most popular categories</p>
            </div>
            <div class="overflow-x-hidden">
                <div data-aos="fade-up" class="overflow-x-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    ${cartCategoryHtml}
                </div>
                <div data-aos="fade-up" class="flex overflow-x-auto gap-4 mt-4">
                    ${cartHtml}
                </div>  
            </div>
        </div>
    </section>

    <section class="overflow-hidden bg-gray-200 sm:grid sm:grid-cols-2">
        <div class="p-6 md:p-8 lg:px-12 lg:py-16 flex items-center"> 
            <div data-aos="fade-right" class="mx-auto max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
                <h2 class="text-2xl font-bold text-gray-800 md:text-4xl leading-tight">
                    Amazon delivers To You
                </h2>
                <p class="text-gray-600 mt-3 md:mt-4 md:text-base">
                    We help turn your ideas into reality with our creative tools and friendly support.
                </p>
            </div>
        </div>
        <div data-aos="fade-left" class="flex items-center"> 
            <img
                alt="Happy dog"
                src="src/assets/dog.png"
                class="w-full h-auto max-h-[400px] object-cover brightness-95 saturate-110"
            />
        </div>
    </section>

    <section class="bg-white">
        <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <!-- Flash Sale Content -->
                <div class="bg-indigo-600 p-8 md:p-12 lg:px-16 lg:py-24">
                    <div class="mx-auto max-w-xl text-center">
                        <h2 class="text-3xl font-bold text-white md:text-5xl">
                            Fashion Flash Sale!
                        </h2>

                        <p class="text-white/90 mt-4 sm:mt-6 sm:text-lg">
                            Limited time offer! Get 30% off on our trendy handbags, shirts, and accessories. 
                            Don't miss out on these amazing deals for him and her! 
                        </p>

                        <div class="mt-6 md:mt-10">
                            <a
                                href="#"
                                class="inline-flex items-center justify-center bg-white px-8 py-3 text-sm font-medium text-rose-600 transition hover:bg-rose-50 hover:shadow-lg focus:ring-2 focus:ring-white focus:outline-none"
                            >
                                Shop Now
                                <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Product Images -->
                <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                    <div class="relative group overflow-hidden">
                        <img
                            alt="Women's handbag"
                            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea"
                            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                            <span class="text-white font-bold text-lg">Top Handbags -30%</span>
                        </div>
                    </div>
                    <div class="relative group overflow-hidden">
                        <img
                            alt="Men's shirt"
                            src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9"
                            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                            <span class="text-white font-bold text-lg">Checkered Shirts -30%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;
    });
}
