"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Testimonial } from "@/lib/actions/testimonials.action";

const avatarColors = [
  "bg-[#1E3A5F]",
  "bg-[#2E5280]",
  "bg-[#A88530]",
  "bg-[#152D4A]",
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);

  if (!testimonials || testimonials.length === 0) return null;

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="section-padding bg-[var(--surface)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
      </div>

      <div className="container-ooh relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-semibold">Client Stories</span>
            <span className="h-px w-10 bg-[var(--gold)]" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 text-base max-w-md mx-auto">
            Trusted by businesses across industries for quality, reliability, and measurable results.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-sm shadow-lg shadow-slate-200/80 border border-slate-100 p-8 md:p-12 relative overflow-hidden">
            {/* Background quote icon */}
            <div className="absolute top-6 right-6 text-[var(--gold)]/10">
              <Quote size={100} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-[var(--gold)] text-[var(--gold)]" />
              ))}
            </div>

            {/* Service tag */}
            {t.serviceTag && (
              <span className="inline-block text-xs font-semibold text-[var(--gold-dark)] border border-[var(--gold)]/25 bg-[var(--gold)]/8 px-3 py-1 rounded-full mb-5">
                {t.serviceTag}
              </span>
            )}

            {/* Quote text */}
            <blockquote className="font-heading text-xl md:text-2xl text-[var(--navy)] font-medium leading-relaxed mb-8 italic">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              {t.avatar?.asset?.url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={t.avatar.asset.url}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
              ) : (
                <div
                  className={`w-14 h-14 rounded-full ${avatarColors[testimonials.indexOf(t) % avatarColors.length]} flex items-center justify-center text-white font-bold text-base`}
                >
                  {getInitials(t.name)}
                </div>
              )}
              <div>
                <p className="font-semibold text-[var(--navy)]">{t.name}</p>
                <p className="text-slate-500 text-sm mt-0.5">
                  {t.position}{t.company ? `, ${t.company}` : ""}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 h-2.5 bg-[var(--gold)]"
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-[var(--gold)]/50"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-11 h-11 rounded-sm border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[var(--navy)] hover:border-slate-400 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="w-11 h-11 rounded-sm border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Client logos row */}
        <div className="mt-16 pt-10 border-t border-slate-200 flex flex-wrap items-center justify-center gap-10">
          {["MegaBuild Corporation", "SunRise Properties", "FinLink Solutions", "Apex Industries", "TechGrow Inc."].map(
            (name) => (
              <span
                key={name}
                className="text-slate-300 font-heading font-semibold text-sm tracking-wide hover:text-slate-400 transition-colors cursor-default"
              >
                {name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
