import {
  BilingualText,
  StudyConcept,
  ExamQA,
  TrueFalseItem,
  FillBlankItem,
  TextAnalysisItem,
  TransformTask,
  MiniExamQuestion,
} from './types';

export const STUDY_HEADER: { title: BilingualText; description: BilingualText } = {
  title: {
    es: 'Preparación para el examen: los grandes géneros literarios',
    hy: 'Քննության նախապատրաստում․ գրականության հիմնական սեռերը',
  },
  description: {
    es: 'Este material sigue los temas de tu hoja: lírica, narrativa y teatro. Incluye explicaciones, preguntas de examen, ejercicios, textos para analizar y respuestas al final.',
    hy: 'Այս նյութը կազմված է քո թերթիկի թեմաների հիման վրա՝ քնարերգություն, պատմողական գրականություն և թատրոն։ Ներառում է բացատրություններ, քննական հարցեր, վարժություններ, վերլուծության տեքստեր և վերջում՝ պատասխաններ։',
  },
};

// 1. LOS GÉNEROS LITERARIOS
export const SECTION_1_DATA = {
  title: {
    es: '1. Los géneros literarios',
    hy: '1. Գրականության սեռերը',
  },
  definitionTitle: {
    es: '¿Qué son los géneros literarios?',
    hy: 'Ի՞նչ են գրականության սեռերը։',
  },
  definition: {
    es: 'Son grandes grupos en los que clasificamos las obras literarias según sus características: qué expresan, cómo presentan los hechos y cómo están construidas.',
    hy: 'Դրանք մեծ խմբեր են, որոնց մեջ դասակարգում ենք գրական ստեղծագործությունները՝ ըստ դրանց առանձնահատկությունների․ ինչ են արտահայտում, ինչպես են ներկայացնում դեպքերը և ինչպես են կառուցված։',
  },
  genresTable: [
    {
      genre: { es: 'Lírica', hy: 'Քնարերգություն' },
      characteristic: {
        es: 'Expresa sentimientos, emociones o una visión subjetiva.',
        hy: 'Արտահայտում է զգացմունքներ, հույզեր կամ սուբյեկտիվ ընկալում։',
      },
      icon: 'heart',
      color: 'rose',
    },
    {
      genre: { es: 'Narrativa', hy: 'Պատմողական գրականություն' },
      characteristic: {
        es: 'Cuenta una historia, normalmente mediante un narrador.',
        hy: 'Պատմում է պատմություն՝ սովորաբար պատմողի միջոցով։',
      },
      icon: 'book-open',
      color: 'blue',
    },
    {
      genre: { es: 'Teatro o género dramático', hy: 'Դրամատիկական սեռ' },
      characteristic: {
        es: 'Presenta una acción destinada a representarse ante un público.',
        hy: 'Ներկայացնում է գործողություն, որը նախատեսված է հանդիսատեսի առաջ բեմադրելու համար։',
      },
      icon: 'theater',
      color: 'amber',
    },
  ],
  importantIdea: {
    title: { es: 'Una idea muy importante', hy: 'Շատ կարևոր միտք' },
    content: {
      es: 'El género no se reconoce únicamente por la forma. Un texto en verso no siempre es lírico, y un diálogo no siempre pertenece al teatro.',
      hy: 'Գրական սեռը չենք որոշում միայն արտաքին ձևով։ Չափածո տեքստը միշտ քնարերգություն չէ, իսկ երկխոսությունը միշտ թատերական ստեղծագործության մաս չէ։',
    },
  },
};

// 2. LA LÍRICA
export const SECTION_2_DATA: {
  title: BilingualText;
  concepts: StudyConcept[];
} = {
  title: {
    es: '2. La lírica',
    hy: '2. Քնարերգություն',
  },
  concepts: [
    {
      id: 'lirica-a',
      letter: 'A',
      title: {
        es: 'Expresión de sentimientos',
        hy: 'Զգացմունքների արտահայտում',
      },
      explanation: {
        es: 'En la lírica predominan los sentimientos, las emociones y la visión personal de una voz poética: alegría, tristeza, amor, miedo, soledad, esperanza…',
        hy: 'Քնարերգության մեջ գերակշռում են բանաստեղծական խոսողի զգացմունքները, հույզերը և անձնական ընկալումը՝ ուրախություն, տխրություն, սեր, վախ, մենություն, հույս…',
      },
      example: {
        es: 'Desde que te has marchado,\nmi casa parece más grande\ny mis días, más vacíos.',
        hy: 'Քո հեռանալուց հետո\nտունս ավելի մեծ է թվում,\nիսկ օրերս՝ ավելի դատարկ։',
        explanation: {
          es: 'Lo fundamental no es una sucesión de aventuras, sino el sentimiento de soledad.',
          hy: 'Այստեղ հիմնականը արկածների հաջորդականությունը չէ, այլ մենության զգացումը։',
        },
      },
    },
    {
      id: 'lirica-b',
      letter: 'B',
      title: {
        es: 'Discurso subjetivo',
        hy: 'Սուբյեկտիվ խոսք',
      },
      explanation: {
        es: '«Subjetivo» significa que presenta una percepción personal, influida por sentimientos u opiniones.',
        hy: '«Սուբյեկտիվ» նշանակում է, որ ներկայացվում է անձնական ընկալում՝ զգացմունքների կամ կարծիքների ազդեցությամբ։',
      },
      bullets: [
        {
          es: 'Información objetiva: La casa tiene tres ventanas.',
          hy: 'Օբյեկտիվ տեղեկություն․ Տունն ունի երեք պատուհան։',
        },
        {
          es: 'Expresión subjetiva: Mi casa es el lugar más acogedor del mundo.',
          hy: 'Սուբյեկտիվ արտահայտություն․ Իմ տունն աշխարհի ամենահարմարավետ վայրն է։',
        },
      ],
      note: {
        es: 'En tu hoja aparece «discurso subjetivo del autor o autora». Para analizar con precisión, podemos hablar de voz poética o yo lírico. Esa voz no tiene por qué coincidir exactamente con la persona real que escribió el poema.',
        hy: 'Քո թերթիկում գրված է «հեղինակի սուբյեկտիվ խոսք»։ Ավելի ճշգրիտ վերլուծության ժամանակ կարող ենք ասել բանաստեղծական խոսող կամ քնարական «ես»։ Այդ խոսողը պարտադիր չէ ամբողջությամբ համընկնի բանաստեղծությունը գրած իրական մարդու հետ։',
      },
    },
    {
      id: 'lirica-c',
      letter: 'C',
      title: {
        es: 'Preferencia por el verso',
        hy: 'Չափածոյի նախընտրություն',
      },
      explanation: {
        es: 'La lírica utiliza frecuentemente el verso, pero también puede estar escrita en prosa poética.',
        hy: 'Քնարերգության մեջ հաճախ օգտագործվում է չափածոն, բայց այն կարող է գրված լինել նաև բանաստեղծական արձակով։',
      },
      table: {
        headers: [
          { es: 'Concepto', hy: 'Հասկացություն' },
          { es: 'Explicación', hy: 'Բացատրություն' },
        ],
        rows: [
          {
            col1: { es: 'Verso', hy: 'Չափածո տող' },
            col2: {
              es: 'Cada línea de un poema.',
              hy: 'Բանաստեղծության յուրաքանչյուր տողը։',
            },
          },
          {
            col1: { es: 'Estrofa', hy: 'Բանաստեղծական տուն' },
            col2: {
              es: 'Conjunto de versos agrupados.',
              hy: 'Միավորված բանաստեղծական տողերի խումբը։',
            },
          },
          {
            col1: { es: 'Prosa', hy: 'Արձակ' },
            col2: {
              es: 'Forma de escritura organizada normalmente en oraciones y párrafos.',
              hy: 'Գրության ձև, որը սովորաբար կազմակերպվում է նախադասություններով և պարբերություններով։',
            },
          },
          {
            col1: { es: 'Prosa poética', hy: 'Բանաստեղծական արձակ' },
            col2: {
              es: 'Prosa con lenguaje expresivo, imágenes y ritmo poético.',
              hy: 'Արձակ՝ արտահայտիչ լեզվով, պատկերներով և բանաստեղծական ռիթմով։',
            },
          },
        ],
      },
      note: {
        es: '¡Atención! Preferencia por el verso significa que se utiliza con frecuencia, no que sea obligatorio.',
        hy: 'Ուշադրությո՛ւն։ Չափածոյի նախընտրություն նշանակում է, որ այն օգտագործվում է հաճախ, ոչ թե պարտադիր։',
      },
    },
    {
      id: 'lirica-d',
      letter: 'D',
      title: {
        es: 'Ritmo y musicalidad',
        hy: 'Ռիթմ և երաժշտականություն',
      },
      explanation: {
        es: 'El ritmo puede surgir de los acentos, las pausas, la medida de los versos y las repeticiones. La musicalidad se relaciona con el efecto sonoro de las palabras. La rima puede contribuir, pero no todos los poemas tienen rima.',
        hy: 'Ռիթմը կարող է առաջանալ շեշտերից, դադարներից, չափածո տողերի չափից և կրկնություններից։ Երաժշտականությունը կապված է բառերի հնչողության հետ։ Հանգը կարող է նպաստել դրան, բայց ոչ բոլոր բանաստեղծություններն ունեն հանգ։',
      },
    },
    {
      id: 'lirica-e',
      letter: 'E',
      title: {
        es: 'Recursos retóricos',
        hy: 'Գեղարվեստական արտահայտչամիջոցներ',
      },
      explanation: {
        es: 'En tu hoja se distinguen tres grandes grupos: fónicos, morfosintácticos y semánticos.',
        hy: 'Քո թերթիկում առանձնացված են երեք խումբ՝ հնչյունային, ձևաբանական-շարահյուսական և իմաստային։',
      },
      table: {
        headers: [
          { es: 'Tipo', hy: 'Տեսակ' },
          { es: '¿En qué se centra?', hy: 'Ինչի՞ն է վերաբերում։' },
          { es: 'Ejemplo', hy: 'Օրինակ' },
        ],
        rows: [
          {
            col1: { es: 'Fónicos', hy: 'Հնչյունային' },
            col2: { es: 'En los sonidos.', hy: 'Հնչյուններին։' },
            col3: {
              es: 'Aliteración: «Sus suaves susurros». Repite el sonido /s/.',
              hy: 'Ալիտերացիա․ «Sus suaves susurros»։ Կրկնվում է /s/ հնչյունը։',
            },
          },
          {
            col1: { es: 'Morfosintácticos', hy: 'Ձևաբանական-շարահյուսական' },
            col2: {
              es: 'En la forma, el orden o la repetición de palabras y estructuras.',
              hy: 'Բառերի ու կառույցների ձևին, դասավորությանը կամ կրկնությանը։',
            },
            col3: {
              es: 'Anáfora: «Quiero cantar. / Quiero soñar». Repite «Quiero» al inicio.',
              hy: 'Անաֆորա․ «Quiero cantar. / Quiero soñar»։ Տողերի սկզբում կրկնվում է «Quiero» բառը։',
            },
          },
          {
            col1: { es: 'Semánticos', hy: 'Իմաստային' },
            col2: { es: 'En el significado de las palabras.', hy: 'Բառերի իմաստին։' },
            col3: {
              es: 'Metáfora: «Tus ojos son estrellas». Los ojos se identifican con estrellas.',
              hy: 'Փոխաբերություն․ «Tus ojos son estrellas» («Քո աչքերը աստղեր են»)․ աչքերը նույնացվում են աստղերի հետ։',
            },
          },
        ],
      },
      bullets: [
        {
          es: 'Personificación: «El viento me susurra secretos». Se atribuye una acción humana al viento.',
          hy: 'Անձնավորում․ «Քամին ինձ գաղտնիքներ է շշնջում»։ Քամուն վերագրվում է մարդկային գործողություն։',
        },
        {
          es: 'Comparación: «Tus ojos brillan como estrellas». La relación se expresa mediante «como».',
          hy: 'Համեմատություն․ «Քո աչքերը փայլում են աստղերի պես»։ Համեմատությունն արտահայտվում է «como» (պես) բառով։',
        },
      ],
      note: {
        es: 'Estos recursos también pueden aparecer en la narrativa y en el teatro.',
        hy: 'Այս արտահայտչամիջոցները կարող են հանդիպել նաև պատմողական և թատերական ստեղծագործություններում։',
      },
    },
  ],
};

