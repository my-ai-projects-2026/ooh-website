"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Award, Users, TrendingUp, Zap } from "lucide-react";
import CardClassic from "@/components/shared/cards/card-classic";

const milestones = [
  {
    year: "2013",
    event: "Started as Logistics Service Provider",
  },
  {
    year: "2015",
    event:
      "Expanded into solar energy installation, completing our first 1MW commercial solar farm.",
  },
  {
    year: "2018",
    event:
      "Launched our Software Development division to meet growing digital transformation demands.",
  },
  {
    year: "2020",
    event:
      "Established the Finance Consulting arm to provide holistic business advisory services.",
  },
  {
    year: "2023",
    event:
      "Surpassed 150 completed projects across all four service divisions nationwide.",
  },
  {
    year: "2024",
    event:
      "Expanded operations to international markets and achieved ISO 9001 certification.",
  },
];

const counters = [
  { value: "150+", label: "Projects Completed", icon: Award },
  { value: "80+", label: "Satisfied Clients", icon: Users },
  { value: "12+", label: "Years in Service", icon: TrendingUp },
  { value: "4", label: "Core Divisions", icon: Zap },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    desc: "We deliver nothing short of the highest quality standards in every project we undertake.",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We treat every client as a long-term partner, not just a transaction.",
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "We continuously adopt emerging technologies to provide forward-thinking solutions.",
  },
  {
    icon: Award,
    title: "Integrity",
    desc: "Transparency and honesty form the foundation of every client relationship we build.",
  },
];

const team = [
  {
    name: "Elizabeth Odon",
    role: "Chief Executive Officer",
    initials: "EV",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "Sarah Duterte",
    role: "Chief Operating Officer",
    initials: "MS",
    color: "from-emerald-600 to-teal-700",
  },
  {
    name: "Jose Reyes",
    role: "Head of Infrastructure",
    initials: "JR",
    color: "from-orange-600 to-amber-700",
  },
  {
    name: "Patricia Cruz",
    role: "Finance Director",
    initials: "PC",
    color: "from-purple-600 to-indigo-700",
  },
];

function PageHero({
  title,
  breadcrumb,
}: {
  title: string;
  breadcrumb: string;
}) {
  return (
    <section className="relative min-h-64 flex items-end bg-[var(--navy)] overflow-hidden pt-32 pb-12">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, rgba(201,168,76,0.3) 0%, transparent 60%)",
          }}
        />
      </div>
      <div className="container-ooh relative z-10">
        <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest mb-3">
          <span>Home</span>
          <span>/</span>
          <span className="text-[var(--gold)]">{breadcrumb}</span>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {title}
        </h1>
        <div className="mt-4 h-1 w-16 bg-[var(--gold)] rounded-full" />
      </div>
    </section>
  );
}

