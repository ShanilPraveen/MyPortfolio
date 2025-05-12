const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

export const loginAdmin = async (username: string, password: string) => {
  //console.log('Logging in with:', username, password);

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

export const deleteProject = async (id: string) => {
  try {
    const token = localStorage.getItem("token"); 
    if (!token) throw new Error("No token found");

    const res = await fetch(`${API_BASE_URL}/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to delete project");
    }

    return res.json();
  } catch (error) {
    console.error("Error deleting project:", error);
  }
};

export const deleteBlog = async (id: string) => {
  try {
    const token = localStorage.getItem("token"); // get the stored token
    if (!token) throw new Error("No token found");

    const res = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to delete blog");
    }

    return res.json();
  } catch (error) {
    console.error("Error deleting blog:", error);
  }
};

export const addProject = async (formData: {
  title: string;
  description: string;
  githubUrl: string;
  techStack: string;
  image: File;
}) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("githubUrl", formData.githubUrl);
    //formData.techStack.forEach(tech => data.append("techStack[]", tech));
    data.append("techStack",formData.techStack);
    data.append("image", formData.image);

    const res = await fetch(`${API_BASE_URL}/projects`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to add project");
    }

    return res.json();
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
};

export const addBlog = async (formData: {
  title: string;
  description: string;
  image: File;
}) => {
  try{
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("image", formData.image);

    const res = await fetch(`${API_BASE_URL}/blogs`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to add blog");
    }

    return res.json();
  }
  catch (error) {
    console.error("Error adding blog:", error);
    throw error;
  }
};