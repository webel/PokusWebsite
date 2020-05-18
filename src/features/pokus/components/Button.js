import React from "react";
import Radium from "radium";
import { motion } from "framer-motion";

const Button = ({ onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={styles}
    onClick={onClick}
  />
);

const styles = {
  position: "relative",
  left: "30%",
  top: "30%",

  width: "90px",
  height: "90px",
  borderRadius: "50%",
  background: "#333",
  ":hover": {
    background: "#444",
  },
};

export default Radium(Button);
