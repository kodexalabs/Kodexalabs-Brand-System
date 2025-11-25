import React from 'react';
import { useBrand } from '../context/BrandContext';

const Footer: React.FC = () => {
  const { settings } = useBrand();
  
  return (
    <footer className="bg-brand-black pt-24 pb-12">
      <div className="px-6 md:px-12">
        
        {/* Footer Logo */}
        <div className="flex items-center gap-4 mb-24 opacity-80">
           <div className="w-8 h-8 border border-brand-white flex items-center justify-center">
             <div className="w-4 h-4 bg-brand-white rotate-45"></div>
           </div>
           <span className="text-xl font-bold font-display tracking-tighter text-brand-white">
              {settings.content.brandName}
           </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
           <div>
              <h2 className="text-[10vw] leading-[0.8] font-display font-bold tracking-tighter mb-8 text-brand-white">
                 Say<br/>More.
              </h2>
           </div>
           
           <div className="flex flex-col justify-end">
              <div className="grid grid-cols-2 gap-8 mb-12">
                 <div>
                    <span className="font-mono text-xs text-brand-textGray block mb-4">CONTACT</span>
                    <a href="mailto:hello@kodexalabs.com" className="block text-xl text-brand-white hover:text-brand-textGray transition-colors">hello@kodexalabs.com</a>
                    <a href="tel:+15550000000" className="block text-xl text-brand-white hover:text-brand-textGray transition-colors">+1 (555) 000-0000</a>
                 </div>
                 <div>
                    <span className="font-mono text-xs text-brand-textGray block mb-4">SOCIAL</span>
                    <a href="#" className="block text-xl text-brand-white hover:text-brand-textGray transition-colors">Twitter / X</a>
                    <a href="#" className="block text-xl text-brand-white hover:text-brand-textGray transition-colors">Instagram</a>
                    <a href="#" className="block text-xl text-brand-white hover:text-brand-textGray transition-colors">LinkedIn</a>
                 </div>
              </div>
              
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full border border-brand-white flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Profile" />
                 </div>
                 <span className="text-sm font-mono text-brand-textGray">Thanks for viewing.</span>
              </div>
           </div>
        </div>

        <div className="border-t border-brand-lightGray pt-6 flex justify-between items-center font-mono text-xs text-brand-textGray">
           <div>© 2025 {settings.content.brandName} INC.</div>
           <div className="flex gap-6">
              <a href="#">PRIVACY</a>
              <a href="#">TERMS</a>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;