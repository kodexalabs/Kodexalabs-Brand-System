import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-brand-black py-24 border-b border-brand-gray relative">
      <div className="px-6 md:px-12">
        <div className="mb-16 border-b border-brand-lightGray pb-6 flex justify-between items-end">
          <h2 className="text-6xl md:text-7xl font-display font-medium tracking-tighter">Typography</h2>
          <span className="font-mono text-brand-textGray">03</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           
           {/* Big Type Specimen */}
           <div className="lg:col-span-7 border border-brand-lightGray p-12 relative overflow-hidden group">
              <div className="absolute top-4 left-4 font-mono text-xs text-brand-textGray">PRIMARY FONT FAMILY</div>
              
              <div className="mt-12">
                 <h3 className="text-[8rem] md:text-[12rem] leading-none font-display font-bold">FK</h3>
                 <h3 className="text-[4rem] md:text-[6rem] leading-none font-display -mt-4 group-hover:text-brand-textGray transition-colors">Grotesk</h3>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 opacity-50">
                 <div>
                    <span className="block text-2xl font-bold mb-2">Aa</span>
                    <p className="text-xs font-mono">Space Grotesk Bold</p>
                 </div>
                 <div>
                    <span className="block text-2xl font-medium mb-2">Bb</span>
                    <p className="text-xs font-mono">Space Grotesk Medium</p>
                 </div>
                 <div>
                    <span className="block text-2xl font-light mb-2">Cc</span>
                    <p className="text-xs font-mono">Space Grotesk Light</p>
                 </div>
              </div>
           </div>

           {/* Color Palette / Logo Construction Style */}
           <div className="lg:col-span-5 flex flex-col gap-6">
              
              <div className="border border-brand-lightGray p-8 flex-1">
                 <div className="font-mono text-xs text-brand-textGray mb-6">COLOR PALETTE</div>
                 <div className="flex h-32 w-full">
                    <div className="flex-1 bg-white relative group">
                       <span className="absolute bottom-2 left-2 text-black text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">#FFFFFF</span>
                    </div>
                    <div className="flex-1 bg-[#888] relative group">
                       <span className="absolute bottom-2 left-2 text-white text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">#888888</span>
                    </div>
                    <div className="flex-1 bg-[#333] relative group">
                       <span className="absolute bottom-2 left-2 text-white text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">#333333</span>
                    </div>
                    <div className="flex-1 bg-black border border-brand-lightGray relative group">
                       <span className="absolute bottom-2 left-2 text-white text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">#000000</span>
                    </div>
                 </div>
              </div>

              <div className="border border-brand-lightGray p-8 flex-1 bg-brand-gray/20">
                 <div className="font-mono text-xs text-brand-textGray mb-6">LOGO SAFE ZONE</div>
                 <div className="flex items-center justify-center h-32 border border-dashed border-brand-lightGray relative">
                    <span className="font-display font-bold text-2xl tracking-tighter">KodexaLabs</span>
                    
                    {/* Safezone markers */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-textGray"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-textGray"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-textGray"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-textGray"></div>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;