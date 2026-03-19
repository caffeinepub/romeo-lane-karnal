import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919109107900?text=Hello%20Romeo%20Lane%20Karnal!%20I%27d%20like%20to%20make%20a%20reservation."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-black/40 hover:bg-[#20ba58] transition-colors"
      data-ocid="whatsapp.button"
    >
      <SiWhatsapp size={26} color="white" />
    </motion.a>
  );
}
