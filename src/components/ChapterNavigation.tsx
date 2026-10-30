import React, { useState } from 'react';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { Chapter } from '../types/biology';
import {
  Search,
  BookOpen,
  Box,
  Layers,
  Sparkles,
  ChevronRight,
  Filter
} from 'lucide-react';

interface ChapterNavigationProps {
  selectedChapterId: number;
  onSelectChapter: (id: number) => void;
  className?: string;
}

export const ChapterNavigation: React.FC<ChapterNavigationProps> = ({
  selectedChapterId,
  onSelectChapter,
  className = ''
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'সকল অধ্যায় (১৪টি)' },
    { id: 'cell_genetics', label: 'কোষ ও বংশগতি' },
    { id: 'physiology_nutrition', label: 'শারীরবৃত্ত ও পুষ্টি' },
    { id: 'human_biology', label: 'প্রাণী ও মানবদেহ' },
    { id: 'botany_ecology', label: 'উদ্ভিদ ও পরিবেশ' }
  ];

  const filteredChapters = CHAPTERS_DATA.filter((ch) => {
    const matchesCategory =
      selectedCategory === 'all' || ch.category === selectedCategory;
    const matchesSearch =
      ch.titleBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.overviewBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.numberBn.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs ${className}`}>
      {/* Header & Search */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-orange-500" />
            <span>এসএসসি জীববিজ্ঞান অধ্যায়সূচি (NCTB)</span>
          </h3>
          <span className="text-xs font-mono font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
            ১৪টি অধ্যায়
          </span>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="অধ্যায় বা বিষয় খুঁজুন (যেমন: হৃৎপিণ্ড, ডিএনএ, কোষ)..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-800 placeholder-slate-400"
          />
        </div>
      </div>

      {/* Category filter tabs */}
      <div className="flex items-center gap-1.5 pb-3 overflow-x-auto border-b border-slate-100 mb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === cat.id
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Chapters Scrollable List */}
      <div className="space-y-2 max-h-[520px] overflow-y-auto pr-1">
        {filteredChapters.length === 0 ? (
          <div className="py-8 text-center text-xs text-slate-500">
            কোনো অধ্যায় পাওয়া যায়নি। অন্য শব্দ লিখে চেষ্টা করুন।
          </div>
        ) : (
          filteredChapters.map((ch) => {
            const isSelected = ch.id === selectedChapterId;
            return (
              <button
                key={ch.id}
                onClick={() => onSelectChapter(ch.id)}
                className={`w-full text-left p-3.5 rounded-2xl transition-all border flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-orange-50/90 border-orange-300 shadow-2xs'
                    : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <span
                    className={`w-7 h-7 rounded-xl text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-orange-500 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {ch.numberBn}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {ch.titleBn}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      {ch.titleEn}
                    </div>
                  </div>
                </div>

                {/* Resource Badges */}
                <div className="flex items-center gap-1 shrink-0">
                  {ch.relatedModelId && (
                    <span
                      title="৩ডি মডেল বিদ্যমান"
                      className="p-1 rounded-md bg-blue-50 text-blue-600 text-[10px]"
                    >
                      <Box className="w-3.5 h-3.5" />
                    </span>
                  )}
                  {ch.relatedDiagramId && (
                    <span
                      title="সচিত্র ডায়াগ্রাম বিদ্যমান"
                      className="p-1 rounded-md bg-orange-50 text-orange-600 text-[10px]"
                    >
                      <Layers className="w-3.5 h-3.5" />
                    </span>
                  )}
                  {ch.relatedAnimationId && (
                    <span
                      title="প্রক্রিয়া এনিমেশন বিদ্যমান"
                      className="p-1 rounded-md bg-amber-50 text-amber-600 text-[10px]"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>
                  )}
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-orange-600 translate-x-0.5' : 'text-slate-300'
                    }`}
                  />
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};
