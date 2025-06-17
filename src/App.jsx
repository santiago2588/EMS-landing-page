import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import CaseStudiesPage from '@/pages/CaseStudiesPage';
import SavingsCalculatorPage from '@/pages/SavingsCalculatorPage';
import BlogPage from '@/pages/BlogPage';
import HelpCenterPage from '@/pages/HelpCenterPage';
import DocumentationPage from '@/pages/DocumentationPage';
import WebinarsPage from '@/pages/WebinarsPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsOfServicePage from '@/pages/TermsOfServicePage';
import CookiesPolicyPage from '@/pages/CookiesPolicyPage';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/casos-de-exito" element={<CaseStudiesPage />} />
            <Route path="/calculadora-ahorro" element={<SavingsCalculatorPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/ayuda" element={<HelpCenterPage />} />
            <Route path="/documentacion" element={<DocumentationPage />} />
            <Route path="/webinars" element={<WebinarsPage />} />
            <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />
            <Route path="/terminos-servicio" element={<TermsOfServicePage />} />
            <Route path="/cookies" element={<CookiesPolicyPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;