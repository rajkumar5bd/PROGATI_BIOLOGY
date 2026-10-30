import React, { useState } from 'react';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { Chapter } from '../types/biology';
import {
  BookOpen,
  Box,
  Layers,
  Sparkles,
  ArrowRight,
  Award,
  CheckCircle2
} from 'lucide-react';

interface ChapterCardsGridProps {
  selectedChapterId: number;
  onSelectChapter: (id: number) => void;
}

export const ChapterCardsGrid: React.FC<ChapterCardsGridProps> = ({
  selectedChapterId,
  onSelectChapter
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'সকল অধ্যায় (১৪টি)' },
    { id: 'cell_genetics', label: 'কোষ ও বংশগতি' },
    { id: 'physiology_nutrition', label: 'শারীরবৃত্ত ও পুষ্টি' },
    { id: 'human_biology', label: 'মানবদেহ ও স্বাস্থ্য' },
    { id: 'botany_ecology', label: 'উদ্ভিদ ও পরিবেশ' }
  ];

  const filtered = CHAPTERS_DATA.filter(
    (ch) => selectedFilter === 'all' || ch.category === selectedFilter
  );

  return (
    <div className="space-y-6">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedFilter(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              selectedFilter === cat.id
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 14-Chapter Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {filtered.map((ch) => {
          const isSelected = ch.id === selectedChapterId;
          return (
            <div
              key={ch.id}
              onClick={() => onSelectChapter(ch.id)}
              className={`group bg-white rounded-3xl p-5 border-2 transition-all flex flex-col justify-between cursor-pointer hover:shadow-lg transform hover:-translate-y-1 ${
                isSelected
                  ? 'border-orange-500 ring-4 ring-orange-500/10 shadow-md'
                  : 'border-slate-200/80 hover:border-orange-300 shadow-2xs'
              }`}
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="w-8 h-8 rounded-xl bg-orange-500 text-white font-black text-xs flex items-center justify-center shadow-xs">
                    {ch.numberBn}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-lg">
                    {ch.categoryBn}
                  </span>
                </div>

                {/* Chapter Title */}
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors leading-tight mb-1">
                  {ch.titleBn}
                </h3>
                <span className="text-[11px] text-slate-400 font-mono block mb-2">
                  {ch.titleEn}
                </span>

                {/* Short Overview */}
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                  {ch.overviewBn}
                </p>
              </div>

              <div>
                {/* Visual Features Pill Strip */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100 mb-3 text-[10px] font-semibold text-slate-500">
                  {ch.relatedModelId && (
                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-100">
                      <Box className="w-3 h-3 text-blue-500" />
                      <span>৩ডি মডেল</span>
                    </span>
                  )}
                  {ch.relatedDiagramId && (
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md border border-emerald-100">
                      <Layers className="w-3 h-3 text-emerald-500" />
                      <span>ডায়াগ্রাম</span>
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 bg-slate-50 text-slate-600 px-2 py-0.5 rounded-md">
                    <BookOpen className="w-3 h-3 text-slate-400" />
                    <span>{ch.subTopics.length}টি পাঠ</span>
                  </span>
                </div>

                {/* Bottom CTA Action */}
                <div className="flex items-center justify-between text-xs font-bold pt-1">
                  <span className={isSelected ? 'text-orange-600' : 'text-slate-700 group-hover:text-orange-600'}>
                    {isSelected ? 'এখন পড়ছেন ✓' : 'অধ্যায়টি পড়ুন'}
                  </span>
                  <div className="w-6 h-6 rounded-lg bg-slate-100 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
