import { NeuroNode, NeuroEdge, Flashcard, TimelineMilestone } from '../types';

export const neuroNodes: NeuroNode[] = [
  // 1. Disciplinas y Bases
  { 
    id: 1, 
    label: "Psicología", 
    period: "Fundamento", 
    category: "Disciplinas", 
    group: "disciplinas", 
    desc: "Estudia el comportamiento humano desde la perspectiva tridimensional Bio-Psico-Social.", 
    exam: "Enfoque de estudio: Comportamiento + Lenguaje + Comunicación. Modelo Bio-Psico-Social.",
    colorGroup: "#2b553c"
  },
  { 
    id: 2, 
    label: "Fisiología", 
    period: "Fundamento", 
    category: "Disciplinas", 
    group: "disciplinas", 
    desc: "Ciencia que tiene por objeto de estudio el funcionamiento de los seres orgánicos y los fenómenos de la vida.", 
    exam: "Objeto de estudio: Funcionamiento de los seres orgánicos y los fenómenos de la vida.",
    colorGroup: "#2b553c"
  },
  { 
    id: 3, 
    label: "Psicología Fisiológica", 
    period: "Ecuación Principal", 
    category: "Disciplinas", 
    group: "disciplinas", 
    desc: "Rama de la psicología que estudia las relaciones existentes entre el comportamiento y el funcionamiento de: Órganos, Tejidos, Receptores y Sistema Nervioso (SN). Surge de Psicología + Fisiología.", 
    exam: "Fórmula de clase: Psicología + Fisiología = PSICOLOGÍA FISIOLÓGICA. 4 pilares: Órganos, Tejidos, Receptores y SN.",
    colorGroup: "#2b553c"
  },
  { 
    id: 4, 
    label: "Neurofisiología", 
    period: "Rama SN", 
    category: "Disciplinas", 
    group: "disciplinas", 
    desc: "Ciencia encargada de estudiar el funcionamiento de órganos y tejidos del Sistema Nervioso (S.N.).", 
    exam: "Foco: Funcionamiento de órganos y tejidos del S.N.",
    colorGroup: "#2b553c"
  },
  { 
    id: 5, 
    label: "Neuropsicología", 
    period: "1949 (Hebb)", 
    category: "Disciplinas", 
    group: "disciplinas", 
    desc: "Ciencia que estudia las relaciones de la conducta y el cerebro partiendo tanto del conocimiento de las estructuras y funciones de éste como del conocimiento de la conducta.", 
    exam: "Relación bidireccional: Conocimiento de estructuras/funciones cerebrales y la conducta.",
    colorGroup: "#2b553c"
  },
  { 
    id: 6, 
    label: "Neuroendocrinología", 
    period: "Rama Médica", 
    category: "Disciplinas", 
    group: "disciplinas", 
    desc: "Rama de la medicina que estudia las alteraciones de las glándulas endocrinas y las sustancias que secretan (hormonas), así como su interacción con el S.N.", 
    exam: "Punto clave: Glándulas endocrinas + Hormonas + Interacción con el S.N.",
    colorGroup: "#2b553c"
  },

  // 2. Historia Antigua
  { 
    id: 7, 
    label: "Alcmeón de Crotona", 
    period: "500 A.C. (Siglo V A.C.)", 
    category: "Filosofía Antigua", 
    group: "antigua", 
    desc: "Propuso en el siglo V A.C. al cerebro como el asiento primario del alma tras realizar las primeras observaciones anatómicas.", 
    exam: "Pionero antiguo en señalar al cerebro como asiento del alma.",
    colorGroup: "#944920"
  },
  { 
    id: 8, 
    label: "Platón", 
    period: "Siglo IV A.C.", 
    category: "Filosofía Antigua", 
    group: "antigua", 
    desc: "Consideró al cerebro como receptor divino por encontrarse ubicado más cerca del cielo.", 
    exam: "Cerebro = Receptor divino al estar más cerca del cielo.",
    colorGroup: "#944920"
  },
  { 
    id: 9, 
    label: "Aristóteles", 
    period: "Siglo IV A.C.", 
    category: "Filosofía Antigua", 
    group: "antigua", 
    desc: "Afirmó que el corazón era el asiento del alma, y que el cerebro servía para enfriar la sangre.", 
    exam: "Hipótesis cardiocéntrica: Corazón = asiento del alma / Cerebro = enfriador de sangre.",
    colorGroup: "#944920"
  },
  { 
    id: 10, 
    label: "Galeno", 
    period: "129 - 199 D.C.", 
    category: "Filosofía Antigua", 
    group: "antigua", 
    desc: "Médico romano que apoyó la hipótesis cerebral. Creyó que los ventrículos cerebrales eran estructuras donde se ubicaban los pensamientos y otros procesos psicológicos (idea que se mantuvo hasta la Edad Media).", 
    exam: "Hipótesis ventricular: pensamientos y procesos psicológicos en los ventrículos (vigente hasta la Edad Media).",
    colorGroup: "#944920"
  },

  // 3. Fisiología Siglo XVIII - XIX
  { 
    id: 11, 
    label: "Luigi Galvani", 
    period: "1780", 
    category: "Fisiología S.XVIII-XIX", 
    group: "fisiologia", 
    desc: "Descubrió por accidente la naturaleza eléctrica del impulso nervioso con ancas de rana.", 
    exam: "Descubrimiento accidental de la naturaleza eléctrica del impulso nervioso.",
    colorGroup: "#6d4304"
  },
  { 
    id: 12, 
    label: "Franz J. Gall", 
    period: "1758 - 1828", 
    category: "Fisiología S.XVIII-XIX", 
    group: "fisiologia", 
    desc: "Desarrolló la frenología como 'un medio para estudiar la personalidad' analizando las protuberancias y la estructura del cráneo.", 
    exam: "Frenología & Craneometría: personalidad analizando protuberancias del cráneo.",
    colorGroup: "#6d4304"
  },
  { 
    id: 13, 
    label: "Ley de Bell-Magendie", 
    period: "1811 - 1822", 
    category: "Fisiología S.XVIII-XIX", 
    group: "fisiologia", 
    desc: "Charles Bell (1811) y François Magendie (1822) descubrieron de manera independiente que las raíces dorsales son sensoriales y las raíces ventrales son motoras.", 
    exam: "Regla mnemotécnica: Raíces Dorsales = Sensoriales; Raíces Ventrales = Motoras.",
    colorGroup: "#6d4304"
  },
  { 
    id: 14, 
    label: "Johannes Müller", 
    period: "1838", 
    category: "Fisiología S.XVIII-XIX", 
    group: "fisiologia", 
    desc: "Propuso las 5 energías nerviosas: cada una responde a cada sentido de forma particular y necesita fibras nerviosas específicas.", 
    exam: "5 energías nerviosas sensoriales: correspondencia entre sentidos y fibras nerviosas específicas.",
    colorGroup: "#6d4304"
  },
  { 
    id: 15, 
    label: "Pierre Flourens", 
    period: "1840", 
    category: "Fisiología S.XVIII-XIX", 
    group: "fisiologia", 
    desc: "Afirmó que el cerebro es la base de la coordinación motora y el centro integrado del organismo. Se contrapuso a la frenología pues sus experimentos de biopsias cerebrales concluyeron que eliminar una parte del cerebro no influía en cambios generales de la conducta (no estudió específicos).", 
    exam: "Cerebro como centro integrado y coordinación motora. Biopsias/ablaciones refutando la frenología.",
    colorGroup: "#6d4304"
  },
  { 
    id: 16, 
    label: "Claude Bernard", 
    period: "1859", 
    category: "Fisiología S.XVIII-XIX", 
    group: "fisiologia", 
    desc: "Integró el concepto biológico de medio interno, hoy en día conocido y llamado líquido extracelular.", 
    exam: "Concepto de 'medio interno' = hoy en día llamado líquido extracelular.",
    colorGroup: "#6d4304"
  },
  { 
    id: 17, 
    label: "Fritsch y Hitzig", 
    period: "1870", 
    category: "Fisiología S.XVIII-XIX", 
    group: "fisiologia", 
    desc: "Al estimular regiones parte por parte del cerebro con electricidad confirmó que ciertas regiones correspondían a áreas particulares musculares (estimulando áreas cerebrales del cerebro de un perro).", 
    exam: "Mapeo de la corteza motora en perros: estimulación eléctrica focalizada mueve áreas musculares específicas.",
    colorGroup: "#6d4304"
  },
  { 
    id: 18, 
    label: "Luigi Rolando", 
    period: "Siglo XIX", 
    category: "Fisiología S.XVIII-XIX", 
    group: "fisiologia", 
    desc: "Fue uno de los primeros en realizar una descripción precisa de las circunvoluciones y surcos corticales. Además, fue el primero en solidificar un cerebro para su estudio.", 
    exam: "Descripción de circunvoluciones/surcos corticales y primer científico en solidificar un cerebro.",
    colorGroup: "#6d4304"
  },

  // 4. Era Moderna & Doctrina Neuronal
  { 
    id: 19, 
    label: "Golgi y Ramón y Cajal", 
    period: "1887", 
    category: "Era Moderna", 
    group: "moderna", 
    desc: "Demostraron la Doctrina de la Neurona: descubren que las neuronas no se tocan físicamente, sino que se comunican mediante sinapsis bioquímicas.", 
    exam: "Doctrina de la Neurona: no hay continuidad física ('no se tocan'), se comunican mediante sinapsis bioquímicas.",
    colorGroup: "#205b76"
  },
  { 
    id: 20, 
    label: "Charles Sherrington", 
    period: "1906", 
    category: "Era Moderna", 
    group: "moderna", 
    desc: "Propone el término formal de punto de sinapsis y sienta las bases de la neurología del siglo XX.", 
    exam: "Concepto formal de 'punto de sinapsis' y cimientos de la neurología contemporánea.",
    colorGroup: "#205b76"
  },
  { 
    id: 21, 
    label: "D.O. Hebb", 
    period: "1949", 
    category: "Era Moderna", 
    group: "moderna", 
    desc: "Utiliza por primera vez el término 'neuropsicología' en su libro fundacional 'La organización del comportamiento: una teoría neuropsicológica'.", 
    exam: "Acuñó por primera vez el término neuropsicología en su obra fundacional de 1949.",
    colorGroup: "#205b76"
  },
  { 
    id: 22, 
    label: "Marín, Glen y Walker", 
    period: "1982", 
    category: "Era Moderna", 
    group: "moderna", 
    desc: "Señalan que la lesión cerebral se estandariza como una 'disociación' entre áreas anatómicas específicas.", 
    exam: "Lesión cerebral vista e interpretada como disociación entre áreas anatómicas.",
    colorGroup: "#205b76"
  }
];

