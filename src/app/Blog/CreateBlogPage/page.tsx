"use client";

import React, { useState } from 'react';
import { useBlogContext } from '@/Context/BlogContext';

const CreateBlog: React.FC = () => {
  const { addBlogPost } = useBlogContext();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      addBlogPost(title, content);
      setTitle('');
      setContent('');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md mb-4">
      <h2 className="text-lg font-bold mb-2">Create a New Blog</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
        className="w-full p-2 border rounded-md mb-2 text-black outline-blue-200"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Blog Content"
        className="w-full p-2 border rounded-md mb-2 text-black outline-blue-200"
        rows={4}
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Create New Blog
      </button>
    </form>
  );
};

export default CreateBlog;
