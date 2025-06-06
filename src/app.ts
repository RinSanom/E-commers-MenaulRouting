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
    } else {
        document.documentElement.classList.remove('dark');
    }
}

function render(content: string) {
    const mainContainer = document.getElementById('main-container');
    if (mainContainer) {
        mainContainer.innerHTML = content;
    }
   
}

const routes: { [key: string]: () => Promise<string> | string } = {
    '/': HomePape,
    '/product': ProductPage,
    '/login': LoginPage,
    '/cart': ProductCart,
};

async function handleNavigation() {
    const path = location.hash.replace(/^#/, '') || '/';

    const productDetailMatch = path.match(/^\/products\/(\d+)$/);
    if (productDetailMatch) {
        const id = Number(productDetailMatch[1]);
        const html = await ProductDetail(id);
        render(html);
        return;
    }

    const view = routes[path];
    if (view) {
        const html = typeof view === 'function' ? await view() : view;
        render(html);
    } else {
        render('<h1 class="text-gray-900 dark:text-gray-100">404 Not Found</h1>');
    }
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