// 3. LA NARRATIVA
export const SECTION_3_DATA: {
  title: BilingualText;
  concepts: StudyConcept[];
} = {
  title: {
    es: '3. La narrativa',
    hy: '3. Պատմողական գրականություն',
  },
  concepts: [
    {
      id: 'narrativa-a',
      letter: 'A',
      title: {
        es: 'Cuenta una historia',
        hy: 'Պատմում է պատմություն',
      },
      explanation: {
        es: 'La narrativa cuenta hechos que les suceden a unos personajes en un tiempo y un espacio determinados.',
        hy: 'Պատմողական գրականությունը պատմում է որոշակի ժամանակում և վայրում կերպարների հետ կատարվող դեպքերի մասին։',
      },
      example: {
        es: 'Clara encontró una llave debajo de un árbol. La guardó en su bolsillo y decidió buscar la puerta que abría.',
        hy: 'Կլարան ծառի տակ բանալի գտավ։ Այն դրեց գրպանը և որոշեց փնտրել այն դուռը, որը բացվում էր այդ բանալիով։',
        explanation: {
          es: 'Hay un personaje, varias acciones y una historia que puede continuar.',
          hy: 'Կա կերպար, մի քանի գործողություն և պատմություն, որը կարող է շարունակվել։',
        },
      },
    },
    {
      id: 'narrativa-b',
      letter: 'B',
      title: {
        es: 'Autor y narrador',
        hy: 'Հեղինակ և պատմող',
      },
      explanation: {
        es: 'El autor es la persona real que escribe la obra. El narrador es la voz que cuenta la historia dentro del texto.',
        hy: 'Հեղինակը իրական մարդն է, որը գրում է ստեղծագործությունը։ Պատմողը տեքստի ներսում պատմությունը ներկայացնող ձայնն է։',
      },
      note: {
        es: 'Aunque el narrador diga «yo», no debemos suponer que todo le ocurrió al autor.',
        hy: 'Նույնիսկ եթե պատմողն ասում է «ես», չպետք է ենթադրենք, որ ամեն ինչ պատահել է հեղինակին։',
      },
    },
    {
      id: 'narrativa-c',
      letter: 'C',
      title: {
        es: 'Primera y tercera persona',
        hy: 'Առաջին և երրորդ դեմք',
      },
      explanation: {
        es: 'El narrador en primera persona suele participar como protagonista o testigo. El narrador en tercera persona cuenta lo que les sucede a otros personajes.',
        hy: 'Առաջին դեմքով պատմողը սովորաբար մասնակցում է դեպքերին՝ որպես գլխավոր հերոս կամ ականատես։ Երրորդ դեմքով պատմողը ներկայացնում է այն, ինչ պատահում է մյուս կերպարներին։',
      },
      table: {
        headers: [
          { es: 'Narrador', hy: 'Պատմող' },
          { es: 'Ejemplo', hy: 'Օրինակ' },
          { es: 'Pistas', hy: 'Հուշող ձևեր' },
        ],
        rows: [
          {
            col1: { es: 'Primera persona', hy: 'Առաջին դեմք' },
            col2: {
              es: '«Abrí la puerta y vi una carta».',
              hy: '«Բացեցի դուռը և նամակ տեսա»։',
            },
            col3: {
              es: 'Yo, nosotros; abrí, vimos, encontré.',
              hy: 'Ես, մենք և համապատասխան բայաձևերը։',
            },
          },
          {
            col1: { es: 'Tercera persona', hy: 'Երրորդ դեմք' },
            col2: {
              es: '«Marta abrió la puerta y vio una carta».',
              hy: '«Մարտան բացեց դուռը և նամակ տեսավ»։',
            },
            col3: {
              es: 'Él, ella, ellos; abrió, vieron, encontró.',
              hy: 'Նա, նրանք և համապատասխան բայաձևերը։',
            },
          },
        ],
      },
      note: {
        es: 'Tu hoja indica que también existen textos narrativos sin narrador explícito. Para este examen, lo esencial es reconocer que la presencia de un narrador es una característica habitual de la narrativa.',
        hy: 'Քո թերթիկում նշվում է նաև, որ կան պատմողական տեքստեր՝ առանց բացահայտ պատմողի։ Այս քննության համար հիմնականը հասկանալն է, որ պատմողի առկայությունը պատմողական գրականության սովորական հատկանիշ է։',
      },
    },
    {
      id: 'narrativa-d',
      letter: 'D',
      title: {
        es: 'Ficción y realidad',
        hy: 'Հորինվածք և իրականություն',
      },
      explanation: {
        es: 'En la narrativa literaria, la historia puede ser ficticia e incorporar lugares, acontecimientos o elementos de la realidad.',
        hy: 'Գրական պատմության սյուժեն կարող է հորինված լինել և միաժամանակ ներառել իրական վայրեր, իրադարձություններ կամ այլ տարրեր։',
      },
      example: {
        es: 'Una niña inventada encuentra un mapa misterioso en Madrid.',
        hy: 'Հորինված մի աղջիկ Մադրիդում խորհրդավոր քարտեզ է գտնում։',
        explanation: {
          es: 'Madrid es una ciudad real, pero la niña y su aventura pueden ser inventadas. La ficción no tiene que incluir magia: también puede presentar situaciones completamente posibles.',
          hy: 'Մադրիդն իրական քաղաք է, բայց աղջիկն ու նրա արկածը կարող են հորինված լինել։ Հորինվածքը պարտադիր չէ կախարդական տարրեր պարունակի․ այն կարող է ներկայացնել լիովին հնարավոր իրավիճակներ։',
        },
      },
    },
    {
      id: 'narrativa-e',
      letter: 'E',
      title: {
        es: 'Prosa, descripción y verso',
        hy: 'Արձակ, նկարագրություն և չափածո',
      },
      explanation: {
        es: 'Actualmente, muchas obras narrativas se escriben en prosa. En ellas se combinan con frecuencia narración, descripción y diálogo. La tradición épica utilizó el verso.',
        hy: 'Այսօր բազմաթիվ պատմողական ստեղծագործություններ գրվում են արձակով։ Դրանցում հաճախ համադրվում են պատմումը, նկարագրությունը և երկխոսությունը։ Էպիկական ավանդույթում օգտագործվել է չափածոն։',
      },
      bullets: [
        {
          es: 'Narración: «Lucía entró en la habitación». Cuenta una acción.',
          hy: 'Պատմում․ «Լուսիան մտավ սենյակ»։ Ներկայացնում է գործողություն։',
        },
        {
          es: 'Descripción: «La habitación era pequeña, luminosa y silenciosa». Explica cómo es algo.',
          hy: 'Նկարագրություն․ «Սենյակը փոքր էր, լուսավոր և լուռ»։ Ասում է՝ ինչպիսին է ինչ-որ բան։',
        },
        {
          es: 'Diálogo: «—¿Hay alguien aquí? —preguntó Lucía». Reproduce las palabras de un personaje.',
          hy: 'Երկխոսություն․ «— Այստեղ մարդ կա՞,— հարցրեց Լուսիան»։ Ներկայացնում է կերպարի խոսքը։',
        },
      ],
    },
  ],
};

