"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target, Eye, Award, Users, Truck, Sun, TrendingUp, Code2, Cable,
  CheckCircle, Shield, Zap, Star, Globe, Handshake, BicepsFlexed, Blocks, HandPlatter, ArrowRight,
} from "lucide-react";
import { PortableText } from "@portabletext/react";
import { TeamMember, Milestone, BusinessAbout, CoreValue } from "@/lib/actions/about.action";
import { Service } from "@/lib/actions/services.action";
import { iconMap } from "@/lib/utils";

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
  Handshake, BicepsFlexed, Blocks, HandPlatter,
};

function CoreValueIcon({ name }: { name?: string }) {
  const Icon = (name && coreValueIconMap[name]) ? coreValueIconMap[name] : Award;
  return <Icon size={19} className="text-[var(--gold)]" />;
}

function FadeIn({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutContent({ teamMembers, milestones, businessAbout, services }: AboutContentProps) {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[62vh] flex items-center bg-[var(--navy)] pt-28 pb-24 overflow-hidden">
        {/* Animated moving grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -inset-20"
            style={{
              backgroundImage: `linear-gradient(rgba(201,168,76,0.12) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(201,168,76,0.12) 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
            animate={{ x: [0, 64], y: [0, 64] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          {/* Gold glow orbs */}
          <motion.div
            className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 65%)" }}
            animate={{ x: [0, 70, 0], y: [0, 50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 65%)" }}
            animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          />
        </div>

        <div className="container-ooh relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-12 bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xs tracking-[0.22em] uppercase font-semibold">About OOH</span>
              <span className="h-px w-12 bg-[var(--gold)]" />
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Who We Are
            </h1>
            {businessAbout?.tagline && (
              <p className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                {businessAbout.tagline}
              </p>
            )}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[var(--surface)] to-transparent" />
      </section>

      {/* ── Stats ──────────────────────────────────────────────── */}
      {businessAbout?.stats && businessAbout.stats.length > 0 && (
        <section className="relative bg-[var(--navy)] overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(201,168,76,1) 1px, transparent 1px)`,
              backgroundSize: "36px 36px",
            }}
          />
          <div className="container-ooh relative z-10">
            <div className="border-t border-white/10 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
              {businessAbout.stats.map((stat, i) => (
                <FadeIn key={i} delay={i * 0.1} className="text-center md:px-10">
                  <p className="text-4xl md:text-5xl font-bold text-[var(--gold)] font-heading leading-none">{stat.value}</p>
                  <p className="text-white/40 text-xs mt-2 uppercase tracking-[0.18em]">{stat.label}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Introduction ──────────────────────────────────────── */}
      {businessAbout?.introduction && businessAbout.introduction.length > 0 && (
        <section className="section-padding bg-[var(--surface)]">
          <div className="container-ooh max-w-4xl">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-semibold">Introduction</span>
              </div>
              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:text-[var(--navy)] prose-a:text-[var(--gold)] prose-p:text-slate-600 prose-p:leading-relaxed">
                <PortableText value={businessAbout.introduction} />
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── History ──────────────────────────────────────────── */}
      {businessAbout?.history && businessAbout.history.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-ooh max-w-4xl">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-semibold">Our History</span>
              </div>
              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:text-[var(--navy)] prose-a:text-[var(--gold)] prose-p:text-slate-600 prose-p:leading-relaxed">
                <PortableText value={businessAbout.history} />
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Background ──────────────────────────────────────────── */}
      {businessAbout?.background && businessAbout.background.length > 0 && (
        <section className="section-padding bg-[var(--surface)]">
          <div className="container-ooh max-w-4xl">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-semibold">Background</span>
              </div>
              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:text-[var(--navy)] prose-a:text-[var(--gold)] prose-p:text-slate-600 prose-p:leading-relaxed">
                <PortableText value={businessAbout.background} />
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Mission / Vision / Values ─────────────────────────── */}
      <section className="section-padding relative overflow-hidden bg-[var(--navy)]">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.038]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(201,168,76,1) 1px, transparent 1px)`,
            backgroundSize: "44px 44px",
          }}
        />
        <div className="container-ooh relative z-10">
          <FadeIn className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase font-semibold">Our Foundation</span>
              <span className="h-px w-10 bg-[var(--gold)]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Mission, Vision & Values</h2>
            <p className="text-white/40 max-w-lg mx-auto mt-3">The principles that guide every decision we make.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {businessAbout?.mission && (
              <FadeIn delay={0.1}>
                <div className="group h-full border border-white/10 hover:border-[var(--gold)]/35 rounded-xl p-8 transition-all duration-300 hover:bg-white/[0.04]">
                  <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-5 group-hover:bg-[var(--gold)]/20 transition-colors duration-300">
                    <Target size={19} className="text-[var(--gold)]" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">Our Mission</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{businessAbout.mission}</p>
                </div>
              </FadeIn>
            )}
            {businessAbout?.vision && (
              <FadeIn delay={0.2}>
                <div className="group h-full border border-white/10 hover:border-[var(--gold)]/35 rounded-xl p-8 transition-all duration-300 hover:bg-white/[0.04]">
                  <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-5 group-hover:bg-[var(--gold)]/20 transition-colors duration-300">
                    <Eye size={19} className="text-[var(--gold)]" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">Our Vision</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{businessAbout.vision}</p>
                </div>
              </FadeIn>
            )}
            {businessAbout?.values && (
              <FadeIn delay={0.3}>
                <div className="group h-full border border-white/10 hover:border-[var(--gold)]/35 rounded-xl p-8 transition-all duration-300 hover:bg-white/[0.04]">
                  <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-5 group-hover:bg-[var(--gold)]/20 transition-colors duration-300">
                    <Award size={19} className="text-[var(--gold)]" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">Our Values</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{businessAbout.values}</p>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* ── Core Values ───────────────────────────────────────── */}
      {businessAbout?.coreValues && businessAbout.coreValues.length > 0 && (
        <section className="section-padding bg-[var(--surface)]">
          <div className="container-ooh">
            <FadeIn className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-10 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-semibold">Core Values</span>
                <span className="h-px w-10 bg-[var(--gold)]" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--navy)]">What We Stand For</h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {businessAbout.coreValues.map((v: CoreValue, i: number) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="group bg-white rounded-xl border border-slate-100 p-6 hover:border-[var(--gold)]/25 hover:shadow-xl hover:shadow-[var(--gold)]/5 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-11 h-11 rounded-lg bg-[var(--navy)]/5 group-hover:bg-[var(--gold)]/10 border border-slate-100 group-hover:border-[var(--gold)]/20 flex items-center justify-center mb-4 transition-all duration-300">
                      <CoreValueIcon name={v.icon} />
                    </div>
                    <h3 className="font-heading font-bold text-[var(--navy)] mb-2">{v.title}</h3>
                    {v.description && <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Team ──────────────────────────────────────────────── */}
      {teamMembers.length > 0 && (
        <section className="section-padding bg-[var(--surface)]">
          <div className="container-ooh">
            <FadeIn className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-10 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-semibold">Our People</span>
                <span className="h-px w-10 bg-[var(--gold)]" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--navy)]">Meet the Team</h2>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {teamMembers.map((member, i) => (
                <FadeIn key={member._id} delay={i * 0.06}>
                  <div className="group bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1.5 transition-all duration-300">
                    <div className="relative h-80 bg-gradient-to-br from-[var(--navy)] to-[var(--navy-dark)] overflow-hidden">
                      {member.photo?.asset?.url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={member.photo.asset.url} alt={member.name} className="w-full h-full object-cover   group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-5xl font-bold text-white/15 font-heading select-none">
                            {member.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-[var(--navy)] text-sm">{member.name}</h3>
                      <p className="text-[var(--gold-dark)] text-xs font-medium tracking-wide uppercase mt-0.5">{member.position}</p>
                      {member.department && <p className="text-slate-400 text-xs mt-0.5">{member.department}</p>}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Timeline ──────────────────────────────────────────── */}
      {milestones.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-ooh">
            <FadeIn className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-10 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-semibold">Our Journey</span>
                <span className="h-px w-10 bg-[var(--gold)]" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--navy)]">Milestones That Define Us</h2>
              <p className="text-slate-500 max-w-lg mx-auto mt-3">A decade of growth, expansion, and delivering value.</p>
            </FadeIn>
            <div className="relative max-w-2xl mx-auto pl-14">
              {/* Vertical line */}
              <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--gold)]/60 via-[var(--gold)]/20 to-transparent" />
              <div className="space-y-7">
                {milestones.map((m, i) => (
                  <FadeIn key={m._id} delay={i * 0.07}>
                    <div className="relative">
                      {/* Dot */}
                      <div className="absolute -left-[37px] top-4 w-4 h-4 rounded-full bg-white border-2 border-[var(--gold)] z-10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                      </div>
                      <div className="bg-[var(--surface)] rounded-xl border border-slate-100 p-5 hover:border-[var(--gold)]/20 hover:shadow-md transition-all duration-300">
                        <span className="inline-block text-[var(--gold)] text-xs font-bold tracking-widest uppercase bg-[var(--gold)]/8 px-2.5 py-0.5 rounded-full mb-2">{m.year}</span>
                        <h3 className="font-heading font-semibold text-[var(--navy)] mb-1">{m.title}</h3>
                        {m.description && <p className="text-slate-500 text-sm leading-relaxed">{m.description}</p>}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      

      {/* ── Services Overview ─────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden bg-[var(--navy)]">
        {/* Slow-drifting grid */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -inset-20"
            style={{
              backgroundImage: `linear-gradient(rgba(201,168,76,0.07) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(201,168,76,0.07) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
            animate={{ x: [0, 80], y: [0, -80] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="container-ooh relative z-10">
          <FadeIn className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">Our Services</h2>
            <p className="text-white/45 max-w-lg mx-auto">Five industries, one integrated partner.</p>
          </FadeIn>
          {services.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s, i) => {
                const IconComponent = iconMap[s.icon ?? ""] ?? Truck;
                return (
                  <FadeIn key={s._id} delay={i * 0.07}>
                    <div className="group border border-white/10 hover:border-[var(--gold)]/30 rounded-xl p-6 hover:bg-white/[0.04] transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4 group-hover:bg-[var(--gold)]/20 transition-colors duration-300">
                        <IconComponent size={17} className="text-[var(--gold)]" />
                      </div>
                      <h3 className="font-heading font-semibold text-white mb-2">{s.title}</h3>
                      {s.shortDescription && <p className="text-white/45 text-sm leading-relaxed">{s.shortDescription}</p>}
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          )}
          <FadeIn className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[var(--navy)] gold-gradient rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-[var(--gold)]/20"
            >
              Explore All Services <ArrowRight size={14} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-[var(--surface)] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `radial-gradient(ellipse 60% 50% at 50% 110%, rgba(201,168,76,0.07), transparent)` }}
        />
        <div className="container-ooh text-center relative z-10">
          <FadeIn>
            <div className="flex items-center justify-center gap-2 mb-5">
              <CheckCircle size={17} className="text-[var(--gold)]" />
              <span className="text-[var(--gold)] text-sm font-semibold">Ready to Work With Us?</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
              Let&apos;s Build Your Next Project
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto mb-9 leading-relaxed">
              Whether you need delivery logistics, solar energy, financial guidance, digital products, or network infrastructure — we&apos;re ready to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-[var(--navy)] gold-gradient rounded-lg hover:opacity-90 transition-opacity shadow-xl shadow-[var(--gold)]/20"
            >
              Get a Free Consultation <ArrowRight size={15} />
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
