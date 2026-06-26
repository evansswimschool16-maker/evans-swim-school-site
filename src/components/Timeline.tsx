import WaveDivider from "./WaveDivider";

const steps = [
  {
    number: "01",
    title: "Arrival",
    description: "Greet Evan at the pool. A friendly, relaxed start to set the tone for the lesson.",
  },
  {
    number: "02",
    title: "Introduction",
    description: "Evan introduces himself and gets to know your child — their comfort level, goals, and personality.",
  },
  {
    number: "03",
    title: "Skill Assessment",
    description: "A gentle in-water check to understand exactly where your child is starting from.",
  },
  {
    number: "04",
    title: "Customized Lesson",
    description: "A fully personalized lesson built around your child's specific needs, abilities, and goals.",
  },
  {
    number: "05",
    title: "Positive Feedback",
    description: "Every win is celebrated. Encouragement and confidence-building are woven into every lesson.",
  },
  {
    number: "06",
    title: "Next Lesson Plan",
    description: "Evan shares what went well and what to focus on next, keeping progress clear and consistent.",
  },
];

export default function Timeline() {
  return (
    <section id="expect" className="relative bg-[#F8FAFC]" data-testid="timeline-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span
            className="inline-block text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            What to Expect
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0B3C5D] leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
            data-testid="timeline-heading"
          >
            Your Child's Lesson Journey
          </h2>
          <p
            className="mt-4 text-[#64748B] text-lg max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Every lesson follows a thoughtful structure designed to build confidence step by step.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:grid grid-cols-6 gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-10 left-[8.33%] right-[8.33%] h-0.5 bg-gradient-to-r from-[#38BDF8] to-[#0B3C5D] z-0" />
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center px-3" data-testid={`timeline-step-${i}`}>
              {/* Circle */}
              <div className="w-20 h-20 rounded-full bg-white border-4 border-[#38BDF8] flex items-center justify-center shadow-md mb-6">
                <span
                  className="text-[#0B3C5D] font-bold text-lg"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {step.number}
                </span>
              </div>
              <h3
                className="text-[#0B3C5D] font-bold text-base mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[#64748B] text-xs leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative">
          <div className="absolute top-0 bottom-0 left-9 w-0.5 bg-gradient-to-b from-[#38BDF8] to-[#0B3C5D]" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-start gap-6" data-testid={`timeline-step-mobile-${i}`}>
                <div className="w-[72px] h-[72px] flex-shrink-0 rounded-full bg-white border-4 border-[#38BDF8] flex items-center justify-center shadow-md z-10">
                  <span
                    className="text-[#0B3C5D] font-bold text-base"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="pt-3">
                  <h3
                    className="text-[#0B3C5D] font-bold text-lg mb-1"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[#64748B] text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <WaveDivider fill="#ffffff" background="#F8FAFC" />
    </section>
  );
}
