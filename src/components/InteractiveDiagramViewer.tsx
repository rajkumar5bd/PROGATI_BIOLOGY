import React, { useState } from 'react';
import { DIAGRAMS_DATA } from '../data/diagramsData';
import { DiagramHotspot, InteractiveDiagram } from '../types/biology';
import { OrganelleExplorerModal } from './OrganelleExplorerModal';
import {
  HelpCircle,
  Eye,
  EyeOff,
  Check,
  BookOpen,
  Sparkles,
  ChevronRight,
  Info,
  Layers,
  Filter,
  Box,
  Compass,
  ArrowRight,
  Zap,
  Tag,
  CheckCircle2,
  ListOrdered
} from 'lucide-react';

interface InteractiveDiagramViewerProps {
  initialDiagramId?: string;
  onJumpTo3DModel?: (modelId: string) => void;
}

export const InteractiveDiagramViewer: React.FC<InteractiveDiagramViewerProps> = ({
  initialDiagramId,
  onJumpTo3DModel
}) => {
  const [selectedDiagramId, setSelectedDiagramId] = useState<string>(
    initialDiagramId || DIAGRAMS_DATA[0].id
  );
  const [selectedHotspotId, setSelectedHotspotId] = useState<string | null>(
    DIAGRAMS_DATA[0].hotspots[0]?.id || null
  );
  const [hoveredHotspotId, setHoveredHotspotId] = useState<string | null>(null);
  const [quizMode, setQuizMode] = useState<boolean>(false);
  const [revealedIds, setRevealedIds] = useState<string[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [showExternalCallouts, setShowExternalCallouts] = useState<boolean>(true);

  // Organelle Explorer Modal State
  const [isOrganelleModalOpen, setIsOrganelleModalOpen] = useState<boolean>(false);
  const [activeOrganelleModalId, setActiveOrganelleModalId] = useState<string>('nucleus');

  React.useEffect(() => {
    if (initialDiagramId) {
      setSelectedDiagramId(initialDiagramId);
      const target = DIAGRAMS_DATA.find((d) => d.id === initialDiagramId);
      if (target && target.hotspots.length > 0) {
        setSelectedHotspotId(target.hotspots[0].id);
      }
    }
  }, [initialDiagramId]);

  const activeDiagram: InteractiveDiagram =
    DIAGRAMS_DATA.find((d) => d.id === selectedDiagramId) || DIAGRAMS_DATA[0];

  const activeHotspot: DiagramHotspot | undefined = activeDiagram.hotspots.find(
    (h) => h.id === selectedHotspotId
  );

  const highlightedHotspot: DiagramHotspot | undefined =
    activeDiagram.hotspots.find((h) => h.id === (hoveredHotspotId || selectedHotspotId)) ||
    activeHotspot;

  const handleHotspotClick = (hotspot: DiagramHotspot) => {
    setSelectedHotspotId(hotspot.id);
    if (quizMode && !revealedIds.includes(hotspot.id)) {
      setRevealedIds((prev) => [...prev, hotspot.id]);
    }
  };

  const handleToggleQuizMode = () => {
    setQuizMode(!quizMode);
    setRevealedIds([]);
  };

  const handleOpenOrganelleExplorer = (organelleId: string) => {
    setActiveOrganelleModalId(organelleId);
    setIsOrganelleModalOpen(true);
  };

  // Filter categories for easy navigation across all diagrams
  const categories = [
    { id: 'all', label: 'সকল ডায়াগ্রাম (১৫টি)' },
    { id: 'ch1_ch3', label: 'অধ্যায় ১-৩ (শ্রেণিবিন্যাস, কোষ ও মাইটোসিস)' },
    { id: 'ch4_ch7', label: 'অধ্যায় ৪-৭ (শক্তি, পরিপাক, রক্ত ও শ্বসন)' },
    { id: 'ch8_ch10', label: 'অধ্যায় ৮-১০ (রেচন, চলন ও স্নায়ু)' },
    { id: 'ch11_ch14', label: 'অধ্যায় ১১-১৪ (প্রজনন, ডিএনএ, বাস্তুতন্ত্র ও বায়োটেক)' }
  ];

  const filteredDiagrams = DIAGRAMS_DATA.filter((diag) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'ch1_ch3') return diag.chapterNumber >= 1 && diag.chapterNumber <= 3;
    if (filterCategory === 'ch4_ch7') return diag.chapterNumber >= 4 && diag.chapterNumber <= 7;
    if (filterCategory === 'ch8_ch10') return diag.chapterNumber >= 8 && diag.chapterNumber <= 10;
    if (filterCategory === 'ch11_ch14') return diag.chapterNumber >= 11 && diag.chapterNumber <= 14;
    return true;
  });

  const isCellDiagram =
    activeDiagram.id === 'plant_cell_diagram' || activeDiagram.id === 'animal_cell_diagram';

  // Group hotspots into Left and Right sides for balanced external directory
  const leftHotspots = activeDiagram.hotspots.filter((h) => h.xPercent < 50);
  const rightHotspots = activeDiagram.hotspots.filter((h) => h.xPercent >= 50);

  return (
    <section id="diagrams" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-600 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>ইন্টারেক্টিভ সচিত্র জীববিজ্ঞান ডায়াগ্রাম ও লেবেল ল্যাব</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              অনাবৃত চিহ্নিত চিত্র ও সুনির্দিষ্ট নির্দেশক রেখা
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed">
              এসএসসি জীববিজ্ঞানের সম্পূর্ণ ১৪টি অধ্যায়ের চিত্রসমূহ সম্পূর্ণ অবিকৃত ও অনাবৃত রেখে বাইরে সুশৃঙ্খল
              দ্বিভাষিক নাম <span className="font-semibold text-slate-800">বাংলা নাম (English Name)</span>,
              নির্দেশক রেখা (Leader Lines) এবং প্রতিটি কোষীয় অঙ্গাণুর বিশদ ল্যাব পর্যবেক্ষণ করুন।
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {/* External Callout Lines Toggle */}
            <button
              onClick={() => setShowExternalCallouts(!showExternalCallouts)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border transition-all ${
                showExternalCallouts
                  ? 'bg-orange-50 border-orange-300 text-orange-800 shadow-2xs font-bold'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Tag className="w-3.5 h-3.5" />
              <span>{showExternalCallouts ? 'বাহ্যিক নির্দেশক রেখা সক্রিয়' : 'শুধু পিনপয়েন্ট'}</span>
            </button>

            {/* Quiz Mode Button */}
            <button
              onClick={handleToggleQuizMode}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl border transition-all ${
                quizMode
                  ? 'bg-orange-500 border-orange-600 text-white shadow-md'
                  : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100 shadow-2xs'
              }`}
            >
              {quizMode ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              <span>{quizMode ? 'অনুশীলন মোড সক্রিয়' : 'কুইজ অনুশীলন মোড'}</span>
            </button>

            {/* Open Organelle Explorer if on Cell Diagram */}
            {isCellDiagram && (
              <button
                onClick={() => handleOpenOrganelleExplorer('nucleus')}
                className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition-all"
              >
                <Box className="w-3.5 h-3.5 text-orange-400" />
                <span>পৃথক অঙ্গাণু ল্যাব</span>
              </button>
            )}
          </div>
        </div>

        {/* Diagram Category Tabs */}
        <div className="flex items-center gap-1.5 pb-2 overflow-x-auto mb-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                filterCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-2xs font-semibold'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Diagram Horizontal Pill Selector */}
        <div className="flex items-center gap-2 pb-4 overflow-x-auto mb-6">
          {filteredDiagrams.map((diag) => (
            <button
              key={diag.id}
              onClick={() => {
                setSelectedDiagramId(diag.id);
                setSelectedHotspotId(diag.hotspots[0]?.id || null);
                setRevealedIds([]);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs rounded-xl font-medium transition-all whitespace-nowrap border shrink-0 ${
                selectedDiagramId === diag.id
                  ? 'bg-orange-500 border-orange-600 text-white shadow-xs font-bold'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                  selectedDiagramId === diag.id
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                {diag.chapterNumber}
              </span>
              <span>{diag.titleBn}</span>
            </button>
          ))}
        </div>

        {/* Diagram & Explanation Deck Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Canvas: Interactive Image with Hotspots (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl overflow-hidden p-4 sm:p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 px-1">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
                    অধ্যায় {activeDiagram.chapterNumber} (এনসিটিবি পাঠ্যচিত্র)
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {activeDiagram.titleBn}
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  {activeDiagram.titleEn}
                </span>
              </div>

              {/* Main Image Container (Clean & Unobstructed) */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-900/5 select-none">
                <img
                  src={activeDiagram.imageSrc}
                  alt={activeDiagram.imageAlt}
                  className="w-full h-auto max-h-[500px] object-contain mx-auto block pointer-events-none"
                />

                {/* SVG Leader Lines Overlay (Crisp vector lines connecting external boundary to pinpoints) */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {/* High-contrast active leader line for the selected/hovered structure */}
                  {highlightedHotspot && showExternalCallouts && (
                    <g>
                      {/* Outer glow stroke for visibility over any background */}
                      <line
                        x1={highlightedHotspot.xPercent < 50 ? 4 : 96}
                        y1={highlightedHotspot.yPercent}
                        x2={highlightedHotspot.xPercent}
                        y2={highlightedHotspot.yPercent}
                        stroke="#ffffff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeOpacity="0.9"
                      />
                      {/* Inner vibrant pointer line */}
                      <line
                        x1={highlightedHotspot.xPercent < 50 ? 4 : 96}
                        y1={highlightedHotspot.yPercent}
                        x2={highlightedHotspot.xPercent}
                        y2={highlightedHotspot.yPercent}
                        stroke="#ea580c"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeDasharray="2 1"
                      />
                      {/* Target structure reticle dot */}
                      <circle
                        cx={highlightedHotspot.xPercent}
                        cy={highlightedHotspot.yPercent}
                        r="2.2"
                        fill="#ea580c"
                        stroke="#ffffff"
                        strokeWidth="0.8"
                      />
                    </g>
                  )}
                </svg>

                {/* Hotspot Pinpoints on Image (Sleek, compact, non-occluding) */}
                {activeDiagram.hotspots.map((spot, index) => {
                  const isSelected = selectedHotspotId === spot.id;
                  const isHovered = hoveredHotspotId === spot.id;
                  const isRevealed = revealedIds.includes(spot.id);

                  return (
                    <div
                      key={spot.id}
                      style={{ left: `${spot.xPercent}%`, top: `${spot.yPercent}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                      onMouseEnter={() => setHoveredHotspotId(spot.id)}
                      onMouseLeave={() => setHoveredHotspotId(null)}
                    >
                      <button
                        onClick={() => handleHotspotClick(spot)}
                        className="relative focus:outline-hidden transition-transform"
                        aria-label={spot.labelBn}
                      >
                        {/* Soft pulsing ring on active */}
                        {isSelected && (
                          <span className="absolute -inset-1.5 rounded-full animate-ping bg-orange-500 opacity-75" />
                        )}

                        {/* Pinpoint Circle Badge */}
                        <span
                          className={`relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full text-[10px] sm:text-xs font-bold shadow-md border-2 transition-all ${
                            isSelected
                              ? 'bg-orange-500 border-white text-white scale-120 ring-3 ring-orange-400 z-30'
                              : isHovered
                              ? 'bg-slate-900 border-white text-orange-400 scale-110 z-20'
                              : 'bg-slate-900 border-white/95 text-white hover:bg-orange-600'
                          }`}
                        >
                          {quizMode ? (
                            isRevealed ? (
                              <Check className="w-3 h-3 text-white" />
                            ) : (
                              '?'
                            )
                          ) : (
                            index + 1
                          )}
                        </span>
                      </button>

                      {/* Floating Tooltip (Positioned safely ABOVE the pin on hover) */}
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block whitespace-nowrap bg-slate-900/95 text-white text-[11px] font-medium py-1 px-2.5 rounded-lg pointer-events-none z-30 shadow-md border border-slate-700">
                        {quizMode && !isRevealed ? 'ক্লিক করে উত্তর দেখুন' : `${index + 1}. ${spot.labelBn}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* External Bilingual Structure Directory & Legend (Below Image - Clean & Unobstructed) */}
            <div className="mt-5 pt-4 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-1">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-orange-600" />
                  <span>চিহ্নিত অংশ ও অঙ্গাণুসমূহের সম্পূর্ণ বাহ্যিক দ্বিভাষিক নির্দেশিকা:</span>
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  মোট {activeDiagram.hotspots.length}টি অংশ (ক্লিক করে নির্বাচন করুন)
                </span>
              </div>

              {/* Responsive 2-Column External Structure Directory */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[320px] overflow-y-auto pr-1">
                {activeDiagram.hotspots.map((spot, idx) => {
                  const isSelected = selectedHotspotId === spot.id;
                  const isHovered = hoveredHotspotId === spot.id;

                  return (
                    <div
                      key={spot.id}
                      onClick={() => handleHotspotClick(spot)}
                      onMouseEnter={() => setHoveredHotspotId(spot.id)}
                      onMouseLeave={() => setHoveredHotspotId(null)}
                      className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-2.5 ${
                        isSelected
                          ? 'bg-orange-50 border-orange-400 shadow-2xs ring-1 ring-orange-300'
                          : isHovered
                          ? 'bg-slate-50 border-slate-300'
                          : 'bg-white border-slate-200/90 hover:border-slate-300'
                      }`}
                    >
                      {/* Pin Index Number */}
                      <span
                        className={`w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected
                            ? 'bg-orange-500 text-white'
                            : 'bg-slate-900 text-white'
                        }`}
                      >
                        {idx + 1}
                      </span>

                      {/* Label Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`text-xs font-bold truncate block ${
                              isSelected ? 'text-orange-950 font-extrabold' : 'text-slate-800'
                            }`}
                          >
                            {spot.labelBn}
                          </span>
                          {spot.organelleId && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenOrganelleExplorer(spot.organelleId!);
                              }}
                              title="পৃথক অঙ্গাণু ল্যাব খুলুন"
                              className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-orange-100 hover:bg-orange-200 text-orange-800 shrink-0 transition-colors"
                            >
                              ল্যাব
                            </button>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono block truncate">
                          {spot.labelEn}
                        </span>
                        {spot.locationBn && (
                          <p className="text-[10.5px] text-slate-500 line-clamp-1 mt-0.5">
                            {spot.locationBn}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel: Detail Explanation Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {activeHotspot ? (
              <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs animate-fadeIn">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-orange-50 text-orange-800 border border-orange-200">
                    অধ্যায় {activeDiagram.chapterNumber} সচিত্র পাঠ
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {activeHotspot.labelEn}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                  {activeHotspot.labelBn}
                </h3>

                {/* If hotspot has an organelleId, offer Dedicated Organelle Explorer CTA */}
                {activeHotspot.organelleId && (
                  <div className="mt-3 p-3 bg-orange-50/80 border border-orange-200 rounded-2xl flex items-center justify-between gap-2 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0">
                        <Box className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <span className="font-bold text-slate-900 block">
                          পৃথক অঙ্গাণু বিশদ অন্বেষণ
                        </span>
                        <span className="text-slate-500 text-[11px]">
                          অভ্যন্তরীণ সাব-স্ট্রাকচার ও কার্যপ্রণালী
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenOrganelleExplorer(activeHotspot.organelleId!)}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-1 shrink-0"
                    >
                      <span>অন্বেষণ করুন</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                    </button>
                  </div>
                )}

                <div className="mt-4 space-y-3">
                  {/* Location & Structure */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-orange-500" />
                      <span>গঠন ও অবস্থান (Structure & Location):</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                      {activeHotspot.locationBn ? (
                        <>
                          <strong>অবস্থান:</strong> {activeHotspot.locationBn}
                          <br />
                          <strong>গঠন:</strong> {activeHotspot.descriptionBn}
                        </>
                      ) : (
                        activeHotspot.descriptionBn
                      )}
                    </p>
                  </div>

                  {/* Function & Role */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                      <span>প্রধান শারীরবৃত্তীয় কাজ (Main Function):</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed bg-orange-50/40 p-3.5 rounded-2xl border border-orange-100/80">
                      {activeHotspot.functionBn}
                    </p>
                  </div>

                  {/* NCTB Exam Tip */}
                  <div className="bg-slate-900 text-white rounded-2xl p-4 flex items-start gap-3 shadow-2xs">
                    <Info className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <div className="text-xs leading-relaxed">
                      <strong className="text-orange-300">বোর্ড পরীক্ষার স্পেশাল টিপস:</strong>{' '}
                      {activeHotspot.examTipsBn ||
                        'এসএসসি পরীক্ষায় এই অংশের চিত্রাঙ্কন, সঠিক চিহ্নিতকরণ এবং দুটি প্রধান কাজের উল্লেখ প্রায়ই অনুধাবন ও প্রয়োগমূলক প্রশ্নে জানতে চাওয়া হয়।'}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center text-slate-500">
                ডায়াগ্রামের যেকোনো পয়েন্টে ক্লিক করে তার বিবরণ দেখুন
              </div>
            )}

            {/* Organelle Explorer Quick Banner */}
            {isCellDiagram && (
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-5 shadow-sm border border-slate-700">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-orange-500 text-white rounded-xl shrink-0">
                    <Box className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      কোষীয় অঙ্গাণুসমূহের একক বিশ্লেষণ ল্যাব
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      নিউক্লিয়াস, মাইটোকন্ড্রিয়া, ক্লোরোপ্লাস্ট, এন্ডোপ্লাজমিক জালিকা ও গলজি বডির অভ্যন্তরীণ কাট-অ্যাওয়ে ও ক্রিস্টি-গ্রানা বিশ্লেষণ করুন।
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        onClick={() => handleOpenOrganelleExplorer('chloroplast')}
                        className="px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                      >
                        ক্লোরোপ্লাস্ট রূপ
                      </button>
                      <button
                        onClick={() => handleOpenOrganelleExplorer('mitochondria')}
                        className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-medium rounded-xl border border-white/10 transition-colors"
                      >
                        মাইটোকন্ড্রিয়া রূপ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dedicated Organelle Explorer Modal */}
      <OrganelleExplorerModal
        isOpen={isOrganelleModalOpen}
        initialOrganelleId={activeOrganelleModalId}
        onClose={() => setIsOrganelleModalOpen(false)}
        onOpen3DView={onJumpTo3DModel}
      />
    </section>
  );
};