// 4. EL TEATRO
export const SECTION_4_DATA: {
  title: BilingualText;
  concepts: StudyConcept[];
} = {
  title: {
    es: '4. El teatro',
    hy: '4. Թատրոն',
  },
  concepts: [
    {
      id: 'teatro-a',
      letter: 'A',
      title: {
        es: 'Representación ante un público',
        hy: 'Բեմադրություն հանդիսատեսի առաջ',
      },
      explanation: {
        es: 'El texto teatral presenta una acción destinada a ser representada por actores y actrices en un escenario ante un público.',
        hy: 'Թատերական տեքստը ներկայացնում է գործողություն, որը նախատեսված է դերասանների կողմից բեմում՝ հանդիսատեսի առաջ ներկայացնելու համար։',
      },
    },
    {
      id: 'teatro-b',
      letter: 'B',
      title: {
        es: 'Diálogo y ausencia habitual de narrador',
        hy: 'Երկխոսություն և պատմողի սովորական բացակայություն',
      },
      explanation: {
        es: 'En el teatro, la historia avanza principalmente mediante las palabras y acciones de los personajes. Habitualmente no hay un narrador, aunque algunas obras sí pueden incluirlo.',
        hy: 'Թատրոնում պատմությունը զարգանում է հիմնականում կերպարների խոսքի և գործողությունների միջոցով։ Սովորաբար պատմող չկա, թեև որոշ ստեղծագործություններում այն կարող է լինել։',
      },
      example: {
        es: 'LUCÍA: ¿Has encontrado la carta?\nDIEGO: Sí, estaba debajo de la mesa.',
        hy: 'ԼՈՒՍԻԱ․ Գտե՞լ ես նամակը։\nԴԻԵԳՈ․ Այո՛, սեղանի տակ էր։',
      },
    },
    {
      id: 'teatro-c',
      letter: 'C',
      title: {
        es: 'Acotaciones',
        hy: 'Բեմական ցուցումներ',
      },
      explanation: {
        es: 'Las acotaciones son indicaciones sobre los movimientos, los gestos, el tono de voz, el espacio, la iluminación u otros elementos de la representación. A menudo aparecen entre paréntesis.',
        hy: 'Բեմական ցուցումները տեղեկություններ են շարժումների, ժեստերի, ձայնի տոնի, տարածքի, լուսավորության կամ բեմադրության այլ տարրերի մասին։ Դրանք հաճախ գրվում են փակագծերում։',
      },
      example: {
        es: 'LUCÍA: (Entra corriendo y habla en voz baja.) Creo que alguien nos sigue.',
        hy: 'ԼՈՒՍԻԱ․ (Վազելով ներս է մտնում և ցածրաձայն խոսում։) Կարծում եմ՝ ինչ-որ մեկը հետևում է մեզ։',
        explanation: {
          es: 'La actriz realiza lo indicado entre paréntesis; normalmente no lo pronuncia como parte de su intervención.',
          hy: 'Դերասանուհին կատարում է փակագծերում նշվածը․ սովորաբար այդ բառերը չի արտասանում որպես իր խոսքի մաս։',
        },
      },
    },
    {
      id: 'teatro-d',
      letter: 'D',
      title: {
        es: 'Códigos diversos',
        hy: 'Արտահայտման տարբեր միջոցներ',
      },
      explanation: {
        es: 'Una representación utiliza palabras, entonación, gestos, movimientos, música, sonidos, luces y elementos visuales.',
        hy: 'Բեմադրության մեջ օգտագործվում են բառեր, հնչերանգ, ժեստեր, շարժումներ, երաժշտություն, ձայներ, լույսեր և տեսողական տարրեր։',
      },
      table: {
        headers: [
          { es: 'Elemento', hy: 'Տարր' },
          { es: 'Significado', hy: 'Նշանակություն' },
        ],
        rows: [
          {
            col1: { es: 'Atrezo', hy: 'Բեմական պարագաներ' },
            col2: {
              es: 'Objetos utilizados en la representación: una carta, una maleta, una taza…',
              hy: 'Բեմադրության մեջ օգտագործվող առարկաներ՝ նամակ, ճամպրուկ, բաժակ…',
            },
          },
          {
            col1: { es: 'Decorado', hy: 'Բեմանկար, դեկորացիա' },
            col2: {
              es: 'Elementos que representan el lugar de la acción.',
              hy: 'Գործողության վայրը պատկերող տարրեր։',
            },
          },
          {
            col1: { es: 'Vestuario', hy: 'Բեմական հագուստ' },
            col2: {
              es: 'Ropa que llevan los actores para representar a sus personajes.',
              hy: 'Հագուստ, որը դերասանները կրում են իրենց կերպարներին ներկայացնելիս։',
            },
          },
          {
            col1: { es: 'Gestos', hy: 'Ժեստեր' },
            col2: {
              es: 'Movimientos expresivos del rostro o del cuerpo.',
              hy: 'Դեմքի կամ մարմնի արտահայտիչ շարժումներ։',
            },
          },
        ],
      },
    },
    {
      id: 'teatro-e',
      letter: 'E',
      title: {
        es: 'Prosa y verso',
        hy: 'Արձակ և չափածո',
      },
      explanation: {
        es: 'Actualmente es frecuente el teatro en prosa, pero también existen obras teatrales en verso. El verso tuvo mucha importancia en diversas tradiciones teatrales antiguas.',
        hy: 'Այսօր տարածված է արձակ թատրոնը, բայց գոյություն ունեն նաև չափածո թատերական ստեղծագործություններ։ Չափածոն մեծ դեր է ունեցել անցյալի տարբեր թատերական ավանդույթներում։',
      },
    },
  ],
};

// 5. PREGUNTAS DE EXAMEN CON RESPUESTAS MODELO
export const SECTION_5_DATA: ExamQA[] = [
  {
    id: 1,
    question: {
      es: '1. ¿Cuáles son los tres grandes géneros literarios?',
      hy: '1. Որո՞նք են գրականության երեք հիմնական սեռերը։',
    },
    answer: {
      es: 'Son la lírica, la narrativa y el teatro.',
      hy: 'Քնարերգությունը, պատմողական գրականությունը և դրամատիկական սեռը։',
    },
  },
  {
    id: 2,
    question: {
      es: '2. ¿Qué predomina en la lírica?',
      hy: '2. Ի՞նչն է գերակշռում քնարերգության մեջ։',
    },
    answer: {
      es: 'Predomina la expresión de sentimientos y emociones desde una perspectiva subjetiva.',
      hy: 'Գերակշռում է զգացմունքների և հույզերի արտահայտումը սուբյեկտիվ տեսանկյունից։',
    },
  },
  {
    id: 3,
    question: {
      es: '3. ¿La lírica siempre está escrita en verso?',
      hy: '3. Քնարերգությունը մի՞շտ է գրվում չափածոյով։',
    },
    answer: {
      es: 'No. Aunque suele utilizar el verso, también existe la prosa poética.',
      hy: 'Ո՛չ։ Թեև սովորաբար օգտագործվում է չափածոն, կա նաև բանաստեղծական արձակ։',
    },
  },
  {
    id: 4,
    question: {
      es: '4. ¿Todos los poemas tienen rima?',
      hy: '4. Բոլոր բանաստեղծություններն ունե՞ն հանգ։',
    },
    answer: {
      es: 'No. Un poema puede tener ritmo y musicalidad sin presentar rima.',
      hy: 'Ո՛չ։ Բանաստեղծությունը կարող է ունենալ ռիթմ և երաժշտականություն՝ առանց հանգի։',
    },
  },
  {
    id: 5,
    question: {
      es: '5. ¿Qué tipos de recursos retóricos aparecen en la hoja?',
      hy: '5. Արտահայտչամիջոցների ի՞նչ տեսակներ են նշված թերթիկում։',
    },
    answer: {
      es: 'Aparecen los recursos fónicos, morfosintácticos y semánticos.',
      hy: 'Նշված են հնչյունային, ձևաբանական-շարահյուսական և իմաստային արտահայտչամիջոցները։',
    },
  },
  {
    id: 6,
    question: {
      es: '6. ¿Cuál es la diferencia entre autor y narrador?',
      hy: '6. Ո՞րն է հեղինակի և պատմողի տարբերությունը։',
    },
    answer: {
      es: 'El autor escribe la obra; el narrador cuenta la historia dentro del texto.',
      hy: 'Հեղինակը գրում է ստեղծագործությունը, իսկ պատմողը տեքստի ներսում պատմում է պատմությունը։',
    },
  },
  {
    id: 7,
    question: {
      es: '7. ¿Cómo reconocemos a un narrador en primera persona?',
      hy: '7. Ինչպե՞ս ենք ճանաչում առաջին դեմքով պատմողին։',
    },
    answer: {
      es: 'Utiliza formas como «yo», «nosotros», «encontré» o «vimos» para contar los hechos.',
      hy: 'Դեպքերը պատմելիս օգտագործում է «ես», «մենք» և համապատասխան բայաձևեր, օրինակ՝ «գտա», «տեսանք»։',
    },
  },
  {
    id: 8,
    question: {
      es: '8. ¿Puede una historia ficticia incluir elementos reales?',
      hy: '8. Հորինված պատմությունը կարո՞ղ է ներառել իրական տարրեր։',
    },
    answer: {
      es: 'Sí. Puede incluir lugares o acontecimientos reales y combinarlos con personajes y acciones inventados.',
      hy: 'Այո՛։ Այն կարող է ներառել իրական վայրեր կամ իրադարձություններ և դրանք համադրել հորինված կերպարների ու գործողությունների հետ։',
    },
  },
  {
    id: 9,
    question: {
      es: '9. ¿Qué diferencia hay entre narración y descripción?',
      hy: '9. Ի՞նչ տարբերություն կա պատմման և նկարագրության միջև։',
    },
    answer: {
      es: 'La narración cuenta lo que ocurre; la descripción explica cómo es una persona, un lugar o un objeto.',
      hy: 'Պատմումը ներկայացնում է, թե ինչ է կատարվում, իսկ նկարագրությունն ասում է՝ ինչպիսին է մարդը, վայրը կամ առարկան։',
    },
  },
  {
    id: 10,
    question: {
      es: '10. ¿Para qué se escribe principalmente una obra teatral?',
      hy: '10. Հիմնականում ինչի՞ համար է գրվում թատերական ստեղծագործությունը։',
    },
    answer: {
      es: 'Para ser representada por actores ante un público.',
      hy: 'Որպեսզի դերասաններն այն ներկայացնեն հանդիսատեսի առաջ։',
    },
  },
  {
    id: 11,
    question: {
      es: '11. ¿Qué son las acotaciones?',
      hy: '11. Ի՞նչ են բեմական ցուցումները։',
    },
    answer: {
      es: 'Son indicaciones que orientan la representación, por ejemplo, sobre gestos, movimientos o tono de voz.',
      hy: 'Դրանք բեմադրությունն ուղղորդող ցուցումներ են, օրինակ՝ ժեստերի, շարժումների կամ ձայնի տոնի մասին։',
    },
  },
  {
    id: 12,
    question: {
      es: '12. ¿En qué se diferencian atrezo, decorado y vestuario?',
      hy: '12. Ինչո՞վ են տարբերվում բեմական պարագաները, բեմանկարը և բեմական հագուստը։',
    },
    answer: {
      es: 'El atrezo son los objetos utilizados; el decorado representa el lugar; el vestuario es la ropa de los personajes.',
      hy: 'Բեմական պարագաները օգտագործվող առարկաներն են, բեմանկարը ներկայացնում է վայրը, իսկ բեմական հագուստը կերպարների հագուստն է։',
    },
  },
];

