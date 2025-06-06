import { loginUser } from "../api/services/authService.js";

export function LoginPage(): string {
  setTimeout(() => {
    const form = document.getElementById("login-form") as HTMLFormElement;

    form?.addEventListener("submit", async (e) => {
      e.preventDefault();

      const username = (document.getElementById("username") as HTMLInputElement).value;
      const password = (document.getElementById("password") as HTMLInputElement).value;
      const messageEl = document.getElementById("login-message") as HTMLElement;
      
      try {
        const user = await loginUser({ username, password });
        localStorage.setItem("token", user.token);
        
        messageEl.textContent = "Login successful!";
        messageEl.classList.remove("text-red-500");
        messageEl.classList.add("text-green-500");

        setTimeout(() => {
          window.location.hash = "#/";
        }, 1000);
      } catch (error) {
        messageEl.textContent = "Invalid username or password.";
        messageEl.classList.remove("text-green-500");
        messageEl.classList.add("text-red-500");
      }
    });
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
