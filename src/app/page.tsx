import React from 'react';
import Layout from './layout';
import BlogPost from './Blog/BlogList/page';
import CreateBlog from './Blog/CreateBlogPage/page';
import { BlogProvider } from '@/Context/BlogContext';

const HomePage: React.FC = () => {
  return (
    <BlogProvider>
      <Layout>
        <CreateBlog />
        <BlogPost />
      </Layout>
    </BlogProvider>
  );
};

export default HomePage;
