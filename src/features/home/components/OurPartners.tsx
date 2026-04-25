"use client";

import Image from "next/image";
import Link from "next/link";
import { Partner } from "@/lib/actions/partner.action";

const PartnerCard = ({ partner }: { partner: Partner }) => {
  const card = (
    <div className="group relative flex flex-col items-center justify-center gap-3 w-44 h-28 shrink-0 rounded-sm border border-navy/10 bg-white px-4 py-4 shadow-sm hover:border-gold/60 hover:shadow-md transition-all duration-300 cursor-pointer">
      {/* Gold corner accent */}
      <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/30 rounded-tl-sm group-hover:border-gold transition-colors" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/30 rounded-br-sm group-hover:border-gold transition-colors" />

      {partner.logoUrl ? (
        <div className="relative w-full h-full">
          <Image
            src={partner.logoUrl}
            alt={partner.name}
            fill
            className="object-contain filter group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-300"
            sizes="160px"
          />
        </div>
      ) : (
        <span className="text-navy/40 text-sm font-semibold text-center leading-tight group-hover:text-navy transition-colors">
          {partner.name}
        </span>
      )}
    </div>
  );

  return partner.website ? (
    <Link href={partner.website} target="_blank" rel="noopener noreferrer">
      {card}
    </Link>
  ) : (
    card
  );
};

const OurPartners = ({ partners }: { partners: Partner[] }) => {
  if (partners.length === 0) return null;

  return (
    <section className="py-20 bg-cream relative overflow-hidden wow-grid">

      {/* Left / right fade masks */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 bg-linear-to-r from-cream to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 bg-linear-to-l from-cream to-transparent pointer-events-none" />

      <div className="container-ooh relative z-10 mb-12">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">
            Trusted By
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
          Our Partners
        </h2>
        <p className="mt-3 text-navy/50 text-sm max-w-xl">
          We collaborate with industry-leading organisations to deliver exceptional results.
        </p>
      </div>

      {/* Marquee strip — two identical tracks so the loop is seamless */}
      <div className="flex overflow-hidden">
        <div className="flex gap-5 pr-5 shrink-0 animate-marquee">
          {partners.map((partner, i) => (
            <PartnerCard key={`a-${i}`} partner={partner} />
          ))}
        </div>
        <div className="flex gap-5 pr-5 shrink-0 animate-marquee" aria-hidden>
          {partners.map((partner, i) => (
            <PartnerCard key={`b-${i}`} partner={partner} />
          ))}
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/60 to-transparent" />
    </section>
  );
};

export default OurPartners;
