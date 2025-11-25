import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Stats';
import System from './components/Services';
import Examples from './components/Cases';
import Footer from './components/Footer';
import EditorPanel from './components/EditorPanel';
import SecretMenu from './components/SecretMenu';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandProvider, useBrand } from './context/BrandContext';
import { Settings } from 'lucide-react';
import Lenis from 'lenis';

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { settings, toggleEditor, isEditorOpen } = useBrand();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Request Animation Frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Handle Anchor Links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      // Only capture internal hash links
      if (href?.startsWith('#') && href.length > 1) {
         e.preventDefault();
         const element = document.querySelector(href);
         if (element) {
             lenis.scrollTo(element);
         }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Construct dynamic styles based on settings
  const dynamicStyles = {
    '--brand-black': settings.colors.background,
    '--brand-white': settings.colors.foreground,
    '--brand-gray': settings.colors.gray,
    '--brand-light-gray': settings.colors.lightGray,
    '--brand-text-gray': settings.colors.textGray,
    '--brand-accent': settings.colors.accent,
    '--font-display': settings.typography.displayFont,
    '--font-body': settings.typography.bodyFont,
    '--tracking-tighter': `${-0.05 + settings.typography.letterSpacing}em`,
    '--tracking-tight': `${-0.025 + settings.typography.letterSpacing}em`,
    '--tracking-wide': `${0.025 + settings.typography.letterSpacing}em`,
    '--tracking-widest': `${0.1 + settings.typography.letterSpacing}em`,
  } as React.CSSProperties;

  return (
    <div style={dynamicStyles} className="transition-colors duration-300">
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-brand-black flex items-center justify-center text-white"
          >
            <div className="text-center">
              <div className="text-4xl font-display font-bold tracking-tighter mb-2">{settings.content.brandName}</div>
              <div className="w-full h-px bg-white/20 relative overflow-hidden">
                 <motion.div 
                   initial={{ x: '-100%' }} 
                   animate={{ x: '100%' }} 
                   transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                   className="absolute inset-0 bg-white w-1/2" 
                 />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-brand-black min-h-screen text-white selection:bg-brand-white selection:text-brand-black">
        <Navbar />
        <main>
          <Hero />
          <Values />
          <System />
          <Examples />
        </main>
        <Footer />

        {/* Floating Editor Trigger */}
        {!isEditorOpen && !loading && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            onClick={toggleEditor}
            className="fixed bottom-8 right-8 z-50 p-4 bg-white text-black rounded-full shadow-lg border border-black hover:bg-brand-lightGray hover:text-white transition-colors"
            title="Edit Brand System"
          >
            <Settings className="w-6 h-6 animate-spin-slow" />
          </motion.button>
        )}

        <EditorPanel />
        <SecretMenu />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrandProvider>
      <AppContent />
    </BrandProvider>
  );
};

export default App;