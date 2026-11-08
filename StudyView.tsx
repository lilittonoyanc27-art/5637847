import React, { useState } from 'react';
import {
  BookOpen,
  Heart,
  Theater,
  HelpCircle,
  CheckCircle,
  FileText,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Languages,
  PenTool,
  Award,
  Layers,
  Search,
} from 'lucide-react';
import {
  STUDY_HEADER,
  SECTION_1_DATA,
  SECTION_2_DATA,
  SECTION_3_DATA,
  SECTION_4_DATA,
  SECTION_5_DATA,
  SECTION_6_DATA,
  SECTION_7_DATA,
  SECTION_7_WORDS,
  SECTION_8_DATA,
  SECTION_9_DATA,
  SECTION_10_DATA,
} from './studyData';
import { InteractiveBilingualText } from './InteractiveBilingualText';

export const StudyView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [forceShowAllArmenian, setForceShowAllArmenian] = useState<boolean>(false);
  const [searchFilter, setSearchFilter] = useState<string>('');

  // Interactive state for Verdadero/Falso section
  const [tfAnswers, setTfAnswers] = useState<Record<number, boolean>>({});
  // Interactive state for Completa los huecos section
  const [fillAnswers, setFillAnswers] = useState<Record<number, string>>({});
  const [showFillAnswers, setShowFillAnswers] = useState<boolean>(false);
  // Expandable state for QA and Exam sections
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (key: string) => {
    setExpandedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const sectionsList = [
    { id: 1, title: '1. Géneros literarios', hy: 'Գրականության սեռերը', icon: Layers },
    { id: 2, title: '2. La lírica', hy: 'Քնարերգություն', icon: Heart },
    { id: 3, title: '3. La narrativa', hy: 'Պատմողական', icon: BookOpen },
    { id: 4, title: '4. El teatro', hy: 'Թատրոն', icon: Theater },
    { id: 5, title: '5. Preguntas de examen', hy: 'Քննական հարցեր (12)', icon: HelpCircle },
    { id: 6, title: '6. Verdadero o Falso', hy: 'Ճիշտ է, թե սխալ (12)', icon: CheckCircle },
    { id: 7, title: '7. Completa huecos', hy: 'Լրացրու բացերը (10)', icon: PenTool },
    { id: 8, title: '8. Textos para analizar', hy: 'Տեքստերի վերլուծություն', icon: FileText },
    { id: 9, title: '9. Transforma y crea', hy: 'Փոխակերպի՛ր և ստեղծի՛ր', icon: Sparkles },
    { id: 10, title: '10. Miniexamen (20 pts)', hy: 'Փոքր քննություն', icon: Award },
  ];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider border border-indigo-400/20">
              📚 Guía Oficial Bilingüe / Երկլեզու Ուսումնական Նյութ
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {STUDY_HEADER.title.es}
            </h1>
            <p className="font-armenian text-indigo-200/90 text-sm sm:text-base leading-relaxed">
              {STUDY_HEADER.title.hy}
            </p>
            <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed pt-1">
              {STUDY_HEADER.description.es}
            </p>
          </div>

          {/* Global Mode Switcher */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shrink-0 space-y-2">
            <div className="text-xs font-bold text-indigo-200 uppercase tracking-wider flex items-center gap-1.5">
              <Languages className="w-4 h-4 text-amber-300" />
              <span>Modo de traducción</span>
            </div>
            <button
              onClick={() => setForceShowAllArmenian((prev) => !prev)}
              className={`w-full py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                forceShowAllArmenian
                  ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              <span>{forceShowAllArmenian ? '🇦🇲 Mostrar todo en armenio' : '🖱️ Clic en español para traducir'}</span>
            </button>
            <p className="text-[11px] text-slate-300 font-armenian text-center pt-0.5">
              Սեղմիր ցանկացած տեքստի վրա՝ հայերենը տեսնելու համար
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="bg-white rounded-2xl p-2.5 border border-slate-200/80 shadow-xs flex items-center gap-1.5 overflow-x-auto scrollbar-none">
        {sectionsList.map((sec) => {
          const Icon = sec.icon;
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{sec.title}</span>
            </button>
          );
        })}
      </div>

      {/* SECTION CONTENT */}

      {/* 1. GÉNEROS LITERARIOS */}
      {activeSection === 1 && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Sección 1</span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">{SECTION_1_DATA.title.es}</h2>
              <p className="font-armenian text-slate-500 text-sm mt-0.5">{SECTION_1_DATA.title.hy}</p>
            </div>

            {/* Definition */}
            <div>
              <h3 className="text-base font-bold text-slate-800 mb-2">
                {SECTION_1_DATA.definitionTitle.es}
              </h3>
              <InteractiveBilingualText
                text={SECTION_1_DATA.definition}
                forceShowBoth={forceShowAllArmenian}
                variant="card"
                className="bg-indigo-50/40 border-indigo-100"
              />
            </div>

            {/* Comparison Cards for the 3 genres */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider">
                Los tres grandes géneros y sus rasgos principales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {SECTION_1_DATA.genresTable.map((g, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 hover:shadow-md transition-shadow space-y-3"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">{g.genre.es}</h4>
                        <span className="font-armenian text-xs text-indigo-700">{g.genre.hy}</span>
                      </div>
                    </div>
                    <InteractiveBilingualText
                      text={g.characteristic}
                      forceShowBoth={forceShowAllArmenian}
                      variant="minimal"
                      size="sm"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Important Idea */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{SECTION_1_DATA.importantIdea.title.es} / {SECTION_1_DATA.importantIdea.title.hy}</span>
              </div>
              <InteractiveBilingualText
                text={SECTION_1_DATA.importantIdea.content}
                forceShowBoth={forceShowAllArmenian}
                variant="callout"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. LA LÍRICA */}
      {activeSection === 2 && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Sección 2</span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">{SECTION_2_DATA.title.es}</h2>
            <p className="font-armenian text-slate-500 text-sm mt-0.5">{SECTION_2_DATA.title.hy}</p>
          </div>

          <div className="space-y-6">
            {SECTION_2_DATA.concepts.map((concept) => (
              <div
                key={concept.id}
                className="p-5 sm:p-6 rounded-2xl border border-slate-200/80 bg-slate-50/30 space-y-4"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 font-extrabold text-xs flex items-center justify-center">
                    {concept.letter}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{concept.title.es}</h3>
                    <p className="font-armenian text-xs text-rose-800">{concept.title.hy}</p>
                  </div>
                </div>

                <InteractiveBilingualText
                  text={concept.explanation}
                  forceShowBoth={forceShowAllArmenian}
                  variant="card"
                />

                {/* Example if exists */}
                {concept.example && (
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ejemplo / Օրինակ:</span>
                    <InteractiveBilingualText
                      text={{ es: concept.example.es, hy: concept.example.hy }}
                      forceShowBoth={forceShowAllArmenian}
                      variant="verse"
                    />
                    {concept.example.explanation && (
                      <InteractiveBilingualText
                        text={concept.example.explanation}
                        forceShowBoth={forceShowAllArmenian}
                        variant="callout"
                        size="sm"
                      />
                    )}
                  </div>
                )}

                {/* Table if exists */}
                {concept.table && (
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[11px] tracking-wider">
                        <tr>
                          {concept.table.headers.map((h, i) => (
                            <th key={i} className="p-3">
                              <div>{h.es}</div>
                              <div className="font-armenian text-[10px] text-slate-500 font-normal">{h.hy}</div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {concept.table.rows.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50">
                            <td className="p-3 font-semibold text-slate-900 whitespace-nowrap">
                              <div>{row.col1.es}</div>
                              <div className="font-armenian text-xs text-indigo-700 font-normal">{row.col1.hy}</div>
                            </td>
                            <td className="p-3 text-slate-700">
                              <div>{row.col2.es}</div>
                              <div className="font-armenian text-xs text-slate-500">{row.col2.hy}</div>
                            </td>
                            {row.col3 && (
                              <td className="p-3 text-slate-600 font-mono text-xs">
                                <div>{row.col3.es}</div>
                                <div className="font-armenian text-[11px] text-slate-500 font-sans">{row.col3.hy}</div>
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Bullets if exist */}
                {concept.bullets && (
                  <div className="space-y-2">
                    {concept.bullets.map((b, i) => (
                      <InteractiveBilingualText
                        key={i}
                        text={b}
                        forceShowBoth={forceShowAllArmenian}
                        variant="minimal"
                        size="sm"
                      />
                    ))}
                  </div>
                )}

                {/* Note if exists */}
                {concept.note && (
                  <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs sm:text-sm">
                    <InteractiveBilingualText
                      text={concept.note}
                      forceShowBoth={forceShowAllArmenian}
                      variant="callout"
                      size="sm"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. LA NARRATIVA */}
      {activeSection === 3 && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Sección 3</span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">{SECTION_3_DATA.title.es}</h2>
            <p className="font-armenian text-slate-500 text-sm mt-0.5">{SECTION_3_DATA.title.hy}</p>
          </div>

          <div className="space-y-6">
            {SECTION_3_DATA.concepts.map((concept) => (
              <div
                key={concept.id}
                className="p-5 sm:p-6 rounded-2xl border border-slate-200/80 bg-slate-50/30 space-y-4"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 font-extrabold text-xs flex items-center justify-center">
                    {concept.letter}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{concept.title.es}</h3>
                    <p className="font-armenian text-xs text-sky-800">{concept.title.hy}</p>
                  </div>
                </div>

                <InteractiveBilingualText
                  text={concept.explanation}
                  forceShowBoth={forceShowAllArmenian}
                  variant="card"
                />

                {/* Example */}
                {concept.example && (
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ejemplo / Օրինակ:</span>
                    <InteractiveBilingualText
                      text={{ es: concept.example.es, hy: concept.example.hy }}
                      forceShowBoth={forceShowAllArmenian}
                      variant="card"
                      className="bg-white border-sky-200"
                    />
                    {concept.example.explanation && (
                      <InteractiveBilingualText
                        text={concept.example.explanation}
                        forceShowBoth={forceShowAllArmenian}
                        variant="callout"
                        size="sm"
                      />
                    )}
                  </div>
                )}

                {/* Table */}
                {concept.table && (
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[11px] tracking-wider">
                        <tr>
                          {concept.table.headers.map((h, i) => (
                            <th key={i} className="p-3">
                              <div>{h.es}</div>
                              <div className="font-armenian text-[10px] text-slate-500 font-normal">{h.hy}</div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {concept.table.rows.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50">
                            <td className="p-3 font-semibold text-slate-900 whitespace-nowrap">
                              <div>{row.col1.es}</div>
                              <div className="font-armenian text-xs text-sky-700 font-normal">{row.col1.hy}</div>
                            </td>
                            <td className="p-3 text-slate-700">
                              <div>{row.col2.es}</div>
                              <div className="font-armenian text-xs text-slate-500">{row.col2.hy}</div>
                            </td>
                            {row.col3 && (
                              <td className="p-3 text-slate-600 font-mono text-xs">
                                <div>{row.col3.es}</div>
                                <div className="font-armenian text-[11px] text-slate-500 font-sans">{row.col3.hy}</div>
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Bullets */}
                {concept.bullets && (
                  <div className="space-y-2">
                    {concept.bullets.map((b, i) => (
                      <InteractiveBilingualText
                        key={i}
                        text={b}
                        forceShowBoth={forceShowAllArmenian}
                        variant="minimal"
                        size="sm"
                      />
                    ))}
                  </div>
                )}

                {/* Note */}
                {concept.note && (
                  <InteractiveBilingualText
                    text={concept.note}
                    forceShowBoth={forceShowAllArmenian}
                    variant="callout"
                    size="sm"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. EL TEATRO */}
      {activeSection === 4 && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Sección 4</span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">{SECTION_4_DATA.title.es}</h2>
            <p className="font-armenian text-slate-500 text-sm mt-0.5">{SECTION_4_DATA.title.hy}</p>
          </div>

          <div className="space-y-6">
            {SECTION_4_DATA.concepts.map((concept) => (
              <div
                key={concept.id}
                className="p-5 sm:p-6 rounded-2xl border border-slate-200/80 bg-slate-50/30 space-y-4"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 font-extrabold text-xs flex items-center justify-center">
                    {concept.letter}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{concept.title.es}</h3>
                    <p className="font-armenian text-xs text-amber-800">{concept.title.hy}</p>
                  </div>
                </div>

                <InteractiveBilingualText
                  text={concept.explanation}
                  forceShowBoth={forceShowAllArmenian}
                  variant="card"
                />

                {/* Example */}
                {concept.example && (
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Ejemplo teatral / Թատերական օրինակ:
                    </span>
                    <InteractiveBilingualText
                      text={{ es: concept.example.es, hy: concept.example.hy }}
                      forceShowBoth={forceShowAllArmenian}
                      variant="card"
                      className="bg-amber-50/50 border-amber-200 font-mono text-sm"
                    />
                    {concept.example.explanation && (
                      <InteractiveBilingualText
                        text={concept.example.explanation}
                        forceShowBoth={forceShowAllArmenian}
                        variant="callout"
                        size="sm"
                      />
                    )}
                  </div>
                )}

                {/* Table */}
                {concept.table && (
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[11px] tracking-wider">
                        <tr>
                          {concept.table.headers.map((h, i) => (
                            <th key={i} className="p-3">
                              <div>{h.es}</div>
                              <div className="font-armenian text-[10px] text-slate-500 font-normal">{h.hy}</div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {concept.table.rows.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50">
                            <td className="p-3 font-semibold text-slate-900 whitespace-nowrap">
                              <div>{row.col1.es}</div>
                              <div className="font-armenian text-xs text-amber-700 font-normal">{row.col1.hy}</div>
                            </td>
                            <td className="p-3 text-slate-700">
                              <div>{row.col2.es}</div>
                              <div className="font-armenian text-xs text-slate-500">{row.col2.hy}</div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. PREGUNTAS DE EXAMEN (12) */}
      {activeSection === 5 && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Sección 5</span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">
              Preguntas de examen con respuestas modelo (1–12)
            </h2>
            <p className="font-armenian text-slate-500 text-sm mt-0.5">
              Քննական հարցեր՝ պատասխանների օրինակներով
            </p>
          </div>

          <div className="space-y-4">
            {SECTION_5_DATA.map((qa) => {
              const isExpanded = expandedItems[`qa_${qa.id}`];
              return (
                <div
                  key={qa.id}
                  className="rounded-2xl border border-slate-200/90 p-5 hover:border-indigo-300 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <InteractiveBilingualText
                      text={qa.question}
                      forceShowBoth={forceShowAllArmenian}
                      variant="minimal"
                      highlightSpanish
                      className="p-0 font-bold"
                    />
                    <button
                      onClick={() => toggleExpand(`qa_${qa.id}`)}
                      className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold shrink-0 cursor-pointer flex items-center gap-1"
                    >
                      <span>{isExpanded ? 'Ocultar respuesta' : 'Ver respuesta'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-100 animate-fadeIn">
                      <InteractiveBilingualText
                        text={qa.answer}
                        forceShowBoth={forceShowAllArmenian}
                        variant="callout"
                        badge="Respuesta modelo / Պատասխան"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 6. VERDADERO O FALSO */}
      {activeSection === 6 && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Sección 6</span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">Verdadero o Falso: Justifica (1–12)</h2>
            <p className="font-armenian text-slate-500 text-sm mt-0.5">
              Ճիշտ է, թե սխալ․ հիմնավորի՛ր։ Փորձիր ինքնուրույն պատասխանել։
            </p>
          </div>

          <div className="space-y-4">
            {SECTION_6_DATA.map((item) => {
              const userPick = tfAnswers[item.id];
              const isAnswered = userPick !== undefined;
              const isUserCorrect = userPick === item.isTrue;

              return (
                <div
                  key={item.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isAnswered
                      ? isUserCorrect
                        ? 'border-emerald-300 bg-emerald-50/30'
                        : 'border-rose-300 bg-rose-50/30'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <InteractiveBilingualText
                    text={item.statement}
                    forceShowBoth={forceShowAllArmenian}
                    variant="minimal"
                    className="p-0 font-medium"
                  />

                  {/* True / False Buttons */}
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => setTfAnswers((prev) => ({ ...prev, [item.id]: true }))}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        userPick === true
                          ? item.isTrue
                            ? 'bg-emerald-600 text-white'
                            : 'bg-rose-600 text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      ✓ Verdadero / Ճիշտ է
                    </button>
                    <button
                      onClick={() => setTfAnswers((prev) => ({ ...prev, [item.id]: false }))}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        userPick === false
                          ? !item.isTrue
                            ? 'bg-emerald-600 text-white'
                            : 'bg-rose-600 text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      ✗ Falso / Սխալ է
                    </button>

                    {isAnswered && (
                      <span className="text-xs font-bold ml-2">
                        {isUserCorrect ? '🎉 ¡Correcto!' : '❌ Incorrecto'}
                      </span>
                    )}
                  </div>

                  {/* Justification */}
                  {isAnswered && (
                    <div className="mt-3 pt-2.5 border-t border-slate-200/60 animate-fadeIn">
                      <InteractiveBilingualText
                        text={item.justification}
                        forceShowBoth={forceShowAllArmenian}
                        variant="callout"
                        size="sm"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 7. COMPLETA LOS HUECOS */}
      {activeSection === 7 && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Sección 7</span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">Completa los huecos (1–10)</h2>
            <p className="font-armenian text-slate-500 text-sm mt-0.5">
              Լրացրու բաց թողնված տեղերը բառերի ցանկից։
            </p>
          </div>

          {/* Word Bank */}
          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 space-y-2">
            <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider">
              Banco de palabras / Բառերի ցանկ:
            </span>
            <div className="flex flex-wrap gap-2">
              {SECTION_7_WORDS.map((w, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-white border border-indigo-200 text-xs font-semibold text-indigo-950 shadow-2xs"
                >
                  {w.es} <span className="text-indigo-400">({w.hy})</span>
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {SECTION_7_DATA.map((item) => {
              const currentVal = fillAnswers[item.id] || '';
              const isFilled = currentVal.trim().length > 0;
              const isMatch = currentVal.trim().toLowerCase() === item.blank.toLowerCase();

              return (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/40 space-y-2"
                >
                  <div className="text-sm font-medium text-slate-800 flex flex-wrap items-center gap-1.5 leading-loose">
                    <span className="font-bold text-indigo-600">{item.id}.</span>
                    <span>{item.before.es}</span>
                    <input
                      type="text"
                      placeholder="escribe aquí..."
                      value={currentVal}
                      onChange={(e) => setFillAnswers({ ...fillAnswers, [item.id]: e.target.value })}
                      className={`px-3 py-1 rounded-lg border text-sm font-semibold max-w-[140px] focus:outline-none focus:ring-2 ${
                        isFilled
                          ? isMatch
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50 text-rose-900'
                          : 'border-slate-300 bg-white focus:ring-indigo-500'
                      }`}
                    />
                    <span>{item.after.es}</span>

                    {showFillAnswers && (
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded ml-2">
                        [{item.blank}]
                      </span>
                    )}
                  </div>

                  {/* Armenian translation */}
                  <div className="font-armenian text-xs text-slate-500 pt-1 border-t border-slate-200/60">
                    🇦🇲 {item.before.hy} [{showFillAnswers ? item.blankArm : '__________'}] {item.after.hy}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              onClick={() => setShowFillAnswers((prev) => !prev)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer"
            >
              {showFillAnswers ? 'Ocultar soluciones' : 'Comprobar / Mostrar soluciones'}
            </button>
          </div>
        </div>
      )}

      {/* 8. TEXTOS PARA ANALIZAR */}
      {activeSection === 8 && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-violet-600 uppercase tracking-wider">Sección 8</span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">Textos para analizar (A, B, C, D, E)</h2>
            <p className="font-armenian text-slate-500 text-sm mt-0.5">
              Վերլուծության տեքստեր՝ հարցերով և մոդելային պատասխաններով։
            </p>
          </div>

          <div className="space-y-8">
            {SECTION_8_DATA.map((textItem) => (
              <div
                key={textItem.id}
                className="p-6 rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 space-y-5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-indigo-600" />
                    <span>{textItem.title.es}</span>
                    <span className="font-armenian text-sm font-normal text-slate-500">
                      ({textItem.title.hy})
                    </span>
                  </h3>
                </div>

                {/* Original poem/prose/play text */}
                <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
                  <InteractiveBilingualText
                    text={textItem.originalText}
                    forceShowBoth={forceShowAllArmenian}
                    variant="verse"
                  />
                </div>

                {/* Analysis Questions */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Preguntas de análisis / Վերլուծական հարցեր:
                  </h4>
                  <div className="space-y-2.5">
                    {textItem.questions.map((q) => {
                      const qKey = `textq_${textItem.id}_${q.id}`;
                      const isExpanded = expandedItems[qKey];

                      return (
                        <div
                          key={q.id}
                          className="p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 transition-all space-y-2"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <InteractiveBilingualText
                              text={q.question}
                              forceShowBoth={forceShowAllArmenian}
                              variant="minimal"
                              className="p-0 font-medium"
                            />
                            <button
                              onClick={() => toggleExpand(qKey)}
                              className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 shrink-0 cursor-pointer"
                            >
                              {isExpanded ? 'Ocultar' : 'Ver solución'}
                            </button>
                          </div>

                          {isExpanded && (
                            <div className="mt-2 pt-2 border-t border-slate-100 animate-fadeIn">
                              <InteractiveBilingualText
                                text={q.answer}
                                forceShowBoth={forceShowAllArmenian}
                                variant="callout"
                                size="sm"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 9. TRANSFORMA Y CREA */}
      {activeSection === 9 && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Sección 9</span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">Transforma y crea (A, B, C, D, E)</h2>
            <p className="font-armenian text-slate-500 text-sm mt-0.5">
              Փոխակերպի՛ր և ստեղծի՛ր գրական սեռերի միջև։
            </p>
          </div>

          <div className="space-y-6">
            {SECTION_9_DATA.map((t) => (
              <div
                key={t.id}
                className="p-5 sm:p-6 rounded-2xl border border-slate-200/90 bg-slate-50/40 space-y-4"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-extrabold text-xs flex items-center justify-center">
                    {t.letter}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">{t.title.es}</h3>
                    <p className="font-armenian text-xs text-amber-800">{t.title.hy}</p>
                  </div>
                </div>

                <InteractiveBilingualText
                  text={t.instruction}
                  forceShowBoth={forceShowAllArmenian}
                  variant="minimal"
                  className="p-0 font-medium text-slate-700"
                />

                {t.sourceText && (
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase">Texto origen / Ելակետային տեքստ:</span>
                    <InteractiveBilingualText
                      text={t.sourceText}
                      forceShowBoth={forceShowAllArmenian}
                      variant="card"
                      className="bg-white border-slate-200"
                    />
                  </div>
                )}

                <div className="space-y-1">
                  <span className="text-xs font-bold text-emerald-700 uppercase">
                    Modelo de transformación / Լուծման օրինակ:
                  </span>
                  <InteractiveBilingualText
                    text={t.modelAnswer}
                    forceShowBoth={forceShowAllArmenian}
                    variant="callout"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 10. MINIEXAMEN (20 PUNTOS) */}
      {activeSection === 10 && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Sección 10</span>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-slate-900 mt-1">Miniexamen sin ayuda (20 puntos)</h2>
                <p className="font-armenian text-slate-500 text-sm mt-0.5">
                  Փոքր քննություն՝ առանց օգնության (Տևողությունը՝ 30–40 րոպե, Ընդամենը՝ 20 միավոր)
                </p>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 font-extrabold text-sm">
                20 pts
              </span>
            </div>
          </div>

          <div className="space-y-5">
            {SECTION_10_DATA.map((q) => {
              const isExpanded = expandedItems[`mini_${q.id}`];

              return (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold text-xs">
                        {q.points} {q.points === 1 ? 'punto' : 'puntos'}
                      </span>
                      <InteractiveBilingualText
                        text={q.question}
                        forceShowBoth={forceShowAllArmenian}
                        variant="minimal"
                        className="p-0 font-bold text-slate-900"
                      />
                    </div>
                    <button
                      onClick={() => toggleExpand(`mini_${q.id}`)}
                      className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold shrink-0 cursor-pointer"
                    >
                      {isExpanded ? 'Ocultar corrección' : 'Ver corrección'}
                    </button>
                  </div>

                  {q.textContext && (
                    <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
                      <InteractiveBilingualText
                        text={q.textContext}
                        forceShowBoth={forceShowAllArmenian}
                        variant="minimal"
                        className="p-0 italic font-literary"
                      />
                    </div>
                  )}

                  {q.subQuestions && (
                    <div className="space-y-2 pl-2">
                      {q.subQuestions.map((sq, i) => (
                        <div key={i} className="text-xs sm:text-sm text-slate-700 space-y-1">
                          <span className="font-bold text-indigo-700 mr-2">{sq.letter})</span>
                          <InteractiveBilingualText
                            text={sq.question}
                            forceShowBoth={forceShowAllArmenian}
                            variant="minimal"
                            className="p-0 inline"
                          />
                          {isExpanded && (
                            <div className="pl-4 mt-1">
                              <InteractiveBilingualText
                                text={sq.answer}
                                forceShowBoth={forceShowAllArmenian}
                                variant="callout"
                                size="sm"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {q.answer && isExpanded && (
                    <div className="pt-2 border-t border-slate-100 animate-fadeIn">
                      <InteractiveBilingualText
                        text={q.answer}
                        forceShowBoth={forceShowAllArmenian}
                        variant="callout"
                        badge="Corrección modelo / Ճիշտ պատասխան"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