export const neuroEdges: NeuroEdge[] = [
  // Disciplinas y síntesis base
  { from: 1, to: 3, label: "Síntesis", arrows: "to" },
  { from: 2, to: 3, label: "Síntesis", arrows: "to" },
  { from: 3, to: 4, label: "Especializa", arrows: "to" },
  { from: 3, to: 5, label: "Especializa", arrows: "to" },
  { from: 3, to: 6, label: "Relación Médica", arrows: "to" },

  // Antigüedad y evolución del debate
  { from: 7, to: 8, label: "Enfoque Encefálico", arrows: "to" },
  { from: 8, to: 9, label: "Debate Cabeza vs Corazón", arrows: "to;from" },
  { from: 7, to: 10, label: "Herencia Cerebral", arrows: "to" },

  // De ventrículos a la electrofisiología
  { from: 10, to: 11, label: "Superación de Ventrículos", arrows: "to" },
  { from: 11, to: 17, label: "Inspiró estudio eléctrico", arrows: "to" },
  { from: 12, to: 15, label: "Debate: Refutó Frenología", arrows: "to" },
  { from: 13, to: 14, label: "Condujo a Fibras Específicas", arrows: "to" },
  { from: 18, to: 19, label: "Preservación de Tejido", arrows: "to" },

  // Era Moderna & Sinapsis
  { from: 17, to: 19, label: "Bases de Estructura", arrows: "to" },
  { from: 19, to: 20, label: "Propuso punto sináptico", arrows: "to" },
  { from: 20, to: 21, label: "Inspiró la Neuropsicología", arrows: "to" },
  { from: 21, to: 5, label: "Acuñó el Término (1949)", arrows: "to" },
  { from: 21, to: 22, label: "Evolución de Lesión", arrows: "to" },

  // Vínculos directos con la Psicología Fisiológica
  { from: 16, to: 3, label: "Medio interno", arrows: "to" },
  { from: 14, to: 3, label: "Receptores", arrows: "to" },
  { from: 19, to: 3, label: "Tejidos y SN", arrows: "to" }
];

