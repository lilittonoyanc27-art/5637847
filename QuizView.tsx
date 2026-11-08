import React, { useState, useEffect } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Languages,
  Bookmark,
  BookmarkCheck,
  Search,
  Filter,
  Sparkles,
  Award,
  Volume2,
} from 'lucide-react';
import { QUIZ_QUESTIONS } from './quizData';
import { QuizQuestion } from './types';

export const QuizView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [showArmenianGlobal, setShowArmenianGlobal] = useState<boolean>(false);
  const [revealedArmenianItems, setRevealedArmenianItems] = useState<Record<string, boolean>>({});
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'single' | 'list'>('single');
  const [filterMode, setFilterMode] = useState<'all' | 'mistakes' | 'bookmarked'>('all');

  // Load saved state from localStorage if available
  useEffect(() => {
    try {
      const savedAnswers = localStorage.getItem('literary_quiz_answers');
      if (savedAnswers) setUserAnswers(JSON.parse(savedAnswers));
      const savedBookmarks = localStorage.getItem('literary_quiz_bookmarks');
      if (savedBookmarks) setBookmarkedIds(JSON.parse(savedBookmarks));
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage
  const saveAnswers = (newAnswers: Record<number, 'A' | 'B' | 'C' | 'D'>) => {
    setUserAnswers(newAnswers);
    try {
      localStorage.setItem('literary_quiz_answers', JSON.stringify(newAnswers));
    } catch {
      // ignore
    }
  };

  const toggleBookmark = (id: number) => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('literary_quiz_bookmarks', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Filter questions
  const filteredQuestions = QUIZ_QUESTIONS.filter((q) => {
    // category filter
    if (selectedCategory === '1-20' && (q.id < 1 || q.id > 20)) return false;
    if (selectedCategory === '21-40' && (q.id < 21 || q.id > 40)) return false;
    if (selectedCategory === '41-60' && (q.id < 41 || q.id > 60)) return false;
    if (selectedCategory === '61-80' && (q.id < 61 || q.id > 80)) return false;
    if (selectedCategory === '81-100' && (q.id < 81 || q.id > 100)) return false;

    // mistakes filter
    if (filterMode === 'mistakes') {
      const ans = userAnswers[q.id];
      if (!ans || ans === q.correctAnswer) return false;
    }

    // bookmarks filter
    if (filterMode === 'bookmarked') {
      if (!bookmarkedIds.includes(q.id)) return false;
    }

    // search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchQ =
        q.question.es.toLowerCase().includes(query) ||
        q.question.hy.toLowerCase().includes(query) ||
        q.id.toString() === query;
      const matchOpt = q.options.some(
        (o) => o.es.toLowerCase().includes(query) || o.hy.toLowerCase().includes(query)
      );
      if (!matchQ && !matchOpt) return false;
    }

    return true;
  });

  const totalQuestions = QUIZ_QUESTIONS.length;
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(
    ([id, ans]) => QUIZ_QUESTIONS.find((q) => q.id === Number(id))?.correctAnswer === ans
  ).length;

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleSelectOption = (questionId: number, optionKey: 'A' | 'B' | 'C' | 'D') => {
    const newAnswers = { ...userAnswers, [questionId]: optionKey };
    saveAnswers(newAnswers);
  };

  const toggleArmenianFor = (key: string) => {
    setRevealedArmenianItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isArmenianVisible = (key: string) => {
    return showArmenianGlobal || !!revealedArmenianItems[key];
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.92;
      window.speechSynthesis.speak(utterance);
    }
  };

  const resetQuiz = () => {
    if (window.confirm('¿Reiniciar todas tus respuestas del cuestionario? / Վերակայե՞լ բոլոր պատասխանները։')) {
      saveAnswers({});
      setCurrentIndex(0);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Stats */}
      <div className="bg-gradient-to-r from-indigo-700 via-indigo-800 to-sky-800 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-indigo-100">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              100 Preguntas de Examen / 100 Քննական Հարցեր
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Cuestionario Interactivo de Literatura
            </h2>
            <p className="text-indigo-100/90 text-sm sm:text-base font-armenian max-w-2xl leading-relaxed">
              Սեղմիր իսպաներեն հարցի կամ տարբերակների վրա՝ հայերեն թարգմանությունը տեսնելու համար։
              Յուրաքանչյուր պատասխանից հետո տրվում է մանրամասն բացատրություն։
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shrink-0">
            <div className="text-center px-2">
              <div className="text-2xl sm:text-3xl font-black text-amber-300">{answeredCount}</div>
              <div className="text-[11px] text-indigo-200 uppercase font-medium">Respondidas</div>
            </div>
            <div className="text-center px-2 border-x border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-emerald-300">{correctCount}</div>
              <div className="text-[11px] text-indigo-200 uppercase font-medium">Aciertos</div>
            </div>
            <div className="text-center px-2">
              <div className="text-2xl sm:text-3xl font-black text-sky-200">
                {answeredCount > 0 ? `${Math.round((correctCount / answeredCount) * 100)}%` : '0%'}
              </div>
              <div className="text-[11px] text-indigo-200 uppercase font-medium">Precisión</div>
            </div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <div className="flex justify-between items-center text-xs text-indigo-200 mb-2">
            <span>Progreso total: {answeredCount} de {totalQuestions}</span>
            <span>{Math.round((answeredCount / totalQuestions) * 100)}% completado</span>
          </div>
          <div className="w-full h-2.5 bg-black/25 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-sky-300 rounded-full transition-all duration-300"
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Filter and Control Toolbar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'Todas (1–100)', hy: 'Բոլորը' },
            { id: '1-20', label: '1–20: Géneros y Lírica', hy: 'Սեռեր և Քնարերգություն' },
            { id: '21-40', label: '21–40: Recursos retóricos', hy: 'Արտահայտչամիջոցներ' },
            { id: '41-60', label: '41–60: Narrativa', hy: 'Պատմողական' },
            { id: '61-80', label: '61–80: Teatro', hy: 'Թատրոն' },
            { id: '81-100', label: '81–100: Análisis de textos', hy: 'Տեքստերի վերլուծություն' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentIndex(0);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Second Row: Search, View Mode, Language Mode, Mistakes */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <div className="flex items-center gap-2 flex-1 min-w-[220px]">
            <div className="relative w-full max-w-xs">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar pregunta o término..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentIndex(0);
                }}
                className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Filter mode toggles */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setFilterMode('all')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  filterMode === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Todas
              </button>
              <button
                onClick={() => setFilterMode('mistakes')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer flex items-center gap-1 ${
                  filterMode === 'mistakes'
                    ? 'bg-rose-600 text-white'
                    : 'text-rose-600 hover:bg-rose-50'
                }`}
                title="Ver errores para repasar"
              >
                <XCircle className="w-3.5 h-3.5" />
                Errores ({Object.entries(userAnswers).filter(
                  ([id, ans]) => QUIZ_QUESTIONS.find((q) => q.id === Number(id))?.correctAnswer !== ans
                ).length})
              </button>
              <button
                onClick={() => setFilterMode('bookmarked')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer flex items-center gap-1 ${
                  filterMode === 'bookmarked'
                    ? 'bg-amber-500 text-white'
                    : 'text-amber-700 hover:bg-amber-50'
                }`}
                title="Preguntas guardadas"
              >
                <Bookmark className="w-3.5 h-3.5" />
                ({bookmarkedIds.length})
              </button>
            </div>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowArmenianGlobal((prev) => !prev)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
                showArmenianGlobal
                  ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
              title="Mostrar u ocultar siempre la traducción armenia"
            >
              <Languages className="w-4 h-4 text-indigo-600" />
              <span>{showArmenianGlobal ? '🇦🇲 Armenio siempre visible' : '🖱️ Clic para traducir'}</span>
            </button>

            <div className="flex items-center bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setViewMode('single')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg cursor-pointer ${
                  viewMode === 'single' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                Individual
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg cursor-pointer ${
                  viewMode === 'list' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                Lista completa
              </button>
            </div>

            <button
              onClick={resetQuiz}
              className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
              title="Reiniciar cuestionario"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {filteredQuestions.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
          <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800">No se encontraron preguntas</h3>
          <p className="text-slate-500 text-sm font-armenian">
            Ընտրված զտիչով հարցեր չկան։ Փորձիր ընտրել «Todas» կամ մաքրել որոնումը։
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setFilterMode('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 cursor-pointer"
          >
            Ver todas las preguntas
          </button>
        </div>
      ) : viewMode === 'single' ? (
        /* SINGLE QUESTION MODE */
        <div className="space-y-4">
          {/* Question Stepper Indicator */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
            <span>
              Pregunta {currentIndex + 1} de {filteredQuestions.length} (ID #{currentQ.id})
            </span>
            <div className="flex items-center gap-1">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                title="Pregunta anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 font-mono text-slate-700">
                {currentIndex + 1} / {filteredQuestions.length}
              </span>
              <button
                disabled={currentIndex === filteredQuestions.length - 1}
                onClick={() => setCurrentIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1))}
                className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                title="Siguiente pregunta"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Question Card */}
          <QuestionCard
            question={currentQ}
            userAnswer={userAnswers[currentQ.id]}
            onSelectOption={(key) => handleSelectOption(currentQ.id, key)}
            isArmenianVisible={(key) => isArmenianVisible(key)}
            onToggleArmenian={(key) => toggleArmenianFor(key)}
            isBookmarked={bookmarkedIds.includes(currentQ.id)}
            onToggleBookmark={() => toggleBookmark(currentQ.id)}
            onSpeak={speakText}
          />

          {/* Quick Jump Grid */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>Navegador rápido de preguntas</span>
              <span className="text-[11px] text-slate-400">Verde = Correcta, Rojo = Incorrecta</span>
            </div>
            <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-1">
              {filteredQuestions.map((q, idx) => {
                const ans = userAnswers[q.id];
                const isCurrent = idx === currentIndex;
                const isCorrect = ans && ans === q.correctAnswer;
                const isWrong = ans && ans !== q.correctAnswer;

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
                      isCurrent ? 'ring-2 ring-indigo-600 ring-offset-1 font-black scale-105 z-10' : ''
                    } ${
                      isCorrect
                        ? 'bg-emerald-500 text-white'
                        : isWrong
                        ? 'bg-rose-500 text-white'
                        : ans
                        ? 'bg-slate-700 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* FULL LIST VIEW MODE */
        <div className="space-y-6">
          {filteredQuestions.map((q) => (
            <QuestionCard
              key={q.id}
              question={q}
              userAnswer={userAnswers[q.id]}
              onSelectOption={(key) => handleSelectOption(q.id, key)}
              isArmenianVisible={(key) => isArmenianVisible(key)}
              onToggleArmenian={(key) => toggleArmenianFor(key)}
              isBookmarked={bookmarkedIds.includes(q.id)}
              onToggleBookmark={() => toggleBookmark(q.id)}
              onSpeak={speakText}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface QuestionCardProps {
  question: QuizQuestion;
  userAnswer?: 'A' | 'B' | 'C' | 'D';
  onSelectOption: (key: 'A' | 'B' | 'C' | 'D') => void;
  isArmenianVisible: (key: string) => boolean;
  onToggleArmenian: (key: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onSpeak: (text: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  userAnswer,
  onSelectOption,
  isArmenianVisible,
  onToggleArmenian,
  isBookmarked,
  onToggleBookmark,
  onSpeak,
}) => {
  const isAnswered = !!userAnswer;
  const isCorrect = userAnswer === question.correctAnswer;
  const qKey = `q_${question.id}`;
  const showArmenianQ = isArmenianVisible(qKey);

  return (
    <div
      className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-200 shadow-xs ${
        isAnswered
          ? isCorrect
            ? 'border-emerald-300 ring-1 ring-emerald-100'
            : 'border-rose-300 ring-1 ring-rose-100'
          : 'border-slate-200 hover:border-indigo-300'
      }`}
    >
      {/* Category Header & Bookmark */}
      <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center">
            {question.id}
          </span>
          <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
            {question.categoryTitle.es}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => onSpeak(question.question.es)}
            className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            title="Escuchar pregunta en español"
          >
            <Volume2 className="w-4 h-4" />
          </button>
          <button
            onClick={onToggleBookmark}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              isBookmarked
                ? 'text-amber-500 bg-amber-50'
                : 'text-slate-300 hover:text-amber-500 hover:bg-slate-100'
            }`}
            title="Guardar pregunta"
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Context text if applicable (e.g., for questions 81-100) */}
      {question.contextText && (
        <div className="mb-5 p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 text-slate-800">
          <div className="flex items-center justify-between text-xs font-bold text-amber-900 mb-2">
            <span>📖 {question.contextText.title.es}</span>
            <button
              onClick={() => onToggleArmenian(`ctx_${question.id}`)}
              className="text-[11px] text-amber-700 hover:underline cursor-pointer flex items-center gap-1"
            >
              <Languages className="w-3.5 h-3.5" />
              {isArmenianVisible(`ctx_${question.id}`) ? 'Թաքցնել' : 'Հայերեն թարգմանություն'}
            </button>
          </div>
          <div className="font-literary text-base sm:text-lg whitespace-pre-line leading-relaxed italic border-l-2 border-amber-400 pl-3">
            {question.contextText.es}
          </div>
          {isArmenianVisible(`ctx_${question.id}`) && (
            <div className="mt-3 pt-3 border-t border-amber-200/80 font-armenian text-sm text-slate-700 whitespace-pre-line leading-relaxed pl-3 bg-amber-100/40 p-2.5 rounded-lg">
              {question.contextText.hy}
            </div>
          )}
        </div>
      )}

      {/* Question Title (Clickable to reveal Armenian) */}
      <div
        onClick={() => onToggleArmenian(qKey)}
        className="group cursor-pointer rounded-2xl p-3 sm:p-4 hover:bg-slate-50 transition-colors select-text"
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-snug group-hover:text-indigo-950">
            {question.question.es}
          </h3>
          <span
            className={`shrink-0 text-xs sm:text-sm px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-colors ${
              showArmenianQ
                ? 'bg-indigo-100 text-indigo-700'
                : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600'
            }`}
          >
            <Languages className="w-4 h-4" />
            <span className="hidden sm:inline">
              {showArmenianQ ? 'Հայերեն' : 'Թարգմանել'}
            </span>
          </span>
        </div>

        {showArmenianQ && (
          <div className="mt-3 pt-2.5 border-t border-indigo-100 font-armenian text-slate-800 text-base sm:text-lg leading-relaxed bg-indigo-50/80 p-3.5 rounded-xl">
            <span className="text-xs font-bold uppercase text-indigo-950 block mb-1">
              🇦🇲 Հարցի հայերեն թարգմանություն
            </span>
            {question.question.hy}
          </div>
        )}
      </div>

      {/* Options List */}
      <div className="mt-4 space-y-3">
        {question.options.map((opt) => {
          const isSelected = userAnswer === opt.key;
          const isCorrectChoice = opt.key === question.correctAnswer;
          const optKey = `opt_${question.id}_${opt.key}`;
          const showArmenianOpt = isArmenianVisible(optKey);

          let optionStyle = 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50/60 shadow-2xs';
          let badgeStyle = 'bg-slate-100 text-slate-800 border-slate-300';

          if (isAnswered) {
            if (isCorrectChoice) {
              optionStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 shadow-xs ring-1 ring-emerald-200';
              badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
            } else if (isSelected) {
              optionStyle = 'border-rose-400 bg-rose-50/80 text-rose-950 shadow-xs ring-1 ring-rose-200';
              badgeStyle = 'bg-rose-600 text-white border-rose-600';
            } else {
              optionStyle = 'border-slate-200 opacity-60 bg-slate-50/50';
            }
          }

          return (
            <div
              key={opt.key}
              className={`rounded-2xl border p-4 transition-all duration-150 ${optionStyle}`}
            >
              <div className="flex items-start gap-3.5">
                {/* Select button */}
                <button
                  type="button"
                  onClick={() => onSelectOption(opt.key)}
                  className={`w-8 h-8 rounded-xl border font-black text-sm flex items-center justify-center shrink-0 transition-all cursor-pointer ${badgeStyle}`}
                >
                  {isAnswered && isCorrectChoice ? (
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  ) : isAnswered && isSelected ? (
                    <XCircle className="w-5 h-5 text-white" />
                  ) : (
                    opt.key
                  )}
                </button>

                {/* Option text in Spanish (Clickable to select and/or toggle Armenian) */}
                <div
                  className="flex-1 cursor-pointer"
                  onClick={() => {
                    if (!isAnswered) {
                      onSelectOption(opt.key);
                    } else {
                      onToggleArmenian(optKey);
                    }
                  }}
                >
                  <div className="text-base sm:text-lg font-semibold text-slate-800 leading-snug">
                    {opt.es}
                  </div>

                  {/* Armenian translation */}
                  {showArmenianOpt && (
                    <div className="mt-2.5 font-armenian text-sm sm:text-base text-slate-700 bg-white/90 p-2.5 rounded-xl border border-slate-200/80 leading-relaxed shadow-2xs">
                      🇦🇲 {opt.hy}
                    </div>
                  )}
                </div>

                {/* Translation toggle button */}
                <button
                  type="button"
                  onClick={() => onToggleArmenian(optKey)}
                  className={`p-2 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer ${
                    showArmenianOpt ? 'text-indigo-600 bg-indigo-50' : ''
                  }`}
                  title="Traducir opción al armenio"
                >
                  <Languages className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Explanation after answer (Both Correct and Incorrect Explanations) */}
      {isAnswered && (
        <div
          className={`mt-6 p-6 rounded-2xl border transition-all animate-fadeIn ${
            isCorrect
              ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950 shadow-sm'
              : 'bg-rose-50/90 border-rose-300 text-rose-950 shadow-sm'
          }`}
        >
          <div className="flex items-center gap-2 mb-3 font-bold text-base sm:text-lg">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <span>¡Correcto! / Ճիշտ է։</span>
              </>
            ) : (
              <>
                <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
                <span>
                  Respuesta incorrecta (La correcta es la {question.correctAnswer}) / Սխալ պատասխան
                </span>
              </>
            )}
          </div>

          <div className="space-y-3 text-sm sm:text-base leading-relaxed">
            <div className="font-medium text-slate-800 bg-white/85 p-4 rounded-xl border border-slate-200/60 shadow-2xs">
              <span className="font-bold text-slate-900 block mb-1 text-base">
                🇪🇸 Explicación detallada:
              </span>
              {question.explanation.es}
            </div>

            <div className="font-armenian text-slate-800 bg-white/85 p-4 rounded-xl border border-slate-200/60 shadow-2xs">
              <span className="font-sans font-bold text-slate-900 block mb-1 text-base">
                🇦🇲 Մանրամասն բացատրություն․
              </span>
              {question.explanation.hy}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
