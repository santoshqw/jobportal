import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 200
    },
    salary: {
      type: String,
      required: true
    },
    location: {
      type: String,
      default: "Not specified"
    },
    description: { 
      type: String,
      enum: ['remote', 'onsite', 'both'],
      required: true
    },
    experience: {
      type: String,
      required: true
    },
    author: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
