import React from 'react';
import { motion } from 'framer-motion';
import { useBrand } from '../context/BrandContext';

const Hero: React.FC = () => {
  const { settings } = useBrand();

  return (
    <section id="hero" className="min-h-screen flex flex-col pt-32 relative border-b border-brand-gray bg-brand-black">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <div className="flex-1 px-6 md:px-12 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-lightGray pt-8">
          
          <div className="md:col-span-2 hidden md:block">
            <span className="font-mono text-xs text-brand-textGray block mb-2">PROJECT: 2025</span>
            <span className="font-mono text-xs text-brand-textGray block">SYSTEM_ID: {settings.content.brandName.substring(0,6)}_SYS</span>
          </div>

          <div className="md:col-span-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[12vw] leading-[0.8] font-display font-bold tracking-tighter text-brand-white mb-8 uppercase whitespace-pre-line">
                {settings.content.heroHeading}
              </h1>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.8 }}
               className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-brand-lightGray pt-8 max-w-4xl"
            >
              <div>
                <span className="font-mono text-brand-textGray text-xs block mb-3">01. IDENTITY</span>
                <p className="text-sm text-brand-white/80">
                  {settings.content.brandName} defines the visual and structural language for high-velocity engineering teams.
                </p>
              </div>
              <div>
                <span className="font-mono text-brand-textGray text-xs block mb-3">02. MISSION</span>
                <p className="text-sm text-brand-white/80">
                  {settings.content.missionStatement}
                </p>
              </div>
              <div>
                <span className="font-mono text-brand-textGray text-xs block mb-3">03. STATUS</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
                  <p className="text-sm text-brand-white/80">Operational</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="px-6 md:px-12 py-6 flex justify-between items-end">
         <span className="text-[10vw] md:text-[8rem] font-display font-light leading-none text-brand-lightGray/20 select-none">
            01
         </span>
      </div>
    </section>
  );
};

export default Hero;