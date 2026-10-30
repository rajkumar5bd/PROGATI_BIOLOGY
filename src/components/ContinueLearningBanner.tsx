import React from 'react';
import { LearningProgress } from '../types/biology';
import { BookOpen, ArrowRight, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

interface ContinueLearningBannerProps {
  progress: LearningProgress | null;
  onResumeLearning: (chapterId: number) => void;
  onClearProgress: () => void;
}

export const ContinueLearningBanner: React.FC<ContinueLearningBannerProps> = ({
  progress,
  onResumeLearning,
  onClearProgress
}) => {
  if (!progress) return null;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-6 animate-fadeIn">
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-orange-500/30 rounded-2xl p-4 sm:p-5 text-white shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 font-bold shadow-xs">
            <BookOpen className="w-5 h-5" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/20 px-2 py-0.5 rounded border border-orange-500/30">
                স্মৃতিচিহ্ন (Continue Learning)
              </span>
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>স্থানীয় ব্রাউজারে সংরক্ষিত</span>
              </span>
            </div>

            <h4 className="text-sm sm:text-base font-bold text-white">
              {progress.chapterNumberBn} অধ্যায়: {progress.chapterTitleBn}
            </h4>

            {progress.topicTitleBn && (
              <p className="text-xs text-slate-300 mt-0.5">
                সর্বশেষ পাঠ: <span className="text-orange-300 font-medium">{progress.topicTitleBn}</span>
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
          <button
            onClick={() => onResumeLearning(progress.chapterId)}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>পড়া চালিয়ে যান</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClearProgress}
            title="স্থানীয় সংরক্ষণ মুছুন"
            className="p-2 text-slate-400 hover:text-rose-400 hover:bg-white/10 rounded-xl transition-colors cursor-pointer text-xs flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">মুছুন</span>
          </button>
        </div>
      </div>
    </div>
  );
};
