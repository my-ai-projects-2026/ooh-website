"use client";

import { useState, useEffect, useTransition } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import SearchComponent from "./SearchComponent";
import NavMobileComponent from "./NavMobileComponent";
import { Button } from "../ui/button";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const NavigationComponent = () => {
  const [scrolled, setScrolled] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [, startTransition] = useTransition();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   useEffect(() => {
		startTransition(() => {
			setMenuOpen(false);
		});
  }, [pathname,startTransition]);

  return (
    <>
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
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect width="48" height="48" rx="6" fill="var(--navy)" />
                <path
                  d="M8 16 L8 32 M8 24 L16 24 M16 16 L16 32"
                  stroke="var(--gold)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M22 24 C22 19.581 25.134 16 29 16 C32.866 16 36 19.581 36 24 C36 28.418 32.866 32 29 32 C25.134 32 22 28.418 22 24Z"
                  stroke="var(--gold)"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M40 16 L40 32 M40 24 L48 24 M48 16 L48 32"
                  stroke="var(--gold-light)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.7"
                />
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
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--gold)] rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <Button
              onClick={() => setSearchOpen(!searchOpen)}
              variant={"ghost"}
              className="text-[var(--navy)]/60 hover:text-[var(--gold)] transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </Button>

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
        <SearchComponent
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </header>
      {/* Mobile Menu */}
      <NavMobileComponent 
         menuOpen={menuOpen}
         setMenuOpen={setMenuOpen}
         pathname={pathname}
      />
    </>
  );
};
export default NavigationComponent;
