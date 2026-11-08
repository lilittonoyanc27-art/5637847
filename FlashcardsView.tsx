import React, { useState } from 'react';
import { RotateCw, Volume2, ChevronLeft, ChevronRight, Shuffle, Check, Award } from 'lucide-react';

interface Flashcard {
  id: number;
  term: string;
  category: string;
  armTerm: string;
  definition: string;
  armDefinition: string;
  example?: string;
  armExample?: string;
}

const FLASHCARDS: Flashcard[] = [
  {
    id: 1,
    term: 'Lírica',
    category: 'Géneros Literarios',
    armTerm: 'Քնարերգություն',
    definition: 'Género literario que expresa sentimientos, emociones o una visión subjetiva del yo lírico.',
    armDefinition: 'Գրական սեռ, որն արտահայտում է հույզեր, զգացմունքներ և սուբյեկտիվ ընկալում։',
    example: '«Hoy la alegría llama a mi ventana, mi corazón es un jardín en flor».',
    armExample: '«Այսօր ուրախությունը թակում է պատուհանս, սիրտս ծաղկած պարտեզ է»։',
  },
  {
    id: 2,
    term: 'Narrativa',
    category: 'Géneros Literarios',
    armTerm: 'Պատմողական գրականություն',
    definition: 'Género que cuenta hechos que les suceden a unos personajes en un tiempo y espacio determinados mediante un narrador.',
    armDefinition: 'Գրական սեռ, որը պատմում է որոշակի ժամանակում և վայրում կերպարների հետ տեղի ունեցող դեպքերի մասին։',
    example: '«Clara encontró una llave debajo de un árbol. La guardó en su bolsillo…»',
    armExample: '«Կլարան ծառի տակ բանալի գտավ։ Այն դրեց գրպանը…»',
  },
  {
    id: 3,
    term: 'Teatro (Dramático)',
    category: 'Géneros Literarios',
    armTerm: 'Թատրոն (Դրամատիկական սեռ)',
    definition: 'Presenta una acción dialogada destinada a ser representada por actores en un escenario ante un público.',
    armDefinition: 'Ներկայացնում է երկխոսությունների վրա հիմնված գործողություն՝ նախատեսված բեմում դերասանների կողմից խաղալու համար։',
  },
  {
    id: 4,
    term: 'Acotaciones',
    category: 'Teatro',
    armTerm: 'Բեմական ցուցումներ',
    definition: 'Indicaciones del autor (a menudo entre paréntesis) sobre movimientos, gestos, tono de voz o iluminación. No se pronuncian.',
    armDefinition: 'Հեղինակի ցուցումները (հաճախ փակագծերում) դերասանի շարժումների, ժեստերի կամ ձայնի մասին։ Չեն արտասանվում։',
    example: '«(Entra corriendo y habla en voz baja.)»',
    armExample: '«(Վազելով ներս է մտնում և ցածրաձայն խոսում։)»',
  },
  {
    id: 5,
    term: 'Atrezo',
    category: 'Teatro',
    armTerm: 'Բեմական պարագաներ',
    definition: 'Objetos manipulados o utilizados en la representación teatral (carta, maleta, taza, teléfono).',
    armDefinition: 'Բեմադրության ընթացքում օգտագործվող շարժական առարկաներ (նամակ, ճամպրուկ, բաժակ և այլն)։',
  },
  {
    id: 6,
    term: 'Decorado',
    category: 'Teatro',
    armTerm: 'Բեմանկար (Դեկորացիա)',
    definition: 'Conjunto de elementos visuales que representan y ambientan el lugar donde sucede la acción.',
    armDefinition: 'Գործողության վայրը պատկերող և ձևավորող տարրերի ամբողջությունը բեմում։',
  },
  {
    id: 7,
    term: 'Vestuario',
    category: 'Teatro',
    armTerm: 'Բեմական հագուստ',
    definition: 'Ropa e indumentaria que llevan los actores para caracterizar a sus respectivos personajes.',
    armDefinition: 'Հագուստ, որը կրում են դերասանները՝ իրենց կերպարներին մարմնավորելու համար։',
  },
  {
    id: 8,
    term: 'Aliteración',
    category: 'Recursos Fónicos',
    armTerm: 'Ալիտերացիա',
    definition: 'Repetición expresiva de uno o varios sonidos (fonemas) para evocar un efecto sonoro.',
    armDefinition: 'Հնչյունների արտահայտիչ կրկնություն բանաստեղծական խոսքում։',
    example: '«Sus suaves susurros» (repite /s/).',
    armExample: '«Sus suaves susurros» (կրկնվում է /s/ հնչյունը)։',
  },
  {
    id: 9,
    term: 'Anáfora',
    category: 'Recursos Morfosintácticos',
    armTerm: 'Անաֆորա',
    definition: 'Repetición intencionada de una o más palabras al comienzo de versos o enunciados sucesivos.',
    armDefinition: 'Բառերի կամ կառույցների կրկնություն հաջորդական տողերի կամ նախադասությունների սկզբում։',
    example: '«Quiero cantar. / Quiero soñar. / Quiero vivir».',
    armExample: '«Ուզում եմ երգել։ / Ուզում եմ երազել…»։',
  },
  {
    id: 10,
    term: 'Metáfora',
    category: 'Recursos Semánticos',
    armTerm: 'Փոխաբերություն',
    definition: 'Identifica una realidad con otra basándose en una semejanza sin nexo comparativo directo.',
    armDefinition: 'Նմանության հիման վրա մի երևույթի նույնացումը մյուսի հետ՝ առանց «ինչպես/պես» բառի։',
    example: '«Tus ojos son estrellas».',
    armExample: '«Քո աչքերը աստղեր են»։',
  },
  {
    id: 11,
    term: 'Personificación',
    category: 'Recursos Semánticos',
    armTerm: 'Անձնավորում',
    definition: 'Atribución de cualidades, acciones o sentimientos humanos a seres inanimados o ideas abstractas.',
    armDefinition: 'Մարդկային հատկանիշների և գործողությունների վերագրումը անշունչ առարկաներին կամ բնությանը։',
    example: '«La luna me sonrió» / «El agua canta».',
    armExample: '«Լուսինը ժպտաց ինձ» / «Ջուրը երգում է»։',
  },
  {
    id: 12,
    term: 'Comparación (Símil)',
    category: 'Recursos Semánticos',
    armTerm: 'Համեմատություն',
    definition: 'Relación de semejanza entre dos elementos introducida explícitamente por «como» o nexo similar.',
    armDefinition: 'Երկու երևույթների նմանեցում «como» (ինչպես, պես) բառի միջոցով։',
    example: '«Tus ojos brillan como estrellas».',
    armExample: '«Քո աչքերը փայլում են աստղերի պես»։',
  },
  {
    id: 13,
    term: 'Autor vs Narrador',
    category: 'Narrativa',
    armTerm: 'Հեղինակ և Պատմող',
    definition: 'El autor es la persona real que escribe la obra; el narrador es la voz ficticia interna que cuenta la historia.',
    armDefinition: 'Հեղինակը գրող իրական մարդն է, իսկ պատմողը՝ տեքստի ներսում պատմությունը շարադրող ձայնը։',
  },
  {
    id: 14,
    term: 'Prosa poética',
    category: 'Lírica',
    armTerm: 'Բանաստեղծական արձակ',
    definition: 'Forma escrita en párrafos y oraciones continuas que mantiene ritmo lírico, imágenes y expresión subjetiva.',
    armDefinition: 'Արձակ ձևով գրված տեքստ, որը պահպանում է բանաստեղծական ռիթմը, պատկերները և հույզերը։',
  },
];

