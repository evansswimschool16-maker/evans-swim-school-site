import { CheckCircle } from "lucide-react";
import evanPhoto from "@assets/IMG_9074_1782348886507.jpg";
import WaveDivider from "./WaveDivider";

const certifications = [
  "Lifesaving Society Swim Instructor",
  "National Lifeguard",
  "Standard First Aid & CPR-C",
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#F8FAFC]" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative pb-8">
              <div className="w-72 h-96 sm:w-80 sm:h-[430px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#E0F7FF]">
                <img
                  src={evanPhoto}
                  alt="Evan, swim instructor at Evan's Swim School"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  data-testid="about-evan-photo"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-3 shadow-lg border border-[#E0F7FF]">
                <p
                  className="text-[#0B3C5D] font-bold text-sm"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Teaching Local Families Since Summer 2025
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <span
              className="inline-block text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Meet Evan
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#0B3C5D] leading-tight mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
              data-testid="about-heading"
            >
              Your North York<br />Swim Instructor
            </h2>
            <div
              className="text-[#475569] text-base leading-relaxed space-y-4 mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
              data-testid="about-bio"
            >
              <p>
                Hi! I'm Evan, and I've been teaching private swim lessons since the summer of 2025. I love helping children become comfortable, confident and safe in the water.
              </p>
              <p>
                Every lesson is personalized for your child's age, confidence level and swimming ability. Whether they're getting into the water for the first time or improving strokes, I focus on making learning fun, encouraging and safe.
              </p>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <p
                className="text-[#0B3C5D] font-semibold text-sm uppercase tracking-wide mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                I am certified as a:
              </p>
              <ul className="space-y-3">
                {certifications.map((cert, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3"
                    data-testid={`about-cert-${i}`}
                  >
                    <CheckCircle className="w-5 h-5 text-[#38BDF8] flex-shrink-0" />
                    <span
                      className="text-[#1E293B] text-sm font-medium"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#E0F7FF] border border-[#BAE6FD]">
              <p
                className="text-[#0B3C5D] text-sm font-medium flex items-start gap-3"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="text-[#38BDF8] mt-0.5 flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                </span>
                Parents are always welcome to stay and watch every lesson.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WaveDivider fill="#ffffff" background="#F8FAFC" />
    </section>
  );
}
