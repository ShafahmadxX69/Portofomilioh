
import React, { useState } from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { SKILLS } from '../constants';
import { Skill } from '../types';

const CATEGORY_COLORS: Record<string, string> = {
  'Core': '#d7d2f7',
  'Data': '#60a5fa',
  'Strategy': '#fbbf24',
  'Technical': '#34d399',
  'Management': '#f472b6',
  'Communication': '#a78bfa'
};

// Grouping skills into 5 dimensions to match the pentagon shape in the image
const CHART_DIMENSIONS = [
  { name: 'Strategic', key: 'strategic' },
  { name: 'Analytical', key: 'analytical' },
  { name: 'Operational', key: 'operational' },
  { name: 'Leadership', key: 'leadership' },
  { name: 'Risk', key: 'risk' }
];

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  // Calculate values for the 5 dimensions dynamically based on hover
  const chartData = CHART_DIMENSIONS.map(dim => {
    // If a skill is hovered, show its specific behaviour value
    // Otherwise show a default average or baseline
    const value = hoveredSkill?.behaviours 
      ? (hoveredSkill.behaviours as any)[dim.key] 
      : 70; // Default baseline when no skill is hovered
    
    return {
      subject: dim.name,
      A: value, 
      B: 80, // Static benchmark for visual comparison
      fullMark: 100,
      isHighlighted: !!hoveredSkill
    };
  });

  return (
    <section id="skills" className="py-24 bg-slate-900/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Professional <span className="text-[#d7d2f7]">Skills</span></h2>
          <div className="w-20 h-1 bg-[#d7d2f7] mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-6 text-slate-200">Expertise & Experience</h3>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Skilled in administration, team management, and production planning. Strong command of office and cloud-based tools with a passion for efficiency through automation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SKILLS.map((skill) => (
                <div 
                  key={skill.name} 
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`p-4 glass-card rounded-2xl border transition-all duration-300 group relative ${hoveredSkill?.name === skill.name ? 'border-[#d7d2f7] scale-[1.02] shadow-lg shadow-[#d7d2f7]/10' : 'border-white/5'}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                      style={{ 
                        backgroundColor: `${CATEGORY_COLORS[skill.category]}20`,
                        color: CATEGORY_COLORS[skill.category]
                      }}
                    >
                      <i className={`bx ${skill.icon} text-xl`}></i>
                    </div>
                    <span className="font-bold text-slate-200 text-sm">{skill.name}</span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{skill.category}</span>
                    {/* Numbers hidden as requested */}
                  </div>
                  
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full transition-all duration-1000"
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: CATEGORY_COLORS[skill.category]
                      }}
                    ></div>
                  </div>

                  {/* Hover Explanation Overlay */}
                  <div className={`absolute inset-0 z-10 bg-[#1a1b2e] rounded-2xl p-4 flex flex-col justify-center transition-all duration-300 ${hoveredSkill?.name === skill.name ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                      {skill.explanation}
                    </p>
                    <div className="mt-auto">
                      <div className="text-[9px] text-slate-500 uppercase font-bold mb-1">Tools Used:</div>
                      <div className="flex flex-wrap gap-1">
                        {skill.tools?.map(tool => (
                          <span key={tool} className="text-[9px] px-1.5 py-0.5 bg-white/5 rounded text-slate-400 border border-white/5">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 h-[450px] md:h-[550px] w-full flex flex-col items-center justify-center relative">
            <div className="absolute top-0 left-0 p-4 z-10">
              <div className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1 italic">Ultra Speed</div>
              <div className="text-xs font-bold text-white/50 uppercase tracking-widest italic">Super Economy</div>
            </div>
            
            <div className="absolute inset-0 bg-[#d7d2f7]/5 rounded-full blur-3xl"></div>
            
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
                <PolarGrid stroke="#2d2e4a" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={(props) => {
                    const { x, y, payload } = props;
                    return (
                      <text 
                        x={x} 
                        y={y} 
                        fill={hoveredSkill ? '#d7d2f7' : '#f8fafc'} 
                        fontSize={12} 
                        fontWeight={hoveredSkill ? 900 : 700}
                        textAnchor="middle"
                        className="transition-all duration-300"
                      >
                        {payload.value}
                      </text>
                    );
                  }}
                />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]} 
                  tick={false} // Numbers hidden as requested
                  axisLine={true}
                  stroke="#2d2e4a"
                />
                
                {/* Red Area (Benchmark/Target) */}
                <Radar
                  name="Target"
                  dataKey="B"
                  stroke="#ef4444"
                  fill="#ef4444"
                  fillOpacity={hoveredSkill ? 0.1 : 0.4}
                  strokeWidth={2}
                  animationDuration={500}
                />
                
                {/* Blue Area (Shafa's Profile) */}
                <Radar
                  name="Shafa's Profile"
                  dataKey="A"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={hoveredSkill ? 0.8 : 0.5}
                  strokeWidth={hoveredSkill ? 4 : 2}
                  dot={hoveredSkill ? { r: 4, fill: '#fff', stroke: '#6366f1', strokeWidth: 2 } : false}
                  animationDuration={500}
                />

                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1b2e', 
                    border: '1px solid rgba(215, 210, 247, 0.2)',
                    borderRadius: '12px',
                    color: '#f8fafc'
                  }}
                  itemStyle={{ color: '#d7d2f7' }}
                  formatter={(value) => [`${value}%`, 'Proficiency']}
                />
              </RadarChart>
            </ResponsiveContainer>
            
            <div className="flex gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 bg-[#6366f1] rounded-sm transition-all ${hoveredSkill ? 'scale-125 shadow-[0_0_10px_#6366f1]' : ''}`}></div>
                <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${hoveredSkill ? 'text-[#d7d2f7]' : 'text-slate-400'}`}>
                  {hoveredSkill ? `Focus: ${hoveredSkill.name}` : 'My Profile'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#ef4444] rounded-sm"></div>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Benchmark</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
