import React from 'react';
import { BookOpen, Sparkles, Smartphone, ShieldCheck, Box, Layers } from 'lucide-react';

interface FooterProps {
  onOpenArHelp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenArHelp }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Overview (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-bold">
              <span className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black text-base shadow-xs shrink-0">
                P
              </span>
              <div>
                <span className="text-base sm:text-lg font-black tracking-tight text-white uppercase block">
                  PROGATI <span className="text-orange-500">COACHING</span> CENTER
                </span>
                <span className="text-[11px] text-slate-400 font-semibold">
                  প্রগতি কোচিং সেন্টার · এসএসসি জীববিজ্ঞান পাঠশালা
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              বাংলাদেশের মাধ্যমিক স্তরের (SSC) বিজ্ঞান বিভাগের শিক্ষার্থীদের জীববিজ্ঞান বিষয়কে
              সহজ, আকর্ষণীয় ও বাস্তবমুখী করার জন্য নিবেদিত একটি আধুনিক ডিজিটাল শিক্ষামূলক প্ল্যাটফর্ম।
            </p>
            <div className="flex items-center gap-2 text-xs text-orange-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              <span>NCTB পাঠ্যপুস্তক অনুসরণে প্রণীত ও বিজ্ঞানসম্মত</span>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              দ্রুত নেভিগেশন
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#chapters" className="hover:text-orange-400 transition-colors">
                  পাঠ্যপুস্তকের ১৪টি সম্পূর্ণ অধ্যায়
                </a>
              </li>
              <li>
                <a href="#exam-prep" className="hover:text-orange-400 transition-colors text-orange-400 font-semibold">
                  ★ বোর্ড পরীক্ষা প্রস্তুতি ও প্রশ্নব্যাংক
                </a>
              </li>
              <li>
                <a href="#3d-models" className="hover:text-orange-400 transition-colors">
                  ত্রিমাত্রিক ৩ডি মডেল (DNA, উদ্ভিদকোষ, হৃৎপিণ্ড)
                </a>
              </li>
              <li>
                <a href="#diagrams" className="hover:text-orange-400 transition-colors">
                  সচিত্র ডায়াগ্রাম ল্যাব (১৫টি চিহ্নিত চিত্র)
                </a>
              </li>
              <li>
                <a href="#animations" className="hover:text-orange-400 transition-colors">
                  জৈবিক প্রক্রিয়া এনিমেশন (মাইটোসিস, সালোকসংশ্লেষণ)
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenArHelp}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  ওয়েব এআর (WebAR) ব্যবহারের নিয়মাবলী
                </button>
              </li>
            </ul>
          </div>

          {/* Curriculum & Tech Notice (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              প্রযুক্তি ও উপযোগিতা
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              ওয়েবসাইটটি সম্পূর্ণ প্রতিক্রিয়াশীল (Responsive) এবং কম গতির ইন্টারনেটেও দ্রুত লোড
              হওয়ার উপযোগী। কোনো অ্যাকাউন্ট বা রেজিস্ট্রেশন ছাড়াই সম্পূর্ণ উন্মুক্ত।
            </p>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-800">
              Google Model-Viewer & Three.js প্রযুক্তি সমন্বিত
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} প্রগতি কোচিং সেন্টার (PROGATI COACHING CENTER). সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="flex items-center gap-1 text-slate-400 font-medium">
            <span>শিক্ষার্থীদের সাফল্যের অগ্রযাত্রায় প্রগতি</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
