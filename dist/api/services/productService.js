var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function fetchAllProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://dummyjson.com/products');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = yield response.json();
            console.log(" data product in service", data);
            return data.products;
        }
        catch (error) {
            console.error("Failed to fetch products:", error);
            return [];
        }
    });
}
export function fetchProductById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://dummyjson.com/products/${id}`);
            if (!response.ok) {
                throw new Error(`Product with ID ${id} not found`);
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error("Fetch product by ID failed:", error);
            return null;
        }
    });
}
