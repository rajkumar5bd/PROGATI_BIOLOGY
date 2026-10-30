import React from 'react';
import {
  BookOpen,
  Box,
  Layers,
  Sparkles,
  ArrowRight,
  Smartphone,
  CheckCircle2
} from 'lucide-react';

interface HeroBannerProps {
  onStartLearning: () => void;
  onExplore3D: () => void;
  onOpenSampleChapter: (chapterId: number) => void;
  searchSlot?: React.ReactNode;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onStartLearning,
  onExplore3D,
  onOpenSampleChapter,
  searchSlot
}) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-[#0b132b] to-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Subtle background grid mesh */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>PROGATI COACHING CENTER · বিজ্ঞান বিভাগ</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              এসএসসি জীববিজ্ঞান:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                সহজ বাংলায়
              </span>{' '}
              ত্রিমাত্রিক ৩ডি ও এআর বিজ্ঞান পাঠশালা
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) অনুমোদিত সম্পূর্ণ ১৪টি অধ্যায়ের জীববৈজ্ঞানিক
              তত্ত্ব, অঙ্গসংস্থানিক সচিত্র ডায়াগ্রাম এবং সেল ও হৃৎপিণ্ডের ত্রিমাত্রিক ৩ডি মডেল নিয়ে
              বাংলাদেশের শিক্ষার্থীদের জন্য আধুনিক ও সম্পূর্ণ উন্মুক্ত ডিজিটাল শিক্ষা প্ল্যাটফর্ম।
            </p>

            {/* Global Search Slot */}
            {searchSlot && (
              <div className="pt-1 pb-2">
                {searchSlot}
              </div>
            )}

            {/* Unboxed Metadata Strip (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-400 pt-1">
              <span className="text-orange-400 font-bold">১৪টি পূর্ণাঙ্গ অধ্যায়</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>ত্রিমাত্রিক ৩ডি মডেল</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>WebAR (মোবাইল সাপোর্ট)</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>ক্লিক-টু-লার্ন ডায়াগ্রাম</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>শারীরবৃত্তীয় এনিমেশন</span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onStartLearning}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <BookOpen className="w-4 h-4" />
                <span>অধ্যায়ভিত্তিক পড়াশোনা শুরু করুন</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onExplore3D}
                className="px-5 py-3 bg-white/10 hover:bg-white/15 active:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all flex items-center gap-2 backdrop-blur-xs"
              >
                <Box className="w-4 h-4 text-orange-400" />
                <span>৩ডি মডেল ও WebAR দেখুন</span>
              </button>
            </div>

            {/* Quick Sample Lessons Jump */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400 mr-2">গুরুত্বপূর্ণ অধ্যায়সমূহ:</span>
              <div className="inline-flex flex-wrap gap-2 mt-2 sm:mt-0">
                <button
                  onClick={() => onOpenSampleChapter(2)}
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors"
                >
                  ২য় অধ্যায়: জীবকোষ ও টিস্যু
                </button>
                <button
                  onClick={() => onOpenSampleChapter(3)}
                  className="px-3 py-1 rounded-lg bg-orange-950/70 hover:bg-orange-900/80 text-xs text-orange-300 border border-orange-700/60 transition-colors"
                >
                  ৩য় অধ্যায়: কোষ বিভাজন (মাইটোসিস)
                </button>
                <button
                  onClick={() => onOpenSampleChapter(6)}
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors"
                >
                  ৬ষ্ঠ অধ্যায়: জীবে পরিবহন (হৃৎপিণ্ড)
                </button>
                <button
                  onClick={() => onOpenSampleChapter(12)}
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors"
                >
                  ১২শ অধ্যায়: ডিএনএ ও বংশগতি
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-orange-500/20 shadow-2xl bg-slate-900 group">
              <img
                src="/src/assets/images/ssc_biology_hero_banner_1793201609125.jpg"
                alt="SSC Biology Visual Learning Showcase"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Floating caption overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs text-slate-200">
                <div className="flex items-center justify-between font-bold text-white mb-1">
                  <span className="flex items-center gap-1.5 text-orange-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    প্রগতি বিজ্ঞান ল্যাব
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    NCTB Aligned
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  ডিএনএ ডাবল হেলিক্স, উদ্ভিদকোষ ও মানব হৃৎপিণ্ডের ত্রিমাত্রিক ৩ডি মডেল এবং অ্যানিমেশন
                  এখন সরাসরি আপনার হাতের মুঠোয়।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
