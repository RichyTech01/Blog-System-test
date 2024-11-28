'use client'

import React, { createContext, useEffect, useState, useContext } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '@/utils/Storage';

export interface Reply {
  id: string;
  user: string;
  content: string;
  timestamp: Date;
  replies: Reply[];
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  replies: Reply[];
}

interface BlogContextType {
  blogPosts: BlogPost[];
  addBlogPost: (title: string, content: string) => void;
  addReply: (postId: string, reply: Reply, parentReplyId?: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode  }> = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() =>
    getFromLocalStorage<BlogPost[] >('blogPosts', [])
  );

  useEffect(() => {
    saveToLocalStorage('blogPosts', blogPosts);
  }, [blogPosts]);

  const addBlogPost = (title: string, content: string) => {
    const newPost: BlogPost = {
      id: Math.random().toString(),
      title,
      content,
      replies: [],
    };
    setBlogPosts((prev) => [...prev, newPost]);
  };

  const addReply = (postId: string, reply: Reply, parentReplyId?: string) => {
    setBlogPosts((prev) =>
      prev.map((post) => {
        if (post.id !== postId) return post;

        const addNestedReply = (replies: Reply[]): Reply[] =>
          replies.map((r) =>
            r.id === parentReplyId
              ? { ...r, replies: [...r.replies, reply] }
              : { ...r, replies: addNestedReply(r.replies) }
          );

        return parentReplyId
          ? { ...post, replies: addNestedReply(post.replies) }
          : { ...post, replies: [...post.replies, reply] };
      })
    );
  };

  return (
    <BlogContext.Provider value={{ blogPosts, addBlogPost, addReply }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) throw new Error('useBlogContext must be used within BlogProvider');
  return context;
};
