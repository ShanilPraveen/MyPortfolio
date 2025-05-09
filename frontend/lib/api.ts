const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

export const fetchProjects = async () => {
    try{
        const res = await fetch(`${API_BASE_URL}/projects`);
        if (!res.ok) {
            throw new Error('Failed to fetch projects');
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
};

export const fetchBlogs = async () => {
    try{
        const res = await fetch(`${API_BASE_URL}/blogs`);
        if (!res.ok) {
            throw new Error('Failed to fetch blogs');
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
};