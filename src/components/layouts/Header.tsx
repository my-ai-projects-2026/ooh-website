"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[var(--cream)] border-b border-[var(--gold)]/20 text-[var(--navy)] text-xs py-2 hidden md:block">
        <div className="container-ooh flex justify-between items-center">
          <span className="flex items-center gap-2 text-[var(--navy)]/70">
            <Phone size={12} className="text-[var(--gold)]" />
            <span>+63 912 345 6789</span>
            <span className="mx-3 opacity-30">|</span>
            <span>info@ooh.com.ph</span>
          </span>
          <span className="text-[var(--navy)]/50">Mon – Fri: 08:00 – 18:00 | Sat: 09:00 – 14:00</span>
        </div>
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-md shadow-[var(--navy)]/10 top-0"
            : "bg-white/60 backdrop-blur-sm top-8 md:top-8"
        }`}
        style={{ top: scrolled ? 0 : undefined }}
      >
        <nav className="container-ooh flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect width="48" height="48" rx="6" fill="var(--navy)" />
                <path d="M8 16 L8 32 M8 24 L16 24 M16 16 L16 32" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round"/>
                <path d="M22 24 C22 19.581 25.134 16 29 16 C32.866 16 36 19.581 36 24 C36 28.418 32.866 32 29 32 C25.134 32 22 28.418 22 24Z" stroke="var(--gold)" strokeWidth="3" fill="none"/>
                <path d="M40 16 L40 32 M40 24 L48 24 M48 16 L48 32" stroke="var(--gold-light)" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
              </svg>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-heading font-bold text-[var(--navy)] tracking-wider group-hover:text-[var(--gold)] transition-colors duration-300">
                OOH
              </span>
              <div className="h-0.5 w-0 group-hover:w-full bg-[var(--gold)] transition-all duration-500" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium tracking-wide relative py-1 transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-[var(--gold)]"
                      : "text-[var(--navy)]/70 hover:text-[var(--gold)]"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--gold)] rounded-full"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-[var(--navy)]/60 hover:text-[var(--gold)] transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[var(--navy)] gold-gradient rounded-sm hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[var(--gold)]/20"
            >
              Get a Quote
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[var(--navy)] hover:text-[var(--gold)] transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden glass border-t border-[var(--gold)]/20"
            >
              <div className="container-ooh py-4">
                <div className="flex items-center gap-3 bg-[var(--navy)]/5 border border-[var(--gold)]/20 rounded-sm px-4 py-3">
                  <Search size={16} className="text-[var(--gold)]" />
                  <input
                    type="text"
                    placeholder="Search services, solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-[var(--navy)] placeholder:text-[var(--navy)]/40 text-sm outline-none"
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-[var(--navy)]/40 hover:text-[var(--navy)]"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-72 z-50 bg-white flex flex-col md:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-[var(--gold)]/20">
                <span className="font-heading text-2xl font-bold text-[var(--navy)]">OOH</span>
                <button onClick={() => setMenuOpen(false)} className="text-[var(--navy)]/50 hover:text-[var(--navy)]">
                  <X size={22} />
                </button>
              </div>
              <nav className="flex-1 p-6">
                <ul className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-sm text-sm font-medium transition-all duration-200 ${
                          pathname === link.href
                            ? "bg-[var(--gold)]/15 text-[var(--gold)] border-l-2 border-[var(--gold)]"
                            : "text-[var(--navy)]/70 hover:text-[var(--navy)] hover:bg-[var(--navy)]/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="p-6 border-t border-[var(--gold)]/20">
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 text-sm font-semibold text-[var(--navy)] gold-gradient rounded-sm"
                >
                  Get a Quote
                </Link>
                <p className="text-center text-[var(--navy)]/40 text-xs mt-4">+63 912 345 6789</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
