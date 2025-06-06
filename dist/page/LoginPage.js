var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loginUser } from "../api/services/authService.js";
export function LoginPage() {
    setTimeout(() => {
        const form = document.getElementById("login-form");
        form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const messageEl = document.getElementById("login-message");
            try {
                const user = yield loginUser({ username, password });
                localStorage.setItem("token", user.token);
                messageEl.textContent = "Login successful!";
                messageEl.classList.remove("text-red-500");
                messageEl.classList.add("text-green-500");
                setTimeout(() => {
                    window.location.hash = "#/";
                }, 1000);
            }
            catch (error) {
                messageEl.textContent = "Invalid username or password.";
                messageEl.classList.remove("text-green-500");
                messageEl.classList.add("text-red-500");
            }
        }));
    }, 0);
    return `
    <section class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-center text-indigo-600 mb-6">Login</h2>

        <form id="login-form" class="space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username"
              required
            />
            
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p id="login-message" class="mt-4 text-sm text-center font-medium"></p>
      </div>
    </section>
  `;
}
