import ContactForm from "../../ui/ContactForm";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <ContactForm />
    </motion.div>
  );
}

export default Contact;
