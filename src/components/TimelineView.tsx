import React, { useState } from 'react';
import { timelineMilestones } from '../data/neuroData';
import { Bookmark, TriangleAlert, CheckCheck, Bolt, Award, PenTool } from 'lucide-react';

interface TimelineViewProps {
  searchQuery?: string;
}

export const TimelineView: React.FC<TimelineViewProps> = ({ searchQuery = '' }) => {
  const [filter, setFilter] = useState<'all' | 'antigua' | 'moderna'>('all');

  const filteredMilestones = timelineMilestones.filter(item => {
    const matchesFilter = filter === 'all' || item.category === filter;
    if (!matchesFilter) return false;
    if (!searchQuery.trim()) return true;
    const clean = searchQuery.toLowerCase().trim();
    return (
      item.title.toLowerCase().includes(clean) ||
      item.description.toLowerCase().includes(clean) ||
      item.location.toLowerCase().includes(clean) ||
      item.badge.toLowerCase().includes(clean)
    );
  });

  return (
    <section id="view-timeline" className="block">
      {/* Intro */}
      <div className="mb-6 bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2]/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#292420]">
            Línea de Tiempo
          </h2>
          <p className="text-xs sm:text-sm text-[#49423c] mt-0.5">
            Cronología de autores, ideas y descubrimientos desde la antigüedad hasta la era moderna.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
              filter === 'all'
                ? 'bg-[#2b553c] text-white'
                : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'
            }`}
          >
            Todos ({timelineMilestones.length})
          </button>
          <button
            onClick={() => setFilter('antigua')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
              filter === 'antigua'
                ? 'bg-[#2b553c] text-white'
                : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'
            }`}
          >
            Antigüedad
          </button>
          <button
            onClick={() => setFilter('moderna')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
              filter === 'moderna'
                ? 'bg-[#2b553c] text-white'
                : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'
            }`}
          >
            S.XVIII - XX
          </button>
        </div>
      </div>

      {/* Debate: Platón vs Aristóteles */}
      <div className="mb-6 bg-white border border-[#d4cbc2] rounded-xl p-4">
        <h3 className="text-base font-bold text-[#292420] mb-2">
          Debate: Platón vs. Aristóteles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          {/* Platón */}
          <div className="p-3 rounded-lg bg-[#faf6f0] border border-[#ebd8c3]">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-[#2b553c] text-sm">
                Platón
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-[#2b553c]/10 text-[#2b553c]">
                Cerebro
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#49423c] leading-relaxed">
              Consideró al cerebro como un <strong>receptor divino</strong> al estar <strong>más cerca del cielo</strong>.
            </p>
          </div>

          {/* Aristóteles */}
          <div className="p-3 rounded-lg bg-[#fcf2ed] border border-[#f5c7b3]">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-[#944920] text-sm">
                Aristóteles
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-[#944920]/15 text-[#944920]">
                Corazón
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#49423c] leading-relaxed">
              Afirmó que el <strong>corazón era el asiento del alma</strong> y el <strong>cerebro servía para enfriar la sangre</strong>.
            </p>
          </div>
        </div>

        <div className="mt-3 p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-950 flex items-start gap-2">
          <TriangleAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span>
            <strong>Nota:</strong> Alcmeón de Crotona (500 A.C.) propuso el cerebro como asiento del alma anticipándose a este debate.
          </span>
        </div>
      </div>

      {/* Timeline Milestones list */}
      <div className="relative border-l-2 border-[#d4cbc2]/60 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8 my-6">
        {filteredMilestones.map((item) => (
          <article key={item.id} className="timeline-item relative group">
            {/* Step Number Dot */}
            <div
              className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-white border-2 flex items-center justify-center text-[10px] font-bold shadow-xs ${
                item.highlightColor ? 'border-[#944920] text-[#944920]' : 'border-[#2b553c] text-[#2b553c]'
              }`}
            >
              {item.number}
            </div>

            {/* Content card */}
            <div className="bg-white p-5 rounded-xl border border-[#d4cbc2] shadow-xs transition hover:shadow-card-lift">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#944920] uppercase tracking-wider font-sans">
                  {item.year} • {item.location}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#f5efe9] text-[#49423c] font-medium font-sans">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-lg font-serif font-bold text-[#292420] mt-1">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#231f1c] leading-relaxed mt-2 font-sans">
                {item.description}
              </p>

              {item.examNote && (
                <div className="mt-3 p-2.5 bg-[#fbf8f5] rounded-lg border border-[#d4cbc2]/40 text-xs text-[#49423c]">
                  <span className="font-bold text-[#2b553c] mr-1 inline-flex items-center gap-1">
                    <Bookmark className="w-3 h-3 text-[#2b553c]" />
                    Dato clave:
                  </span>{' '}
                  {item.examNote}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
