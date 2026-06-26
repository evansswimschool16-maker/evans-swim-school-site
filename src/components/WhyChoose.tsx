import { Users, Award, Calendar, Shield, Eye, Star } from "lucide-react";
import WaveDivider from "./WaveDivider";

const features = [
  {
    icon: Users,
    title: "One-on-One Instruction",
    description: "Lessons tailored to every swimmer, with full attention on your child's progress.",
  },
  {
    icon: Award,
    title: "Certified Instructor",
    description: "Professional training, Lifesaving Society certification, and active safety credentials.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Lessons that fit your family's schedule — mornings, evenings, or weekends.",
  },
  {
    icon: Shield,
    title: "Safe Learning Environment",
    description: "Safety always comes first. Every session follows established water safety protocols.",
  },
  {
    icon: Eye,
    title: "Parents Welcome",
    description: "Observe every lesson. Transparency and peace of mind are part of the experience.",
  },
  {
    icon: Star,
    title: "Confidence Building",
    description: "Helping swimmers enjoy the water while learning lifelong skills and water confidence.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="relative bg-white" data-testid="why-choose-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Why Choose Evan
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0B3C5D] leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
            data-testid="why-heading"
          >
            A Swim Instructor<br className="hidden sm:block" /> You Can Trust
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-[#E2E8F0] bg-white hover:border-[#38BDF8] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-200"
              data-testid={`why-card-${i}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#E0F7FF] flex items-center justify-center mb-5 group-hover:bg-[#38BDF8] group-hover:scale-110 transition-all duration-200">
                <feature.icon className="w-6 h-6 text-[#38BDF8] group-hover:text-white transition-colors duration-200" />
              </div>
              <h3
                className="text-[#0B3C5D] font-bold text-lg mb-3"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-[#64748B] text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <WaveDivider fill="#F8FAFC" background="#ffffff" />
    </section>
  );
}
