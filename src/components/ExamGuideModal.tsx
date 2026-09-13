import React from 'react';
import { X, Star, BookOpen, Check } from 'lucide-react';

interface ExamGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExamGuideModal: React.FC<ExamGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs flex items-center justify-center p-4 font-sans"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full border border-[#d4cbc2] p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-[#787169] hover:text-[#231f1c] text-base p-1 transition"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#2b553c] text-xs font-bold uppercase tracking-wider mb-1">
          <BookOpen className="w-3.5 h-3.5 text-[#2b553c]" />
          <span>Apuntes de Clase</span>
        </div>

        <h3 className="text-lg font-bold text-[#292420] mb-3">
          Resumen rápido de Neuroanatomía
        </h3>

        <div className="space-y-3 text-xs sm:text-sm text-[#231f1c] leading-relaxed">
          {/* Tip Ecuación */}
          <div className="p-3 bg-[#fef7e6] rounded-lg border border-amber-300">
            <p className="font-bold text-amber-900 mb-0.5">
              Fórmula básica:
            </p>
            <p className="font-semibold text-amber-950">
              Psicología + Fisiología = PSICOLOGÍA FISIOLÓGICA
            </p>
            <p className="text-xs text-amber-900 mt-1">
              Estudia relaciones entre comportamiento y: <strong>Órganos, Tejidos, Receptores y SN</strong>.
            </p>
          </div>

          {/* 3 Ramas */}
          <div className="p-3 bg-[#fbf8f5] rounded-lg border border-[#d4cbc2]/60">
            <p className="font-bold text-[#2b553c] mb-1">Disciplinas:</p>
            <ul className="space-y-1 text-xs text-[#49423c]">
              <li>• <strong>Neurofisiología:</strong> Funcionamiento de órganos y tejidos del S.N.</li>
              <li>• <strong>Neuropsicología:</strong> Relación de la conducta y el cerebro (estructuras, funciones y conducta).</li>
              <li>• <strong>Neuroendocrinología:</strong> Alteraciones de glándulas endocrinas, hormonas e interacción con el S.N.</li>
            </ul>
          </div>

          {/* Tabla de Examen */}
          <div className="p-3 bg-[#fbf8f5] rounded-lg border border-[#d4cbc2]/60">
            <p className="font-bold text-[#944920] mb-1">Psiquiatra vs. Psicólogo</p>
            <div className="grid grid-cols-2 gap-2.5 text-xs mt-1">
              <div className="p-2 bg-white rounded border border-[#d4cbc2]">
                <span className="font-bold text-[#944920] block mb-0.5">Psiquiatra:</span>
                <p>- Enf. Mentales</p>
                <p>- Médico</p>
                <p>- Psicofármacos</p>
              </div>
              <div className="p-2 bg-white rounded border border-[#d4cbc2]">
                <span className="font-bold text-[#2b553c] block mb-0.5">Psicólogo:</span>
                <p>- Comportamiento</p>
                <p>- Licenciado (Lic.)</p>
                <p>- Comunicación, Lenguaje, Pruebas Psicológicas</p>
              </div>
            </div>
          </div>

          {/* Hitos Clave de Examen */}
          <div className="p-3 bg-[#fbf8f5] rounded-lg border border-[#d4cbc2]/60">
            <p className="font-bold text-[#704812] mb-1">Hitos clave:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-[#49423c] mt-1">
              <p>• <strong>Alcmeón:</strong> Cerebro asiento del alma (500 A.C.).</p>
              <p>• <strong>Platón vs Aristóteles:</strong> Platón = cerebro receptor divino; Aristóteles = corazón asiento del alma y cerebro enfría la sangre.</p>
              <p>• <strong>Galeno:</strong> Pensamientos en ventrículos cerebrales.</p>
              <p>• <strong>Galvani (1780):</strong> Descubre por accidente naturaleza eléctrica del impulso nervioso.</p>
              <p>• <strong>Gall:</strong> Frenología = estudiar personalidad por protuberancias craneales.</p>
              <p>• <strong>Ley Bell-Magendie:</strong> Raíces dorsales sensoriales, ventrales motoras.</p>
              <p>• <strong>Müller (1838):</strong> 5 energías nerviosas y fibras específicas para cada sentido.</p>
              <p>• <strong>Flourens (1840):</strong> Cerebro coordinación motora y centro integrado (biopsias contra frenología).</p>
              <p>• <strong>Claude Bernard (1859):</strong> Medio interno = líquido extracelular.</p>
              <p>• <strong>Fritsch y Hitzig (1870):</strong> Estimulación en perro conectó áreas cerebrales con músculos.</p>
              <p>• <strong>Luigi Rolando:</strong> Surcos, circunvoluciones y solidificó el cerebro.</p>
              <p>• <strong>Golgi y Cajal (1887):</strong> Neuronas no se tocan, sinapsis bioquímicas.</p>
              <p>• <strong>Sherrington (1906):</strong> Punto de sinapsis y bases de neurología.</p>
              <p>• <strong>Hebb (1949):</strong> Acuña término neuropsicología en su libro.</p>
              <p>• <strong>Marín, Glen y Walker (1982):</strong> Lesión cerebral como disociación entre áreas anatómicas.</p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#d4cbc2]/40 flex justify-end">
          <button 
            className="px-4 py-1.5 bg-[#2b553c] text-white rounded-lg text-xs font-medium hover:bg-[#436d53] transition cursor-pointer"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
