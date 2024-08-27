"use client";

import React, { useEffect } from "react";

// Components
import BlogList from "./components/BlogList";

const App = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight">From the blog</h2>
        <p className="text-gray-600 leading-loose text-lg mt-2">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <BlogList />
    </div>
  );
};

export default App;
