import React, { useState, useEffect } from 'react';
import { ANIMATIONS_DATA } from '../data/animationsData';
import { BiologicalAnimation, AnimationStage } from '../types/biology';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  RotateCcw,
  Sparkles,
  Zap,
  Info,
  CheckCircle2
} from 'lucide-react';

interface ProcessAnimationViewerProps {
  initialAnimationId?: string;
}

export const ProcessAnimationViewer: React.FC<ProcessAnimationViewerProps> = ({
  initialAnimationId
}) => {
  const [selectedProcessId, setSelectedProcessId] = useState<string>(
    initialAnimationId || ANIMATIONS_DATA[0].id
  );
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

  React.useEffect(() => {
    if (initialAnimationId) {
      setSelectedProcessId(initialAnimationId);
      setCurrentStageIndex(0);
    }
  }, [initialAnimationId]);

  const activeProcess: BiologicalAnimation =
    ANIMATIONS_DATA.find((a) => a.id === selectedProcessId) || ANIMATIONS_DATA[0];

  const currentStage: AnimationStage =
    activeProcess.stages[currentStageIndex] || activeProcess.stages[0];

  // Auto-play timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      const duration = (currentStage.durationMs || 3000) / playbackSpeed;
      timer = setTimeout(() => {
        setCurrentStageIndex((prev) => (prev + 1) % activeProcess.stages.length);
      }, duration);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStageIndex, activeProcess, playbackSpeed]);

  const handleNext = () => {
    setCurrentStageIndex((prev) => (prev + 1) % activeProcess.stages.length);
  };

  const handlePrev = () => {
    setCurrentStageIndex((prev) =>
      prev === 0 ? activeProcess.stages.length - 1 : prev - 1
    );
  };

  const handleReset = () => {
    setCurrentStageIndex(0);
    setIsPlaying(false);
  };

  return (
    <section id="animations" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-600 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>শারীরবৃত্তীয় প্রক্রিয়া ভিজ্যুয়ালাইজার</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              জৈবিক প্রক্রিয়াসমূহের ধারাবাহিক এনিমেশন
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              পাঠ্যবইয়ের জটিল প্রক্রিয়াগুলো ধাপভিত্তিক সচল এনিমেশনের মাধ্যমে সহজে আয়ত্ত করুন।
              কোষ বিভাজন (মাইটোসিস), সালোকসংশ্লেষণ, পরিপাক, রক্ত সংবহন, শ্বসন, প্রতিবর্ত চাপ, প্রজনন ও জেনেটিক ইঞ্জিনিয়ারিং।
            </p>
          </div>

          {/* Process Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto shrink-0 max-w-full">
            {ANIMATIONS_DATA.map((proc) => (
              <button
                key={proc.id}
                onClick={() => {
                  setSelectedProcessId(proc.id);
                  setCurrentStageIndex(0);
                }}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  selectedProcessId === proc.id
                    ? 'bg-slate-900 text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {proc.titleBn.split(' ')[0]} {proc.titleBn.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Zone Layout: Interactive Stage + Concept Control Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Canvas: Process Animation Graphic (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl overflow-hidden shadow-md flex flex-col">
            <div className="px-5 py-3.5 bg-slate-800/80 border-b border-slate-700/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-xs font-bold text-slate-200">
                  {activeProcess.titleBn}
                </span>
              </div>
              <span className="text-xs text-orange-400 font-mono font-bold">
                ধাপ {currentStageIndex + 1} / {activeProcess.stages.length}
              </span>
            </div>

            {/* Visual Canvas Area */}
            <div className="relative w-full h-[320px] sm:h-[380px] bg-gradient-to-b from-slate-950 via-[#0b132b] to-slate-950 flex items-center justify-center p-4 overflow-hidden select-none">
              {activeProcess.processType === 'mitosis' && (
                <MitosisGraphic stageIndex={currentStageIndex} />
              )}
              {activeProcess.processType === 'photosynthesis' && (
                <PhotosynthesisGraphic stageIndex={currentStageIndex} />
              )}
              {activeProcess.processType === 'digestion' && (
                <DigestionGraphic stageIndex={currentStageIndex} />
              )}
              {activeProcess.processType === 'circulation' && (
                <CirculationGraphic stageIndex={currentStageIndex} />
              )}
              {activeProcess.processType === 'respiration' && (
                <RespirationGraphic stageIndex={currentStageIndex} />
              )}
              {activeProcess.processType === 'reflex_arc' && (
                <ReflexArcGraphic stageIndex={currentStageIndex} />
              )}
              {activeProcess.processType === 'reproduction' && (
                <ReproductionGraphic stageIndex={currentStageIndex} />
              )}
              {activeProcess.processType === 'biotech' && (
                <BiotechGraphic stageIndex={currentStageIndex} />
              )}
            </div>

            {/* Playback Controls Bar */}
            <div className="px-5 py-3.5 bg-slate-800/90 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                  title="পূর্ববর্তী ধাপ"
                >
                  <SkipBack className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-xs"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current" />
                      বিরতি
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      চালান
                    </>
                  )}
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                  title="পরবর্তী ধাপ"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
                <button
                  onClick={handleReset}
                  className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-700 rounded-lg transition-colors"
                  title="প্রথম থেকে শুরু"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Stage Progress Pills */}
              <div className="flex items-center gap-1.5">
                {activeProcess.stages.map((stg, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentStageIndex(idx);
                      setIsPlaying(false);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentStageIndex
                        ? 'w-6 bg-orange-400'
                        : 'w-2 bg-slate-600 hover:bg-slate-500'
                    }`}
                    title={stg.titleBn}
                  />
                ))}
              </div>

              {/* Speed Controller */}
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <span>গতি:</span>
                {[1, 1.5, 2].map((spd) => (
                  <button
                    key={spd}
                    onClick={() => setPlaybackSpeed(spd)}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                      playbackSpeed === spd
                        ? 'bg-orange-500/20 text-orange-400 font-bold border border-orange-500/40'
                        : 'hover:text-slate-200'
                    }`}
                  >
                    {spd}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Deck: Stage Concepts & Scientific Facts (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-orange-50 text-orange-800 border border-orange-200">
                  অধ্যায় {activeProcess.chapterNumber} এর পাঠ্যক্রম
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {currentStage.titleEn}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {currentStage.titleBn}
              </h3>

              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-orange-500" />
                    ধাপটির বর্ণনা ও কৌশল
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {currentStage.descriptionBn}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-orange-500" />
                    সংশ্লিষ্ট উপাদান ও পরিবর্তন
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {currentStage.keyMoleculesBn.map((mol, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs bg-slate-100 text-slate-800 rounded-lg border border-slate-200 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-orange-500" />
                        {mol}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-50/80 border border-orange-200/80 rounded-xl p-3.5 text-xs text-orange-950">
                  <strong>পরীক্ষার পরামর্শ:</strong> এই ধাপের সঠিক বৈজ্ঞানিক ধাপক্রম ও চিত্র খাতায় উপস্থাপন করলে সর্বোচ্চ নম্বর পাওয়া যায়।
                </div>
              </div>
            </div>

            {/* Quick Stages List */}
            <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs">
              <div className="text-xs font-bold text-slate-800 mb-2">
                সকল ধাপসমূহ (ক্লিক করে সরাসরি যান):
              </div>
              <div className="space-y-1.5">
                {activeProcess.stages.map((stg, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentStageIndex(i);
                      setIsPlaying(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs rounded-xl transition-all flex items-center justify-between ${
                      i === currentStageIndex
                        ? 'bg-orange-500 text-white font-bold shadow-xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>{stg.titleBn}</span>
                    <span className="font-mono text-[11px] opacity-80">{i + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Process Graphics ---

const MitosisGraphic: React.FC<{ stageIndex: number }> = ({ stageIndex }) => {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full max-w-[420px]">
      <defs>
        <radialGradient id="cellBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0f766e" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#042f2e" stopOpacity="0.8" />
        </radialGradient>
      </defs>

      {stageIndex < 4 ? (
        <circle
          cx="200"
          cy="150"
          r="120"
          fill="url(#cellBg)"
          stroke="#14b8a6"
          strokeWidth="3"
          strokeDasharray={stageIndex === 1 ? '6 4' : 'none'}
        />
      ) : (
        <g className="animate-fadeIn">
          <ellipse cx="130" cy="150" rx="70" ry="90" fill="url(#cellBg)" stroke="#14b8a6" strokeWidth="3" />
          <ellipse cx="270" cy="150" rx="70" ry="90" fill="url(#cellBg)" stroke="#14b8a6" strokeWidth="3" />
          <line x1="200" y1="60" x2="200" y2="240" stroke="#facc15" strokeWidth="4" strokeDasharray="4 2" />
          <text x="200" y="45" fill="#facc15" fontSize="11" textAnchor="middle">কোষপ্লেট</text>
        </g>
      )}

      {stageIndex === 0 && (
        <circle cx="200" cy="150" r="65" fill="#3b82f6" fillOpacity="0.15" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 4" />
      )}

      {(stageIndex === 1 || stageIndex === 2 || stageIndex === 3) && (
        <g stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5">
          <circle cx="200" cy="45" r="5" fill="#f59e0b" />
          <circle cx="200" cy="255" r="5" fill="#f59e0b" />
          <line x1="200" y1="45" x2="160" y2="150" />
          <line x1="200" y1="45" x2="200" y2="150" />
          <line x1="200" y1="45" x2="240" y2="150" />
          <line x1="200" y1="255" x2="160" y2="150" />
          <line x1="200" y1="255" x2="200" y2="150" />
          <line x1="200" y1="255" x2="240" y2="150" />
        </g>
      )}

      {stageIndex === 0 && (
        <g transform="translate(200, 150)">
          <path d="M-30,-20 Q-10,0 -30,20" stroke="#f43f5e" strokeWidth="5" fill="none" />
          <path d="M-15,-20 Q-35,0 -15,20" stroke="#f43f5e" strokeWidth="5" fill="none" />
          <path d="M20,-25 Q35,0 20,25" stroke="#3b82f6" strokeWidth="5" fill="none" />
          <path d="M35,-25 Q20,0 35,25" stroke="#3b82f6" strokeWidth="5" fill="none" />
        </g>
      )}

      {stageIndex === 1 && (
        <g transform="translate(200, 150)">
          <path d="M-40,-35 L-20,-10" stroke="#f43f5e" strokeWidth="5" />
          <path d="M-20,-35 L-40,-10" stroke="#f43f5e" strokeWidth="5" />
          <path d="M30,15 L50,35" stroke="#3b82f6" strokeWidth="5" />
          <path d="M50,15 L30,35" stroke="#3b82f6" strokeWidth="5" />
        </g>
      )}

      {stageIndex === 2 && (
        <g transform="translate(200, 150)">
          <line x1="-80" y1="0" x2="80" y2="0" stroke="#facc15" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M-50,-20 L-30,20" stroke="#f43f5e" strokeWidth="5" />
          <path d="M-30,-20 L-50,20" stroke="#f43f5e" strokeWidth="5" />
          <path d="M-10,-20 L10,20" stroke="#10b981" strokeWidth="5" />
          <path d="M10,-20 L-10,20" stroke="#10b981" strokeWidth="5" />
          <path d="M30,-20 L50,20" stroke="#3b82f6" strokeWidth="5" />
          <path d="M50,-20 L30,20" stroke="#3b82f6" strokeWidth="5" />
          <text x="0" y="38" fill="#facc15" fontSize="10" textAnchor="middle">মেটাকাইনেসিস</text>
        </g>
      )}

      {stageIndex === 3 && (
        <g transform="translate(200, 150)">
          <path d="M-40,-50 L-30,-70 L-20,-50" stroke="#f43f5e" strokeWidth="5" fill="none" />
          <path d="M-10,-50 L0,-70 L10,-50" stroke="#10b981" strokeWidth="5" fill="none" />
          <path d="M20,-50 L30,-70 L40,-50" stroke="#3b82f6" strokeWidth="5" fill="none" />
          <path d="M-40,50 L-30,70 L-20,50" stroke="#f43f5e" strokeWidth="5" fill="none" />
          <path d="M-10,50 L0,70 L10,50" stroke="#10b981" strokeWidth="5" fill="none" />
          <path d="M20,50 L30,70 L40,50" stroke="#3b82f6" strokeWidth="5" fill="none" />
          <text x="0" y="5" fill="#38bdf8" fontSize="10" textAnchor="middle">V, L, J, I আকৃতির মেরুমুখী চলন</text>
        </g>
      )}

      {stageIndex === 4 && (
        <g>
          <circle cx="130" cy="150" r="32" fill="#3b82f6" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="1.5" />
          <circle cx="270" cy="150" r="32" fill="#3b82f6" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="1.5" />
          <text x="130" y="195" fill="#93c5fd" fontSize="10" textAnchor="middle">অপত্য নিউক্লিয়াস (2n)</text>
          <text x="270" y="195" fill="#93c5fd" fontSize="10" textAnchor="middle">অপত্য নিউক্লিয়াস (2n)</text>
        </g>
      )}
    </svg>
  );
};

const PhotosynthesisGraphic: React.FC<{ stageIndex: number }> = ({ stageIndex }) => {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full max-w-[420px]">
      <circle cx="60" cy="50" r="28" fill="#f59e0b" className="animate-pulse" />
      <text x="60" y="54" fill="#78350f" fontSize="10" textAnchor="middle" fontWeight="bold">সূর্য</text>
      <rect x="90" y="90" width="280" height="180" rx="30" fill="#064e3b" stroke="#10b981" strokeWidth="3" />
      <text x="230" y="112" fill="#6ee7b7" fontSize="11" textAnchor="middle" fontWeight="bold">ক্লোরোপ্লাস্ট</text>
      <rect x="110" y="130" width="90" height="120" rx="15" fill="#047857" stroke="#34d399" strokeWidth="2" />
      <text x="155" y="148" fill="#ecfdf5" fontSize="10" textAnchor="middle">থাইলাকয়েড</text>
      <circle cx="290" cy="190" r="55" fill="#065f46" stroke="#facc15" strokeWidth="2" strokeDasharray="4 2" />
      <text x="290" y="185" fill="#fef08a" fontSize="10" textAnchor="middle" fontWeight="bold">ক্যালভিন চক্র</text>
      {stageIndex === 0 && (
        <line x1="80" y1="70" x2="130" y2="130" stroke="#fde047" strokeWidth="3" strokeDasharray="5 3" />
      )}
      {stageIndex === 1 && (
        <g>
          <text x="120" y="190" fill="#38bdf8" fontSize="11" fontWeight="bold">H2O ফটোলাইসিস</text>
          <rect x="130" y="240" width="55" height="20" rx="6" fill="#38bdf8" />
          <text x="157" y="254" fill="#0c4a6e" fontSize="10" textAnchor="middle" fontWeight="bold">O2 নির্গমন</text>
        </g>
      )}
      {stageIndex === 2 && (
        <g>
          <path d="M190,170 C220,150 240,160 260,175" stroke="#facc15" strokeWidth="3" fill="none" strokeDasharray="4 2" />
          <rect x="205" y="145" width="55" height="18" rx="5" fill="#facc15" />
          <text x="232" y="158" fill="#713f12" fontSize="9" textAnchor="middle" fontWeight="bold">ATP+NADPH</text>
        </g>
      )}
      {stageIndex === 3 && (
        <g>
          <line x1="320" y1="80" x2="305" y2="140" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" />
          <rect x="260" y="240" width="70" height="24" rx="8" fill="#22c55e" />
          <text x="295" y="256" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">গ্লুকোজ (C6H12O6)</text>
        </g>
      )}
    </svg>
  );
};

const DigestionGraphic: React.FC<{ stageIndex: number }> = ({ stageIndex }) => {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full max-w-[420px]">
      {/* Schematic Digestive Tract */}
      {/* Mouth */}
      <circle cx="70" cy="60" r="28" fill="#991b1b" stroke="#f87171" strokeWidth="2" />
      <text x="70" y="64" fill="#fecaca" fontSize="10" textAnchor="middle" fontWeight="bold">মুখবিবর</text>

      {/* Esophagus tube */}
      <path d="M98,60 C140,60 140,110 180,110" stroke="#ea580c" strokeWidth="12" fill="none" strokeLinecap="round" />
      <text x="140" y="95" fill="#fdba74" fontSize="9" textAnchor="middle">পেরিস্টালসিস</text>

      {/* Stomach J-shape */}
      <path d="M180,110 C230,110 240,180 180,190 C150,195 160,150 180,140" fill="#dc2626" stroke="#fca5a5" strokeWidth="2" />
      <text x="205" y="150" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="bold">পাকস্থলী (HCl+পেপসিন)</text>

      {/* Small intestine loops */}
      <g transform="translate(190, 210)">
        <rect x="0" y="0" width="140" height="65" rx="15" fill="#047857" stroke="#34d399" strokeWidth="2" />
        <text x="70" y="25" fill="#a7f3d0" fontSize="10" textAnchor="middle" fontWeight="bold">ক্ষুদ্রান্ত্র (ভিলাই শোষণ)</text>
        <text x="70" y="42" fill="#ecfdf5" fontSize="9" textAnchor="middle">পিত্তরস + অগ্ন্যাশয় রস</text>
      </g>

      {/* Dynamic food bolus / chyme token */}
      {stageIndex === 0 && (
        <circle cx="70" cy="60" r="8" fill="#facc15" className="animate-ping" />
      )}
      {stageIndex === 1 && (
        <circle cx="140" cy="85" r="7" fill="#facc15" />
      )}
      {stageIndex === 2 && (
        <g>
          <circle cx="195" cy="165" r="9" fill="#facc15" />
          <text x="200" y="180" fill="#fef08a" fontSize="9" textAnchor="middle">কাইম গঠন</text>
        </g>
      )}
      {stageIndex === 3 && (
        <g>
          <circle cx="260" cy="240" r="6" fill="#facc15" className="animate-pulse" />
          <circle cx="280" cy="240" r="6" fill="#38bdf8" />
          <text x="260" y="290" fill="#6ee7b7" fontSize="10" textAnchor="middle">রক্তে পুষ্টি শোষণ</text>
        </g>
      )}
    </svg>
  );
};

const CirculationGraphic: React.FC<{ stageIndex: number }> = ({ stageIndex }) => {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full max-w-[420px]">
      <g transform="translate(140, 70)">
        <rect x="0" y="0" width="55" height="60" rx="8" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
        <text x="27" y="35" fill="#93c5fd" fontSize="10" textAnchor="middle" fontWeight="bold">ডান অলিন্দ</text>
        <rect x="0" y="65" width="55" height="75" rx="8" fill="#172554" stroke="#3b82f6" strokeWidth="2" />
        <text x="27" y="105" fill="#93c5fd" fontSize="10" textAnchor="middle" fontWeight="bold">ডান নিলয়</text>
        <rect x="65" y="0" width="55" height="60" rx="8" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
        <text x="92" y="35" fill="#fca5a5" fontSize="10" textAnchor="middle" fontWeight="bold">বাম অলিন্দ</text>
        <rect x="65" y="65" width="55" height="85" rx="8" fill="#7f1d1d" stroke="#ef4444" strokeWidth="3" />
        <text x="92" y="112" fill="#fca5a5" fontSize="10" textAnchor="middle" fontWeight="bold">বাম নিলয়</text>
      </g>
      <g transform="translate(170, 15)">
        <ellipse cx="30" cy="18" rx="40" ry="16" fill="#047857" stroke="#34d399" strokeWidth="2" />
        <text x="30" y="22" fill="#ecfdf5" fontSize="10" textAnchor="middle" fontWeight="bold">ফুসফুস</text>
      </g>
      <g transform="translate(160, 245)">
        <rect x="0" y="0" width="80" height="30" rx="8" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
        <text x="40" y="19" fill="#f1f5f9" fontSize="10" textAnchor="middle" fontWeight="bold">দেহকোষ</text>
      </g>
      {stageIndex === 0 && (
        <path d="M140,245 C90,200 90,130 140,90" stroke="#38bdf8" strokeWidth="2" fill="none" />
      )}
      {stageIndex === 1 && (
        <g stroke="#facc15" strokeWidth="3" fill="none">
          <line x1="167" y1="130" x2="167" y2="140" />
          <line x1="232" y1="130" x2="232" y2="140" />
        </g>
      )}
      {stageIndex === 2 && (
        <text x="200" y="150" fill="#f87171" fontSize="11" textAnchor="middle" fontWeight="bold">হৃৎশব্দ: লাব (Lub)</text>
      )}
      {stageIndex === 3 && (
        <path d="M260,180 C320,200 300,240 240,260" stroke="#ef4444" strokeWidth="2" fill="none" />
      )}
    </svg>
  );
};

const RespirationGraphic: React.FC<{ stageIndex: number }> = ({ stageIndex }) => {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full max-w-[420px]">
      {/* Trachea & Lungs */}
      <rect x="190" y="20" width="20" height="60" rx="4" fill="#64748b" stroke="#94a3b8" />
      <text x="200" y="45" fill="#f1f5f9" fontSize="9" textAnchor="middle">শ্বাসনালি</text>
      <ellipse cx="140" cy="140" rx="55" ry="75" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
      <ellipse cx="260" cy="140" rx="55" ry="75" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
      <text x="140" y="145" fill="#93c5fd" fontSize="11" textAnchor="middle">ডান ফুসফুস</text>
      <text x="260" y="145" fill="#93c5fd" fontSize="11" textAnchor="middle">বাম ফুসফুস</text>

      {/* Diaphragm dome at bottom */}
      <path
        d={stageIndex === 0 ? "M80,245 Q200,255 320,245" : "M80,245 Q200,215 320,245"}
        stroke="#f43f5e"
        strokeWidth="6"
        fill="none"
      />
      <text x="200" y="275" fill="#fb7185" fontSize="10" textAnchor="middle">
        {stageIndex === 0 ? "ডায়াফ্রাম নিচে নামে (প্রশ্বাস)" : "ডায়াফ্রাম উপরে ওঠে (নিঃশ্বাস)"}
      </text>

      {/* Alveolar gas exchange inset */}
      {stageIndex === 1 && (
        <g transform="translate(150, 110)">
          <circle cx="50" cy="50" r="38" fill="#047857" stroke="#34d399" strokeWidth="2" />
          <text x="50" y="42" fill="#ecfdf5" fontSize="9" textAnchor="middle" fontWeight="bold">অ্যালভিওলাস</text>
          <text x="50" y="56" fill="#38bdf8" fontSize="10" textAnchor="middle">O2 → রক্তে</text>
          <text x="50" y="68" fill="#f87171" fontSize="9" textAnchor="middle">CO2 ← রক্ত থেকে</text>
        </g>
      )}
    </svg>
  );
};

const ReflexArcGraphic: React.FC<{ stageIndex: number }> = ({ stageIndex }) => {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full max-w-[420px]">
      <g transform="translate(40, 160)">
        <polygon points="15,0 5,25 25,25" fill="#f97316" className="animate-bounce" />
        <text x="15" y="42" fill="#fb923c" fontSize="10" textAnchor="middle">উদ্দীপনা (তাপ)</text>
      </g>
      <rect x="75" y="150" width="30" height="40" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
      <text x="90" y="174" fill="#0f172a" fontSize="9" textAnchor="middle">ত্বক</text>
      <g transform="translate(280, 110)">
        <rect x="0" y="0" width="75" height="90" rx="15" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
        <path d="M15,20 Q35,45 15,70 M60,20 Q40,45 60,70" stroke="#94a3b8" strokeWidth="3" fill="none" />
        <text x="37" y="50" fill="#93c5fd" fontSize="9" textAnchor="middle" fontWeight="bold">সুষুম্নাকাণ্ড</text>
      </g>
      <ellipse cx="90" cy="235" rx="30" ry="15" fill="#dc2626" stroke="#f87171" strokeWidth="2" />
      <text x="90" y="239" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">হাতের পেশি</text>
      {stageIndex >= 0 && (
        <circle cx="55" cy="170" r="4" fill="#f97316" className="animate-ping" />
      )}
      {stageIndex >= 1 && (
        <path d="M105,160 C160,110 230,120 280,135" stroke="#38bdf8" strokeWidth="3" fill="none" strokeDasharray="4 2" />
      )}
      {stageIndex >= 2 && (
        <circle cx="317" cy="155" r="5" fill="#facc15" className="animate-pulse" />
      )}
      {stageIndex >= 3 && (
        <path d="M280,175 C220,200 150,230 120,235" stroke="#22c55e" strokeWidth="3" fill="none" strokeDasharray="4 2" />
      )}
    </svg>
  );
};

const ReproductionGraphic: React.FC<{ stageIndex: number }> = ({ stageIndex }) => {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full max-w-[420px]">
      {/* Pistil diagram */}
      <path d="M170,40 Q200,40 200,70 L200,160 Q130,220 200,260 Q270,220 200,160 L200,70 Q200,40 230,40" stroke="#84cc16" strokeWidth="4" fill="#064e3b" fillOpacity="0.3" />
      <text x="200" y="30" fill="#a3e635" fontSize="10" textAnchor="middle" fontWeight="bold">গর্ভমুণ্ড (Stigma)</text>
      <text x="200" y="120" fill="#bef264" fontSize="9" textAnchor="middle">গর্ভদণ্ড (Style)</text>
      <ellipse cx="200" cy="210" rx="35" ry="40" fill="#14532d" stroke="#4ade80" strokeWidth="2" />
      <text x="200" y="215" fill="#86efac" fontSize="9" textAnchor="middle">ডিম্বক থলি</text>

      {/* Pollen grain on stigma */}
      <circle cx="200" cy="40" r="6" fill="#facc15" />

      {/* Pollen tube growth */}
      {stageIndex >= 1 && (
        <line x1="200" y1="40" x2="200" y2="180" stroke="#facc15" strokeWidth="3" strokeDasharray="4 2" />
      )}

      {/* Sperm cells entering */}
      {stageIndex >= 2 && (
        <g>
          <circle cx="195" cy="205" r="4" fill="#facc15" />
          <circle cx="205" cy="215" r="4" fill="#facc15" />
          <text x="200" y="275" fill="#fef08a" fontSize="10" textAnchor="middle" fontWeight="bold">দ্বিনিষেক: জাইগোট (2n) + শস্য (3n)</text>
        </g>
      )}

      {stageIndex === 3 && (
        <g>
          <circle cx="200" cy="210" r="28" fill="#eab308" fillOpacity="0.4" stroke="#fef08a" strokeWidth="2" />
          <text x="200" y="214" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">বীজ ও ফল সৃষ্টি</text>
        </g>
      )}
    </svg>
  );
};

const BiotechGraphic: React.FC<{ stageIndex: number }> = ({ stageIndex }) => {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full max-w-[420px]">
      {/* Human Cell & Insulin gene (left) */}
      <rect x="30" y="50" width="80" height="70" rx="15" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
      <text x="70" y="75" fill="#94a3b8" fontSize="9" textAnchor="middle">মানব ক্রোমোজোম</text>
      <rect x="50" y="90" width="40" height="8" rx="2" fill="#ef4444" />
      <text x="70" y="112" fill="#fca5a5" fontSize="8" textAnchor="middle">ইনসুলিন জিন</text>

      {/* Bacterial Plasmid (center) */}
      <circle cx="200" cy="90" r="35" fill="none" stroke="#3b82f6" strokeWidth="5" />
      <text x="200" y="94" fill="#93c5fd" fontSize="9" textAnchor="middle" fontWeight="bold">প্লাজমিড বলয়</text>

      {/* Restriction Enzyme Scissors */}
      {stageIndex === 1 && (
        <g transform="translate(190, 45)">
          <text x="10" y="0" fill="#facc15" fontSize="14">✂</text>
          <text x="10" y="16" fill="#facc15" fontSize="8" textAnchor="middle">রেস্ট্রিকশন</text>
        </g>
      )}

      {/* Recombinant Plasmid (stage 2/3) */}
      {stageIndex >= 2 && (
        <g transform="translate(200, 200)">
          <circle cx="0" cy="0" r="35" fill="none" stroke="#3b82f6" strokeWidth="5" />
          <path d="M25,-25 A35,35 0 0,1 35,0" stroke="#ef4444" strokeWidth="7" fill="none" />
          <text x="0" y="4" fill="#fef08a" fontSize="9" textAnchor="middle" fontWeight="bold">রিকম্বিন্যান্ট প্লাজমিড</text>
        </g>
      )}

      {/* Transformed E. Coli producing Insulin */}
      {stageIndex === 3 && (
        <g transform="translate(310, 190)">
          <rect x="-35" y="-20" width="70" height="40" rx="15" fill="#065f46" stroke="#10b981" strokeWidth="2" />
          <text x="0" y="-3" fill="#6ee7b7" fontSize="8" textAnchor="middle">ই. কোলাই</text>
          <text x="0" y="10" fill="#facc15" fontSize="9" textAnchor="middle" fontWeight="bold">ইনসুলিন ক্ষরণ</text>
        </g>
      )}
    </svg>
  );
};
