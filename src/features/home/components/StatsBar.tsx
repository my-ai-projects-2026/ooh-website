"use client";

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="bg-[var(--navy)] border-y border-[var(--navy-dark)] py-10">
      <div className="container-ooh">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-4">
              <div className="font-heading text-3xl md:text-4xl font-bold text-[var(--gold)] mb-1">
                {stat.value}
              </div>
              <div className="text-white/50 text-xs tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
