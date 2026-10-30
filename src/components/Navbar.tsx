import React, { useState } from 'react';
import { BookOpen, Menu, X, Box, Layers, HelpCircle, Award } from 'lucide-react';

interface NavbarProps {
  onOpenChaptersMenu: () => void;
  onOpenArHelp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenChaptersMenu,
  onOpenArHelp
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-6 h-16 sm:h-20">
          {/* Zone 1: Brand Wordmark — PROGATI COACHING CENTER (Strictly 1 line on mobile, ~2x larger on desktop) */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 shrink-1 min-w-0 group"
            title="PROGATI COACHING CENTER"
          >
            {/* Visual Emblem Badge */}
            <span className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-slate-900 border-2 border-orange-500 text-white flex items-center justify-center font-black text-sm sm:text-lg shadow-sm shrink-0 group-hover:bg-orange-500 transition-colors">
              <span className="text-orange-400 group-hover:text-white transition-colors">P</span>
            </span>

            {/* Typography Container */}
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[13px] min-[360px]:text-[15px] sm:text-xl lg:text-2xl font-black tracking-tight text-slate-950 uppercase whitespace-nowrap overflow-hidden text-ellipsis leading-none block">
                  PROGATI <span className="text-orange-600">COACHING</span> CENTER
                </span>
              </div>
              <span className="hidden sm:block text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-wider uppercase mt-1">
                প্রগতি কোচিং সেন্টার · এসএসসি জীববিজ্ঞান পাঠশালা
              </span>
            </div>
          </a>

          {/* Zone 2: Clean Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-700">
            <a
              href="#chapters"
              className="hover:text-orange-600 transition-colors whitespace-nowrap"
            >
              অধ্যায়সমূহ (১৪টি)
            </a>
            <a
              href="#3d-models"
              className="hover:text-orange-600 transition-colors whitespace-nowrap"
            >
              ৩ডি মডেল ও WebAR
            </a>
            <a
              href="#diagrams"
              className="hover:text-orange-600 transition-colors whitespace-nowrap"
            >
              সচিত্র ডায়াগ্রাম
            </a>
            <a
              href="#exam-prep"
              className="hover:text-orange-600 transition-colors whitespace-nowrap flex items-center gap-1 text-orange-600"
            >
              <Award className="w-3.5 h-3.5" />
              <span>বোর্ড পরীক্ষা প্রস্তুতি</span>
            </a>
            <button
              onClick={onOpenArHelp}
              className="hover:text-orange-600 transition-colors whitespace-nowrap text-left cursor-pointer"
            >
              এআর গাইড
            </button>
          </nav>

          {/* Zone 3: CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenChaptersMenu}
              className="px-3 sm:px-4 py-2 text-xs font-bold text-white bg-slate-900 rounded-xl hover:bg-orange-500 transition-all whitespace-nowrap shadow-xs flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-orange-400" />
              <span className="hidden min-[480px]:inline">১৪টি অধ্যায়</span>
              <span className="min-[480px]:hidden">অধ্যায়</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-950 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="মেনু খুলুন"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 animate-fadeIn shadow-lg">
          <div className="pb-2 border-b border-slate-100 mb-2">
            <div className="text-xs font-black text-slate-900 uppercase">
              PROGATI COACHING CENTER
            </div>
            <div className="text-[11px] text-slate-500">
              প্রগতি কোচিং সেন্টার · এসএসসি জীববিজ্ঞান ডিজিটাল ল্যাব
            </div>
          </div>

          <a
            href="#chapters"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-xs font-bold text-slate-800 hover:bg-orange-50 hover:text-orange-700 rounded-xl transition-colors"
          >
            ১৪টি অধ্যায় পাঠশালা
          </a>
          <a
            href="#3d-models"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-xs font-bold text-slate-800 hover:bg-orange-50 hover:text-orange-700 rounded-xl transition-colors"
          >
            ৩ডি মডেল ও WebAR অ্যানাটমি
          </a>
          <a
            href="#diagrams"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-xs font-bold text-slate-800 hover:bg-orange-50 hover:text-orange-700 rounded-xl transition-colors"
          >
            সচিত্র ডায়াগ্রাম ল্যাব (হটস্পট)
          </a>
          <a
            href="#exam-prep"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-xs font-bold text-orange-600 hover:bg-orange-50 rounded-xl transition-colors"
          >
            ★ বোর্ড পরীক্ষার গুরুত্বপূর্ণ প্রশ্ন ও প্রস্তুতি
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenArHelp();
            }}
            className="block w-full text-left px-3 py-2 text-xs font-bold text-slate-800 hover:bg-orange-50 hover:text-orange-700 rounded-xl transition-colors cursor-pointer"
          >
            ওয়েব এআর (WebAR) নির্দেশিকা
          </button>
        </div>
      )}
    </header>
  );
};
