'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { addBlog } from '@/lib/api';

interface BlogModalProps {
    onClose: () => void;
    onBlogAdded: () => void;
}    

const BlogModal: React.FC<BlogModalProps> = ({ onClose, onBlogAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            if (!image) {
                setError('Image is required');
                return;
            }
            
            await addBlog({
                title,
                description,
                image,
            });
            onBlogAdded(); 
            onClose(); 
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Failed to add blog');
            }
        }
    };
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 15 }}
                className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white border-b pb-2">Add Blog</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                        <input
                            type="text"
                            placeholder="Blog title"
                            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                        <textarea
                            placeholder="Blog description"
                            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 min-h-[120px] resize-y"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Blog Image</label>
                        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200">
                            <input
                                type="file"
                                accept="image/*"
                                className="w-full cursor-pointer"
                                onChange={(e) => setImage(e.target.files?.[0] || null)}
                                required
                            />
                            <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">Upload a featured image for your blog post</p>
                        </div>
                    </div>
                    
                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-2 rounded-md"
                        >
                            {error}
                        </motion.p>
                    )}
                    
                    <motion.div className="flex justify-end gap-3 pt-2">
                        <motion.button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg font-medium transition-all duration-200"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Cancel
                        </motion.button>
                        <motion.button
                            type="submit"
                            className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-sm hover:shadow transition-all duration-200"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Add Blog
                        </motion.button>
                    </motion.div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default BlogModal;