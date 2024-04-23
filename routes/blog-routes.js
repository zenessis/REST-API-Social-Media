import express from 'express';
import { addBlog, deleteBlog, getAllBlogs, getID, getUserID, updateBlog } from '../controllers/blog-controller.js'

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getID);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id", getUserID)

export default blogRouter;