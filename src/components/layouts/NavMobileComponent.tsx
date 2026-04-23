"use client";
import Link from "next/link";
import { X } from "lucide-react";
import { navLinks } from "./NavigationComponent";

interface NavMobileProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
}

const NavMobileComponent = ({ menuOpen, setMenuOpen, pathname }: NavMobileProps) => {
  if (!menuOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 z-40 md:hidden"
        onClick={() => setMenuOpen(false)}
      />
      <div className="fixed top-0 right-0 bottom-0 w-72 z-50 bg-white flex flex-col md:hidden shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-[var(--gold)]/20">
          <span className="font-heading text-2xl font-bold text-[var(--navy)]">OOH</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[var(--navy)]/50 hover:text-[var(--navy)]"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="flex-1 p-6">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
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
              </li>
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
      </div>
    </>
  );
};
export default NavMobileComponent;
