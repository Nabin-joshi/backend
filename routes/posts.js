import express from "express";

import {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getPosts);
router.post("/", auth, createPost);
router.get("/:id", auth, getPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

export default router;
