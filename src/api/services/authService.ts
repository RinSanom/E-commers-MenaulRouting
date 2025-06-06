import { AuthResponse, LoginCredentials } from "../models/authModel";

export async function loginUser(credentials: LoginCredentials): Promise<AuthResponse> {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed");
  }
  
  const data: AuthResponse = await response.json();
  return data;
}