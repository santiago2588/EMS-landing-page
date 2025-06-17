import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const PageLayout = ({ title, subtitle, children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold mb-4 sm:text-5xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        <div className="max-w-4xl mx-auto bg-card p-6 sm:p-8 md:p-10 rounded-xl shadow-lg border border-border">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default PageLayout;