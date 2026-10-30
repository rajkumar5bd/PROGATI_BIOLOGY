import React, { useState } from 'react';
import { SSCExamQuestion } from '../types/biology';
import {
  X,
  Award,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  ArrowRight,
  Box,
  Layers,
  Sparkles,
  Bookmark
} from 'lucide-react';

interface QuestionDetailModalProps {
  question: SSCExamQuestion;
  isOpen: boolean;
  onClose: () => void;
  onJumpTo3DModel?: (modelId: string) => void;
  onJumpToDiagram?: (diagramId: string) => void;
  onJumpToOrganelle?: (organelleId: string) => void;
}

export const QuestionDetailModal: React.FC<QuestionDetailModalProps> = ({
  question,
  isOpen,
  onClose,
  onJumpTo3DModel,
  onJumpToDiagram,
  onJumpToOrganelle
}) => {
  const [activeTab, setActiveTab] = useState<'sample' | 'explanation' | 'creative' | 'tips'>('sample');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative animate-scaleUp">
        {/* Top Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-start justify-between gap-4 border-b border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-500 text-white">
                {question.chapterNumber}ম অধ্যায়: {question.chapterTitleBn}
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                  question.importance === 'high'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                }`}
              >
                ★ {question.importanceLabelBn}
              </span>
              <span className="px-2 py-0.5 rounded-md text-[10px] bg-slate-800 text-slate-300 font-mono">
                {question.questionTypeLabelBn}
              </span>
            </div>

            <h3 className="text-base sm:text-xl font-bold leading-snug text-white">
              {question.questionTextBn}
            </h3>
            <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>{question.topicTitleBn}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
            aria-label="বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Board Evidence Ribbon */}
        <div className="px-5 py-2.5 bg-orange-50/80 border-b border-orange-100 flex items-start gap-2 text-xs text-orange-950 font-medium">
          <Award className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-orange-900 font-bold">গুরুত্বের যৌক্তিক কারণ:</strong>{' '}
            {question.importanceReasonBn}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-4 sm:px-6 pt-3 border-b border-slate-200 overflow-x-auto bg-slate-50/60">
          <button
            onClick={() => setActiveTab('sample')}
            className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition-all whitespace-nowrap border-b-2 flex items-center gap-1.5 ${
              activeTab === 'sample'
                ? 'border-orange-500 text-orange-600 bg-white shadow-2xs'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>আদর্শ উত্তর ও বিশ্লেষণ</span>
          </button>

          {question.creativeParts && question.creativeParts.length > 0 && (
            <button
              onClick={() => setActiveTab('creative')}
              className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition-all whitespace-nowrap border-b-2 flex items-center gap-1.5 ${
                activeTab === 'creative'
                  ? 'border-orange-500 text-orange-600 bg-white shadow-2xs'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>সৃজনশীল ক, খ, গ, ঘ রূপ</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('explanation')}
            className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition-all whitespace-nowrap border-b-2 flex items-center gap-1.5 ${
              activeTab === 'explanation'
                ? 'border-orange-500 text-orange-600 bg-white shadow-2xs'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>সহজ বাংলায় ধারণা</span>
          </button>

          <button
            onClick={() => setActiveTab('tips')}
            className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition-all whitespace-nowrap border-b-2 flex items-center gap-1.5 ${
              activeTab === 'tips'
                ? 'border-orange-500 text-orange-600 bg-white shadow-2xs'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>নম্বর বণ্টন ও সাধারণ ভুল</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {/* TAB 1: Complete Scientifically Correct Answer */}
          {activeTab === 'sample' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>পূর্ণাঙ্গ বৈজ্ঞানিক উত্তর (Complete Answer):</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line font-normal">
                  {question.completeAnswerBn}
                </div>
              </div>

              {question.examSampleAnswerBn && (
                <div className="p-4 bg-orange-50/50 border border-orange-200 rounded-2xl">
                  <div className="text-xs font-bold text-orange-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-orange-600" />
                    <span>পরীক্ষার খাতায় উপস্থাপনের দ্রুত ফ্রেমওয়ার্ক:</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {question.examSampleAnswerBn}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Creative Parts (ক, খ, গ, ঘ) */}
          {activeTab === 'creative' && question.creativeParts && (
            <div className="space-y-4 animate-fadeIn">
              {question.creativeParts.map((cp) => (
                <div
                  key={cp.part}
                  className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-2 hover:border-orange-200 transition-colors"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-orange-500 text-white font-bold text-xs flex items-center justify-center">
                        {cp.part}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {cp.questionTextBn}
                      </h4>
                    </div>
                    <span className="text-[11px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                      নম্বর: {cp.marks}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                    <strong className="text-slate-900">উত্তর:</strong> {cp.answerBn}
                  </div>

                  <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-1.5 mt-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>
                      <strong>নম্বর মূল্যায়ন নির্দেশিকা:</strong> {cp.markingGuideBn}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Easy Bengali Explanation */}
          {activeTab === 'explanation' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-5 bg-gradient-to-br from-amber-50/60 to-orange-50/60 border border-amber-200 rounded-2xl">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide mb-3">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span>সহজ ভাষায় বাস্তবধর্মী ব্যাখ্যা (Student-Friendly Concept):</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  {question.easyExplanationBn}
                </p>
              </div>

              {/* Key terms checklist */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                  খাতায় অবশ্যই যেসব মূল পরিভাষা (Key Terms) উল্লেখ করতে হবে:
                </div>
                <div className="flex flex-wrap gap-2">
                  {question.keyTermsToIncludeBn.map((term, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Marks Breakdown & Mistakes to Avoid */}
          {activeTab === 'tips' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>নম্বর বণ্টন ও লেখার নিয়মাবলী (Marking Strategy):</span>
                </div>
                <p className="text-xs sm:text-sm text-blue-950 leading-relaxed">
                  {question.marksGuideBn}
                </p>
              </div>

              <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl">
                <div className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>সাধারণ ভুলসমূহ যা পরিহার করতে হবে (Common Pitfalls):</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-rose-950 leading-relaxed list-disc list-inside">
                  {question.commonMistakesBn.map((mistake, idx) => (
                    <li key={idx} className="marker:text-rose-500">
                      {mistake}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Footer with Diagram/3D/Organelle jump */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {question.relatedOrganelleId && onJumpToOrganelle && (
              <button
                onClick={() => {
                  onClose();
                  onJumpToOrganelle(question.relatedOrganelleId!);
                }}
                className="px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>অঙ্গাণুর বিস্তারিত ল্যাব দেখুন</span>
              </button>
            )}

            {question.relatedModelId && onJumpTo3DModel && (
              <button
                onClick={() => {
                  onClose();
                  onJumpTo3DModel(question.relatedModelId!);
                }}
                className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Box className="w-3.5 h-3.5 text-orange-400" />
                <span>সংশ্লিষ্ট ৩ডি মডেল দেখুন</span>
              </button>
            )}

            {question.relatedDiagramId && onJumpToDiagram && (
              <button
                onClick={() => {
                  onClose();
                  onJumpToDiagram(question.relatedDiagramId!);
                }}
                className="px-3 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                <span>সচিত্র ডায়াগ্রাম খুলুন</span>
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition-colors ml-auto"
          >
            ফিরে যান
          </button>
        </div>
      </div>
    </div>
  );
};
