import React from "react";
import { BlogContainer } from "./Blog.styles";
import { motion } from "framer-motion";
import { animationOne } from "../../animation/index";

const Blog = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne}>
      <BlogContainer>
        <h1>Blog</h1>
      </BlogContainer>
    </motion.div>
  );
};

export default Blog;
