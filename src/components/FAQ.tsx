import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqsData from "../data/faqs.json";
import WaveDivider from "./WaveDivider";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = faqsData;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white" data-testid="faq-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Heading */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            FAQ
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0B3C5D] leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
            data-testid="faq-heading"
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                open === i ? "border-[#38BDF8] shadow-md" : "border-[#E2E8F0]"
              }`}
              data-testid={`faq-item-${i}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                data-testid={`faq-trigger-${i}`}
              >
                <span
                  className={`text-base font-semibold pr-4 transition-colors ${
                    open === i ? "text-[#38BDF8]" : "text-[#0B3C5D]"
                  }`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-all duration-200 ${
                    open === i ? "rotate-180 text-[#38BDF8]" : "text-[#94A3B8]"
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className="px-6 pb-6 text-[#475569] text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  data-testid={`faq-answer-${i}`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WaveDivider fill="#F8FAFC" background="#ffffff" />
    </section>
  );
}
