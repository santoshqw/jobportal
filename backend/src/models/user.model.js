import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    googleId: { type: String, unique: true, sparse: true }, 
    profilePic: { type: String },
    isonline:{type:Boolean,default:false},
    role: { type: String, enum: ["user", "admin"], default: "user" },

  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
