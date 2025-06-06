// // components/ThemeToggle.ts
// export class ThemeToggle {
//   private themeToggle: HTMLButtonElement;

//   constructor() {
//     this.themeToggle = document.createElement('button');
//     this.themeToggle.className = 'p-2 rounded-full focus:outline-none';
//     this.themeToggle.innerHTML = `
//       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
//       </svg>
//     `;

//     this.themeToggle.addEventListener('click', this.toggleTheme.bind(this));
//     this.initTheme();
//   }

//   private initTheme() {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     document.documentElement.classList.toggle('dark', savedTheme === 'dark');
//     this.updateIcon(savedTheme);
//   }

//   private toggleTheme() {
//     const isDark = document.documentElement.classList.toggle('dark');
//     const theme = isDark ? 'dark' : 'light';
//     localStorage.setItem('theme', theme);
//     this.updateIcon(theme);
//   }

//   private updateIcon(theme: string) {
//     if (theme === 'dark') {
//       this.themeToggle.innerHTML = `
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
//         </svg>
//       `;
//     } else {
//       this.themeToggle.innerHTML = `
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
//         </svg>
//       `;
//     }
//   }

//   render() {
//     return this.themeToggle;
//   }
// }