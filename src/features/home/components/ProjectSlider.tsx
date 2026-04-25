"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Project } from "@/lib/actions/projects.action";

const ProjectSlider = ({ projects }: { projects: Project[] }) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % projects.length),
    [projects.length]
  );
  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + projects.length) % projects.length),
    [projects.length]
  );

  useEffect(() => {
    if (projects.length === 0) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, projects.length]);

  if (projects.length === 0) return null;

  const project = projects[current];

  return (
    <section className="py-20 bg-navy">
      <div className="container-ooh">
        {/* Section heading */}
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">
            Our Work
          </span>
        </div>
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Featured Projects
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="w-10 h-10 rounded-sm border border-white/20 flex items-center justify-center text-white/70 hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-white/40 text-sm tabular-nums">
              {current + 1} / {projects.length}
            </span>
            <button
              onClick={next}
              aria-label="Next project"
              className="w-10 h-10 rounded-sm border border-white/20 flex items-center justify-center text-white/70 hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Slide card */}
        <div className="grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-white/10">
          {/* Image */}
          <div className="relative aspect-4/3 lg:aspect-auto lg:min-h-105 bg-navy-dark">
            {project.imageUrl ? (
              <Image
                key={project.slug}
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 bg-linear-to-br from-navy-light to-navy-dark" />
            )}
            {/* Gold bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-gold to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-8 sm:p-10 bg-navy-dark">
            {/* Title */}
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between gap-4 pt-6 border-t border-white/10">
              {project.link && (
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all"
                >
                  View Project <ArrowRight size={15} />
                </Link>
              )}

              {/* Dot indicators */}
              <div className="flex gap-1.5 ml-auto">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to project ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 bg-gold"
                        : "w-1.5 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