export const flashcardsData: Flashcard[] = [
  {
    id: "fc-1",
    year: "Fundamento",
    category: "Definición de Clase",
    question: "¿Qué es la Psicología según los apuntes?",
    answer: "Estudia el comportamiento humano desde un punto de vista bio-psico-social.",
    examNote: "Enfoque de examen: Comportamiento + Lenguaje + Comunicación bajo el modelo Bio-Psico-Social."
  },
  {
    id: "fc-2",
    year: "Fundamento",
    category: "Definición de Clase",
    question: "¿Qué es la Fisiología según los apuntes?",
    answer: "Ciencia que tiene por objeto de estudio el funcionamiento de los seres orgánicos y los fenómenos de la vida.",
    examNote: "Objeto de estudio: Funcionamiento de seres orgánicos y fenómenos de la vida."
  },
  {
    id: "fc-3",
    year: "Ecuación Principal",
    category: "Psicología Fisiológica",
    question: "¿Cuál es la fórmula fundamental y qué estudia la Psicología Fisiológica?",
    answer: "Psicología + Fisiología = PSICOLOGÍA FISIOLÓGICA.\nRama de la psicología que estudia las relaciones existentes entre el comportamiento y el funcionamiento de:\n1. Órganos\n2. Tejidos\n3. Receptores\n4. Sistema Nervioso (SN).",
    examNote: "Aprenderse de memoria los 4 pilares: Órganos, Tejidos, Receptores y SN."
  },
  {
    id: "fc-4",
    year: "Rama SN",
    category: "Neurociencias",
    question: "¿Qué es la Neurofisiología?",
    answer: "Ciencia que se encarga de estudiar el funcionamiento de órganos y tejidos del Sistema Nervioso (S.N.).",
    examNote: "Foco: Funcionamiento biológico directo de órganos y tejidos del S.N."
  },
  {
    id: "fc-5",
    year: "1949 (Hebb)",
    category: "Neurociencias",
    question: "¿Qué es la Neuropsicología?",
    answer: "Ciencia que estudia las relaciones de la conducta y el cerebro partiendo tanto del conocimiento de las estructuras y funciones de éste como del conocimiento de la conducta.",
    examNote: "Relación bidireccional: Conocimiento de estructuras/funciones cerebrales y la conducta."
  },
  {
    id: "fc-6",
    year: "Rama Médica",
    category: "Neurociencias",
    question: "¿Qué es la Neuroendocrinología?",
    answer: "Rama de la medicina que estudia las alteraciones de las glándulas endocrinas y las sustancias que secretan (hormonas) así como su interacción con el S.N.",
    examNote: "Tríada clave: Glándulas endocrinas + Hormonas secretadas + Interacción con el S.N."
  },
  {
    id: "fc-7",
    year: "500 A.C.",
    category: "Historia Antigua",
    question: "¿Qué propuso Alcmeón de Crotona en el siglo V A.C.?",
    answer: "Propuso formalmente al cerebro como el asiento del alma.",
    examNote: "Primer pensador en proponer al cerebro como sede del alma (enfoque encefalocéntrico)."
  },
  {
    id: "fc-8",
    year: "Siglo IV A.C.",
    category: "Historia Antigua",
    question: "¿Qué decían Platón y Aristóteles sobre el cerebro y el alma?",
    answer: "• Platón: El cerebro es un receptor divino al encontrarse ubicado más cerca del cielo.\n• Aristóteles: Afirmó que el corazón era el asiento del alma y el cerebro servía para enfriar la sangre.",
    examNote: "Debate clásico: Platón = receptor divino (cabeza); Aristóteles = corazón asiento del alma y cerebro enfriador."
  },
  {
    id: "fc-9",
    year: "129 - 199 D.C.",
    category: "Historia Antigua",
    question: "¿Qué propuso Galeno sobre el cerebro y los ventrículos?",
    answer: "Médico romano que apoyó la hipótesis cerebral. Creyó que los ventrículos cerebrales eran las estructuras donde se ubicaban los pensamientos y otros procesos psicológicos (idea que se mantuvo hasta la Edad Media).",
    examNote: "Hipótesis ventricular: Pensamientos y procesos psicológicos en ventrículos; vigente hasta la Edad Media."
  },
  {
    id: "fc-10",
    year: "1780",
    category: "Fisiología S.XVIII-XIX",
    question: "¿Qué descubrió Luigi Galvani?",
    answer: "Descubrió por accidente la naturaleza eléctrica del impulso nervioso mediante experimentos con ancas de rana.",
    examNote: "Palabra clave de examen: Descubrimiento accidental de la naturaleza eléctrica del impulso nervioso."
  },
  {
    id: "fc-11",
    year: "1758 - 1828",
    category: "Fisiología S.XVIII-XIX",
    question: "¿Qué desarrolló Franz J. Gall y cómo la definía?",
    answer: "Desarrolló la frenología como: 'un medio para estudiar la personalidad' analizando las protuberancias y la estructura del cráneo.",
    examNote: "Frenología: Estudio de la personalidad según protuberancias y estructura del cráneo."
  },
  {
    id: "fc-12",
    year: "1811 - 1822",
    category: "Fisiología S.XVIII-XIX",
    question: "¿Qué establece la Ley de Bell-Magendie?",
    answer: "Charles Bell (1811) y François Magendie (1822, de forma independiente) descubrieron que las raíces de la médula están funcionalizadas:\n• Raíces dorsales = exclusivamente sensoriales.\n• Raíces ventrales = exclusivamente motoras.",
    examNote: "Regla mnemotécnica fija de examen: Dorsales = Sensoriales; Ventrales = Motoras."
  },
  {
    id: "fc-13",
    year: "1838",
    category: "Fisiología S.XVIII-XIX",
    question: "¿Qué dijo Johannes Müller sobre las energías nerviosas?",
    answer: "Dijo que existen 5 energías nerviosas; cada una responde a cada sentido y necesita fibras nerviosas específicas.",
    examNote: "5 energías nerviosas específicas: cada sentido requiere sus fibras específicas."
  },
  {
    id: "fc-14",
    year: "1840",
    category: "Fisiología S.XVIII-XIX",
    question: "¿Qué afirmó Pierre Flourens y cómo rebatió a la frenología?",
    answer: "Afirmó que el cerebro es la base de la coordinación motora y el centro integrado del organismo. Se contrapuso a la frenología con biopsias cerebrales concluyendo que eliminar una parte no causaba fallos aislados sino alteraciones generales de la conducta (no estudió específicos).",
    examNote: "Centro integrado y coordinación motora; biopsias/ablaciones cerebrales contra la frenología."
  },
  {
    id: "fc-15",
    year: "1859",
    category: "Fisiología S.XVIII-XIX",
    question: "¿Qué concepto integró Claude Bernard en 1859?",
    answer: "Integró el concepto biológico de 'medio interno', que hoy en día se conoce y denomina como líquido extracelular.",
    examNote: "Medio interno = líquido extracelular."
  },
  {
    id: "fc-16",
    year: "1870",
    category: "Fisiología S.XVIII-XIX",
    question: "¿Qué experimento realizaron Fritsch y Hitzig?",
    answer: "Al estimular regiones parte por parte del cerebro con electricidad, confirmaron que ciertas regiones correspondían a áreas particulares musculares (estimulando áreas del cerebro de un perro).",
    examNote: "Mapeo motor: Estimulación focalizada en cerebro de perro asocia regiones cerebrales con grupos musculares."
  },
  {
    id: "fc-17",
    year: "Siglo XIX",
    category: "Fisiología S.XVIII-XIX",
    question: "¿Qué aportó Luigi Rolando en el siglo XIX?",
    answer: "Fue uno de los primeros en realizar una descripción precisa de las circunvoluciones y surcos corticales. Además, fue el primero en solidificar un cerebro para su estudio.",
    examNote: "Dos logros clave: Descripción de circunvoluciones/surcos corticales y primer científico en solidificar un cerebro."
  },
  {
    id: "fc-18",
    year: "1887",
    category: "Era Moderna",
    question: "¿Qué descubrieron Camilo Golgi y Santiago Ramón y Cajal?",
    answer: "Descubrieron la Doctrina de la Neurona: las neuronas son unidades celulares individuales que no se tocan físicamente; se comunican mediante sinapsis bioquímicas.",
    examNote: "Las neuronas no se tocan: comunicación mediante sinapsis bioquímicas."
  },
  {
    id: "fc-19",
    year: "1906",
    category: "Era Moderna",
    question: "¿Qué propuso Charles Sherrington en 1906?",
    answer: "Propone el concepto formal de 'punto de sinapsis' y sienta las bases de la neurología moderna del siglo XX.",
    examNote: "Punto de sinapsis y cimientos de la neurología moderna."
  },
  {
    id: "fc-20",
    year: "1949",
    category: "Era Moderna",
    question: "¿Qué aportó D.O. Hebb en 1949?",
    answer: "Utiliza por primera vez el término 'neuropsicología' en su libro: 'La organización del comportamiento: una teoría neuropsicológica'.",
    examNote: "Acuñó por primera vez el término neuropsicología en su libro fundacional."
  },
  {
    id: "fc-21",
    year: "1982",
    category: "Era Moderna",
    question: "¿Qué señalaron Marín, Glen y Walker en 1982?",
    answer: "Señalan que la lesión cerebral se estandariza e interpreta como una 'disociación' entre áreas anatómicas específicas.",
    examNote: "Lesión cerebral estandarizada como disociación entre áreas anatómicas."
  },
  {
    id: "fc-22",
    year: "Comparativa",
    category: "Psiquiatra vs Psicólogo",
    question: "¿Cuáles son las diferencias exactas de la tabla de clase entre Psiquiatra y Psicólogo?",
    answer: "• Psiquiatra:\n  - Enf. Mentales\n  - Médico (formación médica)\n  - Psicofármacos (prescripción médica exclusiva)\n\n• Psicólogo:\n  - Comportamiento\n  - Lic. (Licenciado)\n  - Comunicación, Lenguaje y Pruebas Psicológicas (Psicometría)",
    examNote: "Pregunta fija de examen: Solo el médico psiquiatra prescribe psicofármacos; el psicólogo evalúa comportamiento y aplica pruebas."
  }
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 1,
    number: 1,
    year: "500 A.C. (Siglo V A.C.)",
    location: "Grecia Antigua",
    title: "Alcmeón de Crotona",
    badge: "Asiento del Alma",
    description: "Propuso formalmente el cerebro como el asiento del alma tras realizar las primeras observaciones anatómicas.",
    examNote: "Primer pensador en proponer al cerebro como sede del alma (enfoque encefalocéntrico).",
    category: "antigua"
  },
  {
    id: 2,
    number: 2,
    year: "Siglo IV A.C.",
    location: "Grecia Antigua",
    title: "Platón",
    badge: "Receptor Divino",
    description: "Consideró al cerebro como un receptor divino por encontrarse ubicado más cerca del cielo.",
    examNote: "Platón: El cerebro es receptor divino al estar más cerca del cielo.",
    category: "antigua"
  },
  {
    id: 3,
    number: 3,
    year: "Siglo IV A.C.",
    location: "Grecia Antigua",
    title: "Aristóteles",
    badge: "Corazón y Sangre",
    description: "Afirmó que el corazón era el asiento del alma y el cerebro servía para enfriar la sangre.",
    examNote: "Hipótesis cardiocéntrica: Corazón = asiento del alma; Cerebro = enfriador de sangre.",
    category: "antigua"
  },
  {
    id: 4,
    number: 4,
    year: "129 – 199 D.C.",
    location: "Roma",
    title: "Galeno",
    badge: "Hipótesis Ventricular",
    description: "Médico romano que apoyó la hipótesis cerebral. Creyó que los ventrículos cerebrales eran estructuras donde se ubicaban los pensamientos y otros procesos psicológicos (idea que se mantuvo hasta la Edad Media).",
    examNote: "Hipótesis ventricular: Ubicó pensamientos y procesos psicológicos en ventrículos; vigente hasta la Edad Media.",
    category: "antigua"
  },
  {
    id: 5,
    number: 5,
    year: "1780",
    location: "Italia",
    title: "Luigi Galvani",
    badge: "Naturaleza Eléctrica",
    description: "Descubrió por accidente la naturaleza eléctrica del impulso nervioso con ancas de rana.",
    examNote: "Descubrimiento accidental de la naturaleza eléctrica del impulso nervioso.",
    category: "moderna",
    highlightColor: "#944920"
  },
  {
    id: 6,
    number: 6,
    year: "1758 – 1828",
    location: "Europa",
    title: "Franz J. Gall",
    badge: "Frenología",
    description: "Desarrolló la frenología como: 'un medio para estudiar la personalidad' analizando las protuberancias y la estructura del cráneo.",
    examNote: "Frenología & Craneometría: Estudio de la personalidad según protuberancias del cráneo.",
    category: "moderna"
  },
  {
    id: 7,
    number: 7,
    year: "1811 – 1822",
    location: "Reino Unido / Francia",
    title: "Ley de Bell-Magendie",
    badge: "Raíces Medulares",
    description: "Charles Bell (1811) y François Magendie (1822) descubrieron de forma independiente la funcionalización de la médula: raíces dorsales sensoriales y raíces ventrales motoras.",
    examNote: "Ley de Bell-Magendie: Raíces dorsales = sensoriales; raíces ventrales = motoras.",
    category: "moderna"
  },
  {
    id: 8,
    number: 8,
    year: "1838",
    location: "Alemania",
    title: "Johannes Müller",
    badge: "5 Energías Nerviosas",
    description: "Dijo que existen 5 energías nerviosas, cada una responde a cada sentido y necesita fibras nerviosas específicas.",
    examNote: "5 energías nerviosas sensoriales: correspondencia sentido-fibra específica.",
    category: "moderna"
  },
  {
    id: 9,
    number: 9,
    year: "1840",
    location: "Francia",
    title: "Pierre Flourens",
    badge: "Coordinación y Biopsias",
    description: "Afirmó que el cerebro es la base de la coordinación motora y es el centro integrado del organismo. Se contrapuso a la frenología pues sus experimentos de biopsias cerebrales concluyeron que eliminar una parte del cerebro no influía en cambios generales de la conducta.",
    examNote: "Flourens: Cerebro como centro integrado; ablaciones/biopsias contra la frenología.",
    category: "moderna"
  },
  {
    id: 10,
    number: 10,
    year: "1859",
    location: "Francia",
    title: "Claude Bernard",
    badge: "Medio Interno",
    description: "Integra el concepto de medio interno, hoy en día llamado líquido extracelular.",
    examNote: "Medio interno = líquido extracelular.",
    category: "moderna"
  },
  {
    id: 11,
    number: 11,
    year: "1870",
    location: "Alemania",
    title: "Fritsch y Hitzig (Flirtz y Hitzing)",
    badge: "Estimulación en Perros",
    description: "Al estimular regiones parte por parte del cerebro con electricidad, confirmó que ciertas regiones correspondían a áreas particulares musculares (estimulando áreas cerebrales del cerebro de un perro).",
    examNote: "Mapeo de corteza motora en perros: estimulación focalizada activa músculos específicos.",
    category: "moderna"
  },
  {
    id: 12,
    number: 12,
    year: "Siglo XIX",
    location: "Italia",
    title: "Luigi Rolando",
    badge: "Surcos y Solidificación",
    description: "Fue uno de los primeros en realizar una descripción precisa de las circunvoluciones y surcos corticales. Fue el primero en solidificar un cerebro para su estudio.",
    examNote: "Descripción precisa de circunvoluciones y surcos corticales; primer científico en solidificar un cerebro.",
    category: "moderna"
  },
  {
    id: 13,
    number: 13,
    year: "1887",
    location: "España / Italia",
    title: "Golgi y Ramón y Cajal",
    badge: "Doctrina de la Neurona",
    description: "Descubren que las neuronas no se tocan: se comunican con sinapsis bioquímicas (Doctrina de la Neurona).",
    examNote: "Las neuronas no se tocan: unidades celulares individuales comunicadas por sinapsis bioquímicas.",
    category: "moderna"
  },
  {
    id: 14,
    number: 14,
    year: "1906",
    location: "Reino Unido",
    title: "Charles Sherrington",
    badge: "Punto de Sinapsis",
    description: "Propone el punto de sinapsis y sienta las bases de la neurología del siglo XX.",
    examNote: "Propone el punto formal de sinapsis y consolida la neurología del siglo XX.",
    category: "moderna"
  },
  {
    id: 15,
    number: 15,
    year: "1949",
    location: "Canadá",
    title: "D.O. Hebb",
    badge: "Término Neuropsicología",
    description: "Utiliza por primera vez el término neuropsicología escribiéndolo por primera vez en el libro 'La organización del comportamiento: una teoría neuropsicológica'.",
    examNote: "Primer uso del término neuropsicología en su libro fundacional de 1949.",
    category: "moderna"
  },
  {
    id: 16,
    number: 16,
    year: "1982",
    location: "Clínica Neuropsicológica",
    title: "Marín, Glen y Walker",
    badge: "Disociación Anatómica",
    description: "Señalan que la lesión cerebral se estandariza como una 'disociación' entre áreas anatómicas.",
    examNote: "La lesión cerebral se estandariza como disociación entre áreas anatómicas.",
    category: "moderna"
  }
];
