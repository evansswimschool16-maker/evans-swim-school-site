import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import WaveDivider from "./WaveDivider";

export default function Hero() {
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    const timer = setTimeout(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    const el = document.querySelector("#pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-swim-lesson.png"
          alt="Child learning to swim"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0B3C5D] opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B3C5D]/20 via-transparent to-[#0B3C5D]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-24" ref={headlineRef}>
        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "Poppins, sans-serif" }}
          data-testid="hero-headline"
        >
          Build Confidence.<br />
          <span className="text-[#38BDF8]">Learn to Swim. Stay Safe.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
          data-testid="hero-subheadline"
        >
          Helping children ages 1–17 become confident, safe swimmers through
          personalized one-on-one instruction.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 rounded-2xl bg-[#38BDF8] text-[#0B3C5D] font-semibold text-base hover:bg-sky-400 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
            style={{ fontFamily: "Inter, sans-serif" }}
            data-testid="hero-book-cta"
          >
            Request a Lesson
          </button>
          <button
            onClick={scrollToPricing}
            className="px-8 py-4 rounded-2xl border-2 border-white/70 text-white font-semibold text-base hover:bg-white/10 transition-all backdrop-blur"
            style={{ fontFamily: "Inter, sans-serif" }}
            data-testid="hero-pricing-cta"
          >
            View Pricing
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors flex flex-col items-center gap-1 animate-bounce"
        aria-label="Scroll down"
        data-testid="hero-scroll-indicator"
      >
        <ChevronDown className="w-6 h-6" />
      </button>

      {/* Wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <WaveDivider fill="#ffffff" background="transparent" />
      </div>
    </section>
  );
}