export const FlashcardsView: React.FC = () => {
  const [cards, setCards] = useState<Flashcard[]>(FLASHCARDS);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [knownCards, setKnownCards] = useState<number[]>([]);

  const card = cards[currentIndex];

  const handleSpeak = (text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'es-ES';
      window.speechSynthesis.speak(u);
    }
  };

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const shuffleCards = () => {
    setIsFlipped(false);
    setCards([...cards].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
  };

  const markKnown = () => {
    if (!knownCards.includes(card.id)) {
      setKnownCards([...knownCards, card.id]);
    }
    nextCard();
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white rounded-3xl p-6 shadow-lg flex items-center justify-between">
        <div>
          <span className="px-3 py-1 rounded-full bg-white/15 text-xs font-semibold uppercase tracking-wider">
            Tarjetas de Estudio / Ֆլեշ-քարտեր
          </span>
          <h2 className="text-xl sm:text-2xl font-black mt-1">Conceptos Clave de Literatura</h2>
          <p className="text-xs sm:text-sm text-purple-200 font-armenian mt-0.5">
            Սեղմիր քարտի վրա՝ շրջելու և հայերեն թարգմանությունն ու բացատրությունը տեսնելու համար։
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black text-amber-300">
            {knownCards.length} / {cards.length}
          </div>
          <div className="text-[11px] text-purple-200 uppercase font-semibold">Aprendidas</div>
        </div>
      </div>

      {/* Main Flashcard */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className={`w-full min-h-[340px] rounded-3xl border-2 transition-all duration-300 p-8 flex flex-col justify-between cursor-pointer shadow-lg select-text ${
          isFlipped
            ? 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-300 shadow-indigo-100'
            : 'bg-white border-slate-200 hover:border-purple-400 hover:shadow-xl'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 uppercase tracking-wider">
            {card.category}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => handleSpeak(card.term, e)}
              className="p-2 rounded-xl text-slate-400 hover:text-purple-600 hover:bg-white transition-colors"
              title="Escuchar en español"
            >
              <Volume2 className="w-5 h-5" />
            </button>
            <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
              <RotateCw className="w-3.5 h-3.5" />
              {isFlipped ? 'Volver al frente' : 'Girar tarjeta'}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="my-auto text-center space-y-4 py-4">
          {!isFlipped ? (
            /* FRONT: SPANISH TERM */
            <div className="space-y-3">
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {card.term}
              </h3>
              <p className="text-sm text-slate-500">
                Haz clic en la tarjeta para revelar la traducción al armenio y la definición completa
              </p>
            </div>
          ) : (
            /* BACK: ARMENIAN TRANSLATION & FULL DEFINITION */
            <div className="space-y-4 animate-fadeIn">
              <div>
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-1">
                  Հայերեն եզրույթ
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-indigo-950 font-armenian">
                  {card.armTerm}
                </h3>
              </div>

              <div className="space-y-2 text-left max-w-xl mx-auto bg-white/80 p-4 rounded-2xl border border-indigo-100">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">Definición (Español):</span>
                  <p className="text-sm font-medium text-slate-800">{card.definition}</p>
                </div>
                <div className="pt-2 border-t border-indigo-50">
                  <span className="text-xs font-bold text-slate-500 uppercase block font-armenian">Սահմանում (Հայերեն)․</span>
                  <p className="text-sm text-slate-700 font-armenian">{card.armDefinition}</p>
                </div>
              </div>

              {card.example && (
                <div className="text-xs text-slate-600 bg-amber-50/70 border border-amber-200 p-2.5 rounded-xl max-w-xl mx-auto text-left">
                  <span className="font-bold text-amber-900 block">Ejemplo: {card.example}</span>
                  {card.armExample && (
                    <span className="font-armenian text-slate-600 block mt-0.5">Օրինակ․ {card.armExample}</span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Card Footer Indicator */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100">
          <span>Tarjeta {currentIndex + 1} de {cards.length}</span>
          <span className="font-armenian">{isFlipped ? '🇦🇲 Հայերեն կողմ' : '🇪🇸 Իսպաներեն կողմ'}</span>
        </div>
      </div>

      {/* Control buttons */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={prevCard}
          className="p-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 cursor-pointer shadow-xs"
          title="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={shuffleCards}
            className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Shuffle className="w-4 h-4" />
            <span>Barajar</span>
          </button>
          <button
            onClick={markKnown}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs ${
              knownCards.includes(card.id)
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
            }`}
          >
            <Check className="w-4 h-4" />
            <span>{knownCards.includes(card.id) ? 'Aprendida ✓' : 'Marcar aprendida'}</span>
          </button>
        </div>

        <button
          onClick={nextCard}
          className="p-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 cursor-pointer shadow-xs"
          title="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
