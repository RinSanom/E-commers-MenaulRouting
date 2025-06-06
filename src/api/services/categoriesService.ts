export async function fetchAllCategories(): Promise<string[]> {
  const res = await fetch("https://dummyjson.com/products/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories: string[] = await res.json();
  return categories;
}
