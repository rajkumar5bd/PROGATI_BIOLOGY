import React, { useState } from 'react';
import { Chapter, SSCExamQuestion } from '../types/biology';
import { DIAGRAMS_DATA } from '../data/diagramsData';
import { SSC_QUESTIONS_DATA } from '../data/questionsData';
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Box,
  Layers,
  ArrowRight,
  Info,
  Award,
  Image as ImageIcon,
  Activity,
  Play,
  HelpCircle
} from 'lucide-react';

interface ChapterDetailViewProps {
  chapter: Chapter;
  totalChapters: number;
  onSelectChapter: (chapterId: number) => void;
  onJumpTo3DModel?: (modelId: string) => void;
  onJumpToDiagram?: (diagramId: string) => void;
  onJumpToAnimation?: (animationId: string) => void;
  onOpenQuestion?: (question: SSCExamQuestion) => void;
  onOpenOrganelle?: (organelleId: string) => void;
}

export const ChapterDetailView: React.FC<ChapterDetailViewProps> = ({
  chapter,
  totalChapters,
  onSelectChapter,
  onJumpTo3DModel,
  onJumpToDiagram,
  onJumpToAnimation,
  onOpenQuestion,
  onOpenOrganelle
}) => {
  const [activeSubtopicId, setActiveSubtopicId] = useState<string>(
    chapter.subTopics[0]?.id || ''
  );

  const activeSubtopic =
    chapter.subTopics.find((st) => st.id === activeSubtopicId) ||
    chapter.subTopics[0];

  const relatedDiagram = DIAGRAMS_DATA.find(
    (d) => d.id === chapter.relatedDiagramId
  );

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
      {/* Chapter Top Bar & Category */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5 mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-800 border border-orange-200 font-bold">
            {chapter.numberBn} অধ্যায়
          </span>
          <span className="text-slate-400">·</span>
          <span className="text-slate-600">{chapter.categoryBn}</span>
          <span className="text-slate-400">·</span>
          <span className="text-slate-500 font-mono">{chapter.titleEn}</span>
        </div>

        {/* Quick Prev / Next Pagination */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectChapter(Math.max(1, chapter.id - 1))}
            disabled={chapter.id === 1}
            className={`p-2 rounded-xl border text-xs flex items-center gap-1 transition-colors ${
              chapter.id === 1
                ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400'
                : 'border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
            title="পূর্ববর্তী অধ্যায়"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">পূর্ববর্তী অধ্যায়</span>
          </button>
          <button
            onClick={() => onSelectChapter(Math.min(totalChapters, chapter.id + 1))}
            disabled={chapter.id === totalChapters}
            className={`p-2 rounded-xl border text-xs flex items-center gap-1 transition-colors ${
              chapter.id === totalChapters
                ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400'
                : 'border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
            title="পরবর্তী অধ্যায়"
          >
            <span className="hidden sm:inline">পরবর্তী অধ্যায়</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Chapter Title & Introduction */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          {chapter.numberBn} অধ্যায়: {chapter.titleBn}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl">
          {chapter.overviewBn}
        </p>

        {/* Importance in SSC Exam */}
        <div className="mt-4 p-4 bg-slate-900 text-white rounded-2xl flex items-start gap-3 shadow-xs">
          <Award className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            <strong className="text-orange-400">বোর্ড পরীক্ষায় এ অধ্যায়ের গুরুত্ব:</strong> {chapter.importanceBn}
          </div>
        </div>
      </div>

      {/* Visual Hub & Textbook Figures Section */}
      <div className="mb-8 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>পাঠ্যবইয়ের গুরুত্বপূর্ণ সচিত্র চিত্র ও জীবনচক্র (NCTB Figures):</span>
          </div>
          <span className="text-[11px] text-slate-500 font-mono">
            {chapter.textbookFiguresBn.length} টি প্রধান চিত্র
          </span>
        </div>

        {/* Textbook Figures List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          {chapter.textbookFiguresBn.map((fig, idx) => (
            <div
              key={idx}
              className="p-2.5 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-700 flex items-center gap-2 shadow-2xs"
            >
              <ImageIcon className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium truncate">{fig}</span>
            </div>
          ))}
        </div>

        {/* Available Interactive Visual Aids for this Chapter */}
        {chapter.visuals.length > 0 && (
          <div className="pt-3 border-t border-slate-200">
            <div className="text-xs font-bold text-slate-700 mb-2.5">
              উপলব্ধ ইন্টারঅ্যাক্টিভ ভিজ্যুয়াল ল্যাব ও সিমুলেশন:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {chapter.visuals.map((vis, i) => (
                <div
                  key={i}
                  className="bg-white p-3.5 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-2xs hover:border-orange-300 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-orange-50 text-orange-700 border border-orange-100">
                        {vis.badgeBn}
                      </span>
                      {vis.type === 'model' && <Box className="w-3.5 h-3.5 text-blue-600" />}
                      {vis.type === 'diagram' && <Layers className="w-3.5 h-3.5 text-orange-600" />}
                      {vis.type === 'animation' && <Activity className="w-3.5 h-3.5 text-amber-500" />}
                    </div>
                    <h5 className="text-xs font-bold text-slate-900 mb-1">
                      {vis.titleBn}
                    </h5>
                    <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                      {vis.descriptionBn}
                    </p>
                  </div>

                  {vis.type === 'model' && onJumpTo3DModel && (
                    <button
                      onClick={() => onJumpTo3DModel(vis.id)}
                      className="w-full py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Box className="w-3.5 h-3.5 text-orange-400" />
                      <span>৩ডি মডেল ও এআর খুলুন</span>
                    </button>
                  )}

                  {vis.type === 'diagram' && onJumpToDiagram && (
                    <button
                      onClick={() => onJumpToDiagram(vis.id)}
                      className="w-full py-2 px-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>ডায়াগ্রামের চিহ্নিত অংশ অনুশীলন</span>
                    </button>
                  )}

                  {vis.type === 'animation' && onJumpToAnimation && (
                    <button
                      onClick={() => onJumpToAnimation(vis.id)}
                      className="w-full py-2 px-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>সচল এনিমেশন দেখুন</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Embedded Chapter Illustrated Diagram Plate */}
        {relatedDiagram && relatedDiagram.imageSrc && (
          <div className="mt-5 pt-4 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                  অধ্যায়ের প্রধান সচিত্র ডায়াগ্রাম
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                  {relatedDiagram.titleBn}
                </h4>
              </div>
              {onJumpToDiagram && (
                <button
                  onClick={() => onJumpToDiagram(relatedDiagram.id)}
                  className="px-3.5 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs shrink-0 self-start sm:self-auto"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>ইন্টারেক্টিভ হটস্পট ল্যাবে খুলুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div
              onClick={() => onJumpToDiagram && onJumpToDiagram(relatedDiagram.id)}
              className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 shadow-2xs cursor-pointer group"
              title="ক্লিক করে প্রতিটি অংশের বিবরণ ও কুইজ দেখুন"
            >
              <img
                src={relatedDiagram.imageSrc}
                alt={relatedDiagram.imageAlt}
                className="w-full h-auto max-h-[380px] object-contain rounded-xl mx-auto block group-hover:scale-[1.01] transition-transform duration-300"
              />
              <div className="absolute inset-x-0 bottom-4 flex justify-center pointer-events-none">
                <span className="text-xs font-semibold bg-slate-900/90 text-white px-4 py-1.5 rounded-full shadow-lg backdrop-blur-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ক্লিক করে চিহ্নিত অংশের কাজ ও পরীক্ষা টিপস দেখুন</span>
                </span>
              </div>
            </div>

            {/* Hotspots summary pill strip */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {relatedDiagram.hotspots.map((h, hIdx) => (
                <span
                  key={h.id}
                  className="text-xs bg-white text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs font-medium flex items-center gap-1"
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center">
                    {hIdx + 1}
                  </span>
                  <span>{h.labelBn}</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* NCTB Core Facts & Summary Cards */}
      <div className="mb-10">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-600" />
          এনসিটিবি (NCTB) পাঠ্যবইয়ের গুরুত্বপূর্ণ মূল বিষয়সমূহ:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {chapter.nctbKeyPointsBn.map((point, index) => (
            <div
              key={index}
              className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl text-xs sm:text-sm text-slate-700 flex items-start gap-2.5"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtopics Tabs & Detailed Concept Walkthrough */}
      {chapter.subTopics.length > 0 && (
        <div className="border-t border-slate-200 pt-8">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
            অধ্যায়ের বিস্তারিত পাঠ্যসূচি ও পরিভাষা:
          </h3>

          {/* Subtopic selector pills */}
          <div className="flex items-center gap-2 pb-4 overflow-x-auto">
            {chapter.subTopics.map((st) => (
              <button
                key={st.id}
                onClick={() => setActiveSubtopicId(st.id)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                  activeSubtopic.id === st.id
                    ? 'bg-orange-500 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {st.titleBn}
              </button>
            ))}
          </div>

          {/* Active Subtopic Card */}
          <div className="mt-2 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center justify-between gap-2 mb-2">
              <h4 className="text-lg font-bold text-slate-900">
                {activeSubtopic.titleBn}
              </h4>
              <span className="text-xs text-slate-400 font-mono">
                {activeSubtopic.titleEn}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-4">
              {activeSubtopic.summaryBn}
            </p>

            {/* In-depth concept points */}
            <div className="space-y-2.5 mb-6">
              {activeSubtopic.detailsBn.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white rounded-xl border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Key Terms & Definitions */}
            {activeSubtopic.keyTermsBn.length > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-200">
                <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-3">
                  গুরুত্বপূর্ণ বৈজ্ঞানিক পরিভাষা (Definitions):
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSubtopic.keyTermsBn.map((term, i) => (
                    <div
                      key={i}
                      className="p-3 bg-white rounded-xl border border-slate-200 text-xs"
                    >
                      <div className="font-bold text-orange-800 mb-1">
                        {term.term}
                      </div>
                      <div className="text-slate-600 leading-relaxed">
                        {term.definition}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Exam Tips for this subtopic */}
            {activeSubtopic.examTipsBn && (
              <div className="mt-4 p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong>পরামর্শ:</strong> {activeSubtopic.examTipsBn}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Chapter-Specific Organelle Explorer Hub (For Chapter 2) */}
      {chapter.id === 2 && onOpenOrganelle && (
        <div className="mt-8 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600" />
              <h4 className="text-sm font-bold text-emerald-950">
                উদ্ভিদ ও প্রাণিকোষের পৃথক অঙ্গাণু এক্সপ্লোরার (Individual Organelle Explorer)
              </h4>
            </div>
            <span className="text-[11px] font-bold text-emerald-700 bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs">
              ৯টি অঙ্গাণু ল্যাব
            </span>
          </div>
          <p className="text-xs text-emerald-900 leading-relaxed mb-3">
            কোষের প্রধান প্রতিটি অঙ্গাণুর ত্রিমাত্রিক কাট-অ্যাওয়ে ও উপ-অঙ্গাণুর বিস্তারিত গঠন দেখতে যেকোনো অঙ্গাণুতে ক্লিক করুন:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'nucleus', name: 'নিউক্লিয়াস (Nucleus)' },
              { id: 'mitochondria', name: 'মাইটোকন্ড্রিয়া (Mitochondria)' },
              { id: 'chloroplast', name: 'ক্লোরোপ্লাস্ট (Chloroplast)' },
              { id: 'er', name: 'এন্ডোপ্লাজমিক জালিকা (ER)' },
              { id: 'golgi', name: 'গলগি বডি (Golgi)' },
              { id: 'ribosome', name: 'রাইবোজোম (Ribosome)' },
              { id: 'plasma_membrane', name: 'প্লাজমা ঝিল্লি (Membrane)' },
              { id: 'cell_wall', name: 'কোষপ্রাচীর (Cell Wall)' },
              { id: 'vacuole', name: 'কোষগহ্বর (Vacuole)' }
            ].map((org) => (
              <button
                key={org.id}
                onClick={() => onOpenOrganelle(org.id)}
                className="px-3 py-1.5 bg-white hover:bg-emerald-600 hover:text-white text-emerald-800 border border-emerald-200 rounded-xl text-xs font-semibold transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
              >
                <span>{org.name}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chapter-Specific Important Questions */}
      {(() => {
        const chapterQuestions = SSC_QUESTIONS_DATA.filter(
          (q) => q.chapterNumber === chapter.id
        );
        if (chapterQuestions.length === 0) return null;

        return (
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-500" />
                <h4 className="text-base font-bold text-slate-900">
                  {chapter.numberBn} অধ্যায়ের বোর্ড পরীক্ষার গুরুত্বপূর্ণ প্রশ্নোত্তর:
                </h4>
              </div>
              <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200">
                {chapterQuestions.length}টি প্রশ্ন
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {chapterQuestions.map((q) => (
                <div
                  key={q.id}
                  onClick={() => onOpenQuestion && onOpenQuestion(q)}
                  className="p-4 bg-slate-50 hover:bg-white border border-slate-200 hover:border-orange-400 rounded-2xl cursor-pointer transition-all shadow-2xs group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">
                        {q.questionTypeLabelBn}
                      </span>
                      <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                        ★ {q.importanceLabelBn}
                      </span>
                    </div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug mb-1">
                      {q.questionTextBn}
                    </h5>
                    <p className="text-[11px] text-slate-500">
                      টপিক: {q.topicTitleBn}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-bold text-orange-600 pt-3 border-t border-slate-100 mt-2">
                    <span>পূর্ণাঙ্গ উত্তর ও বিশ্লেষণ</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })()}
    </div>
  );
};
