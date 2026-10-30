import React from 'react';
import {
  X,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  HelpCircle,
  Eye,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';

interface ArHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArHelpModal: React.FC<ArHelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          title="বন্ধ করুন"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              ওয়েব এআর (WebAR) নির্দেশিকা ও সহায়তা
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              প্রগতি কোচিং সেন্টার · অগমেন্টেড রিয়ালিটি জীববিজ্ঞান শিক্ষা
            </p>
          </div>
        </div>

        {/* Instructions Body */}
        <div className="space-y-6 text-slate-700 text-xs sm:text-sm">
          {/* How it works banner */}
          <div className="bg-orange-50/70 border border-orange-200/80 rounded-2xl p-4 text-xs text-orange-950 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <strong>অগমেন্টেড রিয়ালিটি (AR) কী?</strong>
              <p className="mt-1 leading-relaxed text-orange-900">
                এআর-এর মাধ্যমে আপনার মোবাইলের ক্যামেরা দিয়ে ঘরের মেঝের ওপর বা পড়ার টেবিলে জীববিজ্ঞানের
                ত্রিমাত্রিক মডেল (যেমন: ডিএনএ, হৃৎপিণ্ড, উদ্ভিদকোষ) জীবন্তভাবে রেখে চারপাশ ঘুরে পর্যবেক্ষণ করতে পারেন।
              </p>
            </div>
          </div>

          {/* Android Steps */}
          <div className="border border-slate-200 rounded-2xl p-4">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              অ্যান্ড্রয়েড (Android) ব্যবহারকারীদের জন্য ধাপসমূহ:
            </h4>
            <ol className="space-y-2.5 text-xs text-slate-600 list-decimal list-inside">
              <li>
                <strong>গুগল ক্রোম (Google Chrome)</strong> ব্রাউজারে এই ওয়েবসাইটটি ওপেন করুন।
              </li>
              <li>
                ৩ডি মডেল সেকশনে গিয়ে <strong>"ওয়েব এআর"</strong> নির্বাচন করুন এবং{' '}
                <strong>"আপনার ঘরে এআর (AR) তে দেখুন"</strong> বোতামে চাপ দিন।
              </li>
              <li>
                ক্যামেরা অনুমতির বার্তা এলে <strong>"অনুমতি দিন (Allow)"</strong> ট্যাপ করুন।
              </li>
              <li>
                মোবাইলের ক্যামেরাটি আপনার পড়ার টেবিল বা মেঝের সমতল অংশের দিকে কয়েক সেকেন্ড ধীরে ধীরে ঘুরান যাতে সারফেস ডিটেক্ট হয়।
              </li>
              <li>
                মডেলটি আপনার সামনে স্থাপিত হলে আঙুল দিয়ে ড্র্যাগ করে ঘুরান অথবা পিঞ্চ করে বড়-ছোট করুন।
              </li>
            </ol>
            <div className="mt-3 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-2">
              <Info className="w-4 h-4 text-slate-400 shrink-0" />
              <span>
                প্রয়োজনীয়তা: Android 8.0+ এবং{' '}
                <a
                  href="https://play.google.com/store/apps/details?id=com.google.ar.core"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 underline font-semibold"
                >
                  Google Play Services for AR (ARCore)
                </a>
              </span>
            </div>
          </div>

          {/* iPhone / iOS Steps */}
          <div className="border border-slate-200 rounded-2xl p-4">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              অ্যাপল আইফোন (iOS / Safari) ব্যবহারকারীদের জন্য ধাপসমূহ:
            </h4>
            <ol className="space-y-2 text-xs text-slate-600 list-decimal list-inside">
              <li>
                আইফোনে <strong>Safari</strong> ব্রাউজার দিয়ে সাইটটি ওপেন করুন।
              </li>
              <li>
                এআর বাটনে চাপ দিলে অ্যাপলের অন্তর্নির্মিত <strong>AR Quick Look</strong> স্বয়ংক্রিয়ভাবে ক্যামেরা ভিউ চালু করবে।
              </li>
              <li>
                স্ক্রিনের নির্দেশ অনুযায়ী ঘরের মেঝেতে ক্যামেরা ফোকাস করুন। মডেলটি স্থাপিত হলে ৩৬০ ডিগ্রিতে চারপাশে ঘুরে দেখতে পারবেন।
              </li>
            </ol>
          </div>

          {/* Fallback info */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600">
              <strong className="text-slate-800">কম্পিউটার বা এআর-অনুপযোগী ডিভাইসের জন্য:</strong>
              <p className="mt-1 leading-relaxed">
                আপনার ডিভাইসে এআর সুবিধা না থাকলেও কোনো সমস্যা নেই! আমাদের ফুল-ফাংশনাল ৩ডি ভিউয়ারের সাহায্যে মাউস ড্র্যাগ করে ৩৬০° কোণে ঘুরিয়ে ও জুম করে সব উপাদান দেখতে পারবেন।
              </p>
            </div>
          </div>
        </div>

        {/* Modal Close CTA */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 hover:bg-orange-500 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
          >
            বুঝেছি, বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};
