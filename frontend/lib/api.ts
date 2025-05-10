const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

export const loginAdmin = async (username: string, password: string) => {
  console.log('Logging in with:', username, password);

  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json(); 
  console.log('Response data:', data);

  if (!res.ok) {
    throw new Error(data.message || "Failed to login");
  }

  return data.token;
};

export const fetchProjects = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/projects`);
    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const fetchBlogs = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`);
    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};
