import React, { useState } from 'react';
import { RECOGNITION } from '../constants';
import { Plus, Minus, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Recognition: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="recognition" className="py-32 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
           <div className="sticky top-32">
             <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mb-8">
                <Star className="fill-brand-primary" />
             </div>
             <h2 className="text-5xl font-display font-medium text-white mb-6">
               Proven <br/>Excellence.
             </h2>
             <p className="text-neutral-400 text-lg leading-relaxed mb-8">
               Our expertise is recognized by the world's leading legal and technology rating agencies, setting the standard for digital innovation.
             </p>
             <button className="text-white border-b border-brand-primary pb-1 hover:opacity-80 transition-opacity">
                View all awards
             </button>
           </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          {RECOGNITION.map((rec, index) => (
            <div key={rec.id} className="border-b border-white/10 last:border-none">
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full py-10 flex items-center justify-between group text-left"
              >
                <span className={`text-3xl font-display font-medium transition-colors ${openIndex === index ? 'text-white' : 'text-neutral-500 group-hover:text-white'}`}>
                  {rec.category}
                </span>
                
                <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-white text-black rotate-180' : 'text-white'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {rec.items.map((item, idx) => (
                         <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-brand-primary/50 transition-colors">
                            <div className="text-brand-primary font-mono text-xs mb-3">{item.year}</div>
                            <div className="text-white text-lg">{item.name}</div>
                         </div>
                       ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;