export default function AboutContent() {
  const storyRef = useRef(null);
  const countersRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const timelineRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const countersInView = useInView(countersRef, {
    once: true,
    margin: "-80px",
  });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-80px" });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-80px",
  });

  return (
    <>
      <PageHero title="About OOH" breadcrumb="About Us" />

      {/* Who We Are */}
      <section className="section-padding bg-[var(--cream)]">
        <div ref={storyRef} className="container-ooh">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-medium">
                  Our Story
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-[var(--navy)]/70 text-base leading-relaxed">
                <p>
                  Founded in 2013, OOH Delivery Service is a trusted
                  multi-service provider specializing in logistic and
                  telecommunications infrastructure. With roots in trucking and
                  delivery services across Luzon, the company has since expanded
                  into fiber optic installation and OSP (Outside Plant) works
                  for a major telecom vendors. Currently expanding business
                  horizon to solar farm projects. OOH is known for its
                  realiability, technical expertise, and commitment to
                  supporting the country's growing infrastructure and digital
                  connectivity needs.
                </p>
              </div>
            </motion.div>

            {/* Visual Card Stack */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute top-4 left-4 right-4 bottom-4 bg-[var(--gold)]/10 rounded-sm" />
              <div className="relative bg-[var(--navy)] rounded-sm p-10 shadow-2xl shadow-[var(--navy)]/30">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Established", value: "2013" },
                    { label: "Headquarters", value: "Makati, PH" },
                    { label: "ISO Certified", value: "9001:2015" },
                    { label: "Team Members", value: "50+" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="text-[var(--gold)] font-heading font-bold text-2xl">
                        {item.value}
                      </div>
                      <div className="text-white/40 text-xs uppercase tracking-wider mt-1">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/50 text-sm italic">
                    &ldquo;We don&apos;t just deliver projects. We build
                    relationships that last.&rdquo;
                  </p>
                  <p className="text-[var(--gold)] text-xs mt-2 font-medium">
                    — Eduardo Villanueva, CEO
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="py-16 bg-[var(--navy)]">
        <div ref={countersRef} className="container-ooh">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {counters.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={countersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-sm bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} className="text-[var(--gold)]" />
                  </div>
                  <div className="font-heading text-4xl font-bold text-[var(--gold)] mb-1">
                    {item.value}
                  </div>
                  <div className="text-white/40 text-sm">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-ooh">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CardClassic
              icon={<Target size={22} className="text-[var(--navy)]" />}
              title="Our Mission"
              description="To deliver high-quality, innovative, and cost-effective telecom
                and logistics solutions that empower connectivity and
                infrastructure across the Philippines"
              className="border-[var(--navy)]/10"
            />
            <CardClassic
              icon={<Eye size={22} className="text-[var(--navy)]" />}
              title="Our Vission"
              description="To be the leading partner in enabling digital and infrastructure transformation in the Philippines through excellence and integrity"
            />

            <CardClassic
              icon={<Eye size={22} className="text-[var(--gold)]" />}
              title="Value"
              description="Support forward thingking,planning, and execution to expand our horizons. Integrity is the most valued-one 'Malasakit' in everything we do. The company is passionate to provide a high-quality service that we are proud to stand behind. We are also committed to grow and prosper to affect our customer's quality of life and the life of every member of the company "
              className="bg-[var(--navy)]"
              textClass="text-white"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-[var(--cream)]">
        <div ref={valuesRef} className="container-ooh">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-medium">
                What Drives Us
              </span>
              <span className="h-px w-10 bg-[var(--gold)]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--navy)]">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="bg-white px-6 py-8 rounded-sm shadow-sm shadow-[var(--navy)]/5 hover-lift border border-[var(--navy)]/5"
                >
                  <div className="w-11 h-11 rounded-sm gold-gradient flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[var(--navy)]" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-[var(--navy)] mb-2">
                    {val.title}
                  </h4>
                  <p className="text-[var(--navy)]/55 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[var(--navy)]">
        <div ref={timelineRef} className="container-ooh">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-medium">
                Our Journey
              </span>
              <span className="h-px w-10 bg-[var(--gold)]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Company Milestones
            </h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--gold)]/60 via-[var(--gold)]/20 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-6 pl-16 relative"
                >
                  <div className="absolute left-5 top-1 w-6 h-6 rounded-full border-2 border-[var(--gold)] bg-[var(--navy)] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                  </div>
                  <div>
                    <span className="text-[var(--gold)] font-heading font-bold text-sm">
                      {m.year}
                    </span>
                    <p className="text-white/60 text-sm mt-1 leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div ref={teamRef} className="container-ooh">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-medium">
                Our Team
              </span>
              <span className="h-px w-10 bg-[var(--gold)]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--navy)]">
              Meet the Leaders
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="text-center group"
              >
                <div
                  className={`w-24 h-24 mx-auto rounded-sm bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-2xl font-heading mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg`}
                >
                  {member.initials}
                </div>
                <h4 className="font-heading font-semibold text-[var(--navy)] text-lg">
                  {member.name}
                </h4>
                <p className="text-[var(--navy)]/45 text-sm mt-1">
                  {member.role}
                </p>
                <div className="mt-3 h-0.5 w-0 group-hover:w-12 bg-[var(--gold)] mx-auto transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
