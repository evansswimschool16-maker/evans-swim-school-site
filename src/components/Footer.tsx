import { Waves, Mail, Instagram } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Lessons", href: "#lessons" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B3C5D] text-white" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[#38BDF8]/20 border border-[#38BDF8]/30 flex items-center justify-center">
                <Waves className="w-6 h-6 text-[#38BDF8]" />
              </div>
              <div>
                <p
                  className="text-white font-bold text-base"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Evan's Swim School
                </p>
                <p
                  className="text-white/50 text-xs"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  North York, Ontario
                </p>
              </div>
            </div>
            <p
              className="text-white/60 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Building Confident, Safe Swimmers One Lesson at a Time
            </p>
            <p
              className="text-white/50 text-sm mt-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Private Swim Lessons · North York, Ontario, Canada
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Quick Links
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Contact
            </p>
            <div className="space-y-4">
              <a
                href="mailto:evansswimschool16@gmail.com"
                className="flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-[#38BDF8]" />
                evansswimschool16@gmail.com
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
                data-testid="footer-instagram"
              >
                <Instagram className="w-4 h-4 flex-shrink-0 text-[#38BDF8]" />
                @evans_swimschool
              </a>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-[#38BDF8] text-[#0B3C5D] text-sm font-semibold hover:bg-sky-400 transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
                data-testid="footer-book-cta"
              >
                Request a Lesson
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            &copy; 2025 Evan's Swim School. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
              data-testid="footer-privacy"
            >
              Privacy Policy
            </a>
            <p
              className="text-white/40 text-xs"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              evansswimschool.ca
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
