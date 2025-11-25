import React from 'react';
import { useBrand } from '../context/BrandContext';
import { X, RotateCcw, Type, Palette, FileText, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EditorPanel: React.FC = () => {
  const { settings, updateColor, updateTypography, updateContent, resetSettings, isEditorOpen, toggleEditor } = useBrand();

  return (
    <AnimatePresence>
      {isEditorOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-[#111] border-l border-[#333] z-[60] overflow-y-auto shadow-2xl"
        >
          <div className="p-6">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-8 border-b border-[#333] pb-6">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-brand-white" />
                <h2 className="text-xl font-display font-bold text-white">System Editor</h2>
              </div>
              <div className="flex gap-2">
                <button onClick={resetSettings} className="p-2 hover:bg-[#222] rounded text-[#888] hover:text-white transition-colors" title="Reset Defaults">
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button onClick={toggleEditor} className="p-2 hover:bg-[#222] rounded text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Colors Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4 text-[#888] font-mono text-xs uppercase tracking-wider">
                <Palette className="w-4 h-4" /> Colors
              </div>
              <div className="space-y-4 bg-[#0a0a0a] p-4 rounded border border-[#222]">
                <ColorInput label="Background" value={settings.colors.background} onChange={(v) => updateColor('background', v)} />
                <ColorInput label="Foreground" value={settings.colors.foreground} onChange={(v) => updateColor('foreground', v)} />
                <ColorInput label="Grid/Lines" value={settings.colors.lightGray} onChange={(v) => updateColor('lightGray', v)} />
                <ColorInput label="Text Secondary" value={settings.colors.textGray} onChange={(v) => updateColor('textGray', v)} />
                <ColorInput label="Accent" value={settings.colors.accent} onChange={(v) => updateColor('accent', v)} />
              </div>
            </div>

            {/* Typography Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4 text-[#888] font-mono text-xs uppercase tracking-wider">
                <Type className="w-4 h-4" /> Typography
              </div>
              <div className="space-y-4 bg-[#0a0a0a] p-4 rounded border border-[#222]">
                <div>
                  <label className="block text-xs text-[#666] mb-2 font-mono">Display Font</label>
                  <select 
                    value={settings.typography.displayFont} 
                    onChange={(e) => updateTypography('displayFont', e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded p-2 text-white text-sm focus:border-white outline-none"
                  >
                    <option value="Space Grotesk">Space Grotesk</option>
                    <option value="Inter">Inter</option>
                    <option value="Playfair Display">Playfair Display</option>
                    <option value="JetBrains Mono">JetBrains Mono</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs text-[#666] mb-2 font-mono">Body Font</label>
                  <select 
                    value={settings.typography.bodyFont} 
                    onChange={(e) => updateTypography('bodyFont', e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded p-2 text-white text-sm focus:border-white outline-none"
                  >
                    <option value="Inter">Inter</option>
                    <option value="Space Grotesk">Space Grotesk</option>
                    <option value="JetBrains Mono">JetBrains Mono</option>
                  </select>
                </div>

                <div>
                   <div className="flex justify-between mb-2">
                      <label className="text-xs text-[#666] font-mono">Tracking (Spacing)</label>
                      <span className="text-xs text-[#888] font-mono">{settings.typography.letterSpacing.toFixed(2)}em</span>
                   </div>
                   <input 
                      type="range" 
                      min="-0.1" 
                      max="0.5" 
                      step="0.01"
                      value={settings.typography.letterSpacing}
                      onChange={(e) => updateTypography('letterSpacing', parseFloat(e.target.value))}
                      className="w-full h-1 bg-[#333] rounded-lg appearance-none cursor-pointer accent-white"
                   />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4 text-[#888] font-mono text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4" /> Identity & Content
              </div>
              <div className="space-y-4 bg-[#0a0a0a] p-4 rounded border border-[#222]">
                <TextInput label="Brand Name" value={settings.content.brandName} onChange={(v) => updateContent('brandName', v)} />
                <TextInput label="Version" value={settings.content.version} onChange={(v) => updateContent('version', v)} />
                <div>
                   <label className="block text-xs text-[#666] mb-2 font-mono">Hero Heading</label>
                   <textarea 
                      value={settings.content.heroHeading} 
                      onChange={(e) => updateContent('heroHeading', e.target.value)}
                      rows={2}
                      className="w-full bg-[#1a1a1a] border border-[#333] rounded p-2 text-white text-sm focus:border-white outline-none resize-none"
                   />
                </div>
                <div>
                   <label className="block text-xs text-[#666] mb-2 font-mono">Mission Statement</label>
                   <textarea 
                      value={settings.content.missionStatement} 
                      onChange={(e) => updateContent('missionStatement', e.target.value)}
                      rows={3}
                      className="w-full bg-[#1a1a1a] border border-[#333] rounded p-2 text-white text-sm focus:border-white outline-none resize-none"
                   />
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-[#444] text-xs font-mono">Changes apply in real-time.</p>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ColorInput: React.FC<{ label: string; value: string; onChange: (val: string) => void }> = ({ label, value, onChange }) => (
  <div className="flex items-center justify-between">
    <label className="text-xs text-[#ccc] font-mono">{label}</label>
    <div className="flex items-center gap-2">
      <span className="text-[10px] text-[#666] font-mono uppercase">{value}</span>
      <input 
        type="color" 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className="cursor-pointer"
      />
    </div>
  </div>
);

const TextInput: React.FC<{ label: string; value: string; onChange: (val: string) => void }> = ({ label, value, onChange }) => (
  <div>
    <label className="block text-xs text-[#666] mb-2 font-mono">{label}</label>
    <input 
      type="text" 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-[#1a1a1a] border border-[#333] rounded p-2 text-white text-sm focus:border-white outline-none"
    />
  </div>
);

export default EditorPanel;