import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { GlobalSearch } from './components/GlobalSearch';
import { ContinueLearningBanner } from './components/ContinueLearningBanner';
import { ChapterCardsGrid } from './components/ChapterCardsGrid';
import { SSCExamPrepSection } from './components/SSCExamPrepSection';
import { QuestionDetailModal } from './components/QuestionDetailModal';
import { OrganelleExplorerModal } from './components/OrganelleExplorerModal';
import { ChapterNavigation } from './components/ChapterNavigation';
import { ChapterDetailView } from './components/ChapterDetailView';
import { ThreeDModelViewer } from './components/ThreeDModelViewer';
import { InteractiveDiagramViewer } from './components/InteractiveDiagramViewer';
import { ProcessAnimationViewer } from './components/ProcessAnimationViewer';
import { ArHelpModal } from './components/ArHelpModal';
import { Footer } from './components/Footer';
import { CHAPTERS_DATA } from './data/chaptersData';
import { SSC_QUESTIONS_DATA } from './data/questionsData';
import { SSCExamQuestion, LearningProgress } from './types/biology';
import { BookOpen, Sparkles, X, Award, Layers } from 'lucide-react';

const STORAGE_KEY = 'progati_learning_progress';

export default function App() {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(2); // Default to Chapter 2 (Cells and Tissues)
  const [selected3DModelId, setSelected3DModelId] = useState<string>('plant_cell');
  const [selectedDiagramId, setSelectedDiagramId] = useState<string>('plant_cell_diagram');
  const [selectedAnimationId, setSelectedAnimationId] = useState<string>('circulation_animation');

  // Modals state
  const [isArHelpOpen, setIsArHelpOpen] = useState<boolean>(false);
  const [isChapterDrawerOpen, setIsChapterDrawerOpen] = useState<boolean>(false);
  const [selectedQuestion, setSelectedQuestion] = useState<SSCExamQuestion | null>(null);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState<boolean>(false);
  const [selectedOrganelleId, setSelectedOrganelleId] = useState<string>('nucleus');
  const [isOrganelleModalOpen, setIsOrganelleModalOpen] = useState<boolean>(false);

  // Local device learning progress
  const [learningProgress, setLearningProgress] = useState<LearningProgress | null>(null);

  const activeChapter =
    CHAPTERS_DATA.find((ch) => ch.id === selectedChapterId) || CHAPTERS_DATA[1];

  // Initialize and load saved progress from local device storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.chapterId) {
          setLearningProgress(parsed);
        }
      }
    } catch {
      // Ignore local storage parse error
    }
  }, []);

  // Update local progress when chapter is selected
  const handleSelectChapter = (id: number) => {
    setSelectedChapterId(id);
    setIsChapterDrawerOpen(false);

    const targetChapter = CHAPTERS_DATA.find((c) => c.id === id);
    if (targetChapter) {
      const newProgress: LearningProgress = {
        chapterId: id,
        chapterTitleBn: targetChapter.titleBn,
        chapterNumberBn: targetChapter.numberBn,
        topicTitleBn: targetChapter.subTopics[0]?.titleBn,
        timestamp: Date.now()
      };
      setLearningProgress(newProgress);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
      } catch {
        // Local storage might be blocked or full
      }
    }

    const el = document.getElementById('chapter-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearProgress = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
    setLearningProgress(null);
  };

  const handleJumpTo3DModel = (modelId: string) => {
    setSelected3DModelId(modelId);
    const el = document.getElementById('3d-models');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJumpToDiagram = (diagramId: string) => {
    setSelectedDiagramId(diagramId);
    const el = document.getElementById('diagrams');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJumpToAnimation = (animationId: string) => {
    setSelectedAnimationId(animationId);
    const el = document.getElementById('animations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenOrganelle = (organelleId: string) => {
    setSelectedOrganelleId(organelleId);
    setIsOrganelleModalOpen(true);
  };

  const handleOpenQuestion = (question: SSCExamQuestion) => {
    setSelectedQuestion(question);
    setIsQuestionModalOpen(true);
  };

  const handleOpenQuestionById = (questionId: string) => {
    const q = SSC_QUESTIONS_DATA.find((item) => item.id === questionId);
    if (q) {
      handleOpenQuestion(q);
    }
  };

  const scrollToChapters = () => {
    const el = document.getElementById('chapters');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollTo3D = () => {
    const el = document.getElementById('3d-models');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* 1. Header Navigation Bar (Prominent PROGATI COACHING CENTER Branding) */}
      <Navbar
        onOpenChaptersMenu={() => setIsChapterDrawerOpen(true)}
        onOpenArHelp={() => setIsArHelpOpen(true)}
      />

      {/* 2. Hero Welcome Banner with Global Search Bar Integration */}
      <HeroBanner
        onStartLearning={scrollToChapters}
        onExplore3D={scrollTo3D}
        onOpenSampleChapter={(id) => {
          handleSelectChapter(id);
        }}
        searchSlot={
          <GlobalSearch
            onSelectChapter={handleSelectChapter}
            onSelectOrganelle={handleOpenOrganelle}
            onSelect3DModel={handleJumpTo3DModel}
            onSelectDiagram={handleJumpToDiagram}
            onSelectQuestion={handleOpenQuestionById}
          />
        }
      />

      {/* 3. Continue Learning Section (Only rendered if local progress exists) */}
      <ContinueLearningBanner
        progress={learningProgress}
        onResumeLearning={handleSelectChapter}
        onClearProgress={handleClearProgress}
      />

      {/* 4. Complete 14 SSC Biology Chapters Cards Grid (Homepage Hub) */}
      <section className="py-10 sm:py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span>এনসিটিবি পাঠ্যপুস্তক অধ্যায়সমূহ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                এসএসসি জীববিজ্ঞান: সম্পূর্ণ ১৪টি অধ্যায়
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl">
                যে কোনো অধ্যায়ে ক্লিক করে পাঠ্যবইয়ের সচিত্র ব্যাখ্যা, পরিভাষা, ৩ডি মডেল এবং বোর্ড পরীক্ষার প্রশ্নোত্তর অনুশীলন করুন।
              </p>
            </div>
          </div>

          <ChapterCardsGrid
            selectedChapterId={selectedChapterId}
            onSelectChapter={handleSelectChapter}
          />
        </div>
      </section>

      {/* 5. Important SSC Biology Topics & Exam Questions Hub */}
      <SSCExamPrepSection
        onOpenQuestion={handleOpenQuestion}
        onJumpTo3DModel={handleJumpTo3DModel}
        onJumpToDiagram={handleJumpToDiagram}
      />

      {/* 6. Interactive 3D Biology Models & WebAR Section */}
      <ThreeDModelViewer
        initialModelId={selected3DModelId}
        onOpenArHelp={() => setIsArHelpOpen(true)}
      />

      {/* 7. Interactive Hotspot Diagrams Section (with Bilingual Outside Labels & Organelle Lab) */}
      <InteractiveDiagramViewer
        initialDiagramId={selectedDiagramId}
        onJumpTo3DModel={handleJumpTo3DModel}
      />

      {/* 8. Biological Process Step-by-Step Animations Section */}
      <ProcessAnimationViewer initialAnimationId={selectedAnimationId} />

      {/* 9. Detailed Chapter Reading & Subtopic Studio (Dual Navigation + Reader) */}
      <section id="chapters" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4 text-orange-500" />
              <span>অধ্যায়ভিত্তিক বিশদ পাঠশালা</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              অধ্যায় পাঠ ও বিস্তারিত কনসেপ্ট ওয়াকথ্রু
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl">
              বাম পাশের অধ্যায়সূচি থেকে অধ্যায় নির্বাচন করুন এবং ডান পাশে সংশ্লিষ্ট পাঠ্যসূচি, সংজ্ঞা ও পরীক্ষার টিপস গভীরভাবে পড়ুন।
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 4 cols: Chapters Navigator */}
            <div className="lg:col-span-4 sticky top-20 z-20">
              <ChapterNavigation
                selectedChapterId={selectedChapterId}
                onSelectChapter={handleSelectChapter}
              />
            </div>

            {/* Right 8 cols: Active Chapter Lesson Content */}
            <div id="chapter-content" className="lg:col-span-8 scroll-mt-24">
              <ChapterDetailView
                chapter={activeChapter}
                totalChapters={CHAPTERS_DATA.length}
                onSelectChapter={handleSelectChapter}
                onJumpTo3DModel={handleJumpTo3DModel}
                onJumpToDiagram={handleJumpToDiagram}
                onJumpToAnimation={handleJumpToAnimation}
                onOpenQuestion={handleOpenQuestion}
                onOpenOrganelle={handleOpenOrganelle}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Chapters Mobile Drawer */}
      {isChapterDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <h3 className="text-base font-bold text-slate-900">
                  সকল ১৪টি অধ্যায় থেকে নির্বাচন করুন
                </h3>
              </div>
              <button
                onClick={() => setIsChapterDrawerOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto mt-4 pr-1">
              <ChapterNavigation
                selectedChapterId={selectedChapterId}
                onSelectChapter={handleSelectChapter}
                className="border-0 shadow-none p-0"
              />
            </div>
          </div>
        </div>
      )}

      {/* Organelle Explorer Modal */}
      <OrganelleExplorerModal
        initialOrganelleId={selectedOrganelleId}
        isOpen={isOrganelleModalOpen}
        onClose={() => setIsOrganelleModalOpen(false)}
        onOpen3DView={handleJumpTo3DModel}
      />

      {/* Question Detail Modal */}
      {selectedQuestion && (
        <QuestionDetailModal
          question={selectedQuestion}
          isOpen={isQuestionModalOpen}
          onClose={() => setIsQuestionModalOpen(false)}
          onJumpTo3DModel={handleJumpTo3DModel}
          onJumpToDiagram={handleJumpToDiagram}
          onJumpToOrganelle={handleOpenOrganelle}
        />
      )}

      {/* WebAR Guide Modal */}
      <ArHelpModal isOpen={isArHelpOpen} onClose={() => setIsArHelpOpen(false)} />

      {/* Footer */}
      <Footer onOpenArHelp={() => setIsArHelpOpen(true)} />
    </div>
  );
}
