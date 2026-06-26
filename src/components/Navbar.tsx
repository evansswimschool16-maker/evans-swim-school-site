import { useState, useEffect } from "react";
import { Menu, X, Waves } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Lessons", href: "#lessons" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex items-center gap-3 group"
          data-testid="nav-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-[#0B3C5D] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Waves className="w-5 h-5 text-[#38BDF8]" />
          </div>
          <div>
            <span
              className={`font-heading font-700 text-base leading-tight block transition-colors ${
                scrolled ? "text-[#0B3C5D]" : "text-white"
              }`}
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              Evan's Swim School
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" data-testid="nav-desktop">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`text-sm font-medium transition-colors hover:text-[#38BDF8] ${
                scrolled ? "text-[#0B3C5D]" : "text-white"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="ml-4 px-5 py-2.5 rounded-xl bg-[#38BDF8] text-[#0B3C5D] text-sm font-semibold hover:bg-sky-400 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            style={{ fontFamily: "Inter, sans-serif" }}
            data-testid="nav-book-cta"
          >
            Request a Lesson
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-[#0B3C5D]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div
          className="md:hidden bg-white border-t border-gray-100 shadow-xl"
          data-testid="nav-mobile-menu"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="py-3 px-4 rounded-xl text-[#0B3C5D] font-medium hover:bg-[#E0F7FF] transition-colors text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
                data-testid={`nav-mobile-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="mt-3 py-3 px-4 rounded-xl bg-[#38BDF8] text-[#0B3C5D] font-semibold text-center text-sm hover:bg-sky-400 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
              data-testid="nav-mobile-book-cta"
            >
              Request a Lesson
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
