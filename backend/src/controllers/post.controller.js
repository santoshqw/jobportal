import User from "../models/user.model.js";
import Post from "../models/post.model.js";

const createPost = async (req, res) => {
  const { title, salary, location, description, experience, author } = req.body;

  try {
    if (!title || !salary || !location || !description || !experience || !author) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findById(author);
    if (!user) {
      return res.status(404).json({ message: "Author not found" });
    }

    const post = await Post.create({
      title,
      salary,
      location,
      description,
      experience,
      author,
    });

    res.status(201).json({
      success: true,
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "name email profilePic");
    res.status(200).json({ success: true, posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export { createPost, getPost };