// 6. VERDADERO O FALSO: JUSTIFICA
export const SECTION_6_DATA: TrueFalseItem[] = [
  {
    id: 1,
    statement: {
      es: '1. La lírica presenta frecuentemente una visión subjetiva.',
      hy: '1. Քնարերգությունը հաճախ ներկայացնում է սուբյեկտիվ ընկալում։',
    },
    isTrue: true,
    justification: {
      es: 'Verdadero. La subjetividad es frecuente en la lírica.',
      hy: 'Ճիշտ է։ Սուբյեկտիվությունը բնորոշ է քնարերգությանը։',
    },
  },
  {
    id: 2,
    statement: {
      es: '2. Todos los textos escritos en verso pertenecen a la lírica.',
      hy: '2. Չափածոյով գրված բոլոր տեքստերը պատկանում են քնարերգությանը։',
    },
    isTrue: false,
    justification: {
      es: 'Falso. También existen narraciones y obras teatrales en verso.',
      hy: 'Սխալ է։ Կան նաև չափածո պատմողական և թատերական ստեղծագործություններ։',
    },
  },
  {
    id: 3,
    statement: {
      es: '3. Un poema puede carecer de rima.',
      hy: '3. Բանաստեղծությունը կարող է հանգ չունենալ։',
    },
    isTrue: true,
    justification: {
      es: 'Verdadero. La rima no es obligatoria.',
      hy: 'Ճիշտ է։ Հանգը պարտադիր չէ։',
    },
  },
  {
    id: 4,
    statement: {
      es: '4. El autor y el narrador son siempre la misma persona.',
      hy: '4. Հեղինակը և պատմողը միշտ նույն անձն են։',
    },
    isTrue: false,
    justification: {
      es: 'Falso. El autor es una persona real; el narrador es una voz del texto.',
      hy: 'Սխալ է։ Հեղինակը իրական մարդ է, իսկ պատմողը՝ տեքստի ձայնը։',
    },
  },
  {
    id: 5,
    statement: {
      es: '5. Un relato puede incluir descripciones y diálogos.',
      hy: '5. Պատմությունը կարող է ներառել նկարագրություններ և երկխոսություններ։',
    },
    isTrue: true,
    justification: {
      es: 'Verdadero. Una narración puede combinar esas formas.',
      hy: 'Ճիշտ է։ Պատմողական տեքստը կարող է համադրել այդ ձևերը։',
    },
  },
  {
    id: 6,
    statement: {
      es: '6. Una historia situada en una ciudad real tiene que ser verdadera.',
      hy: '6. Իրական քաղաքում տեղի ունեցող պատմությունը պարտադիր պետք է իրական լինի։',
    },
    isTrue: false,
    justification: {
      es: 'Falso. Un lugar real puede aparecer en una historia inventada.',
      hy: 'Սխալ է։ Իրական վայրը կարող է հայտնվել հորինված պատմության մեջ։',
    },
  },
  {
    id: 7,
    statement: {
      es: '7. «Encontré una caja» es una forma de narrar en primera persona.',
      hy: '7. «Ես մի տուփ գտա» («Encontré una caja») նախադասությունը առաջին դեմքով պատմելու օրինակ է։',
    },
    isTrue: true,
    justification: {
      es: 'Verdadero. «Encontré» es una forma de primera persona del singular.',
      hy: 'Ճիշտ է։ «Encontré» բայը եզակի թվի առաջին դեմքով է։',
    },
  },
  {
    id: 8,
    statement: {
      es: '8. La finalidad principal del teatro es la representación.',
      hy: '8. Թատրոնի հիմնական նպատակը բեմադրությունն է։',
    },
    isTrue: true,
    justification: {
      es: 'Verdadero. El texto teatral está destinado a la representación.',
      hy: 'Ճիշտ է։ Թատերական տեքստը նախատեսված է բեմադրության համար։',
    },
  },
  {
    id: 9,
    statement: {
      es: '9. Las acotaciones son siempre palabras que los personajes deben pronunciar.',
      hy: '9. Բեմական ցուցումները միշտ բառեր են, որոնք կերպարները պետք է արտասանեն։',
    },
    isTrue: false,
    justification: {
      es: 'Falso. Las acotaciones orientan la representación y normalmente no se pronuncian.',
      hy: 'Սխալ է։ Բեմական ցուցումները ուղղորդում են բեմադրությունը և սովորաբար չեն արտասանվում։',
    },
  },
  {
    id: 10,
    statement: {
      es: '10. La música y los gestos pueden comunicar información en el teatro.',
      hy: '10. Երաժշտությունն ու ժեստերը կարող են տեղեկություն փոխանցել թատրոնում։',
    },
    isTrue: true,
    justification: {
      es: 'Verdadero. El teatro utiliza medios verbales y no verbales.',
      hy: 'Ճիշտ է։ Թատրոնն օգտագործում է խոսքային և ոչ խոսքային միջոցներ։',
    },
  },
  {
    id: 11,
    statement: {
      es: '11. Una maleta que utiliza un personaje puede formar parte del atrezo.',
      hy: '11. Կերպարի օգտագործած ճամպրուկը կարող է լինել բեմական պարագա։',
    },
    isTrue: true,
    justification: {
      es: 'Verdadero. Es un objeto utilizado durante la representación.',
      hy: 'Ճիշտ է։ Դա բեմադրության ընթացքում օգտագործվող առարկա է։',
    },
  },
  {
    id: 12,
    statement: {
      es: '12. En el teatro solo puede utilizarse la prosa.',
      hy: '12. Թատրոնում կարելի է օգտագործել միայն արձակ։',
    },
    isTrue: false,
    justification: {
      es: 'Falso. También existe teatro en verso.',
      hy: 'Սխալ է։ Գոյություն ունի նաև չափածո թատրոն։',
    },
  },
];

// 7. COMPLETA LOS HUECOS
export const SECTION_7_WORDS = [
  { es: 'lírica', hy: 'քնարերգություն' },
  { es: 'narrador', hy: 'պատմող' },
  { es: 'autor', hy: 'հեղինակ' },
  { es: 'primera', hy: 'առաջին' },
  { es: 'tercera', hy: 'երրորդ' },
  { es: 'descripción', hy: 'նկարագրություն' },
  { es: 'acotaciones', hy: 'բեմական ցուցումներ' },
  { es: 'atrezo', hy: 'բեմական պարագաներ' },
  { es: 'vestuario', hy: 'բեմական հագուստ' },
  { es: 'semánticos', hy: 'իմաստային' },
];

export const SECTION_7_DATA: FillBlankItem[] = [
  {
    id: 1,
    before: {
      es: 'La persona real que escribe una obra es el',
      hy: 'Ստեղծագործությունը գրող իրական մարդը',
    },
    blank: 'autor',
    blankArm: 'հեղինակ',
    after: { es: '.', hy: ' է։' },
  },
  {
    id: 2,
    before: {
      es: 'La voz que cuenta una historia es el',
      hy: 'Պատմությունը ներկայացնող ձայնը',
    },
    blank: 'narrador',
    blankArm: 'պատմող',
    after: { es: '.', hy: ' է։' },
  },
  {
    id: 3,
    before: {
      es: '«Salí de casa y corrí» está en',
      hy: '«Դուրս եկա տնից և վազեցի» նախադասությունը',
    },
    blank: 'primera',
    blankArm: 'առաջին',
    after: { es: 'persona.', hy: ' դեմքով է։' },
  },
  {
    id: 4,
    before: {
      es: '«Elena salió de casa» está en',
      hy: '«Ելենան դուրս եկավ տնից» նախադասությունը',
    },
    blank: 'tercera',
    blankArm: 'երրորդ',
    after: { es: 'persona.', hy: ' դեմքով է։' },
  },
  {
    id: 5,
    before: {
      es: 'La',
      hy: '',
    },
    blank: 'lírica',
    blankArm: 'քնարերգություն',
    after: {
      es: 'expresa principalmente sentimientos y emociones.',
      hy: 'ը հիմնականում արտահայտում է զգացմունքներ և հույզեր։',
    },
  },
  {
    id: 6,
    before: {
      es: 'La',
      hy: '',
    },
    blank: 'descripción',
    blankArm: 'նկարագրություն',
    after: {
      es: 'explica cómo es un lugar o un personaje.',
      hy: 'ը բացատրում է, թե ինչպիսին է վայրը կամ կերպարը։',
    },
  },
  {
    id: 7,
    before: {
      es: 'Las indicaciones «sonríe» o «sale del escenario», dentro de un texto teatral, pueden ser',
      hy: 'Թատերական տեքստում «ժպտում է» կամ «հեռանում է բեմից» նշումները կարող են լինել',
    },
    blank: 'acotaciones',
    blankArm: 'բեմական ցուցումներ',
    after: { es: '.', hy: '։' },
  },
  {
    id: 8,
    before: {
      es: 'Una carta que un actor abre durante la representación pertenece al',
      hy: 'Նամակը, որը դերասանը բացում է բեմադրության ընթացքում, պատկանում է',
    },
    blank: 'atrezo',
    blankArm: 'բեմական պարագաներ',
    after: { es: '.', hy: ' խմբին։' },
  },
  {
    id: 9,
    before: {
      es: 'La ropa de los personajes forma parte del',
      hy: 'Կերպարների հագուստը',
    },
    blank: 'vestuario',
    blankArm: 'բեմական հագուստ',
    after: { es: '.', hy: 'ի մաս է։' },
  },
  {
    id: 10,
    before: {
      es: 'La metáfora pertenece a los recursos',
      hy: 'Փոխաբերությունը պատկանում է',
    },
    blank: 'semánticos',
    blankArm: 'իմաստային',
    after: { es: '.', hy: ' արտահայտչամիջոցներին։' },
  },
];

