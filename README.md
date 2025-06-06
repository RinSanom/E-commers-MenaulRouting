# Shopping SPA

A modern single-page application (SPA) for shopping, built with TypeScript, Tailwind CSS,
It features product browsing, product detail pages, cart management, login, and animated UI using AOS.
for cart management amd login logic is completted but have same problem with UI (User Interface) so it will be camming Soon !!!
---

## Features

- Product listing and detail pages (data from [dummyjson.com](https://dummyjson.com))
- Add to cart and cart management
- Login/logout with UI state
- Responsive design with Tailwind CSS
- Animated UI with [AOS](https://michalsnik.github.io/aos/)
- SPA routing (hash-based)
- TypeScript for type safety

---

## Getting Started

### 1. Clone the repository

```sh
git clone (https://github.com/RinSanom/E-commers-MenaulRouting/)
cd E-commers-MenaulRouting/
```

### 2. Install dependencies

```sh
npm install
```

### 3. Development

```sh
npm run dev
```
This runs TypeScript in watch mode, Tailwind CLI, and a local server concurrently. (http://localhost:3000)

## Project Structure

```
src/
  api/            # API services and models
  components/     # Reusable UI components (Cart, ProductCard, etc.)
  page/           # Page components (Home, ProductDetail, etc.)
  assets/         # Static assets (images)
  app.ts          # Main SPA logic and routing
  output.css      # Generated Tailwind CSS
index.html      # Main HTML file
```

## Customization

- **Styling:** Edit `src/input.css` and Tailwind config as needed.
- **Routing:** Add new routes in `src/app.ts`.

---

## Scripts

- `npm run dev` – Start dev server, Tailwind watcher, and TypeScript watcher

---

## License

Rin Sanom
