import { Truck, Sun, TrendingUp, Code2, Cable, CheckCircle, ArrowRight, Shield, Clock, Users } from "lucide-react";
import Link from "next/link";
import { Service } from "@/lib/actions/services.action";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Truck, Sun, TrendingUp, Code2, Cable,
};

const serviceAccents = [
  { bg: "bg-blue-50", border: "border-blue-100", icon: "text-blue-600" },
  { bg: "bg-amber-50", border: "border-amber-100", icon: "text-amber-600" },
  { bg: "bg-emerald-50", border: "border-emerald-100", icon: "text-emerald-600" },
  { bg: "bg-violet-50", border: "border-violet-100", icon: "text-violet-600" },
  { bg: "bg-slate-50", border: "border-slate-200", icon: "text-slate-600" },
];

const differentiators = [
  {
    icon: <Shield size={22} className="text-[var(--gold-dark)]" />,
    title: "Proven Track Record",
    description: "150+ successfully completed projects across multiple industries and client sizes.",
  },
  {
    icon: <Users size={22} className="text-[var(--gold-dark)]" />,
    title: "Expert Teams",
    description: "Industry-certified specialists dedicated to every service we offer.",
  },
  {
    icon: <Clock size={22} className="text-[var(--gold-dark)]" />,
    title: "On-Time Delivery",
    description: "We honor every deadline and commitment made to our clients — no exceptions.",
  },
  {
    icon: <CheckCircle size={22} className="text-[var(--gold-dark)]" />,
    title: "End-to-End Support",
    description: "From planning to post-delivery support, we stay with you throughout the project lifecycle.",
  },
];

interface ServicesPageProps {
  services: Service[];
}

export default function ServicesPage({ services }: ServicesPageProps) {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[var(--navy)] pt-32 pb-20">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, rgba(201,168,76,0.15) 0px, rgba(201,168,76,0.15) 1px, transparent 1px, transparent 60px)`,
          }}
        />
        <div className="container-ooh relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-semibold">What We Do</span>
            <span className="h-px w-10 bg-[var(--gold)]" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Five core service divisions. One integrated partner committed to your success.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--surface)] to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-ooh">
          {services.length > 0 ? (
            <div className="space-y-8">
              {services.map((service, i) => {
                const IconComponent = iconMap[service.icon ?? ""] ?? Truck;
                const accent = serviceAccents[i % serviceAccents.length];
                const isEven = i % 2 === 0;

                return (
                  <div
                    key={service._id}
                    className="bg-white rounded-sm border border-slate-100 shadow-sm shadow-slate-200/80 overflow-hidden"
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-5 ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                      {/* Icon side */}
                      <div className={`lg:col-span-1 ${accent.bg} ${accent.border} border-r flex items-center justify-center p-10`}>
                        <div>
                          <div className="w-16 h-16 rounded-sm bg-white/80 border border-white/50 flex items-center justify-center mb-3 mx-auto shadow-sm">
                            <IconComponent size={28} className={accent.icon} />
                          </div>
                          <p className="text-xs text-center text-slate-400 font-medium tracking-wider uppercase">
                            0{i + 1}
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-4 p-8 md:p-10 flex flex-col md:flex-row md:items-start gap-8">
                        <div className="flex-1">
                          <h2 className="font-heading text-2xl font-bold text-[var(--navy)] mb-3">{service.title}</h2>
                          <p className="text-slate-500 leading-relaxed mb-6">{service.shortDescription}</p>
                          {service.features && service.features.length > 0 && (
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {service.features.map((f, fi) => (
                                <li key={fi} className="flex items-center gap-2.5 text-sm text-slate-600">
                                  <CheckCircle size={14} className="text-[var(--gold)] shrink-0" />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <div className="shrink-0">
                          <Link
                            href={`/contact?service=${service.slug.current}`}
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[var(--navy)] gold-gradient rounded-sm hover:opacity-90 transition-all shadow-md shadow-[var(--gold)]/10 whitespace-nowrap"
                          >
                            Get a Quote
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 text-slate-400">
              <p>Add services in Sanity Studio to display them here.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose OOH */}
      <section className="section-padding bg-white">
        <div className="container-ooh">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-semibold">Why OOH</span>
              <span className="h-px w-10 bg-[var(--gold)]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--navy)] mb-3">
              Why Businesses Choose Us
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">We don&apos;t just deliver services — we deliver outcomes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d, i) => (
              <div key={i} className="bg-[var(--surface)] rounded-sm border border-slate-100 p-6">
                <div className="w-12 h-12 rounded-sm bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4">
                  {d.icon}
                </div>
                <h3 className="font-heading font-bold text-[var(--navy)] mb-2">{d.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 bg-[var(--navy)] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(201,168,76,0.15) 40px, rgba(201,168,76,0.15) 41px)`,
          }}
        />
        <div className="container-ooh relative z-10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Tell us what you need and our specialists will craft a solution tailored to your goals and budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-[var(--navy)] gold-gradient rounded-sm hover:opacity-90 transition-all shadow-lg shadow-[var(--gold)]/20"
          >
            Contact Us Today
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
