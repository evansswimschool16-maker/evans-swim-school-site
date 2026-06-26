import { Shield, Award, Heart, Users } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Certified Lifesaving Society",
    subtitle: "Swim Instructor",
    color: "text-[#38BDF8]",
  },
  {
    icon: Award,
    title: "National Lifeguard",
    subtitle: "Certified & Active",
    color: "text-[#38BDF8]",
  },
  {
    icon: Heart,
    title: "Standard First Aid",
    subtitle: "& CPR-C Certified",
    color: "text-[#38BDF8]",
  },
  {
    icon: Users,
    title: "Parents Welcome",
    subtitle: "to Stay & Watch",
    color: "text-[#38BDF8]",
  },
];

export default function TrustBar() {
  return (
    <section
      id="trust"
      className="relative z-10 bg-white py-16 px-4"
      data-testid="trust-bar"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-7 rounded-2xl border border-[#E0F7FF] bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              data-testid={`trust-card-${i}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#E0F7FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <h3
                className="text-[#0B3C5D] font-semibold text-base leading-snug"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-[#64748B] text-sm mt-1"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