// 8. TEXTOS PARA ANALIZAR
export const SECTION_8_DATA: TextAnalysisItem[] = [
  {
    id: 'texto-a',
    title: { es: 'TEXTO A', hy: 'ՏԵՔՍՏ A' },
    originalText: {
      es: 'Hoy la alegría llama a mi ventana,\nmi corazón es un jardín en flor.\nQuiero guardar la luz de esta mañana,\nquiero llevar conmigo su calor.',
      hy: 'Այսօր ուրախությունը թակում է պատուհանս,\nսիրտս ծաղկած պարտեզ է։\nՈւզում եմ պահել այս առավոտվա լույսը,\nուզում եմ ինձ հետ տանել նրա ջերմությունը։',
    },
    questions: [
      {
        id: 1,
        question: {
          es: '1. ¿A qué género pertenece? Justifica con dos características.',
          hy: '1. Ո՞ր գրական սեռին է պատկանում։ Հիմնավորի՛ր երկու հատկանիշով։',
        },
        answer: {
          es: 'Lírica: expresa una emoción personal y utiliza un lenguaje poético.',
          hy: 'Քնարերգություն․ արտահայտում է անձնական հույզ և օգտագործում բանաստեղծական լեզու։',
        },
      },
      {
        id: 2,
        question: {
          es: '2. ¿Qué sentimiento predomina?',
          hy: '2. Ո՞ր զգացմունքն է գերակշռում։',
        },
        answer: {
          es: 'Predominan la alegría y la ilusión.',
          hy: 'Գերակշռում են ուրախությունն ու ոգևորությունը։',
        },
      },
      {
        id: 3,
        question: {
          es: '3. ¿Está escrito en prosa o en verso? ¿Cuántos versos tiene el original español?',
          hy: '3. Գրված է արձակո՞վ, թե՞ չափածոյով։ Քանի՞ տող ունի իսպաներեն բնագիրը։',
        },
        answer: {
          es: 'Está escrito en verso; tiene cuatro versos.',
          hy: 'Գրված է չափածոյով․ ունի չորս տող։',
        },
      },
      {
        id: 4,
        question: {
          es: '4. Localiza una personificación y explica por qué lo es.',
          hy: '4. Գտի՛ր անձնավորման օրինակ և բացատրի՛ր։',
        },
        answer: {
          es: '«La alegría llama a mi ventana». La alegría realiza una acción humana (llamar a la ventana).',
          hy: '«Ուրախությունը թակում է պատուհանս» («La alegría llama a mi ventana»)։ Ուրախությանը վերագրվում է մարդկային գործողություն։',
        },
      },
      {
        id: 5,
        question: {
          es: '5. Localiza una metáfora. ¿Qué dos elementos relaciona?',
          hy: '5. Գտի՛ր փոխաբերություն։ Ո՞ր երկու տարրերն է կապում։',
        },
        answer: {
          es: '«Mi corazón es un jardín en flor». Relaciona el corazón lleno de alegría con un jardín florecido.',
          hy: '«Սիրտս ծաղկած պարտեզ է» («Mi corazón es un jardín en flor»)։ Ուրախությամբ լի սիրտը նույնացնում է ծաղկած պարտեզի հետ։',
        },
      },
      {
        id: 6,
        question: {
          es: '6. ¿Qué palabra se repite al principio de dos versos? ¿Cómo se llama ese recurso?',
          hy: '6. Ո՞ր բառն է կրկնվում երկու տողի սկզբում։ Ինչպե՞ս է կոչվում այդ արտահայտչամիջոցը։',
        },
        answer: {
          es: 'Se repite «quiero» al principio de dos versos: es una anáfora, un recurso morfosintáctico.',
          hy: 'Երկու տողի սկզբում կրկնվում է «quiero» բառը․ սա անաֆորա է՝ ձևաբանական-շարահյուսական արտահայտչամիջոց։',
        },
      },
      {
        id: 7,
        question: {
          es: '7. Busca dos parejas de palabras que rimen en español.',
          hy: '7. Իսպաներեն տեքստում գտի՛ր հանգավորվող բառերի երկու զույգ։',
        },
        answer: {
          es: 'Ventana / mañana; flor / calor.',
          hy: 'Հանգավորվում են ventana / mañana և flor / calor բառերը։',
        },
      },
    ],
  },
  {
    id: 'texto-b',
    title: { es: 'TEXTO B', hy: 'ՏԵՔՍՏ B' },
    originalText: {
      es: 'El sábado llegué temprano a la biblioteca de mi barrio. Mientras buscaba un libro de aventuras, encontré un sobre azul entre dos páginas. No tenía nombre, pero dentro había un dibujo de la plaza y una frase: «Busca donde el agua canta».\n\nMiré por la ventana. En el centro de la plaza había una fuente antigua. Guardé el dibujo y bajé las escaleras. No sabía quién había escrito el mensaje, pero quería descubrirlo.',
      hy: 'Շաբաթ օրը շուտ հասա մեր թաղամասի գրադարան։ Արկածային գիրք փնտրելիս երկու էջերի միջև կապույտ ծրար գտա։ Դրա վրա անուն չկար, բայց ներսում հրապարակի նկարն էր և մի նախադասություն․ «Փնտրի՛ր այնտեղ, որտեղ ջուրը երգում է»։\n\nՆայեցի պատուհանից։ Հրապարակի կենտրոնում հին շատրվան կար։ Պահեցի նկարը և իջա աստիճաններով։ Չգիտեի՝ ով էր գրել հաղորդագրությունը, բայց ուզում էի պարզել։',
    },
    questions: [
      {
        id: 1,
        question: {
          es: '1. ¿A qué género pertenece el texto?',
          hy: '1. Ո՞ր գրական սեռին է պատկանում տեքստը։',
        },
        answer: {
          es: 'Narrativa: cuenta una sucesión de acciones en un tiempo y espacio.',
          hy: 'Պատմողական․ ներկայացնում է գործողությունների հաջորդականություն որոշակի ժամանակում և վայրում։',
        },
      },
      {
        id: 2,
        question: {
          es: '2. ¿En qué persona cuenta la historia el narrador? Copia tres formas verbales que lo demuestren.',
          hy: '2. Ո՞ր դեմքով է պատմում պատմողը։ Դո՛ւրս գրիր դա ապացուցող երեք բայաձև։',
        },
        answer: {
          es: 'Primera persona: «llegué», «encontré», «miré» (también «guardé», «bajé»).',
          hy: 'Առաջին դեմք՝ «llegué» (հասա), «encontré» (գտա), «miré» (նայեցի)։ Կարելի է նշել նաև «guardé» (պահեցի), «bajé» (իջա)։',
        },
      },
      {
        id: 3,
        question: {
          es: '3. ¿Participa el narrador en los acontecimientos?',
          hy: '3. Պատմողը մասնակցո՞ւմ է իրադարձություններին։',
        },
        answer: {
          es: 'Sí, el narrador es el personaje protagonista que encuentra el sobre.',
          hy: 'Այո՛, պատմողը ծրարը գտնող գլխավոր կերպարն է։',
        },
      },
      {
        id: 4,
        question: {
          es: '4. ¿Cuándo comienza la historia? ¿Dónde?',
          hy: '4. Ե՞րբ է սկսվում պատմությունը։ Որտե՞ղ։',
        },
        answer: {
          es: 'El sábado, en la biblioteca de su barrio.',
          hy: 'Շաբաթ օրը՝ իր թաղամասի գրադարանում։',
        },
      },
      {
        id: 5,
        question: {
          es: '5. ¿Qué encuentra el personaje dentro del libro?',
          hy: '5. Ի՞նչ է գտնում կերպարը գրքի ներսում։',
        },
        answer: {
          es: 'Un sobre azul con un dibujo de la plaza y una frase misteriosa.',
          hy: 'Կապույտ ծրար՝ հրապարակի նկարով և խորհրդավոր նախադասությամբ։',
        },
      },
      {
        id: 6,
        question: {
          es: '6. ¿Qué elemento de la plaza parece relacionarse con el mensaje?',
          hy: '6. Հրապարակի ո՞ր տարրն է կարծես կապված հաղորդագրության հետ։',
        },
        answer: {
          es: 'La fuente antigua en el centro de la plaza («donde el agua canta»).',
          hy: 'Հրապարակի կենտրոնի հին շատրվանը («որտեղ ջուրը երգում է»)։',
        },
      },
      {
        id: 7,
        question: {
          es: '7. Explica la expresión «el agua canta».',
          hy: '7. Բացատրի՛ր «ջուրը երգում է» արտահայտությունը։',
        },
        answer: {
          es: 'Es una personificación: se presenta el sonido armonioso del agua como un canto.',
          hy: 'Անձնավորում է․ ջրի ներդաշնակ ձայնը ներկայացվում է որպես երգ։',
        },
      },
      {
        id: 8,
        question: {
          es: '8. ¿Podemos asegurar que esta aventura le ocurrió a la persona que escribió el texto? ¿Por qué?',
          hy: '8. Կարո՞ղ ենք վստահ ասել, որ այս արկածը պատահել է տեքստի հեղինակին։ Ինչո՞ւ։',
        },
        answer: {
          es: 'No. El narrador y el autor no deben identificarse automáticamente; la historia puede ser ficticia.',
          hy: 'Ո՛չ։ Պատմողին և հեղինակին չպետք է ինքնաբերաբար նույնացնել․ պատմությունը կարող է հորինված լինել։',
        },
      },
      {
        id: 9,
        question: {
          es: '9. Continúa la historia con tres frases en primera persona.',
          hy: '9. Շարունակի՛ր պատմությունը երեք նախադասությամբ՝ առաջին դեմքով։',
        },
        answer: {
          es: 'Respuesta modelo: Me acerqué a la fuente. Detrás de una piedra encontré otra nota. La abrí con mucho cuidado.',
          hy: 'Հնարավոր օրինակ․ Մոտեցա շատրվանին։ Քարի հետևում ևս մեկ գրություն գտա։ Այն շատ զգուշությամբ բացեցի։',
        },
      },
    ],
  },
  {
    id: 'texto-c',
    title: { es: 'TEXTO C', hy: 'ՏԵՔՍՏ C' },
    originalText: {
      es: 'La estación era pequeña y silenciosa. En las paredes amarillas colgaban fotografías antiguas, y un reloj redondo marcaba las ocho.\n\nInés entró con una mochila roja. Se acercó a la ventanilla y preguntó:\n—¿Ha salido ya el tren?\n—Todavía no —respondió el empleado—. Hoy lleva diez minutos de retraso.\n\nInés respiró tranquila y se sentó junto a la puerta.',
      hy: 'Կայարանը փոքր էր և լուռ։ Դեղին պատերին հին լուսանկարներ էին կախված, իսկ կլոր ժամացույցը ցույց էր տալիս ժամը ութը։\n\nԻնեսը ներս մտավ կարմիր ուսապարկով։ Մոտեցավ տոմսարկղի պատուհանին և հարցրեց․\n— Գնացքն արդեն մեկնե՞լ է։\n— Դեռ ոչ,— պատասխանեց աշխատակիցը։— Այսօր տասը րոպե ուշանում է։\n\nԻնեսը հանգիստ շունչ քաշեց և նստեց դռան մոտ։',
    },
    questions: [
      {
        id: 1,
        question: {
          es: '1. ¿Es un texto narrativo o teatral? Justifica.',
          hy: '1. Տեքստը պատմողակա՞ն է, թե՞ թատերական։ Հիմնավորի՛ր։',
        },
        answer: {
          es: 'Es narrativo: un narrador presenta el lugar y cuenta las acciones de los personajes.',
          hy: 'Պատմողական է․ պատմողը ներկայացնում է վայրը և պատմում գործողությունները։',
        },
      },
      {
        id: 2,
        question: {
          es: '2. ¿En qué persona aparece el narrador?',
          hy: '2. Ո՞ր դեմքով է պատմում պատմողը։',
        },
        answer: {
          es: 'Tercera persona: «Inés entró», «se acercó», «se sentó».',
          hy: 'Երրորդ դեմք՝ «Ինեսը մտավ», «մոտեցավ», «նստեց»։',
        },
      },
      {
        id: 3,
        question: {
          es: '3. Copia una oración descriptiva.',
          hy: '3. Դո՛ւրս գրիր նկարագրական մեկ նախադասություն։',
        },
        answer: {
          es: '«La estación era pequeña y silenciosa».',
          hy: '«Կայարանը փոքր էր և լուռ»։',
        },
      },
      {
        id: 4,
        question: {
          es: '4. Copia una oración que presente una acción.',
          hy: '4. Դո՛ւրս գրիր գործողություն ներկայացնող մեկ նախադասություն։',
        },
        answer: {
          es: '«Inés entró con una mochila roja».',
          hy: '«Ինեսը ներս մտավ կարմիր ուսապարկով»։',
        },
      },
      {
        id: 5,
        question: {
          es: '5. ¿Qué personajes intervienen en el diálogo?',
          hy: '5. Ո՞ր կերպարներն են մասնակցում երկխոսությանը։',
        },
        answer: {
          es: 'Inés y el empleado de la estación.',
          hy: 'Ինեսը և կայարանի աշխատակիցը։',
        },
      },
      {
        id: 6,
        question: {
          es: '6. ¿Por qué se tranquiliza Inés?',
          hy: '6. Ինչո՞ւ է Ինեսը հանգստանում։',
        },
        answer: {
          es: 'Porque el tren todavía no ha salido y puede cogerlo a tiempo.',
          hy: 'Որովհետև գնացքը դեռ չի մեկնել, և նա կարող է հասցնել դրան։',
        },
      },
      {
        id: 7,
        question: {
          es: '7. ¿La presencia de diálogo convierte automáticamente el texto en teatro? Explica.',
          hy: '7. Երկխոսության առկայությունն ինքնաբերաբար տեքստը դարձնո՞ւմ է թատերական։ Բացատրի՛ր։',
        },
        answer: {
          es: 'No. El diálogo está integrado en una narración y acompañado por la voz del narrador, no destinado primariamente a la puesta en escena con actores.',
          hy: 'Ո՛չ։ Երկխոսությունը ներառված է պատմողական տեքստում և ուղեկցվում է պատմողի խոսքով, այլ ոչ թե նախատեսված դերասանական բեմադրության համար։',
        },
      },
    ],
  },
  {
    id: 'texto-d',
    title: { es: 'TEXTO D', hy: 'ՏԵՔՍՏ D' },
    originalText: {
      es: '(Una sala de espera. Al fondo, una ventana. MARTA lleva un abrigo verde y sostiene una maleta. Suena una lluvia intensa.)\n\nMARTA: (Mira el reloj.) El autobús debería haber llegado.\nPABLO: Quizá la tormenta lo haya retrasado.\nMARTA: Dentro de esta maleta está el regalo de mi hermana. ¡Hoy es su cumpleaños!\nPABLO: (Saca un teléfono del bolsillo.) Podemos llamar y avisarla.\n(Se oye el motor de un vehículo. MARTA sonríe.)\nMARTA: ¡Creo que ya está aquí!',
      hy: '(Սպասասրահ։ Հետնամասում պատուհան է։ ՄԱՐՏԱՆ կանաչ վերարկու է հագել և ճամպրուկ է բռնել։ Հորդ անձրևի ձայն է լսվում։)\n\nՄԱՐՏԱ․ (Նայում է ժամացույցին։) Ավտոբուսն արդեն պետք է եկած լիներ։\nՊԱԲԼՈ․ Գուցե փոթորիկի պատճառով ուշացել է։\nՄԱՐՏԱ․ Այս ճամպրուկի մեջ քրոջս նվերն է։ Այսօր նրա ծննդյան օրն է։\nՊԱԲԼՈ․ (Գրպանից հեռախոս է հանում։) Կարող ենք զանգել և զգուշացնել նրան։\n(Լսվում է մեքենայի շարժիչի ձայնը։ ՄԱՐՏԱՆ ժպտում է։)\nՄԱՐՏԱ․ Կարծում եմ՝ արդեն այստեղ է։',
    },
    questions: [
      {
        id: 1,
        question: {
          es: '1. ¿A qué género pertenece? Da dos pruebas.',
          hy: '1. Ո՞ր գրական սեռին է պատկանում։ Նշի՛ր երկու ապացույց։',
        },
        answer: {
          es: 'Teatro: hay intervenciones identificadas con nombres de personajes y acotaciones para la representación.',
          hy: 'Թատրոն․ կան անուններով առանձնացված խոսքեր և բեմադրության ցուցումներ։',
        },
      },
      {
        id: 2,
        question: {
          es: '2. ¿Quiénes son los personajes que hablan?',
          hy: '2. Ովքե՞ր են խոսող կերպարները։',
        },
        answer: {
          es: 'Marta y Pablo.',
          hy: 'Մարտան և Պաբլոն։',
        },
      },
      {
        id: 3,
        question: {
          es: '3. ¿Dónde ocurre la acción?',
          hy: '3. Որտե՞ղ է տեղի ունենում գործողությունը։',
        },
        answer: {
          es: 'En una sala de espera.',
          hy: 'Սպասասրահում։',
        },
      },
      {
        id: 4,
        question: {
          es: '4. Copia dos acotaciones y explica qué indican.',
          hy: '4. Դո՛ւրս գրիր երկու բեմական ցուցում և բացատրի՛ր՝ ինչ են նշում։',
        },
        answer: {
          es: '«Mira el reloj» indica una acción; «MARTA sonríe» indica un gesto o expresión del rostro.',
          hy: '«Նայում է ժամացույցին» նշում է գործողություն, իսկ «Մարտան ժպտում է»՝ դեմքի արտահայտություն (ժեստ)։',
        },
      },
      {
        id: 5,
        question: {
          es: '5. Identifica dos objetos de atrezo.',
          hy: '5. Գտի՛ր երկու բեմական պարագա։',
        },
        answer: {
          es: 'La maleta y el teléfono móvil.',
          hy: 'Ճամպրուկը և բջջային հեռախոսը։',
        },
      },
      {
        id: 6,
        question: {
          es: '6. ¿Qué elemento pertenece al vestuario?',
          hy: '6. Ո՞ր տարրն է պատկանում բեմական հագուստին։',
        },
        answer: {
          es: 'El abrigo verde que lleva Marta.',
          hy: 'Մարտայի հագած կանաչ վերարկուն։',
        },
      },
      {
        id: 7,
        question: {
          es: '7. ¿Qué elementos sonoros intervienen?',
          hy: '7. Ի՞նչ ձայնային տարրեր են օգտագործվում։',
        },
        answer: {
          es: 'El sonido de una lluvia intensa y el motor de un vehículo.',
          hy: 'Հորդ անձրևի և մեքենայի շարժիչի ձայները։',
        },
      },
      {
        id: 8,
        question: {
          es: '8. ¿Por qué tiene prisa Marta?',
          hy: '8. Ինչո՞ւ է Մարտան շտապում։',
        },
        answer: {
          es: 'Porque es el cumpleaños de su hermana y lleva su regalo en la maleta.',
          hy: 'Որովհետև նրա քրոջ ծննդյան օրն է, և նվերը ճամպրուկի մեջ է։',
        },
      },
      {
        id: 9,
        question: {
          es: '9. ¿Existe una voz narrativa que cuente la historia entre las intervenciones?',
          hy: '9. Կերպարների խոսքերի միջև կա՞ պատմությունը ներկայացնող պատմողի ձայն։',
        },
        answer: {
          es: 'No. Hay acotaciones, que cumplen una función técnica distinta de la voz narrativa de un relato.',
          hy: 'Ո՛չ։ Կան բեմական ցուցումներ, որոնց գործառույթը տարբերվում է պատմվածքի պատմողի գործառույթից։',
        },
      },
      {
        id: 10,
        question: {
          es: '10. Añade una intervención de Pablo y una acotación.',
          hy: '10. Ավելացրո՛ւ Պաբլոյի մեկ խոսք և մեկ բեմական ցուցում։',
        },
        answer: {
          es: 'Respuesta modelo: PABLO: (Se acerca a la puerta.) Sí, es nuestro autobús.',
          hy: 'Հնարավոր օրինակ․ ՊԱԲԼՈ․ (Մոտենում է դռանը։) Այո՛, մեր ավտոբուսն է։',
        },
      },
    ],
  },
  {
    id: 'texto-e',
    title: { es: 'TEXTO E', hy: 'ՏԵՔՍՏ E' },
    originalText: {
      es: 'Tu ausencia llena la casa. La taza sigue junto a la ventana, pero la mañana ha perdido su alegría. Escucho el reloj y siento que cada minuto camina más despacio.',
      hy: 'Քո բացակայությունը լցնում է տունը։ Բաժակը դեռ պատուհանի մոտ է, բայց առավոտը կորցրել է իր ուրախությունը։ Լսում եմ ժամացույցը և զգում, որ յուրաքանչյուր րոպեն ավելի դանդաղ է քայլում։',
    },
    questions: [
      {
        id: 1,
        question: {
          es: '1. ¿Está escrito en verso o en prosa?',
          hy: '1. Գրված է չափածոյո՞վ, թե՞ արձակով։',
        },
        answer: {
          es: 'Está escrito en prosa.',
          hy: 'Գրված է արձակով։',
        },
      },
      {
        id: 2,
        question: {
          es: '2. ¿Predomina la expresión de sentimientos o una sucesión de acontecimientos?',
          hy: '2. Գերակշռում է զգացմունքների արտահայտո՞ւմը, թե՞ իրադարձությունների հաջորդականությունը։',
        },
        answer: {
          es: 'Predomina la expresión de sentimientos.',
          hy: 'Գերակշռում է զգացմունքների արտահայտումը։',
        },
      },
      {
        id: 3,
        question: {
          es: '3. ¿Por qué podemos considerarlo un ejemplo de prosa poética?',
          hy: '3. Ինչո՞ւ կարող ենք այն համարել բանաստեղծական արձակի օրինակ։',
        },
        answer: {
          es: 'Tiene forma de prosa, pero presenta una visión subjetiva y utiliza imágenes poéticas y ritmo.',
          hy: 'Ունի արձակ ձև, բայց ներկայացնում է սուբյեկտիվ ընկալում և օգտագործում բանաստեղծական պատկերներ ու ռիթմ։',
        },
      },
      {
        id: 4,
        question: {
          es: '4. ¿Qué sentimientos transmite?',
          hy: '4. Ի՞նչ զգացմունքներ է փոխանցում։',
        },
        answer: {
          es: 'Tristeza, soledad y añoranza por una ausencia.',
          hy: 'Տխրություն, մենություն և կարոտ բացակայության պատճառով։',
        },
      },
      {
        id: 5,
        question: {
          es: '5. Localiza una personificación.',
          hy: '5. Գտի՛ր անձնավորման օրինակ։',
        },
        answer: {
          es: '«Cada minuto camina más despacio». Se atribuye a los minutos la acción humana de caminar.',
          hy: '«Յուրաքանչյուր րոպեն ավելի դանդաղ է քայլում» («Cada minuto camina más despacio»)։ Րոպեներին վերագրվում է քայլելու գործողություն։',
        },
      },
    ],
  },
];

