"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
const slides = [
  {
    id: 1,
    tag: "Infrastructure & Network",
    title: "Building the\nBackbone of Tomorrow",
    subtitle:
      "From enterprise network design to large-scale civil infrastructure — we deliver robust, future-proof solutions that keep your business connected and moving.",
    cta: { label: "Explore Services", href: "/services#infra" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
    accent: "Infra",
    gradient: "from-[#0A0F1E]/80 via-[#141B35]/60 to-[#0A0F1E]/80",
    pattern: "network",
    image: "/assets/images/banner_network.png",
  },
  {
    id: 2,
    tag: "Solar Installation & Services",
    title: "Power Your World\nWith Clean Energy",
    subtitle:
      "Professional solar installation and maintenance services for residential, commercial, and industrial clients. Sustainable energy, maximum efficiency.",
    cta: { label: "Solar Solutions", href: "/services#solar" },
    ctaSecondary: { label: "Get a Quote", href: "/contact" },
    accent: "Solar",
    gradient: "from-[#0D1520]/80 via-[#1A2440]/60 to-[#0D1520]/80",
    pattern: "solar",
    image: "/assets/images/banner_solar.png",
  },
  {
    id: 3,
    tag: "Software & Finance",
    title: "Smart Technology\nfor Smarter Business",
    subtitle:
      "Custom software development and strategic financial consulting — we bridge technology and finance to accelerate your growth and operational excellence.",
    cta: { label: "Our Expertise", href: "/services#software" },
    ctaSecondary: { label: "Meet the Team", href: "/about" },
    accent: "Tech",
    gradient: "from-[#0A0F1E]/80 via-[#0F1A2E]/60 to-[#0A0F1E]/80",
    pattern: "tech",
    image: "/assets/images/banner_sofware.png",
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--navy)]">
      <Image
        src={slide.image}
        alt={slide.tag}
        width={1000}
        height={1000}
        className="object-cover object-center w-full h-screen"
      />
    </section>
  );
};

export default ImageSlider;
