import WaveDivider from "./WaveDivider";

const lessons = [
  {
    title: "Parent & Tot",
    ageRange: "Ages 1–3",
    description: "Introduce children to the water through fun, confidence-building activities in a safe and nurturing environment.",
    skills: ["Water comfort", "Kicking basics", "Parent bonding", "Breath control"],
    color: "from-[#E0F7FF] to-[#BAE6FD]",
    accent: "#0B3C5D",
    badge: "Most Popular for Beginners",
  },
  {
    title: "Beginner",
    ageRange: "All Ages",
    description: "Building the essential foundation — comfort in the water, floating, and basic safety skills.",
    skills: ["Floating", "Water comfort", "Kicking", "Water safety"],
    color: "from-[#EFF6FF] to-[#DBEAFE]",
    accent: "#1D4ED8",
    badge: null,
  },
  {
    title: "Intermediate",
    ageRange: "All Ages",
    description: "Developing real swimming strokes and building confidence to swim independently.",
    skills: ["Front Crawl", "Back Crawl", "Breaststroke", "Confidence"],
    color: "from-[#F0FDF4] to-[#DCFCE7]",
    accent: "#15803D",
    badge: null,
  },
  {
    title: "Advanced",
    ageRange: "All Ages",
    description: "Perfecting technique, refining strokes, and building endurance for confident swimmers.",
    skills: ["Stroke refinement", "Technique", "Endurance", "Turns & starts"],
    color: "from-[#FFF7ED] to-[#FED7AA]",
    accent: "#C2410C",
    badge: null,
  },
];

export default function Lessons() {
  return (
    <section id="lessons" className="relative bg-[#F8FAFC]" data-testid="lessons-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Swim Lessons
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0B3C5D] leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
            data-testid="lessons-heading"
          >
            Lessons for Every Level
          </h2>
          <p
            className="mt-4 text-[#64748B] text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            From first splash to polished strokes — personalized instruction for children ages 1–17.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lessons.map((lesson, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
              data-testid={`lesson-card-${i}`}
            >
              {/* Accent top gradient */}
              <div className={`h-2 bg-gradient-to-r ${lesson.color}`} />
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3
                    className="text-[#0B3C5D] font-bold text-xl"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {lesson.title}
                  </h3>
                  {lesson.badge && (
                    <span className="text-xs bg-[#E0F7FF] text-[#0B3C5D] px-2 py-1 rounded-full font-medium whitespace-nowrap flex-shrink-0" style={{ fontFamily: "Inter, sans-serif" }}>
                      {lesson.badge}
                    </span>
                  )}
                </div>
                <span
                  className="inline-block text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {lesson.ageRange}
                </span>
                <p
                  className="text-[#64748B] text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {lesson.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {lesson.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#F1F5F9] text-[#475569] font-medium border border-[#E2E8F0]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WaveDivider fill="#ffffff" background="#F8FAFC" />
    </section>
  );
}
