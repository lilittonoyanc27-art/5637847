import React, { useState } from 'react';
import { Volume2, Languages, Check, Copy } from 'lucide-react';
import { BilingualText } from './types';

interface InteractiveBilingualTextProps {
  text: BilingualText;
  variant?: 'inline' | 'card' | 'verse' | 'heading' | 'callout' | 'minimal';
  className?: string;
  forceShowBoth?: boolean;
  highlightSpanish?: boolean;
  badge?: string;
  size?: 'sm' | 'base' | 'lg' | 'xl';
}

export const InteractiveBilingualText: React.FC<InteractiveBilingualTextProps> = ({
  text,
  variant = 'card',
  className = '',
  forceShowBoth = false,
  highlightSpanish = false,
  badge,
  size = 'base',
}) => {
  const [showArmenian, setShowArmenian] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const isArmenianVisible = forceShowBoth || showArmenian;

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text.es);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${text.es}\n\n${text.hy}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleTranslation = () => {
    if (!forceShowBoth) {
      setShowArmenian(prev => !prev);
    }
  };

  const textSizeClass = {
    sm: 'text-base sm:text-base',
    base: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl',
    xl: 'text-xl sm:text-2xl font-bold',
  }[size];

  if (variant === 'inline') {
    return (
      <span className={`inline-block relative group ${className}`}>
        <button
          type="button"
          onClick={toggleTranslation}
          className="text-left font-semibold text-slate-900 hover:text-indigo-600 transition-colors inline-flex items-center gap-1.5 focus:outline-none underline decoration-indigo-200 hover:decoration-indigo-500 cursor-pointer text-base sm:text-lg"
          title="Haz clic para ver la traducción en armenio / Սեղմիր հայերեն թարգմանության համար"
        >
          <span>{text.es}</span>
          <Languages className="w-4 h-4 text-indigo-400 group-hover:text-indigo-600 shrink-0 inline" />
        </button>
        {isArmenianVisible && (
          <span className="block text-indigo-800 bg-indigo-50/95 text-base mt-1.5 px-3 py-1.5 rounded-lg border border-indigo-100 font-armenian leading-relaxed animate-fadeIn">
            🇦🇲 {text.hy}
          </span>
        )}
      </span>
    );
  }

  if (variant === 'verse') {
    return (
      <div
        onClick={toggleTranslation}
        className={`cursor-pointer rounded-2xl p-6 border transition-all duration-200 select-text ${
          isArmenianVisible
            ? 'bg-amber-50/70 border-amber-200/90 shadow-sm'
            : 'bg-white/90 border-slate-200 hover:border-amber-300 hover:bg-amber-50/30 hover:shadow'
        } ${className}`}
      >
        <div className="flex items-center justify-between gap-3 mb-3 pb-2.5 border-b border-amber-100">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-amber-100 text-amber-900">
              🇪🇸 Verso / Չափածո
            </span>
            <button
              onClick={handleSpeak}
              className={`p-1.5 rounded-lg text-slate-500 hover:text-amber-700 hover:bg-amber-100/70 transition-colors ${
                isPlaying ? 'text-amber-600 animate-pulse' : ''
              }`}
              title="Escuchar pronunciación"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
          <span className="text-xs sm:text-sm text-amber-800 font-semibold flex items-center gap-1.5">
            <Languages className="w-4 h-4" />
            {isArmenianVisible ? 'Թաքցնել հայերենը' : 'Սեղմիր թարգմանության համար'}
          </span>
        </div>

        <div className="font-literary text-slate-900 whitespace-pre-line text-xl sm:text-2xl leading-relaxed italic border-l-4 border-amber-400 pl-4 py-1.5">
          {text.es}
        </div>

        {isArmenianVisible && (
          <div className="mt-4 pt-3.5 border-t border-amber-200/80 font-armenian text-slate-800 whitespace-pre-line text-base sm:text-lg leading-relaxed pl-4 bg-amber-100/50 rounded-xl p-3.5">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block mb-1">
              🇦🇲 Հայերեն թարգմանություն
            </span>
            {text.hy}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      onClick={toggleTranslation}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTranslation();
        }
      }}
      className={`group relative text-left rounded-xl transition-all duration-200 cursor-pointer outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 select-text ${
        variant === 'callout'
          ? 'p-4 bg-sky-50 border border-sky-200 hover:border-sky-300'
          : variant === 'minimal'
          ? 'p-2.5 hover:bg-indigo-50/50 rounded-lg'
          : `p-4 border ${
              isArmenianVisible
                ? 'bg-slate-50/90 border-indigo-200 shadow-xs'
                : 'bg-white border-slate-200/90 hover:border-indigo-300 hover:bg-slate-50/40 hover:shadow-xs'
            }`
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          {badge && (
            <span className="inline-block mb-1.5 px-2 py-0.5 text-xs font-semibold rounded bg-slate-100 text-slate-700 uppercase tracking-wide">
              {badge}
            </span>
          )}
          <div
            className={`font-medium ${textSizeClass} leading-relaxed ${
              highlightSpanish ? 'text-indigo-950 font-semibold' : 'text-slate-800'
            }`}
          >
            {text.es}
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0 ml-2 pt-0.5">
          <button
            type="button"
            onClick={handleSpeak}
            className={`p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-slate-100 transition-colors ${
              isPlaying ? 'text-indigo-600 bg-indigo-50 animate-pulse' : ''
            }`}
            title="Escuchar en español"
          >
            <Volume2 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            title="Copiar texto"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>
          {!forceShowBoth && (
            <span
              className={`p-1.5 rounded-lg transition-colors flex items-center gap-1 text-xs font-medium ${
                isArmenianVisible
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-slate-400 group-hover:text-indigo-600 group-hover:bg-slate-100'
              }`}
              title="Traducir al armenio / Թարգմանել հայերեն"
            >
              <Languages className="w-4 h-4" />
              <span className="hidden sm:inline text-[11px]">
                {isArmenianVisible ? 'Հայերեն' : 'Armenio'}
              </span>
            </span>
          )}
        </div>
      </div>

      {isArmenianVisible && (
        <div className="mt-3.5 pt-3 border-t border-indigo-100/90 font-armenian text-slate-800 text-base sm:text-lg leading-relaxed flex items-start gap-2.5 bg-indigo-50/75 p-3 rounded-xl">
          <span className="shrink-0 text-xs px-2 py-0.5 rounded-md bg-indigo-200 text-indigo-950 font-sans font-bold">
            ՀԱՅ
          </span>
          <span className="flex-1">{text.hy}</span>
        </div>
      )}
    </div>
  );
};
