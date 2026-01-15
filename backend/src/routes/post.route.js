import express from "express";
import  {createPost ,getPost} from "../controllers/post.controller.js"; 

const router = express.Router();

// POST /api/posts/createpost
router.post("/createpost", createPost);
router.get("/getpost",getPost);

export default router;
