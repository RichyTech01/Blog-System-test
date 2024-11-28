"use client";

import React from 'react';
import Chat from '@/components/Chat';
import { useBlogContext } from '@/Context/BlogContext';

const BlogPost: React.FC = () => {
  const { blogPosts } = useBlogContext();

  return (
    <div>
      {blogPosts.map((post) => (
        <div key={post.id} className="p-4 border rounded-md my-4">
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p className='text-[12px] '>{post.content}</p>
          <Chat postId={post.id} replies={post.replies} />
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
