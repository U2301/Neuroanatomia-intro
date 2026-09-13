import React from 'react';
import { 
  Sparkles, 
  Dna, 
  Layers, 
  Radio, 
  Network, 
  Activity, 
  Stethoscope, 
  Brain, 
  Check, 
  GitBranch, 
  BookOpen, 
  Scale 
} from 'lucide-react';

export const DisciplinesView: React.FC = () => {
  return (
    <section id="view-disciplines" className="block space-y-6">
      {/* 1. Fundamental Equation */}
      <div className="bg-white rounded-xl border border-[#d4cbc2] p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-[#292420]">
              Neuroanatomía y Disciplinas
            </h2>
            <p className="text-xs text-[#787169]">
              Definiciones y relaciones directas del texto de clase.
            </p>
          </div>

          {/* Formula */}
          <div className="bg-[#fef7e6] border border-amber-300 p-3 rounded-xl">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#292420] flex-wrap">
              <span className="px-2.5 py-1 rounded bg-white border border-amber-300 text-[#2b553c]">
                Psicología
              </span>
              <span className="text-amber-800">+</span>
              <span className="px-2.5 py-1 rounded bg-white border border-amber-300 text-[#944920]">
                Fisiología
              </span>
              <span className="text-amber-800">=</span>
              <span className="px-2.5 py-1 rounded bg-[#2b553c] text-white">
                PSICOLOGÍA FISIOLÓGICA
              </span>
            </div>
          </div>
        </div>

        {/* Both Core Definitions */}
        <div className="mt-6 pt-6 border-t border-[#d4cbc2]/60 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-[#d4cbc2] shadow-xs">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#2b553c]/10 flex items-center justify-center text-[#2b553c]">
                <Brain className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#292420]">Psicología</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#49423c] leading-relaxed">
              Estudia el <strong>comportamiento humano</strong> desde un punto de vista <strong>bio-psico-social</strong>.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#d4cbc2] shadow-xs">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#944920]/10 flex items-center justify-center text-[#944920]">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#292420]">Fisiología</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#49423c] leading-relaxed">
              Ciencia que tiene por objeto de estudio el <strong>funcionamiento de los seres orgánicos</strong> y los <strong>fenómenos de la vida</strong>.
            </p>
          </div>
        </div>

        {/* Psicología Fisiológica Details: 4 elements */}
        <div className="mt-6 p-5 bg-white rounded-2xl border-2 border-[#2b553c]/30 shadow-xs">
          <div className="mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2b553c]">Rama Central</span>
            <h3 className="text-lg font-serif font-bold text-[#292420]">Psicología Fisiológica</h3>
            <p className="text-xs sm:text-sm text-[#49423c] mt-1">
              Rama de la psicología que estudia las relaciones existentes entre el <strong>comportamiento</strong> y el funcionamiento de:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-[#f7f4ee] p-3 rounded-xl border border-[#d4cbc2]/70 text-center">
              <div className="w-7 h-7 mx-auto mb-1.5 rounded-full bg-[#2b553c]/15 text-[#2b553c] flex items-center justify-center">
                <Dna className="w-3.5 h-3.5" />
              </div>
              <h4 className="font-bold text-xs text-[#292420]">Órganos</h4>
            </div>

            <div className="bg-[#f7f4ee] p-3 rounded-xl border border-[#d4cbc2]/70 text-center">
              <div className="w-7 h-7 mx-auto mb-1.5 rounded-full bg-[#944920]/15 text-[#944920] flex items-center justify-center">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <h4 className="font-bold text-xs text-[#292420]">Tejidos</h4>
            </div>

            <div className="bg-[#f7f4ee] p-3 rounded-xl border border-[#d4cbc2]/70 text-center">
              <div className="w-7 h-7 mx-auto mb-1.5 rounded-full bg-[#704812]/15 text-[#704812] flex items-center justify-center">
                <Radio className="w-3.5 h-3.5" />
              </div>
              <h4 className="font-bold text-xs text-[#292420]">Receptores</h4>
            </div>

            <div className="bg-[#f7f4ee] p-3 rounded-xl border border-[#d4cbc2]/70 text-center">
              <div className="w-7 h-7 mx-auto mb-1.5 rounded-full bg-[#205b76]/15 text-[#205b76] flex items-center justify-center">
                <Network className="w-3.5 h-3.5" />
              </div>
              <h4 className="font-bold text-xs text-[#292420]">SN (Sistema Nervioso)</h4>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Disciplines from notes */}
      <div>
        <h3 className="text-base font-bold text-[#292420] mb-3">
          Disciplinas de los apuntes
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Neurofisiología */}
          <div className="bg-white p-4 rounded-xl border border-[#d4cbc2] shadow-xs">
            <h4 className="text-sm font-bold text-[#292420] mb-1.5">
              Neurofisiología
            </h4>
            <p className="text-xs text-[#49423c] leading-relaxed">
              Ciencia que se encarga de estudiar el <strong>funcionamiento de órganos y tejidos del S.N.</strong>
            </p>
          </div>

          {/* Neuropsicología */}
          <div className="bg-white p-4 rounded-xl border border-[#d4cbc2] shadow-xs">
            <h4 className="text-sm font-bold text-[#292420] mb-1.5">
              Neuropsicología
            </h4>
            <p className="text-xs text-[#49423c] leading-relaxed">
              Ciencia que estudia las <strong>relaciones de la conducta y el cerebro</strong> partiendo tanto del conocimiento de las estructuras y funciones de éste como del conocimiento de la conducta.
            </p>
          </div>

          {/* Neuroendocrinología */}
          <div className="bg-white p-4 rounded-xl border border-[#d4cbc2] shadow-xs">
            <h4 className="text-sm font-bold text-[#292420] mb-1.5">
              Neuroendocrinología
            </h4>
            <p className="text-xs text-[#49423c] leading-relaxed">
              Rama de la medicina que estudia las <strong>alteraciones de las glándulas endocrinas</strong> y las sustancias que secretan (<strong>hormonas</strong>) así como su interacción con el <strong>S.N.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* 3. Table: Psiquiatra vs Psicologo */}
      <div className="bg-white rounded-xl border border-[#d4cbc2] p-5 shadow-xs">
        <div className="flex items-center justify-between gap-2 border-b border-[#d4cbc2]/60 pb-3 mb-4">
          <div>
            <h3 className="text-base font-bold text-[#292420]">
              Tabla comparativa: Psiquiatra vs. Psicólogo
            </h3>
            <p className="text-xs text-[#787169] mt-0.5">
              Diferencias según los apuntes de clase.
            </p>
          </div>
        </div>

        {/* Structured Comparison Table */}
        <div className="overflow-hidden rounded-2xl border border-[#d4cbc2] shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-[#f5efe9] border-b border-[#d4cbc2]">
                <th className="p-4 sm:p-5 font-serif font-bold text-[#944920] text-base sm:text-lg w-1/2 border-r border-[#d4cbc2]">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-[#944920]" />
                    <span>Psiquiatra</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 font-serif font-bold text-[#2b553c] text-base sm:text-lg w-1/2">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-[#2b553c]" />
                    <span>Psicólogo</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4cbc2]/70 bg-white">
              {/* Row 1: Objeto principal */}
              <tr className="hover:bg-[#fbf9f6] transition">
                <td className="p-4 sm:p-5 font-semibold text-[#292420] border-r border-[#d4cbc2]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#944920]" />
                    <span>Enf. Mentales</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 font-semibold text-[#292420]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2b553c]" />
                    <span>Comportamiento</span>
                  </div>
                </td>
              </tr>

              {/* Row 2: Grado o Título */}
              <tr className="hover:bg-[#fbf9f6] transition">
                <td className="p-4 sm:p-5 font-semibold text-[#292420] border-r border-[#d4cbc2]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#944920]" />
                    <span>Médico</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 font-semibold text-[#292420]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2b553c]" />
                    <span>Lic. (Licenciado)</span>
                  </div>
                </td>
              </tr>

              {/* Row 3: Tratamiento / Intervención */}
              <tr className="hover:bg-[#fbf9f6] transition">
                <td className="p-4 sm:p-5 font-semibold text-[#292420] border-r border-[#d4cbc2] align-top">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#944920]" />
                    <span>Psicofármacos</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 font-semibold text-[#292420] space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2b553c]" />
                    <span>Comunicación</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2b553c]" />
                    <span>Lenguaje</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2b553c]" />
                    <span>Pruebas Psicológicas</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
