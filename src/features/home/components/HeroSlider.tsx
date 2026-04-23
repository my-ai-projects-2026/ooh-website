"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { HeroSlide } from "@/lib/actions/home.action";

interface HeroSliderProps {
  slides: HeroSlide[];
}

const HeroSlider = ({ slides }: HeroSliderProps) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, slides.length]);

  if (slides.length === 0) {
    return (
      <section className="relative w-full h-screen min-h-[600px] bg-[var(--navy)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-5xl font-bold text-white mb-4">Welcome to OOH</h1>
          <p className="text-white/50">Add hero slides in Sanity Studio to get started.</p>
        </div>
      </section>
    );
  }

  const slide = slides[current];

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background images — one per slide, shown/hidden via opacity */}
      {slides.map((s, i) => (
        <div
          key={s._id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: i === current ? 1 : 0,
            backgroundImage: s.image?.asset?.url
              ? `url('${s.image.asset.url}')`
              : "linear-gradient(135deg, #1E3A5F 0%, #152D4A 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0F172A]/55" />

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-ooh w-full">
          <div className="max-w-3xl">
            {/* Tag */}
            {slide.tag && (
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-px w-8 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase">
                  {slide.tag}
                </span>
              </div>
            )}

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              {slide.title}
            </h1>

            {/* Subtitle */}
            {slide.subtitle && (
              <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
                {slide.subtitle}
              </p>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              {slide.ctaLabel && slide.ctaHref && (
                <Link
                  href={slide.ctaHref}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[var(--navy)] gold-gradient rounded-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-[var(--gold)]/20"
                >
                  {slide.ctaLabel}
                  <ArrowRight size={15} />
                </Link>
              )}
              {slide.ctaSecondaryLabel && slide.ctaSecondaryHref && (
                <Link
                  href={slide.ctaSecondaryHref}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white border border-white/30 rounded-sm hover:bg-white/10 transition-all duration-300"
                >
                  {slide.ctaSecondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 hover:border-white/50 transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 hover:border-white/50 transition-all"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-8 h-2.5 bg-[var(--gold)]" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-6 md:right-12 z-20 text-white/40 text-xs font-medium tracking-wider">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
};

export default HeroSlider;
