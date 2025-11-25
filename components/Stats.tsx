import React from 'react';

const Values: React.FC = () => {
  return (
    <section id="values" className="py-24 bg-brand-black border-b border-brand-gray relative">
      <div className="px-6 md:px-12 h-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between mb-24 border-b border-brand-lightGray pb-8">
           <h2 className="text-6xl md:text-8xl font-display font-medium tracking-tighter">About</h2>
           <div className="md:w-1/3 mt-8 md:mt-0">
              <p className="font-mono text-xs text-brand-textGray mb-4">WHO WE ARE</p>
              <p className="text-lg leading-relaxed text-neutral-300">
                At KodexaLabs, we are the architects of insight, the purveyors of precision, and the guardians of accurate information. Our journey is one of exploration.
              </p>
           </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-lightGray border border-brand-lightGray">
           
           {/* Mission Cell */}
           <div className="bg-brand-black p-12 md:p-16 flex flex-col justify-between h-[400px]">
              <h3 className="text-4xl font-display text-brand-textGray">Mission</h3>
              <p className="text-xl md:text-2xl leading-tight">
                 To empower decision makers with accurate, up-to-date, and actionable geo-data that can shape strategies.
              </p>
           </div>

           {/* Vision Cell */}
           <div className="bg-brand-black p-12 md:p-16 flex flex-col justify-between h-[400px]">
              <h3 className="text-4xl font-display text-brand-textGray">Vision</h3>
              <p className="text-xl md:text-2xl leading-tight">
                 To become the leading name in solutions known not just for our technology, but our commitment to impact.
              </p>
           </div>

           {/* Values Cell */}
           <div className="bg-brand-black p-12 md:p-16 col-span-1 md:col-span-2">
              <h3 className="text-4xl font-display text-brand-textGray mb-12">Brand Values</h3>
              
              <div className="flex flex-wrap gap-4 md:gap-12">
                 {['Innovation', 'Reliability', 'Sustainability', 'Collaboration', 'Precision'].map((val, i) => (
                    <div key={i} className="group relative">
                       <span className="text-2xl md:text-4xl font-display border border-brand-lightGray px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all cursor-default block">
                          {val}
                       </span>
                       {i !== 4 && <div className="hidden md:block absolute -right-8 top-1/2 w-4 h-px bg-brand-lightGray"></div>}
                    </div>
                 ))}
              </div>
           </div>

        </div>

      </div>
      
      <div className="absolute right-6 bottom-6 text-[120px] font-display font-light leading-none text-brand-lightGray/20 select-none pointer-events-none">
        02
      </div>
    </section>
  );
};

export default Values;