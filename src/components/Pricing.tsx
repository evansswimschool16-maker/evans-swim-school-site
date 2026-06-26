import { Check, MapPin } from "lucide-react";
import WaveDivider from "./WaveDivider";

const plans = [
  {
    title: "30 Minute Lesson",
    price: "$30",
    period: "per lesson",
    description: "Perfect for younger children or focused skill practice.",
    features: [
      "Private one-on-one instruction",
      "Personalized to your child",
      "Progress feedback included",
      "Flexible scheduling",
    ],
    popular: false,
    cta: "Request a Lesson",
  },
  {
    title: "60 Minute Lesson",
    price: "$50",
    period: "per lesson",
    description: "The most comprehensive session for deeper skill development.",
    features: [
      "Private one-on-one instruction",
      "Extended practice time",
      "Skill assessment included",
      "Next-lesson recommendations",
    ],
    popular: true,
    cta: "Request a Lesson",
  },
  {
    title: "Travel Lesson",
    price: "+$10",
    period: "additional fee",
    description: "Evan comes to your backyard pool within the service area.",
    features: [
      "Instructor travels to you",
      "Available within service area",
      "Added to any lesson length",
      "Same personalized instruction",
    ],
    popular: false,
    cta: "Learn More",
  },
];

export default function Pricing() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="relative bg-white" data-testid="pricing-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Pricing
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0B3C5D] leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
            data-testid="pricing-heading"
          >
            Simple, Transparent Pricing
          </h2>
          <p
            className="mt-4 text-[#64748B] text-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            No hidden fees. No upfront packages. Just great lessons.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-200 ${
                plan.popular
                  ? "border-[#38BDF8] bg-[#0B3C5D] text-white shadow-2xl scale-105"
                  : "border-[#E2E8F0] bg-white hover:shadow-lg hover:-translate-y-1"
              }`}
              data-testid={`pricing-card-${i}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#38BDF8] text-[#0B3C5D] text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wider shadow">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-[#0B3C5D]"}`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {plan.title}
                </h3>
                <p
                  className={`text-sm ${plan.popular ? "text-white/70" : "text-[#64748B]"}`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-2">
                  <span
                    className={`text-5xl font-bold ${plan.popular ? "text-[#38BDF8]" : "text-[#0B3C5D]"}`}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {plan.price}
                  </span>
                </div>
                <span
                  className={`text-sm ${plan.popular ? "text-white/60" : "text-[#94A3B8]"}`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 ${plan.popular ? "text-[#38BDF8]" : "text-[#38BDF8]"}`}
                    />
                    <span
                      className={`text-sm ${plan.popular ? "text-white/85" : "text-[#475569]"}`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 active:translate-y-0 ${
                  plan.popular
                    ? "bg-[#38BDF8] text-[#0B3C5D] hover:bg-sky-400 shadow-lg"
                    : "bg-[#E0F7FF] text-[#0B3C5D] hover:bg-[#BAE6FD] border border-[#BAE6FD]"
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
                data-testid={`pricing-cta-${i}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Travel note */}
        <div
          className="mt-10 flex items-center justify-center gap-2 text-[#64748B] text-sm"
          style={{ fontFamily: "Inter, sans-serif" }}
          data-testid="pricing-travel-note"
        >
          <MapPin className="w-4 h-4 text-[#38BDF8]" />
          Travel lessons are available only within our North York service area.
        </div>
      </div>
      <WaveDivider fill="#F8FAFC" background="#ffffff" />
    </section>
  );
}
