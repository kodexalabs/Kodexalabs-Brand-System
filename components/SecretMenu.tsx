import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Terminal, Database, Shield, Cpu, FileJson, Activity, Grid } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

const SecretMenu: React.FC = () => {
  const { isSecretMenuOpen, toggleSecretMenu, settings } = useBrand();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSecretMenuOpen) toggleSecretMenu();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isSecretMenuOpen, toggleSecretMenu]);

  const handleDownloadConfig = () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(settings, null, 2));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "kodexalabs_brand_config.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
  };

  const links = [
    { 
        icon: Terminal, 
        label: 'System Console', 
        desc: 'Execute internal command protocols',
        action: () => alert('Access Denied: Level 5 Clearance Required')
    },
    { 
        icon: FileJson, 
        label: 'Export Config', 
        desc: 'Download current system JSON',
        action: handleDownloadConfig
    },
    { 
        icon: Database, 
        label: 'Asset Depository', 
        desc: 'Raw vector resources & guidelines',
        action: () => window.open('https://github.com', '_blank')
    },
    { 
        icon: Activity, 
        label: 'Live Diagnostics', 
        desc: 'Real-time performance metrics',
        action: () => console.log('Running diagnostics...')
    },
    { 
        icon: Grid, 
        label: 'Layout Grid', 
        desc: 'Toggle development overlay',
        action: () => document.body.classList.toggle('debug-grid')
    },
    { 
        icon: Shield, 
        label: 'Admin Portal', 
        desc: 'User permission management',
        action: () => alert('Authentication Failed')
    }
  ];

  return (
    <AnimatePresence>
      {isSecretMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col text-white overflow-hidden font-mono"
        >
           {/* Background Grid */}
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

          {/* Header */}
          <div className="flex justify-between items-center p-6 md:p-8 border-b border-white/10 relative z-10">
            <div className="flex items-center gap-3 text-red-500">
               <Lock className="w-5 h-5" />
               <div className="flex flex-col">
                   <span className="tracking-widest uppercase text-sm font-bold leading-none">Restricted Area</span>
                   <span className="text-[10px] opacity-60">INTERNAL SYSTEMS ONLY</span>
               </div>
            </div>
            <button 
                onClick={toggleSecretMenu} 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Grid Content */}
          <div className="flex-1 p-6 md:p-16 overflow-y-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
               {links.map((link, i) => (
                 <motion.button
                   key={i}
                   onClick={link.action}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.05 }}
                   className="group p-8 border border-white/10 hover:border-red-500/50 hover:bg-red-950/10 transition-all text-left relative overflow-hidden"
                 >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                        <link.icon className="w-16 h-16 text-red-500 -rotate-12 transform translate-x-4 -translate-y-4" />
                    </div>

                    <div className="flex items-start justify-between mb-8 relative">
                       <link.icon className="w-6 h-6 text-neutral-500 group-hover:text-red-500 transition-colors" />
                       <span className="text-xs font-mono text-neutral-600 group-hover:text-red-400">0{i+1}</span>
                    </div>
                    
                    <div className="relative">
                        <h3 className="text-xl font-bold mb-2 text-neutral-300 group-hover:text-white font-display tracking-tight">{link.label}</h3>
                        <p className="text-sm text-neutral-500 group-hover:text-red-200/60 font-mono leading-relaxed">{link.desc}</p>
                    </div>
                 </motion.button>
               ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 md:p-8 border-t border-white/10 text-xs text-neutral-600 flex flex-col md:flex-row justify-between font-mono relative z-10 gap-4">
            <div className="flex gap-8">
                <span>SESSION_ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                <span className="hidden md:inline">LATENCY: 12ms</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>SECURE CONNECTION ESTABLISHED</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SecretMenu;