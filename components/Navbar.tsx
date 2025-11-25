import React from 'react';
import { Menu } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

const Navbar: React.FC = () => {
  const { settings, toggleSecretMenu } = useBrand();

  const handleLogoContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleSecretMenu();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 mix-blend-difference text-brand-white">
      <div className="flex items-center justify-between w-full border-b border-brand-white/20 pb-4">
        
        <div 
          className="flex items-center gap-4 cursor-context-menu"
          onContextMenu={handleLogoContextMenu}
          title="Right-click for internal menu"
        >
           {/* Logo Icon */}
           <div className="w-8 h-8 border border-brand-white flex items-center justify-center transition-transform hover:rotate-90 duration-500">
             <div className="w-4 h-4 bg-brand-white rotate-45"></div>
           </div>
           {/* Logo Text */}
           <span className="text-xl font-bold font-display tracking-tighter select-none">
              {settings.content.brandName}
           </span>
        </div>

        <div className="hidden md:flex items-center gap-12 font-mono text-xs tracking-widest uppercase">
          <a href="#hero" className="hover:opacity-50 transition-opacity">01. Intro</a>
          <a href="#values" className="hover:opacity-50 transition-opacity">02. Values</a>
          <a href="#services" className="hover:opacity-50 transition-opacity">03. System</a>
          <a href="#examples" className="hover:opacity-50 transition-opacity">04. Examples</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs hidden md:block">{settings.content.version}</span>
          <Menu className="w-6 h-6 md:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;