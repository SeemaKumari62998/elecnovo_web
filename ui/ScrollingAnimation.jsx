import { motion } from "framer-motion";

function ScrollingAnimation() {
  return (
    <motion.div>
      initial={{ opacity: 0, scale: 0 }}
      whileInView = {{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    </motion.div>
  );
}

export default ScrollingAnimation;
