import React, { useState } from 'react';
import { SSC_QUESTIONS_DATA } from '../data/questionsData';
import { SSCExamQuestion, QuestionImportance } from '../types/biology';
import {
  Award,
  HelpCircle,
  Sparkles,
  ChevronRight,
  BookOpen,
  Filter,
  CheckCircle2,
  Box,
  Layers,
  ArrowRight
} from 'lucide-react';

interface SSCExamPrepSectionProps {
  onOpenQuestion: (question: SSCExamQuestion) => void;
  onJumpTo3DModel?: (modelId: string) => void;
  onJumpToDiagram?: (diagramId: string) => void;
}

export const SSCExamPrepSection: React.FC<SSCExamPrepSectionProps> = ({
  onOpenQuestion,
  onJumpTo3DModel,
  onJumpToDiagram
}) => {
  const [selectedImportance, setSelectedImportance] = useState<'all' | QuestionImportance>('all');
  const [selectedChapterFilter, setSelectedChapterFilter] = useState<number | 'all'>('all');

  const filteredQuestions = SSC_QUESTIONS_DATA.filter((q) => {
    const matchesImportance =
      selectedImportance === 'all' || q.importance === selectedImportance;
    const matchesChapter =
      selectedChapterFilter === 'all' || q.chapterNumber === selectedChapterFilter;
    return matchesImportance && matchesChapter;
  });

  return (
    <section id="exam-prep" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-orange-500" />
              <span>এসএসসি পরীক্ষা প্রস্তুতি ও প্রশ্নোত্তর ল্যাব</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              বোর্ড পরীক্ষার গুরুত্বপূর্ণ প্রশ্ন ও আদর্শ উত্তর
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              এনসিটিবি (NCTB) সিলেবাস এবং বিভিন্ন শিক্ষা বোর্ডের বিগত বছরের পরীক্ষার ধারা বিশ্লেষণ করে
              প্রস্তুতকৃত সৃজনশীল, অনুধাবনমূলক ও তুলনামূলক প্রশ্নোত্তর।
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">গুরুত্ব অনুসারে ফিল্টার:</span>
            <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200">
              <button
                onClick={() => setSelectedImportance('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedImportance === 'all'
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                সকল
              </button>
              <button
                onClick={() => setSelectedImportance('high')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedImportance === 'high'
                    ? 'bg-rose-500 text-white shadow-2xs'
                    : 'text-rose-700 hover:bg-rose-50'
                }`}
              >
                ★ অতি গুরুত্বপূর্ণ
              </button>
              <button
                onClick={() => setSelectedImportance('medium')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedImportance === 'medium'
                    ? 'bg-amber-500 text-white shadow-2xs'
                    : 'text-amber-700 hover:bg-amber-50'
                }`}
              >
                গুরুত্বপূর্ণ
              </button>
            </div>
          </div>
        </div>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredQuestions.map((q) => (
            <div
              key={q.id}
              onClick={() => onOpenQuestion(q)}
              className="group bg-slate-50/70 hover:bg-white rounded-3xl p-5 border-2 border-slate-200/80 hover:border-orange-400 transition-all shadow-2xs hover:shadow-md cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Meta Top Line */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
                    {q.chapterNumber}ম অধ্যায়: {q.chapterTitleBn}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      q.importance === 'high'
                        ? 'bg-rose-100 text-rose-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    ★ {q.importanceLabelBn}
                  </span>
                </div>

                {/* Question Title */}
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug mb-2">
                  {q.questionTextBn}
                </h3>

                {/* Subtopic */}
                <div className="text-[11px] text-slate-500 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-orange-500 shrink-0" />
                  <span>{q.topicTitleBn}</span>
                </div>

                {/* Question Type & Reason */}
                <div className="text-xs text-slate-600 line-clamp-2 leading-relaxed bg-white/80 p-3 rounded-xl border border-slate-200/60 mb-4">
                  <span className="font-semibold text-slate-800">বোর্ড প্রাসঙ্গিকতা:</span>{' '}
                  {q.importanceReasonBn}
                </div>
              </div>

              <div>
                {/* Visual Links if any */}
                {(q.relatedModelId || q.relatedDiagramId) && (
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-200/60 mb-3 text-[10px] font-semibold text-slate-500">
                    {q.relatedModelId && (
                      <span className="inline-flex items-center gap-1 text-blue-600">
                        <Box className="w-3 h-3" />
                        <span>৩ডি মডেল সংযুক্ত</span>
                      </span>
                    )}
                    {q.relatedDiagramId && (
                      <span className="inline-flex items-center gap-1 text-emerald-600">
                        <Layers className="w-3 h-3" />
                        <span>ডায়াগ্রাম সংযুক্ত</span>
                      </span>
                    )}
                  </div>
                )}

                {/* Read Full Answer Button */}
                <div className="flex items-center justify-between text-xs font-bold text-orange-600 pt-1">
                  <span>আদর্শ উত্তর ও বিশ্লেষণ দেখুন</span>
                  <div className="w-6 h-6 rounded-lg bg-orange-50 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
