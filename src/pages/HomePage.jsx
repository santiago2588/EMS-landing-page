import ContactForm from '@/components/ContactForm';
import FAQs from '@/components/FAQs';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

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

const HomePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Hero />
      <Features />
      <Stats />
      <Benefits />
      <Testimonials />
      <FAQs />
      <CTA />
      <ContactForm />
    </motion.div>
  );
};

export default HomePage;