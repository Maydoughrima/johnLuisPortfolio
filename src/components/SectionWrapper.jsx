import React from "react";
import { motion } from "framer-motion";

const SectionWrapper = ({ children, className = "", id, delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ 
        duration: 1.0, 
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className={`px-6 py-16 md:px-12 md:py-24 lg:px-[80px] lg:py-[120px] w-full relative ${className}`}


    >
      <div className="max-w-10xl mx-auto w-full h-full">{children}</div>
    </motion.section>
  );
};



export default SectionWrapper;

