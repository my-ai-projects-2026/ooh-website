"use client";

import Link from "next/link";
import { Network, Sun, Code2, TrendingUp, Truck, Cable, ArrowRight } from "lucide-react";
import { Service } from "@/lib/actions/services.action";
import { iconMap } from "@/lib/utils";


const serviceAccents = [
  { accentColor: "bg-sky-50 border-sky-100", iconColor: "text-sky-600 bg-sky-100" },
  { accentColor: "bg-amber-50 border-amber-100", iconColor: "text-amber-600 bg-amber-100" },
  { accentColor: "bg-emerald-50 border-emerald-100", iconColor: "text-emerald-600 bg-emerald-100" },
  { accentColor: "bg-violet-50 border-violet-100", iconColor: "text-violet-600 bg-violet-100" },
  { accentColor: "bg-orange-50 border-orange-100", iconColor: "text-orange-600 bg-orange-100" },
];

interface ServiceComponentProps {
  services: Service[];
}

const ServiceComponent = ({ services }: ServiceComponentProps) => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
      </div>

      <div className="container-ooh relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-semibold">What We Do</span>
            <span className="h-px w-10 bg-[var(--gold)]" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-4">
            Our Core Services
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
            OOH delivers five specialised service divisions under one trusted brand — bringing multi-disciplinary expertise
            to every client engagement.
          </p>
        </div>

        {services.length > 0 ? (
          <>
            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => {
                console.log("Rendering service:", service.icon);
                const Icon = iconMap[service.icon ?? ""] ?? Network;
                const accent = serviceAccents[i % serviceAccents.length];
                const slug = service.slug?.current ?? service._id;

                return (
                  <Link
                    key={service._id}
                    href={`/services#${slug}`}
                    className={`group block p-7 rounded-sm border ${accent.accentColor} hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/80 cursor-pointer`}
                  >
                    <div className={`w-12 h-12 rounded-sm ${accent.iconColor} flex items-center justify-center mb-5`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--navy)] mb-3 group-hover:text-[var(--gold-dark)] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-[var(--gold-dark)] text-sm font-medium">
                      <span>Learn More</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[var(--navy)] rounded-sm hover:bg-[var(--navy-dark)] transition-all duration-300 shadow-md shadow-[var(--navy)]/20"
              >
                View All Services
                <ArrowRight size={15} />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12 text-slate-400">
            <p>Add services in Sanity Studio to display them here.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceComponent;
