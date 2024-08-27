import React from "react";

// Components
import BlogItem from "./BlogItem";

const BlogList = () => {
  const blogs = [];

  return (
    <div className="grid grid-cols-3 gap-x-20 gap-y-8 mt-16">
      {blogs.map((blog) => {
        return <BlogItem key={blog._id} blog={blog} />;
      })}
    </div>
  );
};

export default BlogList;