// 9. TRANSFORMA Y CREA
export const SECTION_9_DATA: TransformTask[] = [
  {
    id: 'transform-a',
    letter: 'A',
    title: {
      es: 'Cambia la persona del narrador',
      hy: 'Փոխի՛ր պատմողի դեմքը',
    },
    instruction: {
      es: 'Transforma el texto de primera a tercera persona. El personaje se llama Daniel.',
      hy: 'Տեքստը առաջին դեմքից փոխի՛ր երրորդ դեմքի։ Կերպարի անունը Դանիել է։',
    },
    sourceText: {
      es: 'Entré en el jardín, vi una caja y la abrí. Dentro encontré una fotografía.',
      hy: 'Մտա այգի, տեսա մի տուփ և բացեցի այն։ Ներսում լուսանկար գտա։',
    },
    modelAnswer: {
      es: 'Daniel entró en el jardín, vio una caja y la abrió. Dentro encontró una fotografía.',
      hy: 'Դանիելը մտավ այգի, տեսավ մի տուփ և բացեց այն։ Ներսում լուսանկար գտաւ (գտավ)։',
    },
  },
  {
    id: 'transform-b',
    letter: 'B',
    title: {
      es: 'Convierte una narración en teatro',
      hy: 'Պատմողական տեքստը դարձրո՛ւ թատերական',
    },
    instruction: {
      es: 'Incluye los nombres de los personajes, sus intervenciones y al menos una acotación.',
      hy: 'Ներառի՛ր կերպարների անունները, նրանց խոսքերը և առնվազն մեկ բեմական ցուցում։',
    },
    sourceText: {
      es: 'Laura miró a su hermano y le preguntó dónde estaba el perro. Él señaló el jardín y respondió que estaba durmiendo bajo el árbol.',
      hy: 'Լաուրան նայեց եղբորը և հարցրեց՝ որտեղ է շունը։ Նա ցույց տվեց այգին և պատասխանեց, որ շունը քնած է ծառի տակ։',
    },
    modelAnswer: {
      es: 'LAURA: (Mira a su hermano.) ¿Dónde está el perro?\nHERMANO: (Señala el jardín.) Está durmiendo bajo el árbol.',
      hy: 'ԼԱՈՒՐԱ․ (Նայում է եղբորը։) Որտե՞ղ է շունը։\nԵՂԲԱՅՐ․ (Ցույց է տալիս այգին։) Ծառի տակ քնած է։',
    },
  },
  {
    id: 'transform-c',
    letter: 'C',
    title: {
      es: 'Convierte una escena teatral en narración',
      hy: 'Թատերական տեսարանը դարձրո՛ւ պատմողական',
    },
    instruction: {
      es: 'Convierte la escena teatral en narración en prosa.',
      hy: 'Թատերական տեսարանը դարձրո՛ւ արձակ պատմողական տեքստ։',
    },
    sourceText: {
      es: 'ANA: (Abre la puerta.) ¡Has vuelto!\nLUIS: Sí. El viaje ha terminado.',
      hy: 'ԱՆԱ․ (Բացում է դուռը։) Դու վերադարձե՜լ ես։\nԼՈՒԻՍ․ Այո՛։ Ճամփորդությունն ավարտվել է։',
    },
    modelAnswer: {
      es: 'Ana abrió la puerta y exclamó que Luis había vuelto. Él respondió que sí y añadió que el viaje había terminado.',
      hy: 'Անան բացեց դուռը և բացականչեց, որ Լուիսը վերադարձել է։ Նա դրական պատասխան տվեց և ավելացրեց, որ ճամփորդությունն ավարտվել է։',
    },
  },
  {
    id: 'transform-d',
    letter: 'D',
    title: {
      es: 'Escribe un pequeño texto lírico',
      hy: 'Գրի՛ր փոքրիկ քնարական տեքստ',
    },
    instruction: {
      es: 'Escribe cuatro versos sobre un momento feliz. Incluye una metáfora o una personificación. La rima es opcional.',
      hy: 'Գրի՛ր չորս չափածո տող երջանիկ պահի մասին։ Օգտագործի՛ր փոխաբերություն կամ անձնավորում։ Հանգը պարտադիր չէ։',
    },
    modelAnswer: {
      es: 'El sol dibuja sonrisas doradas en la arena,\nmi corazón navega tranquilo sobre el mar.\nEl viento acaricia la tarde serena,\ny solo quiero quedarme a soñar.',
      hy: 'Արևը ոսկե ժպիտներ է նկարում ավազին,\nսիրտս հանգիստ նավարկում է ծովի վրայով։\nՔամին շոյում է խաղաղ երեկոն,\nև ես միայն ուզում եմ մնալ ու երազել։',
    },
  },
  {
    id: 'transform-e',
    letter: 'E',
    title: {
      es: 'Una situación, tres géneros',
      hy: 'Մեկ իրավիճակ, երեք գրական սեռ',
    },
    instruction: {
      es: 'Situación: Una niña espera a una amiga que lleva mucho tiempo sin ver.',
      hy: 'Իրավիճակ․ Աղջիկը սպասում է իր ընկերուհուն, որին երկար ժամանակ չի տեսել։',
    },
    modelAnswer: {
      es: '• Lírica: Los minutos pesan como piedras en mis manos; cada latido cuenta el tiempo que nos separa.\n• Narrativa: Sofía miraba fijamente el reloj del andén mientras apretaba las manos en sus bolsillos. Cuando el tren se detuvo, divisó a su amiga entre la multitud.\n• Teatro: SOFÍA: (Mira nerviosa la puerta.) ¡Por fin has llegado!\nELENA: (Corre y la abraza.) ¡No me lo puedo creer, cuánto tiempo!',
      hy: '• Քնարերգություն․ Րոպեները քարերի պես ծանրանում են ափերիս մեջ․ յուրաքանչյուր զարկ հաշվում է մեզ բաժանող ժամանակը։\n• Պատմողական․ Սոֆիան լարված նայում էր կառամատույցի ժամացույցին՝ ձեռքերը սեղմելով գրպաններում։ Երբ գնացքը կանգնեց, նա բազմության մեջ նկատեց ընկերուհուն։\n• Թատրոն․ ՍՈՖԻԱ․ (Հուզված նայում է դռանը։) Վերջապե՛ս եկար։\nԵԼԵՆԱ․ (Վազում է և գրկում նրան։) Չեմ հավատում, ինչքա՜ն ժամանակ է անցել։',
    },
  },
];

