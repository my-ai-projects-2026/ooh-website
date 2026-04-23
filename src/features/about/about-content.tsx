import { Target, Eye, Award, Users, Truck, Sun, TrendingUp, Code2, Cable, CheckCircle, Shield, Zap, Star, Globe } from "lucide-react";
import CardClassic from "@/components/shared/cards/card-classic";
import { TeamMember, Milestone, BusinessAbout, CoreValue } from "@/lib/actions/about.action";
import { Service } from "@/lib/actions/services.action";

interface AboutContentProps {
  teamMembers: TeamMember[];
  milestones: Milestone[];
  businessAbout: BusinessAbout | null;
  services: Service[];
}

const serviceIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Truck, Sun, TrendingUp, Code2, Cable,
};

const coreValueIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Award, Users, Target, Eye, Shield, Zap, Star, Globe, CheckCircle, TrendingUp,
};

function CoreValueIcon({ name }: { name?: string }) {
  const Icon = (name && coreValueIconMap[name]) ? coreValueIconMap[name] : Award;
  return <Icon size={22} className="text-[var(--gold-dark)]" />;
}

export default function AboutContent({ teamMembers, milestones, businessAbout, services }: AboutContentProps) {

  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[var(--navy)] pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, rgba(201,168,76,0.15) 0px, rgba(201,168,76,0.15) 1px, transparent 1px, transparent 60px)`,
            }}
          />
        </div>
        <div className="container-ooh relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-semibold">About OOH</span>
            <span className="h-px w-10 bg-[var(--gold)]" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Who We Are
          </h1>
          {businessAbout?.tagline && (
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              {businessAbout.tagline}
            </p>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--surface)] to-transparent" />
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-ooh">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-semibold">Our Story</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
                A Multi-Service Enterprise Built on Trust
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                OOH started as a logistics company in 2013, driven by a simple idea: businesses deserve a partner they can trust. Over the years, we expanded into solar energy, finance consulting, digital development, and network infrastructure — driven by our clients&apos; evolving needs.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Today, we are a fully integrated multi-service company serving clients across the Philippines, delivering measurable results in every industry we operate in.
              </p>
            </div>

            {/* Stats Card */}
            {businessAbout?.stats && businessAbout.stats.length > 0 && (
              <div className="bg-white rounded-sm shadow-lg shadow-slate-200/80 border border-slate-100 p-8">
                <h3 className="font-heading text-lg font-semibold text-[var(--navy)] mb-6">OOH at a Glance</h3>
                <div className="grid grid-cols-2 gap-6">
                  {businessAbout.stats.map((stat, i) => (
                    <div key={i} className="border-l-2 border-[var(--gold)]/30 pl-4">
                      <p className="text-3xl font-bold text-[var(--gold)] font-heading">{stat.value}</p>
                      <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-padding bg-white">
        <div className="container-ooh">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--navy)] mb-3">
              Mission, Vision & Values
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">The principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessAbout?.mission && (
              <CardClassic
                icon={<Target size={22} className="text-[var(--gold-dark)]" />}
                title="Our Mission"
                description={businessAbout.mission}
                className="bg-[var(--surface)] border-slate-100"
              />
            )}
            {businessAbout?.vision && (
              <CardClassic
                icon={<Eye size={22} className="text-[var(--gold-dark)]" />}
                title="Our Vision"
                description={businessAbout.vision}
                className="bg-[var(--surface)] border-slate-100"
              />
            )}
              {businessAbout?.values && (
              <CardClassic
                icon={<Eye size={22} className="text-[var(--gold-dark)]" />}
                title="Our Values"
                description={businessAbout.values}
                className="bg-[var(--surface)] border-slate-100"
              />
            )}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-ooh">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-semibold">Core Values</span>
              <span className="h-px w-10 bg-[var(--gold)]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--navy)]">What We Stand For</h2>
          </div>
          {businessAbout?.coreValues && businessAbout.coreValues.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessAbout.coreValues.map((v: CoreValue, i: number) => (
                <div key={i} className="bg-white rounded-sm border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-sm bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4">
                    <CoreValueIcon name={v.icon} />
                  </div>
                  <h3 className="font-heading font-bold text-[var(--navy)] mb-2">{v.title}</h3>
                  {v.description && <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-ooh">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--navy)] mb-3">Our Journey</h2>
            <p className="text-slate-500 max-w-lg mx-auto">A decade of growth, expansion, and delivering value.</p>
          </div>
            {milestones.length > 0 && (
            <div className="relative max-w-3xl mx-auto">
            {/* Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--gold)]/20" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m._id} className="flex gap-8 pl-2 relative">
                  <div className="w-10 h-10 rounded-full bg-[var(--navy)] border-4 border-[var(--gold)]/30 flex items-center justify-center shrink-0 z-10 text-white text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="bg-[var(--surface)] rounded-sm border border-slate-100 p-5 flex-1 shadow-sm">
                    <span className="text-[var(--gold)] text-xs font-bold tracking-widest uppercase">{m.year}</span>
                    <h3 className="font-heading font-semibold text-[var(--navy)] mt-1 mb-1.5">{m.title}</h3>
                    {m.description && <p className="text-slate-500 text-sm leading-relaxed">{m.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
            )}
        </div>
      </section>

      {/* Team */}
      {teamMembers.length > 0 && (
        <section className="section-padding bg-[var(--surface)]">
          <div className="container-ooh">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-10 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-semibold">Our People</span>
                <span className="h-px w-10 bg-[var(--gold)]" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--navy)]">Meet the Team</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div key={member._id} className="bg-white rounded-sm border border-slate-100 shadow-sm overflow-hidden text-center">
                  <div className="h-40 bg-[var(--navy)]/5 flex items-center justify-center">
                    {member.photo?.asset?.url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={member.photo.asset.url} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-[var(--navy)] flex items-center justify-center text-white font-bold text-2xl font-heading">
                        {member.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-[var(--navy)]">{member.name}</h3>
                    <p className="text-[var(--gold-dark)] text-xs font-medium tracking-wide uppercase mt-1">{member.position}</p>
                    {member.department && <p className="text-slate-400 text-xs mt-0.5">{member.department}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Overview */}
      <section className="section-padding bg-[var(--navy)]">
        <div className="container-ooh">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">Our Services</h2>
            <p className="text-white/60 max-w-lg mx-auto">Five industries, one integrated partner.</p>
          </div>
          {services.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const IconComponent = serviceIconMap[s.icon ?? ""] ?? Truck;
              return (
                <div key={s._id} className={`bg-white/5 border rounded-sm p-6 ${i === 0 ? "border-[var(--gold)]/30" : "border-white/10"}`}>
                  <div className="w-10 h-10 rounded-sm bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4">
                    <IconComponent size={18} className="text-[var(--gold)]" />
                  </div>
                  <h3 className="font-heading font-semibold text-white mb-2">{s.title}</h3>
                  {s.shortDescription && <p className="text-white/50 text-sm leading-relaxed">{s.shortDescription}</p>}
                </div>
              );
            })}
          </div>
          )}
          <div className="text-center mt-10">
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[var(--navy)] gold-gradient rounded-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-[var(--gold)]/20"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[var(--surface)]">
        <div className="container-ooh text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <CheckCircle size={18} className="text-[var(--gold)]" />
            <span className="text-[var(--gold)] text-sm font-semibold">Ready to Work With Us?</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
            Let&apos;s Build Your Next Project
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-8">
            Whether you need delivery logistics, solar energy, financial guidance, digital products, or network infrastructure — we&apos;re ready to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-[var(--navy)] gold-gradient rounded-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-[var(--gold)]/20"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}
