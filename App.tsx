import React, { useState } from 'react';
import {
  BookOpen,
  Award,
  Layers,
  Sparkles,
  HelpCircle,
  Volume2,
  Languages,
  CheckCircle2,
  ExternalLink,
  RotateCcw,
} from 'lucide-react';
import { StudyView } from './StudyView';
import { QuizView } from './QuizView';
import { FlashcardsView } from './FlashcardsView';

export default function App() {
  const [activeTab, setActiveTab] = useState<'study' | 'quiz' | 'flashcards'>('quiz');
  const [fontSize, setFontSize] = useState<'medium' | 'large' | 'xlarge'>('large');
  const [resetKey, setResetKey] = useState<number>(0);
  const [showResetToast, setShowResetToast] = useState<boolean>(false);

  const handleGlobalReset = () => {
    const confirmed = window.confirm(
      '¿Deseas reiniciar todo el progreso? (Se borrarán todas las respuestas de los 100 tests, marcadores y tarjetas aprendidas)\n\nՑանկանո՞ւմ եք վերակայել ամբողջ առաջընթացը (100 թեստերի պատասխանները, նշումները և քարտերը)։\n\nСбросить весь прогресс (ответы тестов, закладки и карточки)?'
    );

    if (confirmed) {
      try {
        localStorage.removeItem('literary_quiz_answers');
        localStorage.removeItem('literary_quiz_bookmarks');
        localStorage.removeItem('literary_flashcards_known');
      } catch {
        // ignore
      }
      setResetKey((prev) => prev + 1);
      setShowResetToast(true);
      setTimeout(() => setShowResetToast(false), 3500);
    }
  };

  const fontScaleClass = {
    medium: 'text-base',
    large: 'text-lg [&_h1]:text-3xl [&_h2]:text-2xl [&_h3]:text-xl',
    xlarge: 'text-xl [&_h1]:text-4xl [&_h2]:text-3xl [&_h3]:text-2xl leading-loose',
  }[fontSize];

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-indigo-500 selection:text-white ${fontScaleClass}`}>
      {/* Toast Notification on Reset */}
      {showResetToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-fadeIn backdrop-blur-md">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="text-xs sm:text-sm font-medium">
            <span>¡Progreso restablecido con éxito! / Առաջընթացը վերակայվեց / Прогресс сброшен!</span>
          </div>
        </div>
      )}
      {/* Top Navigation Bar (Static, does not follow scroll) */}
      <header className="bg-white border-b border-slate-200/80 shadow-xs w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-700 to-sky-600 text-white flex items-center justify-center font-black shadow-md shadow-indigo-200 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight leading-tight">
                Los Grandes Géneros Literarios
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Font Size Adjuster Control */}
            <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200/80" title="Tamaño de letra / Տառաչափ">
              <button
                onClick={() => setFontSize('medium')}
                className={`px-2.5 py-1 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  fontSize === 'medium' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Tamaño normal"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2.5 py-1 text-xs font-black rounded-xl transition-all cursor-pointer ${
                  fontSize === 'large' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Tamaño grande (Recomendado)"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2.5 py-1 text-xs font-black rounded-xl transition-all cursor-pointer ${
                  fontSize === 'xlarge' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Tamaño muy grande"
              >
                A++
              </button>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200/60">
              <button
                onClick={() => setActiveTab('study')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'study'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden md:inline">Material de Estudio</span>
                <span className="md:hidden">Estudio</span>
              </button>

              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'quiz'
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>100 Tests</span>
              </button>

              <button
                onClick={() => setActiveTab('flashcards')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'flashcards'
                    ? 'bg-white text-purple-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Tarjetas</span>
              </button>
            </nav>

            {/* Top Global Reset Button */}
            <button
              onClick={handleGlobalReset}
              className="px-3 py-2 rounded-2xl text-xs sm:text-sm font-bold bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs hover:shadow-xs active:scale-95"
              title="Сбросить все ответы и прогресс / Reiniciar todo el progreso / Վերակայել ամբողջը"
            >
              <RotateCcw className="w-4 h-4 text-rose-600 shrink-0" />
              <span className="font-semibold">Сброс</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === 'study' && <StudyView key={`study_${resetKey}`} />}
        {activeTab === 'quiz' && <QuizView key={`quiz_${resetKey}`} />}
        {activeTab === 'flashcards' && <FlashcardsView key={`flash_${resetKey}`} />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 text-center text-xs text-slate-500 font-medium">
        <div className="max-w-6xl mx-auto px-4 space-y-2">
          <p className="font-armenian text-slate-700 text-sm">
            Քննության նախապատրաստում․ Քնարերգություն, Պատմողական գրականություն և Թատրոն
          </p>
          <p className="text-slate-400">
            Lírica, Narrativa y Teatro • Preparación para examen (7.º curso) • Explicaciones bilingües con un solo clic.
          </p>
        </div>
      </footer>
    </div>
  );
}