// 10. MINIEXAMEN (20 PUNTOS)
export const SECTION_10_DATA: MiniExamQuestion[] = [
  {
    id: 1,
    points: 3,
    question: {
      es: '1. Define los tres grandes géneros literarios.',
      hy: '1. Սահմանի՛ր գրականության երեք հիմնական սեռերը։',
    },
    answer: {
      es: '• Lírica: expresa sentimientos, emociones y visión subjetiva.\n• Narrativa: cuenta una historia de personajes en un tiempo y espacio mediante un narrador.\n• Teatro: presenta una acción dialogada destinada a ser representada por actores ante un público.',
      hy: '• Քնարերգություն․ արտահայտում է զգացմունքներ, հույզեր և սուբյեկտիվ տեսակետ։\n• Պատմողական․ պատմում է որոշակի ժամանակում և վայրում կերպարների դեպքերը պատմողի միջոցով։\n• Թատրոն․ ներկայացնում է գործողություն՝ նախատեսված դերասանների կողմից հանդիսատեսի առաջ բեմադրվելու համար։',
    },
  },
  {
    id: 2,
    points: 2,
    question: {
      es: '2. Explica por qué «estar escrito en verso» no basta para identificar la lírica.',
      hy: '2. Բացատրի՛ր՝ ինչու «չափածոյով գրված լինելը» բավարար չէ քնարերգությունը որոշելու համար։',
    },
    answer: {
      es: 'Porque también existen narrativa y teatro en verso (como los poemas épicos o el teatro clásico), y además la lírica puede escribirse en prosa poética.',
      hy: 'Որովհետև չափածո կարող են լինել նաև պատմողական և թատերական ստեղծագործությունները, իսկ քնարերգությունը կարող է օգտագործել բանաստեղծական արձակ։',
    },
  },
  {
    id: 3,
    points: 2,
    question: {
      es: '3. Explica la diferencia entre autor y narrador.',
      hy: '3. Բացատրի՛ր հեղինակի և պատմողի տարբերությունը։',
    },
    answer: {
      es: 'El autor es la persona real que escribe la obra; el narrador es la voz ficticia creada dentro del texto para contar los hechos.',
      hy: 'Հեղինակը գրող իրական մարդն է, իսկ պատմողը՝ տեքստի ներսում պատմությունը ներկայացնող ձայնը։',
    },
  },
  {
    id: 4,
    points: 4,
    question: {
      es: '4. Lee el fragmento y responde a las cuatro preguntas:',
      hy: '4. Կարդա՛ հատվածը և պատասխանի՛ր չորս հարցերին․',
    },
    textContext: {
      es: 'Tomás abrió la ventana. La calle estaba vacía y las farolas seguían encendidas. Cogió su mochila y salió sin hacer ruido.',
      hy: 'Տոմասը բացեց պատուհանը։ Փողոցը դատարկ էր, իսկ փողոցային լույսերը դեռ վառվում էին։ Նա վերցրեց ուսապարկը և անաղմուկ դուրս եկավ։',
    },
    subQuestions: [
      {
        letter: 'a',
        question: { es: '¿Cuál es el género?', hy: 'Ո՞րն է գրական սեռը։' },
        answer: { es: 'Narrativa.', hy: 'Պատմողական։' },
      },
      {
        letter: 'b',
        question: { es: '¿En qué persona está narrado?', hy: 'Ո՞ր դեմքով է պատմվում։' },
        answer: { es: 'Tercera persona («abrió», «cogió», «salió»).', hy: 'Երրորդ դեմք։' },
      },
      {
        letter: 'c',
        question: { es: 'Copia una descripción.', hy: 'Դո՛ւրս գրիր նկարագրությունը։' },
        answer: {
          es: '«La calle estaba vacía y las farolas seguían encendidas».',
          hy: '«Փողոցը դատարկ էր, իսկ փողոցային լույսերը դեռ վառվում էին»։',
        },
      },
      {
        letter: 'd',
        question: { es: 'Copia una acción.', hy: 'Դո՛ւրս գրիր մեկ գործողություն։' },
        answer: {
          es: '«Tomás abrió la ventana» o «Cogió su mochila y salió sin hacer ruido».',
          hy: '«Տոմասը բացեց պատուհանը» կամ «Նա վերցրեց ուսապարկը և անաղմուկ դուրս եկավ»։',
        },
      },
    ],
  },
  {
    id: 5,
    points: 4,
    question: {
      es: '5. Lee la escena teatral y responde:',
      hy: '5. Կարդա՛ թատերական տեսարանը և պատասխանի՛ր․',
    },
    textContext: {
      es: 'ELENA: (Deja una taza sobre la mesa.) ¿Quieres descansar?\nMARIO: Sí, estoy agotado.',
      hy: 'ԵԼԵՆԱ․ (Բաժակը դնում է սեղանին։) Ուզո՞ւմ ես հանգստանալ։\nՄԱՐԻՈ․ Այո՛, ուժասպառ եմ։',
    },
    subQuestions: [
      {
        letter: 'a',
        question: { es: '¿Cuál es el género?', hy: 'Ո՞րն է գրական սեռը։' },
        answer: { es: 'Teatro (género dramático).', hy: 'Թատրոն (դրամատիկական սեռ)։' },
      },
      {
        letter: 'b',
        question: { es: 'Copia la acotación.', hy: 'Դո՛ւրս գրիր բեմական ցուցումը։' },
        answer: { es: '«Deja una taza sobre la mesa».', hy: '«Բաժակը դնում է սեղանին»։' },
      },
      {
        letter: 'c',
        question: { es: 'Identifica un objeto de atrezo.', hy: 'Նշի՛ր մեկ բեմական պարագա։' },
        answer: { es: 'La taza (y la mesa).', hy: 'Բաժակը (և սեղանը)։' },
      },
      {
        letter: 'd',
        question: { es: 'Explica la función de la acotación.', hy: 'Բացատրի՛ր բեմական ցուցման դերը։' },
        answer: {
          es: 'Indica la acción física que debe realizar la actriz durante la representación.',
          hy: 'Նշում է դերասանուհու կատարելիք գործողությունը բեմադրության ընթացքում։',
        },
      },
    ],
  },
  {
    id: 6,
    points: 3,
    question: {
      es: '6. Clasifica estos recursos: fónico, morfosintáctico o semántico.',
      hy: '6. Դասակարգի՛ր արտահայտչամիջոցները՝ հնչյունային, ձևաբանական-շարահյուսական կամ իմաստային։',
    },
    subQuestions: [
      {
        letter: 'a',
        question: { es: 'Aliteración', hy: 'Ալիտերացիա' },
        answer: { es: 'Fónico (se centra en los sonidos).', hy: 'Հնչյունային։' },
      },
      {
        letter: 'b',
        question: { es: 'Anáfora', hy: 'Անաֆորա' },
        answer: { es: 'Morfosintáctico (repetición de palabras al inicio).', hy: 'Ձևաբանական-շարահյուսական։' },
      },
      {
        letter: 'c',
        question: { es: 'Metáfora', hy: 'Փոխաբերություն' },
        answer: { es: 'Semántico (se centra en el significado).', hy: 'Իմաստային։' },
      },
    ],
  },
  {
    id: 7,
    points: 2,
    question: {
      es: '7. Explica una diferencia entre el diálogo narrativo y el diálogo teatral.',
      hy: '7. Բացատրի՛ր պատմողական և թատերական երկխոսության մեկ տարբերություն։',
    },
    answer: {
      es: 'En la narrativa, el diálogo suele integrarse en el relato guiado por la voz del narrador (ej. «—dijo ella»). En el teatro, las intervenciones de los personajes forman directamente la acción dramática para ser representada en vivo y se acompañan de acotaciones.',
      hy: 'Պատմողական գրականության մեջ երկխոսությունը սովորաբար ներառվում է պատմողի ներկայացրած պատմության մեջ։ Թատրոնում կերպարների խոսքերը ձևավորում են բեմադրվող գործողությունը և կարող են ուղեկցվել բեմական ցուցումներով։',
    },
  },
];
