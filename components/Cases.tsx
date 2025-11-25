import React from 'react';
import { ExternalLink } from 'lucide-react';

const EXAMPLES = [
  { 
     title: "Business Card",
     category: "Stationery",
     img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop&grayscale"
  },
  { 
     title: "Mobile App Interface",
     category: "Digital Product",
     img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop&grayscale"
  },
  { 
     title: "Social Media Kit",
     category: "Marketing",
     img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop&grayscale"
  },
  { 
     title: "Web Experience",
     category: "Digital",
     img: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop&grayscale"
  },
];

const Examples: React.FC = () => {
  return (
    <section id="examples" className="bg-brand-black py-24 border-b border-brand-gray">
       <div className="px-6 md:px-12">
          
          <div className="flex justify-between items-end mb-16 border-b border-brand-lightGray pb-6">
             <div>
                <h2 className="text-6xl md:text-7xl font-display font-medium tracking-tighter mb-2">Applications</h2>
                <p className="text-brand-textGray">Real-world implementation of the design system.</p>
             </div>
             <span className="font-mono text-brand-textGray text-xl">04</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {EXAMPLES.map((example, i) => (
                <div key={i} className="group cursor-pointer">
                   {/* Image Container */}
                   <div className="relative aspect-[4/3] bg-brand-gray overflow-hidden border border-brand-lightGray mb-6">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                      <img 
                        src={example.img} 
                        alt={example.title} 
                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" 
                      />
                      
                      {/* Overlay Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                         <div className="flex justify-between items-center">
                            <span className="text-white font-mono text-xs uppercase border border-white/30 px-2 py-1 bg-black/50 backdrop-blur-md">View Mockup</span>
                            <ExternalLink className="w-4 h-4 text-white" />
                         </div>
                      </div>
                   </div>

                   {/* Text Info */}
                   <div className="flex justify-between items-baseline border-b border-brand-lightGray pb-4 group-hover:border-white transition-colors">
                      <h3 className="text-2xl font-display font-medium">{example.title}</h3>
                      <span className="font-mono text-xs text-brand-textGray">{example.category}</span>
                   </div>
                </div>
             ))}
          </div>

       </div>
    </section>
  );
};

export default Examples;