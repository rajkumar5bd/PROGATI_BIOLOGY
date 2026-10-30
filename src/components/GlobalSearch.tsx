import React, { useState, useEffect, useRef } from 'react';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { DIAGRAMS_DATA } from '../data/diagramsData';
import { MODELS_DATA } from '../data/modelsData';
import { ORGANELLES_DATA } from '../data/organellesData';
import { SSC_QUESTIONS_DATA } from '../data/questionsData';
import {
  Search,
  X,
  BookOpen,
  Box,
  Layers,
  HelpCircle,
  Sparkles,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export interface SearchResultItem {
  id: string;
  type: 'chapter' | 'organelle' | 'model' | 'diagram' | 'question';
  titleBn: string;
  titleEn?: string;
  categoryLabelBn: string;
  subtitleBn: string;
  targetId: string | number;
}

interface GlobalSearchProps {
  onSelectChapter: (chapterId: number) => void;
  onSelectOrganelle: (organelleId: string) => void;
  onSelect3DModel: (modelId: string) => void;
  onSelectDiagram: (diagramId: string) => void;
  onSelectQuestion: (questionId: string) => void;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({
  onSelectChapter,
  onSelectOrganelle,
  onSelect3DModel,
  onSelectDiagram,
  onSelectQuestion
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const trimmed = query.trim().toLowerCase();

  // Compute results dynamically from real project datasets
  const results: SearchResultItem[] = [];

  if (trimmed.length > 0) {
    // 1. Chapters
    CHAPTERS_DATA.forEach((ch) => {
      if (
        ch.titleBn.toLowerCase().includes(trimmed) ||
        ch.titleEn.toLowerCase().includes(trimmed) ||
        ch.numberBn.includes(trimmed) ||
        ch.overviewBn.toLowerCase().includes(trimmed) ||
        ch.categoryBn.toLowerCase().includes(trimmed)
      ) {
        results.push({
          id: `chapter-${ch.id}`,
          type: 'chapter',
          titleBn: `${ch.numberBn} অধ্যায়: ${ch.titleBn}`,
          titleEn: ch.titleEn,
          categoryLabelBn: 'অধ্যায় (NCTB)',
          subtitleBn: ch.overviewBn.slice(0, 75) + '...',
          targetId: ch.id
        });
      }
    });

    // 2. Organelles (from organellesData)
    ORGANELLES_DATA.forEach((org) => {
      if (
        org.nameBn.toLowerCase().includes(trimmed) ||
        org.nameEn.toLowerCase().includes(trimmed) ||
        org.substructures.some(
          (s) => s.nameBn.toLowerCase().includes(trimmed) || s.nameEn.toLowerCase().includes(trimmed)
        )
      ) {
        results.push({
          id: `organelle-${org.id}`,
          type: 'organelle',
          titleBn: `${org.nameBn} (${org.nameEn})`,
          titleEn: org.nameEn,
          categoryLabelBn: 'কোষীয় অঙ্গাণু ল্যাব',
          subtitleBn: `প্রধান কাজ: ${org.mainFunctionBn.slice(0, 65)}...`,
          targetId: org.id
        });
      }
    });

    // 3. 3D Models
    MODELS_DATA.forEach((m) => {
      if (
        m.titleBn.toLowerCase().includes(trimmed) ||
        m.titleEn.toLowerCase().includes(trimmed) ||
        m.descriptionBn.toLowerCase().includes(trimmed)
      ) {
        results.push({
          id: `model-${m.id}`,
          type: 'model',
          titleBn: m.titleBn,
          titleEn: m.titleEn,
          categoryLabelBn: 'ত্রিমাত্রিক ৩ডি মডেল',
          subtitleBn: m.descriptionBn.slice(0, 70) + '...',
          targetId: m.id
        });
      }
    });

    // 4. Interactive Diagrams
    DIAGRAMS_DATA.forEach((d) => {
      if (
        d.titleBn.toLowerCase().includes(trimmed) ||
        d.titleEn.toLowerCase().includes(trimmed) ||
        d.hotspots.some(
          (h) => h.labelBn.toLowerCase().includes(trimmed) || h.labelEn.toLowerCase().includes(trimmed)
        )
      ) {
        results.push({
          id: `diagram-${d.id}`,
          type: 'diagram',
          titleBn: d.titleBn,
          titleEn: d.titleEn,
          categoryLabelBn: 'সচিত্র ডায়াগ্রাম',
          subtitleBn: `${d.hotspots.length}টি চিহ্নিত অংশযুক্ত ইন্টারেক্টিভ চিত্র`,
          targetId: d.id
        });
      }
    });

    // 5. SSC Questions
    SSC_QUESTIONS_DATA.forEach((q) => {
      if (
        q.questionTextBn.toLowerCase().includes(trimmed) ||
        q.topicTitleBn.toLowerCase().includes(trimmed) ||
        q.chapterTitleBn.toLowerCase().includes(trimmed) ||
        q.keyTermsToIncludeBn.some((k) => k.toLowerCase().includes(trimmed))
      ) {
        results.push({
          id: `question-${q.id}`,
          type: 'question',
          titleBn: q.questionTextBn,
          categoryLabelBn: `প্রশ্ন [★ ${q.importanceLabelBn}]`,
          subtitleBn: `${q.chapterTitleBn} · ${q.topicTitleBn}`,
          targetId: q.id
        });
      }
    });
  }

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = results[selectedIndex];
      if (item) handleSelect(item);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSelect = (item: SearchResultItem) => {
    setIsOpen(false);
    if (item.type === 'chapter') {
      onSelectChapter(Number(item.targetId));
    } else if (item.type === 'organelle') {
      onSelectOrganelle(String(item.targetId));
    } else if (item.type === 'model') {
      onSelect3DModel(String(item.targetId));
    } else if (item.type === 'diagram') {
      onSelectDiagram(String(item.targetId));
    } else if (item.type === 'question') {
      onSelectQuestion(String(item.targetId));
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      {/* Search Input Box */}
      <div className="relative flex items-center">
        <div className="absolute left-3.5 sm:left-4 pointer-events-none text-slate-400">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setSelectedIndex(0);
          }}
          onFocus={() => {
            if (query.trim().length > 0) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder="সার্বজনীন অনুসন্ধান (যেমন: কোষ, মাইটোকন্ড্রিয়া, Mitochondria, ডিএনএ, হৃৎপিণ্ড, Heart)..."
          className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-3.5 text-xs sm:text-sm bg-white border-2 border-slate-200 hover:border-orange-300 focus:border-orange-500 rounded-2xl shadow-sm focus:outline-hidden focus:ring-4 focus:ring-orange-500/10 transition-all text-slate-900 placeholder:text-slate-400 font-medium"
          aria-label="সার্চ করুন"
          autoComplete="off"
        />

        {query.length > 0 && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3.5 p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            title="মুছে ফেলুন"
            aria-label="মুছে ফেলুন"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && trimmed.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl max-h-[420px] overflow-y-auto z-50 divide-y divide-slate-100 animate-fadeIn">
          {results.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500">
              <p className="font-semibold text-slate-700 mb-1">
                "{query}" এর জন্য কোনো ফলাফল পাওয়া যায়নি
              </p>
              <p className="text-[11px] text-slate-400">
                পরামর্শ: মাইটোকন্ড্রিয়া, ক্লোরোপ্লাস্ট, ডিএনএ, কোষ বিভাজন, হৃৎপিণ্ড, নেফ্রন লিখে খুঁজুন।
              </p>
            </div>
          ) : (
            <>
              <div className="px-4 py-2 bg-slate-50 text-[11px] font-bold text-slate-500 flex items-center justify-between">
                <span>অনুসন্ধান ফলাফল ({results.length}টি পাওয়া গেছে)</span>
                <span className="text-[10px] text-slate-400">কীবোর্ডের ↑ ↓ চেপে নির্বাচন করুন</span>
              </div>

              {results.slice(0, 15).map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors ${
                      isSelected ? 'bg-orange-50/80 text-orange-950' : 'hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    <div className="mt-0.5 p-1.5 rounded-lg shrink-0 bg-slate-100 text-slate-600">
                      {item.type === 'chapter' && <BookOpen className="w-4 h-4 text-orange-600" />}
                      {item.type === 'organelle' && <Layers className="w-4 h-4 text-emerald-600" />}
                      {item.type === 'model' && <Box className="w-4 h-4 text-blue-600" />}
                      {item.type === 'diagram' && <BookOpen className="w-4 h-4 text-indigo-600" />}
                      {item.type === 'question' && <HelpCircle className="w-4 h-4 text-rose-600" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                            item.type === 'chapter'
                              ? 'bg-orange-100 text-orange-800'
                              : item.type === 'organelle'
                              ? 'bg-emerald-100 text-emerald-800'
                              : item.type === 'model'
                              ? 'bg-blue-100 text-blue-800'
                              : item.type === 'question'
                              ? 'bg-rose-100 text-rose-800'
                              : 'bg-indigo-100 text-indigo-800'
                          }`}
                        >
                          {item.categoryLabelBn}
                        </span>
                        {item.titleEn && (
                          <span className="text-[10px] text-slate-400 font-mono truncate">
                            {item.titleEn}
                          </span>
                        )}
                      </div>

                      <div className="text-xs font-bold text-slate-900 truncate">
                        {item.titleBn}
                      </div>

                      <div className="text-[11px] text-slate-500 truncate mt-0.5">
                        {item.subtitleBn}
                      </div>
                    </div>

                    <ChevronRight className="w-4 h-4 text-slate-300 self-center shrink-0" />
                  </button>
                );
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
};
