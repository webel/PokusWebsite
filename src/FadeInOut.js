import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export default ({ children }) => (
  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
    {children}
  </motion.div>
);
