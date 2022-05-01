import React from "react";
import { motion } from "framer-motion";

const AnimationPages = ({ children }) => {
  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationPages;
