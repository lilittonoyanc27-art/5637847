import { QuizQuestion } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // 1–20: LOS GÉNEROS LITERARIOS Y LA LÍRICA
  {
    id: 1,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '¿Cuáles son los tres grandes géneros literarios?',
      hy: 'Որո՞նք են գրականության երեք հիմնական սեռերը։',
    },
    options: [
      { key: 'A', es: 'Novela, cuento y leyenda', hy: 'Վեպ, պատմվածք և ավանդազրույց' },
      { key: 'B', es: 'Lírica, narrativa y teatro', hy: 'Քնարերգություն, պատմողական գրականություն և թատրոն' },
      { key: 'C', es: 'Verso, rima y estrofa', hy: 'Չափածո տող, հանգ և տուն' },
      { key: 'D', es: 'Autor, narrador y personaje', hy: 'Հեղինակ, պատմող և կերպար' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es la correcta. Los tres grandes géneros clásicos son la lírica, la narrativa y el teatro. A (novela, cuento) son subgéneros narrativos; C son elementos métricos; D son elementos del relato.',
      hy: 'Ճիշտ է B տարբերակը։ Երեք հիմնական գրական սեռերն են քնարերգությունը, պատմողական գրականությունը և թատրոնը։ A-ն պատմողական ենթաժանրեր են, C-ն՝ չափածոյի տարրեր, D-ն՝ պատմության բաղադրիչներ։',
    },
  },
  {
    id: 2,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '¿Qué predomina en la lírica?',
      hy: 'Ի՞նչն է գերակշռում քնարերգության մեջ։',
    },
    options: [
      { key: 'A', es: 'Las instrucciones para actuar', hy: 'Խաղալու ցուցումները' },
      { key: 'B', es: 'Los datos científicos', hy: 'Գիտական տվյալները' },
      { key: 'C', es: 'Los sentimientos y las emociones', hy: 'Զգացմունքներն ու հույզերը' },
      { key: 'D', es: 'Las normas de un juego', hy: 'Խաղի կանոնները' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. En la lírica predomina la expresión de sentimientos, emociones y la visión subjetiva del yo lírico. Las instrucciones escénicas (A) son propias del teatro.',
      hy: 'Ճիշտ է C տարբերակը։ Քնարերգության մեջ գերակշռում են զգացմունքները, հույզերը և քնարական հերոսի սուբյեկտիվ աշխարհընկալումը։ Բեմական ցուցումները (A) բնորոշ են թատրոնին։',
    },
  },
  {
    id: 3,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '¿Qué significa que un texto sea subjetivo?',
      hy: 'Ի՞նչ է նշանակում, որ տեքստը սուբյեկտիվ է։',
    },
    options: [
      { key: 'A', es: 'Expresa una visión personal', hy: 'Արտահայտում է անձնական ընկալում' },
      { key: 'B', es: 'Siempre está escrito en verso', hy: 'Միշտ չափածո է' },
      { key: 'C', es: 'No contiene emociones', hy: 'Հույզեր չի պարունակում' },
      { key: 'D', es: 'Solo presenta datos comprobables', hy: 'Ներկայացնում է միայն ստուգելի տվյալներ' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. «Subjetivo» significa que transmite una perspectiva íntima e individual, influida por sentimientos y emociones. D describe un texto puramente objetivo.',
      hy: 'Ճիշտ է A տարբերակը։ «Սուբյեկտիվ» նշանակում է անձնական, զգացմունքներով և կարծիքներով պայմանավորված ընկալում։ D-ն վերաբերում է օբյեկտիվ տեքստին։',
    },
  },
  {
    id: 4,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '¿Qué oración es claramente subjetiva?',
      hy: 'Ո՞ր նախադասությունն է ակնհայտորեն սուբյեկտիվ։',
    },
    options: [
      { key: 'A', es: 'La mesa tiene cuatro patas.', hy: 'Սեղանն ունի չորս ոտք։' },
      { key: 'B', es: 'El libro tiene cien páginas.', hy: 'Գիրքն ունի հարյուր էջ։' },
      { key: 'C', es: 'La clase empieza a las nueve.', hy: 'Դասը սկսվում է ժամը իննին։' },
      { key: 'D', es: 'Este jardín es el lugar más hermoso del mundo.', hy: 'Այս այգին աշխարհի ամենագեղեցիկ վայրն է։' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. «El lugar más hermoso del mundo» refleja un juicio de valor y una emoción personal, no un dato medible. Las otras opciones presentan datos objetivos.',
      hy: 'Ճիշտ է D տարբերակը։ «Ամենագեղեցիկ վայրն է» արտահայտությունը անձնական զգացմունքային գնահատական է։ Մյուս երեք տարբերակները չափելի, օբյեկտիվ փաստեր են։',
    },
  },
  {
    id: 5,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '¿Qué forma utiliza frecuentemente la lírica?',
      hy: 'Քնարերգությունը հաճախ ի՞նչ ձև է օգտագործում։',
    },
    options: [
      { key: 'A', es: 'La lista de instrucciones', hy: 'Հրահանգների ցանկ' },
      { key: 'B', es: 'El verso', hy: 'Չափածո' },
      { key: 'C', es: 'El informe científico', hy: 'Գիտական զեկույց' },
      { key: 'D', es: 'El horario', hy: 'Ժամանակացույց' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. La lírica tiene una preferencia habitual por el verso (aunque también exista la prosa poética).',
      hy: 'Ճիշտ է B տարբերակը։ Քնարերգությունը հաճախ նախընտրում է չափածոն (թեև կարող է գրվել նաև բանաստեղծական արձակով)։',
    },
  },
  {
    id: 6,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '¿La lírica puede escribirse en prosa?',
      hy: 'Քնարերգությունը կարո՞ղ է գրվել արձակով։',
    },
    options: [
      { key: 'A', es: 'No, nunca.', hy: 'Ո՛չ, երբեք։' },
      { key: 'B', es: 'Solo cuando tiene personajes.', hy: 'Միայն երբ կերպարներ ունի։' },
      { key: 'C', es: 'Sí, puede utilizar prosa poética.', hy: 'Այո՛, կարող է օգտագործել բանաստեղծական արձակ։' },
      { key: 'D', es: 'Solo cuando no expresa sentimientos.', hy: 'Միայն երբ զգացմունքներ չի արտահայտում։' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. Aunque predomina el verso, la lírica también puede expresarse en prosa poética, manteniendo su carga emotiva y ritmo lírico.',
      hy: 'Ճիշտ է C տարբերակը։ Չափածոն պարտադիր չէ․ քնարերգությունը կարող է ստեղծվել նաև բանաստեղծական արձակով։',
    },
  },
  {
    id: 7,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '¿Qué es un verso?',
      hy: 'Ի՞նչ է չափածո տողը։',
    },
    options: [
      { key: 'A', es: 'Una línea de un poema', hy: 'Բանաստեղծության մեկ տողը' },
      { key: 'B', es: 'Un conjunto de capítulos', hy: 'Գլուխների խումբը' },
      { key: 'C', es: 'Una indicación teatral', hy: 'Բեմական ցուցումը' },
      { key: 'D', es: 'La persona que escribe', hy: 'Գրող անձը' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. El verso es cada una de las líneas que componen un poema. Un grupo de versos forma una estrofa.',
      hy: 'Ճիշտ է A տարբերակը։ Չափածո տողը (verso) բանաստեղծության առանձին տողն է։ Տողերի խումբը կազմում է տուն (estrofa)։',
    },
  },
  {
    id: 8,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '¿Qué es una estrofa?',
      hy: 'Ի՞նչ է բանաստեղծական տունը։',
    },
    options: [
      { key: 'A', es: 'Una conversación entre actores', hy: 'Դերասանների խոսակցություն' },
      { key: 'B', es: 'Un personaje de un poema', hy: 'Բանաստեղծության կերպար' },
      { key: 'C', es: 'El título de una obra', hy: 'Ստեղծագործության վերնագիր' },
      { key: 'D', es: 'Un conjunto de versos agrupados', hy: 'Միավորված չափածո տողերի խումբ' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. Una estrofa es el conjunto de versos agrupados siguiendo un esquema métrico o de sentido.',
      hy: 'Ճիշտ է D տարբերակը։ Բանաստեղծական տունը (estrofa) չափածո տողերի համախումբ է։',
    },
  },
  {
    id: 9,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '¿Qué caracteriza normalmente a la prosa?',
      hy: 'Ի՞նչն է սովորաբար բնորոշ արձակին։',
    },
    options: [
      { key: 'A', es: 'Se organiza obligatoriamente en estrofas.', hy: 'Պարտադիր կազմվում է բանաստեղծական տներից։' },
      { key: 'B', es: 'Se organiza en oraciones y párrafos.', hy: 'Կազմակերպվում է նախադասություններով և պարբերություններով։' },
      { key: 'C', es: 'Siempre tiene rima.', hy: 'Միշտ հանգ ունի։' },
      { key: 'D', es: 'Solo aparece en el teatro.', hy: 'Հանդիպում է միայն թատրոնում։' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. La prosa fluye de forma continua ocupando todo el renglón y organizándose en oraciones y párrafos, sin la métrica regular del verso.',
      hy: 'Ճիշտ է B տարբերակը։ Արձակը կազմավորվում է նախադասություններով ու պարբերություններով՝ չունենալով չափածո տողերի կառուցվածք։',
    },
  },
  {
    id: 10,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '¿Todos los poemas tienen rima?',
      hy: 'Բոլոր բանաստեղծություններն ունե՞ն հանգ։',
    },
    options: [
      { key: 'A', es: 'Sí, sin excepción.', hy: 'Այո՛, առանց բացառության։' },
      { key: 'B', es: 'Solo los poemas tristes.', hy: 'Միայն տխուր բանաստեղծությունները։' },
      { key: 'C', es: 'No, existen poemas sin rima.', hy: 'Ո՛չ, կան անհանգ բանաստեղծություններ։' },
      { key: 'D', es: 'Solo los poemas largos.', hy: 'Միայն երկար բանաստեղծությունները։' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. La rima no es obligatoria; existen poemas con versos libres o blancos que logran ritmo y musicalidad sin rima.',
      hy: 'Ճիշտ է C տարբերակը։ Հանգը պարտադիր չէ․ կան անհանգ բանաստեղծություններ (ազատ տողերով), որոնք ռիթմն ապահովում են այլ միջոցներով։',
    },
  },
  {
    id: 11,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '¿Qué puede contribuir al ritmo de un poema?',
      hy: 'Ի՞նչը կարող է նպաստել բանաստեղծության ռիթմին։',
    },
    options: [
      { key: 'A', es: 'Los acentos, las pausas y las repeticiones', hy: 'Շեշտերը, դադարները և կրկնությունները' },
      { key: 'B', es: 'El color de la portada', hy: 'Շապիկի գույնը' },
      { key: 'C', es: 'El nombre de la editorial', hy: 'Հրատարակչության անունը' },
      { key: 'D', es: 'El tamaño de las ilustraciones', hy: 'Նկարազարդումների չափը' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. El ritmo se genera mediante la distribución de acentos fónicos, pausas métricas, la medida silábica y repeticiones de palabras.',
      hy: 'Ճիշտ է A տարբերակը։ Ռիթմը ստեղծվում է հնչյունական շեշտերի, դադարների և կրկնությունների ներդաշնակությամբ։',
    },
  },
  {
    id: 12,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '¿Con qué se relaciona la musicalidad de un poema?',
      hy: 'Ինչի՞ հետ է կապված բանաստեղծության երաժշտականությունը։',
    },
    options: [
      { key: 'A', es: 'Con el número de personajes', hy: 'Կերպարների քանակի' },
      { key: 'B', es: 'Con el lugar de publicación', hy: 'Հրատարակության վայրի' },
      { key: 'C', es: 'Con el vestuario', hy: 'Բեմական հագուստի' },
      { key: 'D', es: 'Con el efecto sonoro de las palabras', hy: 'Բառերի հնչողության ազդեցության' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. La musicalidad procede de la armonía acústica y el efecto sonoro creado por las combinaciones de fonemas en el verso.',
      hy: 'Ճիշտ է D տարբերակը։ Երաժշտականությունը կապված է բառերի ու հնչյունների արտաբերման ներդաշնակ ձայնային տպավորության հետ։',
    },
  },
  {
    id: 13,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '¿Qué es la voz poética?',
      hy: 'Ի՞նչ է բանաստեղծական խոսողը։',
    },
    options: [
      { key: 'A', es: 'El lector que compra el libro', hy: 'Գիրքը գնող ընթերցողը' },
      { key: 'B', es: 'La voz que se expresa en el poema', hy: 'Բանաստեղծության մեջ արտահայտվող ձայնը' },
      { key: 'C', es: 'El actor que prepara el escenario', hy: 'Բեմը պատրաստող դերասանը' },
      { key: 'D', es: 'El personaje principal de toda novela', hy: 'Յուրաքանչյուր վեպի գլխավոր կերպարը' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. La voz poética (o «yo lírico») es la entidad discursiva que expresa los sentimientos dentro del poema.',
      hy: 'Ճիշտ է B տարբերակը։ Բանաստեղծական խոսողը (կամ քնարական «ես»-ը) այն ներքին ձայնն է, որը տեքստում արտահայտում է հույզերն ու ապրումները։',
    },
  },
  {
    id: 14,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '¿La voz poética coincide siempre con el autor real?',
      hy: 'Բանաստեղծական խոսողը մի՞շտ է համընկնում իրական հեղինակի հետ։',
    },
    options: [
      { key: 'A', es: 'Sí, en todos los poemas.', hy: 'Այո՛, բոլոր բանաստեղծություններում։' },
      { key: 'B', es: 'Sí, cuando aparece «yo».', hy: 'Այո՛, երբ կա «ես» բառը։' },
      { key: 'C', es: 'No necesariamente.', hy: 'Պարտադիր չէ։' },
      { key: 'D', es: 'Solo si el poema tiene rima.', hy: 'Միայն եթե բանաստեղծությունը հանգ ունի։' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. La voz poética es una construcción artística. El autor real puede adoptar máscaras poéticas ficticias o universales.',
      hy: 'Ճիշտ է C տարբերակը։ Պարտադիր չէ, որ քնարական «ես»-ը նույնանա գրողի իրական կենսագրության հետ։',
    },
  },
  {
    id: 15,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '«Te recuerdo cada noche y siento tu ausencia». ¿Qué sentimiento predomina?',
      hy: '«Ամեն գիշեր հիշում եմ քեզ և զգում քո բացակայությունը»։ Ո՞ր զգացմունքն է գերակշռում։',
    },
    options: [
      { key: 'A', es: 'La añoranza', hy: 'Կարոտը' },
      { key: 'B', es: 'La indiferencia', hy: 'Անտարբերությունը' },
      { key: 'C', es: 'La sorpresa alegre', hy: 'Ուրախ զարմանքը' },
      { key: 'D', es: 'El orgullo', hy: 'Հպարտությունը' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. Recordar a alguien y dolerse por su ausencia es la definición misma de añoranza o nostalgia.',
      hy: 'Ճիշտ է A տարբերակը։ Բացակայությունն ու հիշողությունը արտահայտում են կարոտ (añoranza)։',
    },
  },
  {
    id: 16,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '«Hoy todo me sonríe y quiero cantar». ¿Qué emoción predomina?',
      hy: '«Այսօր ամեն ինչ ժպտում է ինձ, և ուզում եմ երգել»։ Ո՞ր հույզն է գերակշռում։',
    },
    options: [
      { key: 'A', es: 'El miedo', hy: 'Վախը' },
      { key: 'B', es: 'La tristeza', hy: 'Տխրությունը' },
      { key: 'C', es: 'La vergüenza', hy: 'Ամոթը' },
      { key: 'D', es: 'La alegría', hy: 'Ուրախությունը' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. Sonreír y desear cantar manifiestan júbilo y alegría plena.',
      hy: 'Ճիշտ է D տարբերակը։ Ժպիտն ու երգելու ցանկությունը ուրախության ու լավատեսության դրսևորում են։',
    },
  },
  {
    id: 17,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '¿Cuál es la afirmación correcta?',
      hy: 'Ո՞ր պնդումն է ճիշտ։',
    },
    options: [
      { key: 'A', es: 'Todo texto en verso es lírico.', hy: 'Ամեն չափածո տեքստ քնարական է։' },
      { key: 'B', es: 'También existen narraciones y obras teatrales en verso.', hy: 'Կան նաև չափածո պատմողական և թատերական ստեղծագործություններ։' },
      { key: 'C', es: 'La narrativa nunca utiliza verso.', hy: 'Պատմողական գրականությունը երբեք չափածո չի օգտագործում։' },
      { key: 'D', es: 'El teatro siempre tiene rima.', hy: 'Թատրոնը միշտ հանգ ունի։' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. La forma externa no define por sí sola el género: la épica antigua narraba historias en verso, y el teatro del Siglo de Oro se escribía en verso rimado.',
      hy: 'Ճիշտ է B տարբերակը։ Չափածոյով կարող են գրվել նաև պատմողական (էպոս) և թատերական (դասական պիեսներ) ստեղծագործություններ։',
    },
  },
  {
    id: 18,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '«Preferencia por el verso» significa que…',
      hy: '«Չափածոյի նախընտրություն» նշանակում է, որ…',
    },
    options: [
      { key: 'A', es: 'el verso está prohibido.', hy: 'չափածոն արգելված է։' },
      { key: 'B', es: 'todos los textos deben rimar.', hy: 'բոլոր տեքստերը պետք է հանգ ունենան։' },
      { key: 'C', es: 'el verso se utiliza con frecuencia.', hy: 'չափածոն հաճախ է օգտագործվում։' },
      { key: 'D', es: 'la prosa no puede ser literaria.', hy: 'արձակը չի կարող գրական լինել։' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. Preferencia denota uso habitual y predilecto, no una obligación excluyente.',
      hy: 'Ճիշտ է C տարբերակը։ «Նախընտրություն» նշանակում է, որ չափածոն ամենատարածված ձևն է, բայց ոչ միակ հնարավորը։',
    },
  },
  {
    id: 19,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: '¿Qué fragmento tiene una intención principalmente lírica?',
      hy: 'Ո՞ր հատվածն ունի հիմնականում քնարական նպատակ։',
    },
    options: [
      { key: 'A', es: '«Mi corazón guarda la tristeza de tu despedida».', hy: '«Սիրտս պահում է քո հրաժեշտի տխրությունը»։' },
      { key: 'B', es: '«El tren salió a las ocho».', hy: '«Գնացքը մեկնեց ժամը ութին»։' },
      { key: 'C', es: '«Añade dos cucharadas de azúcar».', hy: '«Ավելացրու երկու գդալ շաքար»։' },
      { key: 'D', es: '«La biblioteca abre los lunes».', hy: '«Գրադարանը բացվում է երկուշաբթի օրերին»։' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. Expresa una emoción subjetiva de dolor íntimo. B es narrativa/informativa, C es instructiva y D es un dato práctico.',
      hy: 'Ճիշտ է A տարբերակը։ Սրտի տխրության արտահայտումը զուտ քնարական բնույթ ունի։ Մյուսները փաստագրական, հրահանգային կամ առօրյա տեղեկություններ են։',
    },
  },
  {
    id: 20,
    category: 'generos_lirica',
    categoryTitle: { es: 'Los géneros literarios y la lírica', hy: 'Գրականության սեռերը և քնարերգությունը' },
    question: {
      es: 'Para identificar la lírica, conviene fijarse principalmente en…',
      hy: 'Քնարերգությունը ճանաչելու համար պետք է հիմնականում ուշադրություն դարձնել…',
    },
    options: [
      { key: 'A', es: 'el número de páginas.', hy: 'էջերի քանակին։' },
      { key: 'B', es: 'la presencia de una ciudad.', hy: 'քաղաքի առկայությանը։' },
      { key: 'C', es: 'el nombre del autor.', hy: 'հեղինակի անվանը։' },
      { key: 'D', es: 'la expresión subjetiva y el lenguaje poético.', hy: 'սուբյեկտիվ արտահայտությանը և բանաստեղծական լեզվին։' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. El rasgo esencial de la lírica es la expresión subjetiva de la interioridad con recursos poéticos y ritmo.',
      hy: 'Ճիշտ է D տարբերակը։ Քնարերգությունը բնութագրվում է հեղինակի ներաշխարհի սուբյեկտիվ արտահայտմամբ և բանաստեղծական պատկերավոր լեզվով։',
    },
  },

  // 21–40: LOS RECURSOS RETÓRICOS
  {
    id: 21,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '¿En qué se centran los recursos fónicos?',
      hy: 'Ինչի՞ն են վերաբերում հնչյունային արտահայտչամիջոցները։',
    },
    options: [
      { key: 'A', es: 'A los sonidos', hy: 'Հնչյուններին' },
      { key: 'B', es: 'Al vestuario', hy: 'Բեմական հագուստին' },
      { key: 'C', es: 'A los personajes', hy: 'Կերպարներին' },
      { key: 'D', es: 'A las fechas', hy: 'Ամսաթվերին' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. Los recursos fónicos (como la aliteración) trabajan con la materia sonora y los efectos auditivos de los fonemas.',
      hy: 'Ճիշտ է A տարբերակը։ Հնչյունային (fónicos) միջոցները կապված են տառերի ու հնչյունների կրկնության և երաժշտականության հետ։',
    },
  },
  {
    id: 22,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '¿En qué se centran los recursos morfosintácticos?',
      hy: 'Ինչի՞ն են վերաբերում ձևաբանական-շարահյուսական արտահայտչամիջոցները։',
    },
    options: [
      { key: 'A', es: 'A la iluminación', hy: 'Լուսավորությանը' },
      { key: 'B', es: 'A la biografía del autor', hy: 'Հեղինակի կենսագրությանը' },
      { key: 'C', es: 'A la forma, el orden y la repetición de palabras y estructuras', hy: 'Բառերի ու կառույցների ձևին, դասավորությանը և կրկնությանը' },
      { key: 'D', es: 'Al escenario', hy: 'Բեմին' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. Los recursos morfosintácticos (como la anáfora o el asíndeton) se basan en la estructura gramatical y disposición sintáctica.',
      hy: 'Ճիշտ է C տարբերակը։ Ձևաբանական-շարահյուսական միջոցները հենվում են նախադասության կառուցվածքի, բառերի դիրքի և քերականական ձևերի կրկնության վրա։',
    },
  },
  {
    id: 23,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '¿En qué se centran los recursos semánticos?',
      hy: 'Ինչի՞ն են վերաբերում իմաստային արտահայտչամիջոցները։',
    },
    options: [
      { key: 'A', es: 'Al tamaño de las letras', hy: 'Տառերի չափին' },
      { key: 'B', es: 'Al significado de las palabras', hy: 'Բառերի իմաստին' },
      { key: 'C', es: 'Al número de páginas', hy: 'Էջերի քանակին' },
      { key: 'D', es: 'Al volumen de la voz del lector', hy: 'Ընթերցողի ձայնի բարձրությանը' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. La semántica estudia el significado; recursos como la metáfora o la personificación juegan con el sentido y las asociaciones de palabras.',
      hy: 'Ճիշտ է B տարբերակը։ Իմաստային (սեմանտիկ) միջոցները վերաբերում են բառերի նշանակությանը, փոխաբերական իմաստներին և նմանեցումներին։',
    },
  },
  {
    id: 24,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '¿Qué es la aliteración?',
      hy: 'Ի՞նչ է ալիտերացիան։',
    },
    options: [
      { key: 'A', es: 'La repetición de una escena', hy: 'Տեսարանի կրկնությունը' },
      { key: 'B', es: 'La comparación entre personajes', hy: 'Կերպարների համեմատությունը' },
      { key: 'C', es: 'La ausencia de narrador', hy: 'Պատմողի բացակայությունը' },
      { key: 'D', es: 'La repetición expresiva de sonidos', hy: 'Հնչյունների արտահայտիչ կրկնությունը' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. La aliteración consiste en reiterar uno o varios sonidos consonánticos o vocálicos para evocar una sensación.',
      hy: 'Ճիշտ է D տարբերակը։ Ալիտերացիան նույն կամ նման հնչյունների արտահայտիչ կրկնությունն է բանաստեղծական խոսքում։',
    },
  },
  {
    id: 25,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '«Sus suaves susurros». ¿Qué recurso destaca?',
      hy: '«Sus suaves susurros» արտահայտության մեջ ո՞ր արտահայտչամիջոցն է ընդգծված։',
    },
    options: [
      { key: 'A', es: 'Aliteración', hy: 'Ալիտերացիա' },
      { key: 'B', es: 'Metáfora', hy: 'Փոխաբերություն' },
      { key: 'C', es: 'Comparación', hy: 'Համեմատություն' },
      { key: 'D', es: 'Hipérbole', hy: 'Չափազանցություն' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. Se repite de manera evidente el fonema /s/ («Sus suaves susurros») para sugerir el murmullo.',
      hy: 'Ճիշտ է A տարբերակը։ Կրկնվում է /s/ հնչյունը («Sus suaves susurros»), ինչը դասական ալիտերացիա է։',
    },
  },
  {
    id: 26,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '¿Qué es la anáfora como recurso literario?',
      hy: 'Ի՞նչ է անաֆորան՝ որպես գրական արտահայտչամիջոց։',
    },
    options: [
      { key: 'A', es: 'La repetición de sonidos al final de palabras', hy: 'Բառավերջի հնչյունների կրկնությունը' },
      { key: 'B', es: 'La descripción del protagonista', hy: 'Գլխավոր հերոսի նկարագրությունը' },
      { key: 'C', es: 'La repetición de palabras al comienzo de versos o enunciados', hy: 'Տողերի կամ արտահայտությունների սկզբում բառերի կրկնությունը' },
      { key: 'D', es: 'La utilización de objetos teatrales', hy: 'Բեմական պարագաների օգտագործումը' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. La anáfora es la repetición deliberada de una o más palabras al inicio de oraciones o versos sucesivos.',
      hy: 'Ճիշտ է C տարբերակը։ Անաֆորան հաջորդական տողերի կամ նախադասությունների սկզբում նույն բառերի կրկնությունն է։',
    },
  },
  {
    id: 27,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '«Quiero verte. / Quiero escucharte. / Quiero abrazarte». ¿Qué recurso aparece?',
      hy: '«Ուզում եմ տեսնել քեզ։ / Ուզում եմ լսել քեզ։ / Ուզում եմ գրկել քեզ»։ Ո՞ր արտահայտչամիջոցն է օգտագործված։',
    },
    options: [
      { key: 'A', es: 'Comparación', hy: 'Համեմատություն' },
      { key: 'B', es: 'Anáfora', hy: 'Անաֆորա' },
      { key: 'C', es: 'Personificación', hy: 'Անձնավորում' },
      { key: 'D', es: 'Hipérbole', hy: 'Չափազանցություն' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. Los tres versos comienzan idénticamente con «Quiero», formando una anáfora.',
      hy: 'Ճիշտ է B տարբերակը։ Բոլոր տողերը սկսվում են նույն «Quiero» («ուզում եմ») բառով, ինչն անաֆորա է։',
    },
  },
  {
    id: 28,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '¿A qué grupo pertenece la anáfora?',
      hy: 'Ո՞ր խմբին է պատկանում անաֆորան։',
    },
    options: [
      { key: 'A', es: 'A los elementos del decorado', hy: 'Բեմանկարի տարրերին' },
      { key: 'B', es: 'A los recursos semánticos', hy: 'Իմաստային արտահայտչամիջոցներին' },
      { key: 'C', es: 'A los recursos fónicos', hy: 'Հնչյունային արտահայտչամիջոցներին' },
      { key: 'D', es: 'A los recursos morfosintácticos', hy: 'Ձևաբանական-շարահյուսական արտահայտչամիջոցներին' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. Al tratarse de la repetición y orden de las palabras en la oración, la anáfora es un recurso morfosintáctico.',
      hy: 'Ճիշտ է D տարբերակը։ Քանի որ այն վերաբերում է նախադասության կառուցվածքին ու բառերի դասավորությանը, անաֆորան ձևաբանական-շարահյուսական միջոց է։',
    },
  },
  {
    id: 29,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '¿Qué hace una metáfora?',
      hy: 'Ի՞նչ է անում փոխաբերությունը։',
    },
    options: [
      { key: 'A', es: 'Identifica una realidad con otra por una semejanza', hy: 'Նմանության հիման վրա մի երևույթը նույնացնում է մյուսի հետ' },
      { key: 'B', es: 'Indica cómo debe moverse un actor', hy: 'Նշում է՝ ինչպես պետք է շարժվի դերասանը' },
      { key: 'C', es: 'Repite siempre la misma consonante', hy: 'Միշտ կրկնում է նույն բաղաձայնը' },
      { key: 'D', es: 'Cuenta los capítulos de una novela', hy: 'Հաշվում է վեպի գլուխները' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. La metáfora traslada el sentido de un término real a uno imaginario basándose en una relación de semejanza sin nexo comparativo explícito.',
      hy: 'Ճիշտ է A տարբերակը։ Փոխաբերությունը նմանության հիման վրա մի երևույթի հատկանիշը փոխադրում է մյուսին՝ առանց «ինչպես/պես» համեմատական բառի։',
    },
  },
  {
    id: 30,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '«Tus ojos son estrellas». ¿Qué recurso aparece?',
      hy: '«Քո աչքերը աստղեր են»։ Ո՞ր արտահայտչամիջոցն է օգտագործված։',
    },
    options: [
      { key: 'A', es: 'Anáfora', hy: 'Անաֆորա' },
      { key: 'B', es: 'Aliteración', hy: 'Ալիտերացիա' },
      { key: 'C', es: 'Metáfora', hy: 'Փոխաբերություն' },
      { key: 'D', es: 'Acotación', hy: 'Բեմական ցուցում' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. Se identifica directamente los «ojos» con «estrellas» (A es B), lo que constituye una metáfora pura.',
      hy: 'Ճիշտ է C տարբերակը։ «Աչքերը» նույնացվում են «աստղերի» հետ, ինչը փոխաբերություն է։',
    },
  },
  {
    id: 31,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '«Tus ojos brillan como estrellas». ¿Qué recurso aparece?',
      hy: '«Քո աչքերը փայլում են աստղերի պես»։ Ո՞ր արտահայտչամիջոցն է օգտագործված։',
    },
    options: [
      { key: 'A', es: 'Hipérbole', hy: 'Չափազանցություն' },
      { key: 'B', es: 'Comparación', hy: 'Համեմատություն' },
      { key: 'C', es: 'Anáfora', hy: 'Անաֆորա' },
      { key: 'D', es: 'Aliteración', hy: 'Ալիտերացիա' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. Al existir un nexo explícito («como»), se trata de una comparación o símil.',
      hy: 'Ճիշտ է B տարբերակը։ «Como» («պես») համեմատական բառի առկայությունը դարձնում է այն համեմատություն։',
    },
  },
  {
    id: 32,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '¿Qué palabra introduce la comparación en «corre como el viento»?',
      hy: '«Վազում է քամու պես» արտահայտության իսպաներեն տարբերակում ո՞ր բառն է ներկայացնում համեմատությունը։',
    },
    options: [
      { key: 'A', es: 'Corre', hy: 'Վազում է' },
      { key: 'B', es: 'El', hy: 'Որոշիչ հոդը' },
      { key: 'C', es: 'Viento', hy: 'Քամի' },
      { key: 'D', es: 'Como', hy: 'Պես' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. «Como» es la conjunción comparativa que establece el vínculo entre el sujeto y el término de referencia.',
      hy: 'Ճիշտ է D տարբերակը։ «Como» (ինչպես / պես) բառն է կապում համեմատվող անդամները։',
    },
  },
  {
    id: 33,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '¿Qué es la personificación?',
      hy: 'Ի՞նչ է անձնավորումը։',
    },
    options: [
      { key: 'A', es: 'Atribuir cualidades o acciones humanas a seres no humanos o ideas', hy: 'Ոչ մարդկային էակներին կամ գաղափարներին մարդկային հատկանիշներ կամ գործողություններ վերագրելը' },
      { key: 'B', es: 'Presentar al autor de un libro', hy: 'Գրքի հեղինակին ներկայացնելը' },
      { key: 'C', es: 'Escribir en primera persona', hy: 'Առաջին դեմքով գրելը' },
      { key: 'D', es: 'Cambiar el nombre de un personaje', hy: 'Կերպարի անունը փոխելը' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. La personificación (o prosopopeya) concede rasgos, sentimientos o acciones humanas a animales, objetos o conceptos abstractos.',
      hy: 'Ճիշտ է A տարբերակը։ Անձնավորումը (personificación) մարդկային գործողություններ կամ զգացմունքներ անշունչ առարկաներին կամ բնության տարրերին վերագրելն է։',
    },
  },
  {
    id: 34,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '«La luna me sonrió». ¿Qué recurso aparece?',
      hy: '«Լուսինը ժպտաց ինձ»։ Ո՞ր արտահայտչամիջոցն է օգտագործված։',
    },
    options: [
      { key: 'A', es: 'Anáfora', hy: 'Անաֆորա' },
      { key: 'B', es: 'Comparación', hy: 'Համեմատություն' },
      { key: 'C', es: 'Personificación', hy: 'Անձնավորում' },
      { key: 'D', es: 'Aliteración', hy: 'Ալիտերացիա' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. La luna no puede sonreír; atribuirle una sonrisa es una acción humana personificada.',
      hy: 'Ճիշտ է C տարբերակը։ Լուսնին ժպտալու մարդկային հատկանիշ է վերագրված, ինչն անձնավորում է։',
    },
  },
  {
    id: 35,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '¿Cuál contiene una personificación?',
      hy: 'Ո՞ր տարբերակն է պարունակում անձնավորում։',
    },
    options: [
      { key: 'A', es: 'El niño sonrió.', hy: 'Տղան ժպտաց։' },
      { key: 'B', es: 'El bosque nos dio la bienvenida.', hy: 'Անտառը մեզ ողջունեց։' },
      { key: 'C', es: 'La puerta es de madera.', hy: 'Դուռը փայտից է։' },
      { key: 'D', es: 'Marta abrió el libro.', hy: 'Մարտան բացեց գիրքը։' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. Un bosque no puede dar la bienvenida físicamente; es una cualidad humana transferida a la naturaleza.',
      hy: 'Ճիշտ է B տարբերակը։ Անտառը չի կարող «ողջունել»․ դա մարդկային գործողություն է, որը վերագրվել է անտառին։',
    },
  },
  {
    id: 36,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '¿A qué grupo pertenece la metáfora?',
      hy: 'Ո՞ր խմբին է պատկանում փոխաբերությունը։',
    },
    options: [
      { key: 'A', es: 'Al vestuario', hy: 'Բեմական հագուստին' },
      { key: 'B', es: 'A los recursos fónicos', hy: 'Հնչյունային արտահայտչամիջոցներին' },
      { key: 'C', es: 'A las acotaciones', hy: 'Բեմական ցուցումներին' },
      { key: 'D', es: 'A los recursos semánticos', hy: 'Իմաստային արտահայտչամիջոցներին' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. Opera sobre el significado (semántica) de las palabras para crear un sentido figurado.',
      hy: 'Ճիշտ է D տարբերակը։ Փոխաբերությունը գործում է բառի իմաստի (սեմանտիկայի) հիման վրա, ուստի իմաստային արտահայտչամիջոց է։',
    },
  },
  {
    id: 37,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '«Te he llamado un millón de veces», dicho para exagerar, es…',
      hy: '«Քեզ միլիոն անգամ զանգել եմ» արտահայտությունը, երբ օգտագործվում է չափազանցնելու համար, ի՞նչ է։',
    },
    options: [
      { key: 'A', es: 'Una hipérbole', hy: 'Չափազանցություն' },
      { key: 'B', es: 'Una acotación', hy: 'Բեմական ցուցում' },
      { key: 'C', es: 'Una anáfora', hy: 'Անաֆորա' },
      { key: 'D', es: 'Una aliteración', hy: 'Ալիտերացիա' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. La hipérbole es una exageración desmedida con fines expresivos o enfáticos.',
      hy: 'Ճիշտ է A տարբերակը։ Չափազանցությունը (hipérbole) իրականության միտումնավոր մեծացումն է խոսքի արտահայտչականության համար։',
    },
  },
  {
    id: 38,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '¿Qué pareja está correctamente clasificada?',
      hy: 'Ո՞ր զույգն է ճիշտ դասակարգված։',
    },
    options: [
      { key: 'A', es: 'Metáfora: fónico', hy: 'Փոխաբերություն՝ հնչյունային' },
      { key: 'B', es: 'Anáfora: semántico', hy: 'Անաֆորա՝ իմաստային' },
      { key: 'C', es: 'Aliteración: fónico', hy: 'Ալիտերացիա՝ հնչյունային' },
      { key: 'D', es: 'Personificación: morfosintáctico', hy: 'Անձնավորում՝ ձևաբանական-շարահյուսական' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. La aliteración trabaja con sonidos (fónico). La metáfora y personificación son semánticos, y la anáfora es morfosintáctico.',
      hy: 'Ճիշտ է C տարբերակը։ Ալիտերացիան հնչյունային (fónico) միջոց է։ Փոխաբերությունն ու անձնավորումը իմաստային են, անաֆորան՝ շարահյուսական։',
    },
  },
  {
    id: 39,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '¿Los recursos retóricos aparecen únicamente en la lírica?',
      hy: 'Գեղարվեստական արտահայտչամիջոցները հանդիպո՞ւմ են միայն քնարերգության մեջ։',
    },
    options: [
      { key: 'A', es: 'Sí, únicamente en poemas.', hy: 'Այո՛, միայն բանաստեղծություններում։' },
      { key: 'B', es: 'No, también aparecen en narrativa y teatro.', hy: 'Ո՛չ, հանդիպում են նաև պատմողական գրականության և թատրոնի մեջ։' },
      { key: 'C', es: 'Sí, únicamente en textos con rima.', hy: 'Այո՛, միայն հանգավոր տեքստերում։' },
      { key: 'D', es: 'No, solo aparecen en el teatro.', hy: 'Ո՛չ, հանդիպում են միայն թատրոնում։' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. Los recursos estilísticos enriquecen todos los géneros literarios (novelas, relatos, obras dramáticas y poemas).',
      hy: 'Ճիշտ է B տարբերակը։ Գեղարվեստական պատկերավորման միջոցները հանդիպում են ինչպես քնարերգության, այնպես էլ պատմողական ու թատերական ստեղծագործություններում։',
    },
  },
  {
    id: 40,
    category: 'recursos',
    categoryTitle: { es: 'Los recursos retóricos', hy: 'Գեղարվեստական արտահայտչամիջոցները' },
    question: {
      es: '«Aquí espero. / Aquí sueño. / Aquí recuerdo». ¿Qué se repite para crear la anáfora?',
      hy: '«Այստեղ սպասում եմ։ / Այստեղ երազում եմ։ / Այստեղ հիշում եմ»։ Ի՞նչն է կրկնվում՝ ստեղծելով անաֆորա։',
    },
    options: [
      { key: 'A', es: 'Una acción teatral', hy: 'Բեմական գործողություն' },
      { key: 'B', es: 'El nombre del autor', hy: 'Հեղինակի անունը' },
      { key: 'C', es: 'Una comparación', hy: 'Համեմատություն' },
      { key: 'D', es: 'La palabra inicial «aquí»', hy: 'Սկզբի «այստեղ» (aquí) բառը' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. La repetición anafórica se produce por la presencia de «aquí» al principio de cada enunciado.',
      hy: 'Ճիշտ է D տարբերակը։ Տողասկզբի «aquí» («այստեղ») բառի կրկնությունն է ստեղծում անաֆորան։',
    },
  },

  // 41–60: LA NARRATIVA
  {
    id: 41,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '¿Qué hace principalmente un texto narrativo?',
      hy: 'Հիմնականում ի՞նչ է անում պատմողական տեքստը։',
    },
    options: [
      { key: 'A', es: 'Cuenta una historia', hy: 'Պատմում է պատմություն' },
      { key: 'B', es: 'Enumera normas ortográficas', hy: 'Թվարկում է ուղղագրական կանոններ' },
      { key: 'C', es: 'Presenta únicamente sentimientos sin acontecimientos', hy: 'Ներկայացնում է միայն զգացմունքներ՝ առանց դեպքերի' },
      { key: 'D', es: 'Da instrucciones de montaje', hy: 'Տալիս է հավաքման հրահանգներ' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. El propósito de la narrativa es contar una serie de acontecimientos que suceden a personajes en un tiempo y espacio.',
      hy: 'Ճիշտ է A տարբերակը։ Պատմողական գրականության հիմնական նպատակը պատմություն (իրադարձությունների ընթացք) ներկայացնելն է։',
    },
  },
  {
    id: 42,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '¿Quién es el narrador?',
      hy: 'Ո՞վ է պատմողը։',
    },
    options: [
      { key: 'A', es: 'Siempre el autor real', hy: 'Միշտ իրական հեղինակը' },
      { key: 'B', es: 'El lector de la obra', hy: 'Ստեղծագործության ընթերցողը' },
      { key: 'C', es: 'La voz que cuenta la historia', hy: 'Պատմությունը ներկայացնող ձայնը' },
      { key: 'D', es: 'El actor principal', hy: 'Գլխավոր դերասանը' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. El narrador es la voz ficticia interna creada por el autor para relatar la historia.',
      hy: 'Ճիշտ է C տարբերակը։ Պատմողը (narrador) գեղարվեստական տեքստի ներսում պատմությունը շարադրող ձայնն է։',
    },
  },
  {
    id: 43,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '¿Quién es el autor?',
      hy: 'Ո՞վ է հեղինակը։',
    },
    options: [
      { key: 'A', es: 'La voz que habla en todos los relatos', hy: 'Բոլոր պատմություններում խոսող ձայնը' },
      { key: 'B', es: 'La persona real que escribe la obra', hy: 'Ստեղծագործությունը գրող իրական մարդը' },
      { key: 'C', es: 'Cualquier personaje', hy: 'Ցանկացած կերպար' },
      { key: 'D', es: 'La persona que compra el libro', hy: 'Գիրքը գնող անձը' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. El autor es la persona de carne y hueso que redacta el libro.',
      hy: 'Ճիշտ է B տարբերակը։ Հեղինակը իրական մարդն է, որը ստեղծել և գրել է գիրքը։',
    },
  },
  {
    id: 44,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '¿Qué afirmación sobre autor y narrador es correcta?',
      hy: 'Հեղինակի և պատմողի մասին ո՞ր պնդումն է ճիշտ։',
    },
    options: [
      { key: 'A', es: 'Son siempre idénticos.', hy: 'Նրանք միշտ նույնն են։' },
      { key: 'B', es: 'El narrador publica el libro.', hy: 'Պատմողը հրատարակում է գիրքը։' },
      { key: 'C', es: 'El autor solo aparece en el teatro.', hy: 'Հեղինակը լինում է միայն թատրոնում։' },
      { key: 'D', es: 'No debemos identificarlos automáticamente.', hy: 'Նրանց չպետք է ինքնաբերաբար նույնացնել։' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. Aunque el narrador hable en primera persona («yo»), no se debe identificar automáticamente con la persona real del autor.',
      hy: 'Ճիշտ է D տարբերակը։ Հեղինակին և պատմողին չպետք է նույնացնել, քանի որ պատմողը կարող է լինել հորինված կերպար։',
    },
  },
  {
    id: 45,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '«Abrí la puerta y entré». ¿En qué persona está narrado?',
      hy: '«Բացեցի դուռը և մտա»։ Ո՞ր դեմքով է պատմվում։',
    },
    options: [
      { key: 'A', es: 'Primera persona', hy: 'Առաջին դեմք' },
      { key: 'B', es: 'Segunda persona', hy: 'Երկրորդ դեմք' },
      { key: 'C', es: 'Tercera persona', hy: 'Երրորդ դեմք' },
      { key: 'D', es: 'Forma impersonal', hy: 'Անդեմ ձև' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. Los verbos «abrí» y «entré» están conjugados en primera persona del singular (yo).',
      hy: 'Ճիշտ է A տարբերակը։ «Abrí» (բացեցի) և «entré» (մտա) բայերը առաջին դեմքով են («ես»)։',
    },
  },
  {
    id: 46,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '«Elena abrió la puerta y entró». ¿En qué persona está narrado?',
      hy: '«Ելենան բացեց դուռը և մտավ»։ Ո՞ր դեմքով է պատմվում։',
    },
    options: [
      { key: 'A', es: 'Primera persona del singular', hy: 'Եզակի թվի առաջին դեմք' },
      { key: 'B', es: 'Primera persona del plural', hy: 'Հոգնակի թվի առաջին դեմք' },
      { key: 'C', es: 'Tercera persona', hy: 'Երրորդ դեմք' },
      { key: 'D', es: 'Segunda persona', hy: 'Երկրորդ դեմք' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. El sujeto es «Elena» y los verbos están en tercera persona (ella abrió, entró).',
      hy: 'Ճիշտ է C տարբերակը։ Պատմվում է երրորդ դեմքով՝ «Ելենան բացեց և մտավ» (նա)։',
    },
  },
  {
    id: 47,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '«Llegamos al pueblo al anochecer». ¿Qué pronombre corresponde al narrador?',
      hy: '«Մթնշաղին հասանք գյուղ»։ Ո՞ր դերանունն է համապատասխանում պատմողին։',
    },
    options: [
      { key: 'A', es: 'Ellos', hy: 'Նրանք' },
      { key: 'B', es: 'Nosotros', hy: 'Մենք' },
      { key: 'C', es: 'Tú', hy: 'Դու' },
      { key: 'D', es: 'Él', hy: 'Նա' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. «Llegamos» es primera persona del plural (nosotros).',
      hy: 'Ճիշտ է B տարբերակը։ «Llegamos» (հասանք) համապատասխանում է «մենք» (nosotros) դերանվանը։',
    },
  },
  {
    id: 48,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: 'Un narrador cuenta una aventura que él mismo vive. ¿Qué ocurre?',
      hy: 'Պատմողը պատմում է մի արկած, որին ինքն է մասնակցում։ Ի՞նչ է տեղի ունենում։',
    },
    options: [
      { key: 'A', es: 'Desaparece la narración.', hy: 'Պատմումը վերանում է։' },
      { key: 'B', es: 'El texto se convierte en teatro.', hy: 'Տեքստը վերածվում է թատրոնի։' },
      { key: 'C', es: 'El autor debe ser ese personaje.', hy: 'Հեղինակը պարտադիր այդ կերպարն է։' },
      { key: 'D', es: 'El narrador participa en la historia.', hy: 'Պատմողը մասնակցում է պատմությանը։' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. Es un narrador interno o participante (protagonista o testigo).',
      hy: 'Ճիշտ է D տարբերակը։ Պատմողը հանդես է գալիս որպես գործող անձ (առաջին դեմքով մասնակից)։',
    },
  },
  {
    id: 49,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '¿Qué es un personaje?',
      hy: 'Ի՞նչ է կերպարը։',
    },
    options: [
      { key: 'A', es: 'Un ser que interviene en la historia', hy: 'Պատմությանը մասնակցող էակ' },
      { key: 'B', es: 'Una línea del poema', hy: 'Բանաստեղծության տող' },
      { key: 'C', es: 'Una editorial', hy: 'Հրատարակչություն' },
      { key: 'D', es: 'Un recurso sonoro', hy: 'Հնչյունային արտահայտչամիջոց' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. Los personajes son los seres ficticios (personas, animales, seres mágicos) que llevan a cabo las acciones en el relato.',
      hy: 'Ճիշտ է A տարբերակը։ Կերպարը պատմությանը մասնակցող և գործողություններ իրականացնող էակն է։',
    },
  },
  {
    id: 50,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '¿Qué es el espacio narrativo?',
      hy: 'Ի՞նչ է պատմության տարածքը։',
    },
    options: [
      { key: 'A', es: 'El número de páginas', hy: 'Էջերի քանակը' },
      { key: 'B', es: 'El tiempo que tarda el lector', hy: 'Ընթերցողի ծախսած ժամանակը' },
      { key: 'C', es: 'El lugar donde suceden los hechos', hy: 'Դեպքերի տեղի ունենալու վայրը' },
      { key: 'D', es: 'La distancia entre las palabras', hy: 'Բառերի միջև հեռավորությունը' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. El espacio narrativo es el entorno geográfico o físico donde transcurre la trama.',
      hy: 'Ճիշտ է C տարբերակը։ Պատմողական տարածքը (espacio) այն վայրն է (միջավայրը), որտեղ տեղի են ունենում իրադարձությունները։',
    },
  },
  {
    id: 51,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '¿Qué pregunta ayuda a identificar el tiempo de una historia?',
      hy: 'Ո՞ր հարցն է օգնում որոշել պատմության ժամանակը։',
    },
    options: [
      { key: 'A', es: '¿Quién publicó el libro?', hy: 'Ո՞վ է հրատարակել գիրքը։' },
      { key: 'B', es: '¿Cuándo suceden los hechos?', hy: 'Ե՞րբ են տեղի ունենում դեպքերը։' },
      { key: 'C', es: '¿Cuántas ilustraciones tiene?', hy: 'Քանի՞ նկարազարդում ունի։' },
      { key: 'D', es: '¿Cómo se llama el autor?', hy: 'Ի՞նչ է հեղինակի անունը։' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. «¿Cuándo?» sitúa la época, el momento del día o la duración temporal del relato.',
      hy: 'Ճիշտ է B տարբերակը։ «Ե՞րբ են տեղի ունենում դեպքերը» հարցն է բացահայտում պատմության ժամանակը։',
    },
  },
  {
    id: 52,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '¿Qué es la acción narrativa?',
      hy: 'Ի՞նչ է պատմողական գործողությունը։',
    },
    options: [
      { key: 'A', es: 'La ropa de los personajes', hy: 'Կերպարների հագուստը' },
      { key: 'B', es: 'La portada del libro', hy: 'Գրքի շապիկը' },
      { key: 'C', es: 'La opinión del lector', hy: 'Ընթերցողի կարծիքը' },
      { key: 'D', es: 'El conjunto de acontecimientos de la historia', hy: 'Պատմության իրադարձությունների ամբողջությունը' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. La acción es la cadena de sucesos y transformaciones que viven los personajes a lo largo de la historia.',
      hy: 'Ճիշտ է D տարբերակը։ Պատմողական գործողությունը (acción) պատմության բոլոր դեպքերի ու իրադարձությունների շղթան է։',
    },
  },
  {
    id: 53,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '¿Qué hace una descripción?',
      hy: 'Ի՞նչ է անում նկարագրությունը։',
    },
    options: [
      { key: 'A', es: 'Explica cómo es alguien o algo', hy: 'Բացատրում է՝ ինչպիսին է ինչ-որ մեկը կամ ինչ-որ բան' },
      { key: 'B', es: 'Siempre cuenta una persecución', hy: 'Միշտ պատմում է հետապնդում' },
      { key: 'C', es: 'Indica el precio del libro', hy: 'Նշում է գրքի գինը' },
      { key: 'D', es: 'Elimina al narrador', hy: 'Վերացնում է պատմողին' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. La descripción detalla las cualidades, aspecto o propiedades de personajes, objetos o lugares.',
      hy: 'Ճիշտ է A տարբերակը։ Նկարագրությունը բացատրում է, թե ինչպիսին է առարկան, վայրը կամ անձը։',
    },
  },
  {
    id: 54,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '¿Qué oración es principalmente descriptiva?',
      hy: 'Ո՞ր նախադասությունն է հիմնականում նկարագրական։',
    },
    options: [
      { key: 'A', es: 'Marcos abrió la caja.', hy: 'Մարկոսը բացեց տուփը։' },
      { key: 'B', es: 'Ana salió corriendo.', hy: 'Անան վազելով դուրս եկավ։' },
      { key: 'C', es: 'La habitación era amplia y luminosa.', hy: 'Սենյակը ընդարձակ էր և լուսավոր։' },
      { key: 'D', es: 'El perro saltó la valla.', hy: 'Շունը ցատկեց ցանկապատի վրայով։' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. Explica cómo era la habitación (amplia y luminosa). Las otras tres oraciones relatan acciones activas.',
      hy: 'Ճիշտ է C տարբերակը։ «Սենյակը ընդարձակ էր և լուսավոր» նախադասությունը նկարագրում է հատկանիշները։ Մյուսները գործողություններ են։',
    },
  },
  {
    id: 55,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '¿Qué oración cuenta una acción?',
      hy: 'Ո՞ր նախադասությունն է ներկայացնում գործողություն։',
    },
    options: [
      { key: 'A', es: 'La puerta era azul.', hy: 'Դուռը կապույտ էր։' },
      { key: 'B', es: 'Paula escondió la carta.', hy: 'Պաուլան թաքցրեց նամակը։' },
      { key: 'C', es: 'El jardín era pequeño.', hy: 'Այգին փոքր էր։' },
      { key: 'D', es: 'La mochila tenía dos bolsillos.', hy: 'Ուսապարկն ուներ երկու գրպան։' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. «Paula escondió la carta» relata un hecho o acción dinámica. Las demás son descripciones de estado.',
      hy: 'Ճիշտ է B տարբերակը։ «Պաուլան թաքցրեց նամակը» արտահայտում է կատարված գործողություն։',
    },
  },
  {
    id: 56,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '¿Puede una narración incluir diálogos?',
      hy: 'Պատմողական տեքստը կարո՞ղ է երկխոսություններ ներառել։',
    },
    options: [
      { key: 'A', es: 'No, nunca.', hy: 'Ո՛չ, երբեք։' },
      { key: 'B', es: 'Solo si está en verso.', hy: 'Միայն եթե չափածո է։' },
      { key: 'C', es: 'Solo si no tiene narrador.', hy: 'Միայն եթե պատմող չունի։' },
      { key: 'D', es: 'Sí, puede combinar narración, descripción y diálogo.', hy: 'Այո՛, կարող է համադրել պատմում, նկարագրություն և երկխոսություն։' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. Los relatos suelen integrar partes narrativas, pasajes descriptivos y voces directas de personajes mediante diálogos.',
      hy: 'Ճիշտ է D տարբերակը։ Պատմողական ստեղծագործությունը բնականորեն համադրում է պատմումը, նկարագրությունը և երկխոսությունները։',
    },
  },
  {
    id: 57,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '¿Una historia ficticia puede situarse en Madrid?',
      hy: 'Հորինված պատմությունը կարո՞ղ է տեղի ունենալ Մադրիդում։',
    },
    options: [
      { key: 'A', es: 'Sí, puede utilizar lugares reales.', hy: 'Այո՛, կարող է օգտագործել իրական վայրեր։' },
      { key: 'B', es: 'No, todos sus lugares deben ser inventados.', hy: 'Ո՛չ, բոլոր վայրերը պետք է հորինված լինեն։' },
      { key: 'C', es: 'Solo si es una noticia.', hy: 'Միայն եթե լուր է։' },
      { key: 'D', es: 'Solo si no tiene personajes.', hy: 'Միայն եթե կերպարներ չունի։' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. La ficción combina libremente elementos reales (como ciudades o fechas históricas) con personajes e intrigas inventadas.',
      hy: 'Ճիշտ է A տարբերակը։ Հորինված ստեղծագործությունը կարող է տեղի ունենալ իրական քաղաքներում՝ համադրելով իրականն ու հորինվածը։',
    },
  },
  {
    id: 58,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '¿Toda ficción debe contener magia?',
      hy: 'Յուրաքանչյուր հորինվածք պարտադի՞ր պետք է կախարդանք պարունակի։',
    },
    options: [
      { key: 'A', es: 'Sí, siempre.', hy: 'Այո՛, միշտ։' },
      { key: 'B', es: 'Solo si está en prosa.', hy: 'Միայն եթե արձակ է։' },
      { key: 'C', es: 'No, también puede presentar situaciones posibles y realistas.', hy: 'Ո՛չ, կարող է ներկայացնել նաև հնարավոր և իրատեսական իրավիճակներ։' },
      { key: 'D', es: 'Solo si aparece un narrador.', hy: 'Միայն եթե պատմող կա։' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. La literatura realista es ficción verosímil sobre vidas y situaciones cotidianas sin ningún elemento mágico.',
      hy: 'Ճիշտ է C տարբերակը։ Հորինվածքը կարող է լինել իրատեսական (ռեալիստական)՝ առանց կախարդական կամ գերբնական տարրերի։',
    },
  },
  {
    id: 59,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '¿Qué forma es frecuente en la narrativa actual?',
      hy: 'Ո՞ր ձևն է տարածված ժամանակակից պատմողական գրականության մեջ։',
    },
    options: [
      { key: 'A', es: 'Solo el verso rimado', hy: 'Միայն հանգավոր չափածոն' },
      { key: 'B', es: 'La prosa', hy: 'Արձակը' },
      { key: 'C', es: 'Solo las acotaciones', hy: 'Միայն բեմական ցուցումները' },
      { key: 'D', es: 'Solo las listas', hy: 'Միայն ցանկերը' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. La inmensa mayoría de las novelas y cuentos contemporáneos se escriben en prosa.',
      hy: 'Ճիշտ է B տարբերակը։ Ժամանակակից պատմողական գրականության (վեպեր, պատմվածքներ) հիմնական ձևն արձակն է։',
    },
  },
  {
    id: 60,
    category: 'narrativa',
    categoryTitle: { es: 'La narrativa', hy: 'Պատմողական գրականություն' },
    question: {
      es: '¿Qué forma tuvo gran importancia en la tradición épica?',
      hy: 'Ո՞ր ձևը մեծ նշանակություն է ունեցել էպիկական ավանդույթում։',
    },
    options: [
      { key: 'A', es: 'El formulario', hy: 'Հարցաթերթիկը' },
      { key: 'B', es: 'La receta', hy: 'Բաղադրատոմսը' },
      { key: 'C', es: 'El horario', hy: 'Ժամանակացույցը' },
      { key: 'D', es: 'El verso', hy: 'Չափածոն' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. Los cantares de gesta y poemas épicos antiguos (como la Odisea o el Cantar de mio Cid) se componían en verso para facilitar la memorización y el canto.',
      hy: 'Ճիշտ է D տարբերակը։ Հնագույն էպիկական ավանդույթում (հերոսապատումներում) պատմությունները շարադրվում էին չափածոյով։',
    },
  },

  // 61–80: EL TEATRO
  {
    id: 61,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Cuál es la finalidad principal del texto teatral?',
      hy: 'Ո՞րն է թատերական տեքստի հիմնական նպատակը։',
    },
    options: [
      { key: 'A', es: 'Ser representado ante un público', hy: 'Բեմադրվել հանդիսատեսի առաջ' },
      { key: 'B', es: 'Explicar un experimento', hy: 'Փորձ բացատրել' },
      { key: 'C', es: 'Presentar únicamente datos históricos', hy: 'Ներկայացնել միայն պատմական տվյալներ' },
      { key: 'D', es: 'Organizar palabras alfabéticamente', hy: 'Բառերը դասավորել այբբենական կարգով' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. El teatro nace concebido para la representación escénica ante espectadores, no solo para su lectura solitaria.',
      hy: 'Ճիշտ է A տարբերակը։ Թատերական (դրամատիկական) տեքստի հիմնական նպատակը բեմում հանդիսատեսի առաջ ներկայացվելն է։',
    },
  },
  {
    id: 62,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Quiénes representan a los personajes en el escenario?',
      hy: 'Ովքե՞ր են բեմում մարմնավորում կերպարներին։',
    },
    options: [
      { key: 'A', es: 'Los editores', hy: 'Խմբագիրները' },
      { key: 'B', es: 'Los lectores de la biblioteca', hy: 'Գրադարանի ընթերցողները' },
      { key: 'C', es: 'Los actores y las actrices', hy: 'Դերասաններն ու դերասանուհիները' },
      { key: 'D', es: 'Los narradores de todas las novelas', hy: 'Բոլոր վեպերի պատմողները' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. Los actores y actrices encarnan a los personajes dando vida a sus voces y acciones en el escenario.',
      hy: 'Ճիշտ է C տարբերակը։ Դերասաններն ու դերասանուհիներն են բեմում մարմնավորում կերպարներին։',
    },
  },
  {
    id: 63,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Qué es el público?',
      hy: 'Ի՞նչ է հանդիսատեսը։',
    },
    options: [
      { key: 'A', es: 'Los objetos del escenario', hy: 'Բեմի առարկաները' },
      { key: 'B', es: 'Las personas que asisten a la representación', hy: 'Բեմադրությանը ներկա մարդիկ' },
      { key: 'C', es: 'Las indicaciones del texto', hy: 'Տեքստի ցուցումները' },
      { key: 'D', es: 'La ropa de los personajes', hy: 'Կերպարների հագուստը' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. El público (o auditorio) son los espectadores que asisten y contemplan la obra teatral.',
      hy: 'Ճիշտ է B տարբերակը։ Հանդիսատեսը (público) ներկայացումը դիտող մարդիկ են։',
    },
  },
  {
    id: 64,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Cómo avanza principalmente la acción teatral?',
      hy: 'Հիմնականում ինչպե՞ս է զարգանում թատերական գործողությունը։',
    },
    options: [
      { key: 'A', es: 'Mediante notas bibliográficas', hy: 'Մատենագիտական նշումների միջոցով' },
      { key: 'B', es: 'Mediante definiciones científicas', hy: 'Գիտական սահմանումների միջոցով' },
      { key: 'C', es: 'Mediante el índice del libro', hy: 'Գրքի բովանդակության ցանկի միջոցով' },
      { key: 'D', es: 'Mediante las palabras y acciones de los personajes', hy: 'Կերպարների խոսքերի և գործողությունների միջոցով' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. En el teatro la trama progresa a través del diálogo directo y los actos que ejecutan los personajes.',
      hy: 'Ճիշտ է D տարբերակը։ Թատերական գործողությունը զարգանում է կերպարների երկխոսությունների և բեմական քայլերի միջոցով։',
    },
  },
  {
    id: 65,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Qué ocurre habitualmente con el narrador en el teatro?',
      hy: 'Թատրոնում պատմողի վերաբերյալ ի՞նչն է սովորական։',
    },
    options: [
      { key: 'A', es: 'Habitualmente no hay narrador, aunque puede haber excepciones.', hy: 'Սովորաբար պատմող չկա, թեև հնարավոր են բացառություններ։' },
      { key: 'B', es: 'Siempre habla en primera persona.', hy: 'Միշտ խոսում է առաջին դեմքով։' },
      { key: 'C', es: 'Siempre cuenta todas las acciones.', hy: 'Միշտ պատմում է բոլոր գործողությունները։' },
      { key: 'D', es: 'Es necesariamente el autor.', hy: 'Պարտադիր հեղինակն է։' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. El teatro carece típicamente de intermediario narrativo; los personajes se expresan directamente, salvo recursos experimentales o coros.',
      hy: 'Ճիշտ է A տարբերակը։ Թատրոնում սովորաբար պատմող չկա (չնայած հազվադեպ բացառություններին)․ գործողությունը տեղի է ունենում անմիջապես աչքի առաջ։',
    },
  },
  {
    id: 66,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Qué es una acotación?',
      hy: 'Ի՞նչ է բեմական ցուցումը։',
    },
    options: [
      { key: 'A', es: 'Una estrofa con rima', hy: 'Հանգավոր բանաստեղծական տուն' },
      { key: 'B', es: 'Una opinión del público', hy: 'Հանդիսատեսի կարծիք' },
      { key: 'C', es: 'Una indicación para orientar la representación', hy: 'Բեմադրությունն ուղղորդող ցուցում' },
      { key: 'D', es: 'Una biografía del autor', hy: 'Հեղինակի կենսագրություն' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. Las acotaciones son anotaciones del dramaturgo sobre movimientos, tono, escenografía, gestos o efectos lumínicos y sonoros.',
      hy: 'Ճիշտ է C տարբերակը։ Բեմական ցուցումները (acotaciones) հեղինակի հրահանգներն են դերասանների շարժումների, ձայնի, դեկորացիայի մասին։',
    },
  },
  {
    id: 67,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Cuál es una acotación?',
      hy: 'Ո՞ր տարբերակն է բեմական ցուցում։',
    },
    options: [
      { key: 'A', es: 'LUCÍA: ¿Dónde estás?', hy: 'ԼՈՒՍԻԱ․ Որտե՞ղ ես։' },
      { key: 'B', es: '(Entra corriendo y cierra la puerta.)', hy: '(Վազելով ներս է մտնում և փակում դուռը։)' },
      { key: 'C', es: 'PABLO: Estoy aquí.', hy: 'ՊԱԲԼՈ․ Այստեղ եմ։' },
      { key: 'D', es: 'ANA: Tengo hambre.', hy: 'ԱՆԱ․ Քաղցած եմ։' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. Entre paréntesis, describe una acción escénica de movimiento que realiza el actor sin decirla en voz alta.',
      hy: 'Ճիշտ է B տարբերակը։ Փակագծերի մեջ գրված «(Վազելով ներս է մտնում և փակում դուռը։)» բեմական ցուցում է։ Մյուսները կերպարների արտասանած խոսքերն են։',
    },
  },
  {
    id: 68,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Cómo suelen aparecer gráficamente las acotaciones?',
      hy: 'Գրավոր ձևով բեմական ցուցումները հաճախ ինչպե՞ս են ներկայացվում։',
    },
    options: [
      { key: 'A', es: 'Como números de página', hy: 'Էջերի համարների ձևով' },
      { key: 'B', es: 'Como títulos de capítulos', hy: 'Գլուխների վերնագրերի ձևով' },
      { key: 'C', es: 'Como nombres de autores', hy: 'Հեղինակների անունների ձևով' },
      { key: 'D', es: 'Entre paréntesis o diferenciadas tipográficamente', hy: 'Փակագծերում կամ տառատեսակով առանձնացված' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. Se colocan habitualmente entre paréntesis y en cursiva para distinguirlas de los parlamentos de los personajes.',
      hy: 'Ճիշտ է D տարբերակը։ Բեմական ցուցումները գրվում են փակագծերում կամ շեղատառով, որպեսզի չշփոթվեն կերպարի խոսքի հետ։',
    },
  },
  {
    id: 69,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Qué debe hacer normalmente un actor con «(Habla en voz baja)»?',
      hy: 'Դերասանը սովորաբար ի՞նչ պետք է անի «(Խոսում է ցածրաձայն)» ցուցման դեպքում։',
    },
    options: [
      { key: 'A', es: 'Hablar en voz baja', hy: 'Խոսել ցածրաձայն' },
      { key: 'B', es: 'Pronunciar «habla en voz baja»', hy: 'Արտասանել «խոսում է ցածրաձայն» բառերը' },
      { key: 'C', es: 'Abandonar la obra', hy: 'Թողնել ներկայացումը' },
      { key: 'D', es: 'Cambiar el nombre del personaje', hy: 'Փոխել կերպարի անունը' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. El actor debe modular su voz y hablar en tono bajo, sin pronunciar las palabras de la acotación.',
      hy: 'Ճիշտ է A տարբերակը։ Դերասանը պետք է կատարի ցուցումը՝ խոսելով ցածրաձայն, այլ ոչ թե արտասանի այդ նախադասությունը։',
    },
  },
  {
    id: 70,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Qué indica «(Se sienta junto a la ventana)»?',
      hy: 'Ի՞նչ է ցույց տալիս «(Նստում է պատուհանի մոտ)» ցուցումը։',
    },
    options: [
      { key: 'A', es: 'Una rima', hy: 'Հանգ' },
      { key: 'B', es: 'Una metáfora', hy: 'Փոխաբերություն' },
      { key: 'C', es: 'Un movimiento y una posición', hy: 'Շարժում և դիրք' },
      { key: 'D', es: 'El nombre del autor', hy: 'Հեղինակի անունը' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. Señala el desplazamiento físico del actor en el escenario y su ubicación en el espacio dramático.',
      hy: 'Ճիշտ է C տարբերակը։ Դա բեմական շարժման և դիրքի ցուցում է։',
    },
  },
  {
    id: 71,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Qué es el atrezo?',
      hy: 'Ի՞նչ են բեմական պարագաները։',
    },
    options: [
      { key: 'A', es: 'Las emociones del público', hy: 'Հանդիսատեսի հույզերը' },
      { key: 'B', es: 'Los objetos utilizados en la representación', hy: 'Բեմադրության մեջ օգտագործվող առարկաները' },
      { key: 'C', es: 'Los capítulos de una novela', hy: 'Վեպի գլուխները' },
      { key: 'D', es: 'Los sonidos repetidos en un poema', hy: 'Բանաստեղծության կրկնվող հնչյունները' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. El atrezo (o utilería) comprende los objetos móviles manipulados por los actores durante la representación (llaves, cartas, copas, armas, etc.).',
      hy: 'Ճիշտ է B տարբերակը։ Բեմական պարագաները (atrezo) դերասանների կողմից օգտագործվող բոլոր շարժական առարկաներն են (նամակ, բաժակ, ճամպրուկ և այլն)։',
    },
  },
  {
    id: 72,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: 'Una actriz abre una carta durante la escena. ¿Qué es esa carta?',
      hy: 'Դերասանուհին տեսարանի ընթացքում բացում է նամակ։ Ի՞նչ է այդ նամակը։',
    },
    options: [
      { key: 'A', es: 'Vestuario', hy: 'Բեմական հագուստ' },
      { key: 'B', es: 'Una estrofa', hy: 'Բանաստեղծական տուն' },
      { key: 'C', es: 'Una acotación', hy: 'Բեմական ցուցում' },
      { key: 'D', es: 'Un objeto de atrezo', hy: 'Բեմական պարագա' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. La carta es un accesorio material manipulado en escena, por tanto pertenece al atrezo.',
      hy: 'Ճիշտ է D տարբերակը։ Դերասանի ձեռքի նամակը բեմական պարագա է (atrezo)։',
    },
  },
  {
    id: 73,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Qué es el vestuario?',
      hy: 'Ի՞նչ է բեմական հագուստը։',
    },
    options: [
      { key: 'A', es: 'La ropa que llevan los actores para representar a los personajes', hy: 'Կերպարներին մարմնավորելու համար դերասանների կրած հագուստը' },
      { key: 'B', es: 'El conjunto de espectadores', hy: 'Հանդիսատեսների ամբողջությունը' },
      { key: 'C', es: 'El diálogo de la obra', hy: 'Ստեղծագործության երկխոսությունը' },
      { key: 'D', es: 'La música del espectáculo', hy: 'Ներկայացման երաժշտությունը' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. El vestuario es la indumentaria seleccionada o confeccionada para caracterizar visualmente a los personajes.',
      hy: 'Ճիշտ է A տարբերակը։ Բեմական հագուստը (vestuario) այն զգեստներն են, որոնք դերասանները կրում են կերպարն ամբողջացնելու համար։',
    },
  },
  {
    id: 74,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Qué elemento pertenece claramente al vestuario?',
      hy: 'Ո՞ր տարրն է հստակ պատկանում բեմական հագուստին։',
    },
    options: [
      { key: 'A', es: 'Una carta que se lee', hy: 'Կարդացվող նամակ' },
      { key: 'B', es: 'El sonido de la lluvia', hy: 'Անձրևի ձայն' },
      { key: 'C', es: 'Una chaqueta que lleva el personaje', hy: 'Կերպարի հագած բաճկոն' },
      { key: 'D', es: 'Una puerta pintada en el fondo', hy: 'Հետնամասում նկարված դուռ' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. La chaqueta es una prenda de vestir que forma parte del vestuario del personaje.',
      hy: 'Ճիշտ է C տարբերակը։ Բաճկոնը հագուստի տարր է, ուստի պատկանում է vestuario-ին։',
    },
  },
  {
    id: 75,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Qué es el decorado?',
      hy: 'Ի՞նչ է բեմանկարը։',
    },
    options: [
      { key: 'A', es: 'La voz del narrador', hy: 'Պատմողի ձայնը' },
      { key: 'B', es: 'El conjunto de elementos que representa el lugar de la acción', hy: 'Գործողության վայրը պատկերող տարրերի ամբողջությունը' },
      { key: 'C', es: 'La ropa del público', hy: 'Հանդիսատեսի հագուստը' },
      { key: 'D', es: 'La lista de actores', hy: 'Դերասանների ցանկը' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. El decorado (o escenografía) ambienta el espacio escénico (muros, muebles fijos, telones, paisajes pintados).',
      hy: 'Ճիշտ է B տարբերակը։ Բեմանկարը (decorado / escenografía) բեմի վրա գործողության վայրը պատկերող տարրերի ամբողջությունն է։',
    },
  },
  {
    id: 76,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: 'Un fondo pintado que representa un bosque pertenece al…',
      hy: 'Անտառ պատկերող ներկված հետնապատկերը պատկանում է…',
    },
    options: [
      { key: 'A', es: 'narrador.', hy: 'պատմողին։' },
      { key: 'B', es: 'vestuario.', hy: 'բեմական հագուստին։' },
      { key: 'C', es: 'diálogo.', hy: 'երկխոսությանը։' },
      { key: 'D', es: 'decorado.', hy: 'բեմանկարին։' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. Representa el entorno físico de la escena, por lo que forma parte del decorado o escenografía.',
      hy: 'Ճիշտ է D տարբերակը։ Բնապատկերը ներկայացնում է վայրը, ուստի բեմանկարի (decorado) մաս է։',
    },
  },
  {
    id: 77,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Cuál es un recurso no verbal de la representación?',
      hy: 'Ո՞րն է բեմադրության ոչ խոսքային միջոց։',
    },
    options: [
      { key: 'A', es: 'Un gesto de sorpresa', hy: 'Զարմանքի ժեստ' },
      { key: 'B', es: 'Una pregunta pronunciada', hy: 'Արտասանված հարց' },
      { key: 'C', es: 'Un diálogo', hy: 'Երկխոսություն' },
      { key: 'D', es: 'Un monólogo hablado', hy: 'Արտասանված մենախոսություն' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. Los gestos faciales y corporales comunican significado sin palabras (lenguaje no verbal). Las otras tres opciones implican lenguaje verbal oral.',
      hy: 'Ճիշտ է A տարբերակը։ Դեմքի արտահայտությունն ու ժեստը ոչ խոսքային (ոչ վերբալ) հաղորդակցման միջոց են։',
    },
  },
  {
    id: 78,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Qué puede aportar la música a una escena?',
      hy: 'Ի՞նչ կարող է երաժշտությունը հաղորդել տեսարանին։',
    },
    options: [
      { key: 'A', es: 'El número de páginas', hy: 'Էջերի քանակը' },
      { key: 'B', es: 'La ortografía de los nombres', hy: 'Անունների ուղղագրությունը' },
      { key: 'C', es: 'Una atmósfera de alegría, tensión o tristeza', hy: 'Ուրախության, լարվածության կամ տխրության մթնոլորտ' },
      { key: 'D', es: 'La identidad real del autor', hy: 'Հեղինակի իրական ինքնությունը' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. La música y el diseño sonoro ambientan emocionalmente la escena e intensifican el suspense, dramatismo o alegría.',
      hy: 'Ճիշտ է C տարբերակը։ Երաժշտությունը ստեղծում է հուզական մթնոլորտ (լարվածություն, տխրություն, ուրախություն)։',
    },
  },
  {
    id: 79,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Puede una obra teatral estar escrita en verso?',
      hy: 'Թատերական ստեղծագործությունը կարո՞ղ է չափածո լինել։',
    },
    options: [
      { key: 'A', es: 'No, nunca.', hy: 'Ո՛չ, երբեք։' },
      { key: 'B', es: 'Sí, existen obras teatrales en verso.', hy: 'Այո՛, կան չափածո թատերական ստեղծագործություններ։' },
      { key: 'C', es: 'Solo si no hay actores.', hy: 'Միայն եթե դերասաններ չկան։' },
      { key: 'D', es: 'Solo si no hay público.', hy: 'Միայն եթե հանդիսատես չկա։' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. Gran parte del teatro clásico (Lope de Vega, Calderón de la Barca, Shakespeare) está escrito en verso.',
      hy: 'Ճիշտ է B տարբերակը։ Թատրոնը կարող է լինել չափածո (ինչպես դասական իսպանական և համաշխարհային թատրոնում)։',
    },
  },
  {
    id: 80,
    category: 'teatro',
    categoryTitle: { es: 'El teatro', hy: 'Թատրոն' },
    question: {
      es: '¿Qué combinación describe mejor la representación teatral?',
      hy: 'Ո՞ր համադրությունն է լավագույնս բնութագրում թատերական բեմադրությունը։',
    },
    options: [
      { key: 'A', es: 'Solo palabras impresas', hy: 'Միայն տպված բառեր' },
      { key: 'B', es: 'Solo música', hy: 'Միայն երաժշտություն' },
      { key: 'C', es: 'Solo decorado', hy: 'Միայն բեմանկար' },
      { key: 'D', es: 'Palabras, actuación y diversos elementos escénicos', hy: 'Խոսք, դերասանական խաղ և բեմական տարբեր տարրեր' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. El teatro es un arte total pluricodificado que fusiona palabra, voz, cuerpo de actores, luces, escenografía, sonido y vestuario.',
      hy: 'Ճիշտ է D տարբերակը։ Թատերական բեմադրությունը համադրում է կենդանի խոսքը, դերասանական խաղը, լույսը, երաժշտությունը և բեմական դեկորացիաները։',
    },
  },

  // 81–100: ANÁLISIS DE TEXTOS
  // TEXTO 1 (81-85)
  {
    id: 81,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 1)', hy: 'Տեքստերի վերլուծություն (Տեքստ 1)' },
    contextText: {
      title: { es: 'Texto 1', hy: 'Տեքստ 1' },
      es: 'Guardo tu risa en mi memoria,\nguardo la luz de tu mirar.\nDesde que estás lejos, amigo,\nla tarde aprende a suspirar.',
      hy: 'Քո ծիծաղը պահում եմ հիշողությանս մեջ,\nպահում եմ հայացքիդ լույսը։\nՔո հեռու լինելուց ի վեր, ընկե՛ր,\nերեկոն սովորում է հառաչել։',
    },
    question: {
      es: '¿A qué género pertenece principalmente el texto?',
      hy: 'Հիմնականում ո՞ր գրական սեռին է պատկանում տեքստը։',
    },
    options: [
      { key: 'A', es: 'Lírica', hy: 'Քնարերգություն' },
      { key: 'B', es: 'Teatro', hy: 'Թատրոն' },
      { key: 'C', es: 'Narrativa de aventuras', hy: 'Արկածային պատմողական գրականություն' },
      { key: 'D', es: 'Texto instructivo', hy: 'Հրահանգային տեքստ' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. Expresa sentimientos íntimos de amistad y nostalgia mediante lenguaje poético y ritmo en verso.',
      hy: 'Ճիշտ է A տարբերակը։ Բանաստեղծական լեզվով ու չափածո տողերով արտահայտում է անձնական հույզեր (կարոտ, սեր)։',
    },
  },
  {
    id: 82,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 1)', hy: 'Տեքստերի վերլուծություն (Տեքստ 1)' },
    contextText: {
      title: { es: 'Texto 1', hy: 'Տեքստ 1' },
      es: 'Guardo tu risa en mi memoria,\nguardo la luz de tu mirar.\nDesde que estás lejos, amigo,\nla tarde aprende a suspirar.',
      hy: 'Քո ծիծաղը պահում եմ հիշողությանս մեջ,\nպահում եմ հայացքիդ լույսը։\nՔո հեռու լինելուց ի վեր, ընկե՛ր,\nերեկոն սովորում է հառաչել։',
    },
    question: {
      es: '¿Qué sentimiento predomina?',
      hy: 'Ո՞ր զգացմունքն է գերակշռում։',
    },
    options: [
      { key: 'A', es: 'El odio', hy: 'Ատելությունը' },
      { key: 'B', es: 'La indiferencia', hy: 'Անտարբերությունը' },
      { key: 'C', es: 'La añoranza de un amigo', hy: 'Ընկերոջ հանդեպ կարոտը' },
      { key: 'D', es: 'El orgullo por una victoria', hy: 'Հաղթանակի հպարտությունը' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. Habla de guardar el recuerdo y suspirar porque el amigo está lejos.',
      hy: 'Ճիշտ է C տարբերակը։ Տեքստում գերակշռում է հեռվում գտնվող ընկերոջ հանդեպ կարոտը։',
    },
  },
  {
    id: 83,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 1)', hy: 'Տեքստերի վերլուծություն (Տեքստ 1)' },
    contextText: {
      title: { es: 'Texto 1', hy: 'Տեքստ 1' },
      es: 'Guardo tu risa en mi memoria,\nguardo la luz de tu mirar.\nDesde que estás lejos, amigo,\nla tarde aprende a suspirar.',
      hy: 'Քո ծիծաղը պահում եմ հիշողությանս մեջ,\nպահում եմ հայացքիդ լույսը։\nՔո հեռու լինելուց ի վեր, ընկե՛ր,\nերեկոն սովորում է հառաչել։',
    },
    question: {
      es: '¿Qué recurso aparece en «la tarde aprende a suspirar»?',
      hy: '«Երեկոն սովորում է հառաչել» արտահայտության մեջ ո՞ր արտահայտչամիջոցն է օգտագործված։',
    },
    options: [
      { key: 'A', es: 'Comparación', hy: 'Համեմատություն' },
      { key: 'B', es: 'Personificación', hy: 'Անձնավորում' },
      { key: 'C', es: 'Acotación', hy: 'Բեմական ցուցում' },
      { key: 'D', es: 'Descripción objetiva', hy: 'Օբյեկտիվ նկարագրություն' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. Se le atribuye a la «tarde» (elemento temporal inanimado) la acción humana de aprender a suspirar.',
      hy: 'Ճիշտ է B տարբերակը։ Երեկոյին վերագրվում է մարդկային գործողություն՝ հառաչել, ինչն անձնավորում է։',
    },
  },
  {
    id: 84,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 1)', hy: 'Տեքստերի վերլուծություն (Տեքստ 1)' },
    contextText: {
      title: { es: 'Texto 1', hy: 'Տեքստ 1' },
      es: 'Guardo tu risa en mi memoria,\nguardo la luz de tu mirar.\nDesde que estás lejos, amigo,\nla tarde aprende a suspirar.',
      hy: 'Քո ծիծաղը պահում եմ հիշողությանս մեջ,\nպահում եմ հայացքիդ լույսը։\nՔո հեռու լինելուց ի վեր, ընկե՛ր,\nերեկոն սովորում է հառաչել։',
    },
    question: {
      es: '¿Qué recurso crea la repetición inicial de «guardo»?',
      hy: 'Տողերի սկզբում «guardo» (պահում եմ) բառի կրկնությունն ի՞նչ արտահայտչամիջոց է ստեղծում։',
    },
    options: [
      { key: 'A', es: 'Metáfora', hy: 'Փոխաբերություն' },
      { key: 'B', es: 'Comparación', hy: 'Համեմատություն' },
      { key: 'C', es: 'Hipérbole', hy: 'Չափազանցություն' },
      { key: 'D', es: 'Anáfora', hy: 'Անաֆորա' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. La repetición de la palabra «guardo» al inicio de dos versos consecutivos es una anáfora.',
      hy: 'Ճիշտ է D տարբերակը։ Տողերի սկզբում «guardo» բառի կրկնությունը անաֆորա է։',
    },
  },
  {
    id: 85,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 1)', hy: 'Տեքստերի վերլուծություն (Տեքստ 1)' },
    contextText: {
      title: { es: 'Texto 1', hy: 'Տեքստ 1' },
      es: 'Guardo tu risa en mi memoria,\nguardo la luz de tu mirar.\nDesde que estás lejos, amigo,\nla tarde aprende a suspirar.',
      hy: 'Քո ծիծաղը պահում եմ հիշողությանս մեջ,\nպահում եմ հայացքիդ լույսը։\nՔո հեռու լինելուց ի վեր, ընկե՛ր,\nերեկոն սովորում է հառաչել։',
    },
    question: {
      es: '¿Cuántos versos tiene el original español?',
      hy: 'Քանի՞ չափածո տող ունի իսպաներեն բնագիրը։',
    },
    options: [
      { key: 'A', es: 'Cuatro', hy: 'Չորս' },
      { key: 'B', es: 'Dos', hy: 'Երկու' },
      { key: 'C', es: 'Seis', hy: 'Վեց' },
      { key: 'D', es: 'Una', hy: 'Մեկ' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. El poema consta exactamente de 4 versos (líneas métricas).',
      hy: 'Ճիշտ է A տարբերակը։ Իսպաներեն բնագիրն ունի ուղիղ չորս տող (versos)։',
    },
  },

  // TEXTO 2 (86-90)
  {
    id: 86,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 2)', hy: 'Տեքստերի վերլուծություն (Տեքստ 2)' },
    contextText: {
      title: { es: 'Texto 2', hy: 'Տեքստ 2' },
      es: 'El domingo llegué a casa de mi abuela. Mientras ella preparaba la comida, encontré una caja debajo del sofá. La abrí con cuidado. Dentro había una fotografía de mi padre cuando era pequeño y una llave diminuta.\n—¿Qué abre esta llave? —pregunté.\nMi abuela sonrió y señaló un viejo armario.',
      hy: 'Կիրակի օրը հասա տատիկիս տուն։ Մինչ նա ճաշ էր պատրաստում, բազմոցի տակ տուփ գտա։ Այն զգուշությամբ բացեցի։ Ներսում հայրիկիս մանկության լուսանկարն էր և մի փոքրիկ բանալի։\n— Այս բանալին ի՞նչ է բացում,— հարցրեցի։\nՏատիկս ժպտաց և ցույց տվեց հին պահարանը։',
    },
    question: {
      es: '¿A qué género pertenece el texto?',
      hy: 'Ո՞ր գրական սեռին է պատկանում տեքստը։',
    },
    options: [
      { key: 'A', es: 'Lírica', hy: 'Քնարերգություն' },
      { key: 'B', es: 'Teatro', hy: 'Թատրոն' },
      { key: 'C', es: 'Narrativa', hy: 'Պատմողական գրականություն' },
      { key: 'D', es: 'Texto científico', hy: 'Գիտական տեքստ' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. Un narrador relata una sucesión temporal de acciones con personajes en un lugar específico.',
      hy: 'Ճիշտ է C տարբերակը։ Պատմողը ներկայացնում է իրադարձությունների հաջորդականություն (պատմողական սեռ)։',
    },
  },
  {
    id: 87,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 2)', hy: 'Տեքստերի վերլուծություն (Տեքստ 2)' },
    contextText: {
      title: { es: 'Texto 2', hy: 'Տեքստ 2' },
      es: 'El domingo llegué a casa de mi abuela. Mientras ella preparaba la comida, encontré una caja debajo del sofá. La abrí con cuidado. Dentro había una fotografía de mi padre cuando era pequeño y una llave diminuta.\n—¿Qué abre esta llave? —pregunté.\nMi abuela sonrió y señaló un viejo armario.',
      hy: 'Կիրակի օրը հասա տատիկիս տուն։ Մինչ նա ճաշ էր պատրաստում, բազմոցի տակ տուփ գտա։ Այն զգուշությամբ բացեցի։ Ներսում հայրիկիս մանկության լուսանկարն էր և մի փոքրիկ բանալի։\n— Այս բանալին ի՞նչ է բացում,— հարցրեցի։\nՏատիկս ժպտաց և ցույց տվեց հին պահարանը։',
    },
    question: {
      es: '¿En qué persona se cuenta la historia?',
      hy: 'Ո՞ր դեմքով է պատմվում պատմությունը։',
    },
    options: [
      { key: 'A', es: 'Tercera persona del plural', hy: 'Հոգնակի թվի երրորդ դեմք' },
      { key: 'B', es: 'Primera persona del singular', hy: 'Եզակի թվի առաջին դեմք' },
      { key: 'C', es: 'Segunda persona del singular', hy: 'Եզակի թվի երկրորդ դեմք' },
      { key: 'D', es: 'Tercera persona del singular', hy: 'Եզակի թվի երրորդ դեմք' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. Los verbos están en primera persona del singular: «llegué», «encontré», «abrí», «pregunté».',
      hy: 'Ճիշտ է B տարբերակը։ Բոլոր հիմնական բայաձևերը առաջին դեմքի եզակի թվով են՝ «llegué» (հասա), «encontré» (գտա), «abrí» (բացեցի)։',
    },
  },
  {
    id: 88,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 2)', hy: 'Տեքստերի վերլուծություն (Տեքստ 2)' },
    contextText: {
      title: { es: 'Texto 2', hy: 'Տեքստ 2' },
      es: 'El domingo llegué a casa de mi abuela. Mientras ella preparaba la comida, encontré una caja debajo del sofá. La abrí con cuidado. Dentro había una fotografía de mi padre cuando era pequeño y una llave diminuta.\n—¿Qué abre esta llave? —pregunté.\nMi abuela sonrió y señaló un viejo armario.',
      hy: 'Կիրակի օրը հասա տատիկիս տուն։ Մինչ նա ճաշ էր պատրաստում, բազմոցի տակ տուփ գտա։ Այն զգուշությամբ բացեցի։ Ներսում հայրիկիս մանկության լուսանկարն էր և մի փոքրիկ բանալի։\n— Այս բանալին ի՞նչ է բացում,— հարցրեցի։\nՏատիկս ժպտաց և ցույց տվեց հին պահարանը։',
    },
    question: {
      es: '¿Qué dato sitúa temporalmente la historia?',
      hy: 'Ո՞ր տեղեկությունն է ցույց տալիս պատմության ժամանակը։',
    },
    options: [
      { key: 'A', es: 'Debajo del sofá', hy: 'Բազմոցի տակ' },
      { key: 'B', es: 'En casa de la abuela', hy: 'Տատիկի տանը' },
      { key: 'C', es: 'Un viejo armario', hy: 'Հին պահարան' },
      { key: 'D', es: 'El domingo', hy: 'Կիրակի օրը' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. «El domingo» es la referencia temporal que indica cuándo sucede la acción.',
      hy: 'Ճիշտ է D տարբերակը։ «El domingo» (կիրակի օրը) ցույց է տալիս իրադարձության ժամանակը։',
    },
  },
  {
    id: 89,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 2)', hy: 'Տեքստերի վերլուծություն (Տեքստ 2)' },
    contextText: {
      title: { es: 'Texto 2', hy: 'Տեքստ 2' },
      es: 'El domingo llegué a casa de mi abuela. Mientras ella preparaba la comida, encontré una caja debajo del sofá. La abrí con cuidado. Dentro había una fotografía de mi padre cuando era pequeño y una llave diminuta.\n—¿Qué abre esta llave? —pregunté.\nMi abuela sonrió y señaló un viejo armario.',
      hy: 'Կիրակի օրը հասա տատիկիս տուն։ Մինչ նա ճաշ էր պատրաստում, բազմոցի տակ տուփ գտա։ Այն զգուշությամբ բացեցի։ Ներսում հայրիկիս մանկության լուսանկարն էր և մի փոքրիկ բանալի։\n— Այս բանալին ի՞նչ է բացում,— հարցրեցի։\nՏատիկս ժպտաց և ցույց տվեց հին պահարանը։',
    },
    question: {
      es: '¿Qué encontró el narrador dentro de la caja?',
      hy: 'Պատմողն ի՞նչ գտավ տուփի մեջ։',
    },
    options: [
      { key: 'A', es: 'Una fotografía y una llave', hy: 'Լուսանկար և բանալի' },
      { key: 'B', es: 'Una carta y un reloj', hy: 'Նամակ և ժամացույց' },
      { key: 'C', es: 'Un libro y una taza', hy: 'Գիրք և բաժակ' },
      { key: 'D', es: 'Una moneda y un mapa', hy: 'Մետաղադրամ և քարտեզ' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. El texto dice textualmente: «Dentro había una fotografía de mi padre cuando era pequeño y una llave diminuta».',
      hy: 'Ճիշտ է A տարբերակը։ Տեքստում ուղղակիորեն նշվում է․ «լուսանկար և փոքրիկ բանալի»։',
    },
  },
  {
    id: 90,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 2)', hy: 'Տեքստերի վերլուծություն (Տեքստ 2)' },
    contextText: {
      title: { es: 'Texto 2', hy: 'Տեքստ 2' },
      es: 'El domingo llegué a casa de mi abuela. Mientras ella preparaba la comida, encontré una caja debajo del sofá. La abrí con cuidado. Dentro había una fotografía de mi padre cuando era pequeño y una llave diminuta.\n—¿Qué abre esta llave? —pregunté.\nMi abuela sonrió y señaló un viejo armario.',
      hy: 'Կիրակի օրը հասա տատիկիս տուն։ Մինչ նա ճաշ էր պատրաստում, բազմոցի տակ տուփ գտա։ Այն զգուշությամբ բացեցի։ Ներսում հայրիկիս մանկության լուսանկարն էր և մի փոքրիկ բանալի։\n— Այս բանալին ի՞նչ է բացում,— հարցրեցի։\nՏատիկս ժպտաց և ցույց տվեց հին պահարանը։',
    },
    question: {
      es: '¿Por qué el texto sigue siendo narrativo aunque incluya una pregunta de un personaje?',
      hy: 'Ինչո՞ւ է տեքստը մնում պատմողական, թեև ներառում է կերպարի հարցը։',
    },
    options: [
      { key: 'A', es: 'Porque todas las preguntas pertenecen a la narrativa.', hy: 'Որովհետև բոլոր հարցերը պատկանում են պատմողական գրականությանը։' },
      { key: 'B', es: 'Porque no aparece ningún personaje.', hy: 'Որովհետև ոչ մի կերպար չկա։' },
      { key: 'C', es: 'Porque el diálogo se integra en los hechos contados por un narrador.', hy: 'Որովհետև երկխոսությունը ներառված է պատմողի ներկայացրած դեպքերի մեջ։' },
      { key: 'D', es: 'Porque está escrito en verso.', hy: 'Որովհետև գրված է չափածոյով։' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. La presencia de diálogo no anula la narrativa cuando está incrustada en el relato guiado por la voz del narrador.',
      hy: 'Ճիշտ է C տարբերակը։ Երկխոսության առկայությունը տեքստը չի դարձնում թատրոն, քանի որ այն ներառված է պատմողի խոսքի մեջ։',
    },
  },

  // TEXTO 3 (91-95)
  {
    id: 91,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 3)', hy: 'Տեքստերի վերլուծություն (Տեքստ 3)' },
    contextText: {
      title: { es: 'Texto 3', hy: 'Տեքստ 3' },
      es: '(Una cocina. Al fondo, una ventana. CLARA lleva un delantal azul. Sobre la mesa hay una taza. Se oye un trueno.)\n\nCLARA: (Levanta la taza.) El té todavía está caliente.\nMARIO: ¿Podemos esperar aquí hasta que deje de llover?\nCLARA: Claro. Siéntate.\n\n(MARIO acerca una silla y se sienta.)',
      hy: '(Խոհանոց։ Հետնամասում պատուհան է։ ԿԼԱՐԱՆ կապույտ գոգնոց է հագել։ Սեղանին բաժակ կա։ Ամպրոպի ձայն է լսվում։)\n\nԿԼԱՐԱ․ (Բարձրացնում է բաժակը։) Թեյը դեռ տաք է։\nՄԱՐԻՈ․ Կարո՞ղ ենք այստեղ սպասել, մինչև անձրևը դադարի։\nԿԼԱՐԱ․ Իհարկե։ Նստի՛ր։\n\n(ՄԱՐԻՈՆ մոտեցնում է աթոռը և նստում։)',
    },
    question: {
      es: '¿Qué característica permite identificar el texto como teatral?',
      hy: 'Ո՞ր հատկանիշն է թույլ տալիս տեքստը համարել թատերական։',
    },
    options: [
      { key: 'A', es: 'Solo aparece una emoción.', hy: 'Ներկայացվում է միայն մեկ հույզ։' },
      { key: 'B', es: 'Hay intervenciones de personajes y acotaciones.', hy: 'Կան կերպարների խոսքեր և բեմական ցուցումներ։' },
      { key: 'C', es: 'Tiene un narrador en primera persona.', hy: 'Ունի առաջին դեմքով պատմող։' },
      { key: 'D', es: 'Todos los versos riman.', hy: 'Բոլոր տողերը հանգավորվում են։' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. La disposición con nombres de personajes en mayúsculas, intervenciones directas y acotaciones entre paréntesis es propia del teatro.',
      hy: 'Ճիշտ է B տարբերակը։ Կերպարների անուններով ուղիղ խոսքերը և փակագծերում բեմական ցուցումները թատերական տեքստի հստակ հատկանիշներն են։',
    },
  },
  {
    id: 92,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 3)', hy: 'Տեքստերի վերլուծություն (Տեքստ 3)' },
    contextText: {
      title: { es: 'Texto 3', hy: 'Տեքստ 3' },
      es: '(Una cocina. Al fondo, una ventana. CLARA lleva un delantal azul. Sobre la mesa hay una taza. Se oye un trueno.)\n\nCLARA: (Levanta la taza.) El té todavía está caliente.\nMARIO: ¿Podemos esperar aquí hasta que deje de llover?\nCLARA: Claro. Siéntate.\n\n(MARIO acerca una silla y se sienta.)',
      hy: '(Խոհանոց։ Հետնամասում պատուհան է։ ԿԼԱՐԱՆ կապույտ գոգնոց է հագել։ Սեղանին բաժակ կա։ Ամպրոպի ձայն է լսվում։)\n\nԿԼԱՐԱ․ (Բարձրացնում է բաժակը։) Թեյը դեռ տաք է։\nՄԱՐԻՈ․ Կարո՞ղ ենք այստեղ սպասել, մինչև անձրևը դադարի։\nԿԼԱՐԱ․ Իհարկե։ Նստի՛ր։\n\n(ՄԱՐԻՈՆ մոտեցնում է աթոռը և նստում։)',
    },
    question: {
      es: '¿Dónde ocurre la escena?',
      hy: 'Որտե՞ղ է տեղի ունենում տեսարանը։',
    },
    options: [
      { key: 'A', es: 'En un jardín', hy: 'Այգում' },
      { key: 'B', es: 'En una estación', hy: 'Կայարանում' },
      { key: 'C', es: 'En una biblioteca', hy: 'Գրադարանում' },
      { key: 'D', es: 'En una cocina', hy: 'Խոհանոցում' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. La acotación inicial indica expresamente: «Una cocina. Al fondo, una ventana».',
      hy: 'Ճիշտ է D տարբերակը։ Բեմական ցուցման մեջ հստակ նշված է՝ «Una cocina» (Խոհանոցում)։',
    },
  },
  {
    id: 93,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 3)', hy: 'Տեքստերի վերլուծություն (Տեքստ 3)' },
    contextText: {
      title: { es: 'Texto 3', hy: 'Տեքստ 3' },
      es: '(Una cocina. Al fondo, una ventana. CLARA lleva un delantal azul. Sobre la mesa hay una taza. Se oye un trueno.)\n\nCLARA: (Levanta la taza.) El té todavía está caliente.\nMARIO: ¿Podemos esperar aquí hasta que deje de llover?\nCLARA: Claro. Siéntate.\n\n(MARIO acerca una silla y se sienta.)',
      hy: '(Խոհանոց։ Հետնամասում պատուհան է։ ԿԼԱՐԱՆ կապույտ գոգնոց է հագել։ Սեղանին բաժակ կա։ Ամպրոպի ձայն է լսվում։)\n\nԿԼԱՐԱ․ (Բարձրացնում է բաժակը։) Թեյը դեռ տաք է։\nՄԱՐԻՈ․ Կարո՞ղ ենք այստեղ սպասել, մինչև անձրևը դադարի։\nԿԼԱՐԱ․ Իհարկե։ Նստի՛ր։\n\n(ՄԱՐԻՈՆ մոտեցնում է աթոռը և նստում։)',
    },
    question: {
      es: '¿Qué elemento pertenece al vestuario?',
      hy: 'Ո՞ր տարրն է պատկանում բեմական հագուստին։',
    },
    options: [
      { key: 'A', es: 'El delantal azul', hy: 'Կապույտ գոգնոցը' },
      { key: 'B', es: 'La taza', hy: 'Բաժակը' },
      { key: 'C', es: 'La ventana', hy: 'Պատուհանը' },
      { key: 'D', es: 'El trueno', hy: 'Ամպրոպը' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. El «delantal azul» es la prenda que lleva puesta Clara (vestuario). La taza es atrezo, la ventana es decorado y el trueno es efecto sonoro.',
      hy: 'Ճիշտ է A տարբերակը։ Կապույտ գոգնոցը (delantal azul) հագուստ է (vestuario)։ Բաժակը բեմական պարագա է (atrezo), պատուհանը՝ դեկորացիա, իսկ ամպրոպը՝ ձայնային էֆեկտ։',
    },
  },
  {
    id: 94,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 3)', hy: 'Տեքստերի վերլուծություն (Տեքստ 3)' },
    contextText: {
      title: { es: 'Texto 3', hy: 'Տեքստ 3' },
      es: '(Una cocina. Al fondo, una ventana. CLARA lleva un delantal azul. Sobre la mesa hay una taza. Se oye un trueno.)\n\nCLARA: (Levanta la taza.) El té todavía está caliente.\nMARIO: ¿Podemos esperar aquí hasta que deje de llover?\nCLARA: Claro. Siéntate.\n\n(MARIO acerca una silla y se sienta.)',
      hy: '(Խոհանոց։ Հետնամասում պատուհան է։ ԿԼԱՐԱՆ կապույտ գոգնոց է հագել։ Սեղանին բաժակ կա։ Ամպրոպի ձայն է լսվում։)\n\nԿԼԱՐԱ․ (Բարձրացնում է բաժակը։) Թեյը դեռ տաք է։\nՄԱՐԻՈ․ Կարո՞ղ ենք այստեղ սպասել, մինչև անձրևը դադարի։\nԿԼԱՐԱ․ Իհարկե։ Նստի՛ր։\n\n(ՄԱՐԻՈՆ մոտեցնում է աթոռը և նստում։)',
    },
    question: {
      es: '¿Qué objeto de atrezo manipula Clara?',
      hy: 'Ո՞ր բեմական պարագան է Կլարան վերցնում ձեռքը։',
    },
    options: [
      { key: 'A', es: 'Una carta', hy: 'Նամակ' },
      { key: 'B', es: 'Una maleta', hy: 'Ճամպրուկ' },
      { key: 'C', es: 'Una taza', hy: 'Բաժակ' },
      { key: 'D', es: 'Un paraguas', hy: 'Հովանոց' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. La acotación dice: «(Levanta la taza)».',
      hy: 'Ճիշտ է C տարբերակը։ Բեմական ցուցումում ասվում է․ «Levanta la taza» (բարձրացնում է բաժակը)։',
    },
  },
  {
    id: 95,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 3)', hy: 'Տեքստերի վերլուծություն (Տեքստ 3)' },
    contextText: {
      title: { es: 'Texto 3', hy: 'Տեքստ 3' },
      es: '(Una cocina. Al fondo, una ventana. CLARA lleva un delantal azul. Sobre la mesa hay una taza. Se oye un trueno.)\n\nCLARA: (Levanta la taza.) El té todavía está caliente.\nMARIO: ¿Podemos esperar aquí hasta que deje de llover?\nCLARA: Claro. Siéntate.\n\n(MARIO acerca una silla y se sienta.)',
      hy: '(Խոհանոց։ Հետնամասում պատուհան է։ ԿԼԱՐԱՆ կապույտ գոգնոց է հագել։ Սեղանին բաժակ կա։ Ամպրոպի ձայն է լսվում։)\n\nԿԼԱՐԱ․ (Բարձրացնում է բաժակը։) Թեյը դեռ տաք է։\nՄԱՐԻՈ․ Կարո՞ղ ենք այստեղ սպասել, մինչև անձրևը դադարի։\nԿԼԱՐԱ․ Իհարկե։ Նստի՛ր։\n\n(ՄԱՐԻՈՆ մոտեցնում է աթոռը և նստում։)',
    },
    question: {
      es: '¿Qué indica «Se oye un trueno»?',
      hy: 'Ի՞նչ է նշում «Ամպրոպի ձայն է լսվում» ցուցումը։',
    },
    options: [
      { key: 'A', es: 'Una prenda de vestir', hy: 'Հագուստի տեսակ' },
      { key: 'B', es: 'Un efecto sonoro', hy: 'Ձայնային ազդեցություն' },
      { key: 'C', es: 'Una intervención de Mario', hy: 'Մարիոյի խոսքը' },
      { key: 'D', es: 'Una rima', hy: 'Հանգ' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. Es una indicación para el equipo técnico sobre un efecto acústico/sonoro en la escena.',
      hy: 'Ճիշտ է B տարբերակը։ Դա բեմական ձայնային էֆեկտ է (efecto sonoro)։',
    },
  },

  // TEXTO 4 (96-100)
  {
    id: 96,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 4)', hy: 'Տեքստերի վերլուծություն (Տեքստ 4)' },
    contextText: {
      title: { es: 'Texto 4', hy: 'Տեքստ 4' },
      es: 'La casa parece vacía desde tu partida. Tu silla sigue junto a la ventana, pero ya no escucho tu risa. Las horas caminan lentamente y mi corazón espera el día de tu regreso.',
      hy: 'Քո մեկնելուց հետո տունը դատարկ է թվում։ Աթոռդ դեռ պատուհանի մոտ է, բայց այլևս չեմ լսում քո ծիծաղը։ Ժամերը դանդաղ են քայլում, իսկ սիրտս սպասում է քո վերադարձի օրվան։',
    },
    question: {
      es: '¿En qué forma está escrito el texto?',
      hy: 'Ի՞նչ ձևով է գրված տեքստը։',
    },
    options: [
      { key: 'A', es: 'En una lista de personajes', hy: 'Կերպարների ցանկի ձևով' },
      { key: 'B', es: 'En diálogo teatral', hy: 'Թատերական երկխոսությամբ' },
      { key: 'C', es: 'En cuatro versos separados', hy: 'Չորս առանձին չափածո տողերով' },
      { key: 'D', es: 'En prosa', hy: 'Արձակով' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. El texto está redactado de manera continua en un párrafo con oraciones corridas (prosa).',
      hy: 'Ճիշտ է D տարբերակը։ Տեքստը գրված է արձակով (պարբերությամբ ու ամբողջական նախադասություններով)։',
    },
  },
  {
    id: 97,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 4)', hy: 'Տեքստերի վերլուծություն (Տեքստ 4)' },
    contextText: {
      title: { es: 'Texto 4', hy: 'Տեքստ 4' },
      es: 'La casa parece vacía desde tu partida. Tu silla sigue junto a la ventana, pero ya no escucho tu risa. Las horas caminan lentamente y mi corazón espera el día de tu regreso.',
      hy: 'Քո մեկնելուց հետո տունը դատարկ է թվում։ Աթոռդ դեռ պատուհանի մոտ է, բայց այլևս չեմ լսում քո ծիծաղը։ Ժամերը դանդաղ են քայլում, իսկ սիրտս սպասում է քո վերադարձի օրվան։',
    },
    question: {
      es: '¿Qué predomina en el fragmento?',
      hy: 'Ի՞նչն է գերակշռում հատվածում։',
    },
    options: [
      { key: 'A', es: 'La expresión de tristeza y añoranza', hy: 'Տխրության և կարոտի արտահայտումը' },
      { key: 'B', es: 'La explicación de una receta', hy: 'Բաղադրատոմսի բացատրությունը' },
      { key: 'C', es: 'Una sucesión de aventuras', hy: 'Արկածների հաջորդականությունը' },
      { key: 'D', es: 'Las instrucciones de una representación', hy: 'Բեմադրության հրահանգները' },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'A es correcta. El centro emotivo del texto es la desolación y nostalgia tras la partida de una persona querida.',
      hy: 'Ճիշտ է A տարբերակը։ Տեքստում գերակշռում են կարոտի, մենության և տխրության զգացմունքները։',
    },
  },
  {
    id: 98,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 4)', hy: 'Տեքստերի վերլուծություն (Տեքստ 4)' },
    contextText: {
      title: { es: 'Texto 4', hy: 'Տեքստ 4' },
      es: 'La casa parece vacía desde tu partida. Tu silla sigue junto a la ventana, pero ya no escucho tu risa. Las horas caminan lentamente y mi corazón espera el día de tu regreso.',
      hy: 'Քո մեկնելուց հետո տունը դատարկ է թվում։ Աթոռդ դեռ պատուհանի մոտ է, բայց այլևս չեմ լսում քո ծիծաղը։ Ժամերը դանդաղ են քայլում, իսկ սիրտս սպասում է քո վերադարձի օրվան։',
    },
    question: {
      es: '¿Qué recurso aparece en «Las horas caminan lentamente»?',
      hy: '«Ժամերը դանդաղ են քայլում» արտահայտության մեջ ո՞ր արտահայտչամիջոցն է օգտագործված։',
    },
    options: [
      { key: 'A', es: 'Anáfora', hy: 'Անաֆորա' },
      { key: 'B', es: 'Comparación', hy: 'Համեմատություն' },
      { key: 'C', es: 'Personificación', hy: 'Անձնավորում' },
      { key: 'D', es: 'Acotación', hy: 'Բեմական ցուցում' },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'C es correcta. Se atribuye a las horas la capacidad animada de «caminar», personificando el paso del tiempo.',
      hy: 'Ճիշտ է C տարբերակը։ Ժամերին քայլելու գործողություն է վերագրված, ինչը անձնավորում է։',
    },
  },
  {
    id: 99,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Texto 4)', hy: 'Տեքստերի վերլուծություն (Տեքստ 4)' },
    contextText: {
      title: { es: 'Texto 4', hy: 'Տեքստ 4' },
      es: 'La casa parece vacía desde tu partida. Tu silla sigue junto a la ventana, pero ya no escucho tu risa. Las horas caminan lentamente y mi corazón espera el día de tu regreso.',
      hy: 'Քո մեկնելուց հետո տունը դատարկ է թվում։ Աթոռդ դեռ պատուհանի մոտ է, բայց այլևս չեմ լսում քո ծիծաղը։ Ժամերը դանդաղ են քայլում, իսկ սիրտս սպասում է քո վերադարձի օրվան։',
    },
    question: {
      es: '¿Por qué podemos considerar el fragmento un ejemplo de prosa poética?',
      hy: 'Ինչո՞ւ կարող ենք հատվածը համարել բանաստեղծական արձակի օրինակ։',
    },
    options: [
      { key: 'A', es: 'Porque cualquier párrafo es un poema.', hy: 'Որովհետև յուրաքանչյուր պարբերություն բանաստեղծություն է։' },
      { key: 'B', es: 'Porque está en prosa y expresa sentimientos mediante imágenes poéticas.', hy: 'Որովհետև գրված է արձակով և բանաստեղծական պատկերներով արտահայտում է զգացմունքներ։' },
      { key: 'C', es: 'Porque tiene nombres antes de cada intervención.', hy: 'Որովհետև յուրաքանչյուր խոսքից առաջ անուն կա։' },
      { key: 'D', es: 'Porque incluye instrucciones para actores.', hy: 'Որովհետև ներառում է դերասանների ցուցումներ։' },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'B es correcta. Adopta la estructura de la prosa (párrafo corrido), pero su intención primordial no es narrar aventuras, sino transmitir una emoción subjetiva con lenguaje lírico.',
      hy: 'Ճիշտ է B տարբերակը։ Կառուցվածքով արձակ է, սակայն բովանդակությամբ և գեղարվեստական պատկերներով արտահայտում է քնարական հույզեր։',
    },
  },
  {
    id: 100,
    category: 'analisis',
    categoryTitle: { es: 'Análisis de textos (Conclusión)', hy: 'Տեքստերի վերլուծություն (Եզրակացություն)' },
    question: {
      es: '¿Qué conclusión general es correcta después de analizar los cuatro textos?',
      hy: 'Չորս տեքստերը վերլուծելուց հետո ո՞ր ընդհանուր եզրակացությունն է ճիշտ։',
    },
    options: [
      { key: 'A', es: 'Todo texto en prosa es narrativo.', hy: 'Յուրաքանչյուր արձակ տեքստ պատմողական է։' },
      { key: 'B', es: 'Todo texto con diálogo es teatral.', hy: 'Երկխոսություն ունեցող յուրաքանչյուր տեքստ թատերական է։' },
      { key: 'C', es: 'Todo texto con sentimientos es necesariamente un poema en verso.', hy: 'Զգացմունքներ պարունակող յուրաքանչյուր տեքստ պարտադիր չափածո բանաստեղծություն է։' },
      { key: 'D', es: 'Para identificar el género, debemos observar la finalidad, la voz y la organización del texto.', hy: 'Գրական սեռը որոշելու համար պետք է դիտարկել տեքստի նպատակը, խոսող ձայնը և կառուցվածքը։' },
    ],
    correctAnswer: 'D',
    explanation: {
      es: 'D es correcta. El género literario no se deduce por un detalle superficial aislado, sino por su propósito comunicativo fundamental, el tratamiento de la voz (poética, narrador o personajes directos) y su estructura global.',
      hy: 'Ճիշտ է D տարբերակը։ Գրական սեռը չենք որոշում միայն արտաքին ձևով, այլ տեքստի նպատակով, խոսողի ձայնով և ընդհանուր կառուցվածքով։',
    },
  },
];
