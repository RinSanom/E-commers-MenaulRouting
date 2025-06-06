var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { HomePape } from "./page/HomePage.js";
import { ProductPage } from "./page/ProductPage.js";
import { ProductDetail } from "./page/ProductDetailPage.js";
import { LoginPage } from "./page/LoginPage.js";
import { ProductCart } from "./components/ProductCart.js";
// Initialize theme
function initTheme() {
    if (localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
    else {
        document.documentElement.classList.remove('dark');
    }
}
function render(content) {
    const mainContainer = document.getElementById('main-container');
    if (mainContainer) {
        mainContainer.innerHTML = content;
    }
}
const routes = {
    '/': HomePape,
    '/product': ProductPage,
    '/login': LoginPage,
    '/cart': ProductCart,
};
function handleNavigation() {
    return __awaiter(this, void 0, void 0, function* () {
        const path = location.hash.replace(/^#/, '') || '/';
        const productDetailMatch = path.match(/^\/products\/(\d+)$/);
        if (productDetailMatch) {
            const id = Number(productDetailMatch[1]);
            const html = yield ProductDetail(id);
            render(html);
            return;
        }
        const view = routes[path];
        if (view) {
            const html = typeof view === 'function' ? yield view() : view;
            render(html);
        }
        else {
            render('<h1 class="text-gray-900 dark:text-gray-100">404 Not Found</h1>');
        }
    });
}
window.addEventListener('hashchange', handleNavigation);
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    handleNavigation();
    // Set up SPA navigation for nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                location.hash = href.slice(1);
            }
        });
    });
});
