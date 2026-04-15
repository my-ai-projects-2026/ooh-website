"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  MessageCircle,
  Camera,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const footerServices = [
  { label: "Infra & Network", href: "/services#infra" },
  { label: "Solar Installation", href: "/services#solar" },
  { label: "Software Development", href: "/services#software" },
  { label: "Finance Consulting", href: "/services#finance" },
];

const socials = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: MessageCircle, href: "#", label: "Twitter / X" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Briefcase, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white relative overflow-hidden">
      {/* Decorative gold line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[var(--gold)]/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[var(--gold)]/8 blur-3xl" />
      </div>

      <div className="container-ooh py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="48" height="48" rx="6" fill="var(--navy)" />
                  <path d="M8 16 L8 32 M8 24 L16 24 M16 16 L16 32" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M22 24 C22 19.581 25.134 16 29 16 C32.866 16 36 19.581 36 24 C36 28.418 32.866 32 29 32 C25.134 32 22 28.418 22 24Z" stroke="var(--gold)" strokeWidth="3" fill="none"/>
                  <path d="M40 16 L40 32" stroke="var(--gold-light)" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                </svg>
              </div>
              <span className="text-2xl font-heading font-bold text-[var(--gold)]">OOH</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Delivering excellence across infrastructure, solar energy, software solutions, and financial consulting.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-[var(--gold)] hover:border-[var(--gold)]/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-[var(--gold)] uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[var(--gold)] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[var(--gold)] transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-[var(--gold)] uppercase mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[var(--gold)] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[var(--gold)] transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-[var(--gold)] uppercase mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin size={15} className="text-[var(--gold)] mt-0.5 shrink-0" />
                <span>123 Business Tower, Ayala Ave., Makati City, Philippines</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Phone size={15} className="text-[var(--gold)] shrink-0" />
                <a href="tel:+639123456789" className="hover:text-[var(--gold)] transition-colors">+63 912 345 6789</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Mail size={15} className="text-[var(--gold)] shrink-0" />
                <a href="mailto:info@ooh.com.ph" className="hover:text-[var(--gold)] transition-colors">info@ooh.com.ph</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Clock size={15} className="text-[var(--gold)] shrink-0" />
                <span>Mon–Fri: 08:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 relative z-10">
        <div className="container-ooh py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} OOH. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="#" className="text-white/30 text-xs hover:text-[var(--gold)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/30 text-xs hover:text-[var(--gold)] transition-colors">Terms of Service</Link>
            <Link href="#" className="text-white/30 text-xs hover:text-[var(--gold)] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
