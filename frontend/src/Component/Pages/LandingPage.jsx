// LandingPage.jsx
import React, { useState } from "react";

const LandingPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      description: "Looking for a React developer with Tailwind experience.",
      likes: 0,
    },
    {
      id: 2,
      title: "Backend Developer",
      description: "Node.js and Express.js experience required.",
      likes: 0,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", description: "" });

  const handleAddPost = () => {
    if (newPost.title && newPost.description) {
      const post = {
        id: Date.now(),
        title: newPost.title,
        description: newPost.description,
        likes: 0,
      };
      setPosts([post, ...posts]);
      setNewPost({ title: "", description: "" });
      setShowAddForm(false); // hide form after adding
    }
  };

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Job Portal
      </h1>

      {/* Grid Layout */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Posts */}
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition border border-gray-200 flex flex-col justify-between"
          >
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.description}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => handleLike(post.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition flex items-center gap-2"
              >
                ❤️ {post.likes}
              </button>
            </div>
          </div>
        ))}

        {/* Add Post Card */}
        {!showAddForm && (
          <div
            onClick={() => setShowAddForm(true)}
            className="flex items-center justify-center cursor-pointer bg-blue-100 text-blue-600 text-4xl font-bold rounded-xl shadow hover:shadow-lg transition border border-blue-300 h-48"
          >
            +
          </div>
        )}

        {/* Add Post Form */}
        {showAddForm && (
          <div className="bg-white p-5 rounded-xl shadow border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Add New Job
            </h2>
            <input
              type="text"
              placeholder="Job Title"
              className="w-full mb-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
            />
            <textarea
              placeholder="Job Description"
              className="w-full mb-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              rows={3}
              value={newPost.description}
              onChange={(e) =>
                setNewPost({ ...newPost, description: e.target.value })
              }
            ></textarea>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleAddPost}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
