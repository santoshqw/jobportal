import mongoose from 'mongoose';

const postCommentSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
      maxlength: 500
    },
    sender: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    post: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: true
    }
  },
  { timestamps: true }
);


const PostComment = mongoose.model("PostComment", postCommentSchema);

export default PostComment;
