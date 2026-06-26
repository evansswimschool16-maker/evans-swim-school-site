import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import testimonialsData from "../data/testimonials.json";
import WaveDivider from "./WaveDivider";

interface Testimonial {
  id: number;
  stars: number;
  quote: string;
  attribution: string;
}

const testimonials: Testimonial[] = testimonialsData;
const multiple = testimonials.length > 1;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="relative bg-[#F8FAFC]" data-testid="testimonials-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Heading */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Testimonials
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0B3C5D] leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
            data-testid="testimonials-heading"
          >
            What Families Are Saying
          </h2>
        </div>

        {/* Card */}
        <div className="relative bg-white rounded-3xl border border-[#38BDF8] shadow-xl p-10 sm:p-14">
          {/* Large quote icon */}
          <Quote className="w-12 h-12 text-[#E0F7FF] absolute top-8 left-8" aria-hidden="true" />

          {/* Stars */}
          <div className="flex gap-1 mb-6 justify-center">
            {Array.from({ length: testimonials[current].stars }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#FBBF24] text-[#FBBF24]" />
            ))}
          </div>

          {/* Quote */}
          <blockquote
            className="text-[#1E293B] text-lg sm:text-xl italic leading-relaxed mb-8 text-center"
            style={{ fontFamily: "Inter, sans-serif" }}
            data-testid={`testimonial-card-${testimonials[current].id}`}
          >
            "{testimonials[current].quote}"
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E0F7FF] flex items-center justify-center flex-shrink-0">
              <span className="text-[#0B3C5D] text-sm font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>
                {testimonials[current].attribution.charAt(0)}
              </span>
            </div>
            <span
              className="text-[#64748B] text-sm font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              — {testimonials[current].attribution}
            </span>
          </div>
        </div>

        {/* Navigation — only shown when there are multiple testimonials */}
        {multiple && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center text-[#0B3C5D] hover:border-[#38BDF8] hover:text-[#38BDF8] transition-colors shadow-sm"
              aria-label="Previous testimonial"
              data-testid="testimonials-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-[#38BDF8]" : "w-2 bg-[#CBD5E1]"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  data-testid={`testimonials-dot-${i}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center text-[#0B3C5D] hover:border-[#38BDF8] hover:text-[#38BDF8] transition-colors shadow-sm"
              aria-label="Next testimonial"
              data-testid="testimonials-next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
      <WaveDivider fill="#ffffff" background="#F8FAFC" />
    </section>
  );
}
