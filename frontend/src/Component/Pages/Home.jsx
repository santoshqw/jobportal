
import React from "react";

const Home = ({ children }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Portal</h1>
      {children} 
    </div>
  );
};

export default Home;
