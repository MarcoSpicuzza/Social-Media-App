import express  from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();


// SEND RESPONSE TO localhost:5000/posts since in index.js the prefix is posts
router.get('/', getPosts);
router.post('/', createPost);

export default router;
