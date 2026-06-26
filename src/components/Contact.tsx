import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, CheckCircle, Instagram } from "lucide-react";
import WaveDivider from "./WaveDivider";

const formSchema = z.object({
  parentName: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  childName: z.string().min(1, "Please enter your child's name"),
  childAge: z.string().min(1, "Please enter your child's age"),
  ability: z.string().min(1, "Please select a swimming ability"),
  lessonLength: z.string().min(1, "Please select a lesson length"),
  location: z.string().min(1, "Please select a location preference"),
  days: z.array(z.string()).optional(),
  times: z.array(z.string()).optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const times = ["Morning", "Afternoon", "Evening"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      email: "",
      childName: "",
      childAge: "",
      ability: "",
      lessonLength: "",
      location: "",
      days: [],
      times: [],
      message: "",
    },
  });

  const toggleDay = (day: string) => {
    const updated = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];
    setSelectedDays(updated);
    setValue("days", updated);
  };

  const toggleTime = (time: string) => {
    const updated = selectedTimes.includes(time)
      ? selectedTimes.filter((t) => t !== time)
      : [...selectedTimes, time];
    setSelectedTimes(updated);
    setValue("times", updated);
  };

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setSubmitError(false);
    try {
      const response = await fetch("https://formspree.io/f/mzdleqqg", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, days: selectedDays, times: selectedTimes }),
      });
      if (response.ok) {
        reset();
        setSelectedDays([]);
        setSelectedTimes([]);
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#F8FAFC]" data-testid="contact-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-14">
          <span
            className="inline-block text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Get in Touch
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0B3C5D] leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
            data-testid="contact-heading"
          >
            Request a Lesson
          </h2>
          <p
            className="mt-4 text-[#64748B] text-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Fill out the form and Evan will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center py-20 px-8 rounded-3xl bg-white border border-[#E0F7FF] shadow-md text-center"
                data-testid="contact-success"
              >
                <div className="w-20 h-20 rounded-full bg-[#E0F7FF] flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-[#38BDF8]" />
                </div>
                <h3
                  className="text-2xl font-bold text-[#0B3C5D] mb-3"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Message Sent!
                </h3>
                <p
                  className="text-[#64748B] text-base max-w-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Thank you! Your lesson request has been sent. Evan will contact you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-3xl border border-[#E2E8F0] shadow-md p-8 space-y-6"
                data-testid="contact-form"
              >
                {/* Parent Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Parent Name *</label>
                    <input
                      {...register("parentName")}
                      placeholder="Jane Smith"
                      className={inputClass(!!errors.parentName)}
                      data-testid="input-parent-name"
                    />
                    {errors.parentName && <p className={errorClass}>{errors.parentName.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="jane@email.com"
                      className={inputClass(!!errors.email)}
                      data-testid="input-email"
                    />
                    {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                  </div>
                </div>


                {/* Child Name + Age */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Child's Name *</label>
                    <input
                      {...register("childName")}
                      placeholder="Alex"
                      className={inputClass(!!errors.childName)}
                      data-testid="input-child-name"
                    />
                    {errors.childName && <p className={errorClass}>{errors.childName.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Child's Age *</label>
                    <input
                      {...register("childAge")}
                      placeholder="e.g. 5"
                      className={inputClass(!!errors.childAge)}
                      data-testid="input-child-age"
                    />
                    {errors.childAge && <p className={errorClass}>{errors.childAge.message}</p>}
                  </div>
                </div>

                {/* Ability + Lesson Length + Location */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className={labelClass}>Swimming Ability *</label>
                    <select {...register("ability")} className={inputClass(!!errors.ability)} data-testid="select-ability">
                      <option value="">Select...</option>
                      <option value="none">None</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                    {errors.ability && <p className={errorClass}>{errors.ability.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Lesson Length *</label>
                    <select {...register("lessonLength")} className={inputClass(!!errors.lessonLength)} data-testid="select-lesson-length">
                      <option value="">Select...</option>
                      <option value="30min">30 Minutes</option>
                      <option value="60min">60 Minutes</option>
                    </select>
                    {errors.lessonLength && <p className={errorClass}>{errors.lessonLength.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Lesson Location *</label>
                    <select {...register("location")} className={inputClass(!!errors.location)} data-testid="select-location">
                      <option value="">Select...</option>
                      <option value="evans-pool">Evan's Pool</option>
                      <option value="my-pool">My Pool (+ $10)</option>
                      <option value="no-preference">No Preference</option>
                    </select>
                    {errors.location && <p className={errorClass}>{errors.location.message}</p>}
                  </div>
                </div>

                {/* Preferred Days */}
                <div>
                  <label className={labelClass}>Preferred Days</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {days.map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => toggleDay(day)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                          selectedDays.includes(day)
                            ? "bg-[#0B3C5D] text-white border-[#0B3C5D]"
                            : "bg-white text-[#475569] border-[#E2E8F0] hover:border-[#38BDF8] hover:text-[#0B3C5D]"
                        }`}
                        style={{ fontFamily: "Inter, sans-serif" }}
                        data-testid={`day-toggle-${day.toLowerCase()}`}
                      >
                        {day.substring(0, 3)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preferred Times */}
                <div>
                  <label className={labelClass}>Preferred Times</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {times.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => toggleTime(time)}
                        className={`px-6 py-2 rounded-xl text-sm font-medium border transition-all ${
                          selectedTimes.includes(time)
                            ? "bg-[#0B3C5D] text-white border-[#0B3C5D]"
                            : "bg-white text-[#475569] border-[#E2E8F0] hover:border-[#38BDF8] hover:text-[#0B3C5D]"
                        }`}
                        style={{ fontFamily: "Inter, sans-serif" }}
                        data-testid={`time-toggle-${time.toLowerCase()}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass}>Additional Notes</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Any questions or special requests..."
                    className={`${inputClass(false)} resize-none`}
                    data-testid="input-message"
                  />
                </div>

                {submitError && (
                  <p
                    className="text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-xl py-3 px-4"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    data-testid="submit-error"
                  >
                    Something went wrong. Please try again or email us directly at evansswimschool16@gmail.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-2xl bg-[#0B3C5D] text-white font-semibold text-base hover:bg-[#0a3354] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  data-testid="button-submit"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Info Panel */}
          <div className="space-y-5">
            <div className="p-7 rounded-2xl bg-[#0B3C5D] text-white">
              <h3
                className="text-xl font-bold mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1" style={{ fontFamily: "Inter, sans-serif" }}>Email</p>
                    <a href="mailto:evansswimschool16@gmail.com" className="text-white text-sm font-medium hover:text-[#38BDF8] transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                      evansswimschool16@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1" style={{ fontFamily: "Inter, sans-serif" }}>Location</p>
                    <p className="text-white text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                      North York, Ontario, Canada
                    </p>
                    <p className="text-white/60 text-xs mt-1 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                      Serving families within approx. 4 km of Bathurst St &amp; Wilson Ave
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/20 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1" style={{ fontFamily: "Inter, sans-serif" }}>Instagram</p>
                    <a href="#" className="text-white text-sm font-medium hover:text-[#38BDF8] transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                      @evans_swimschool
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#E0F7FF] border border-[#BAE6FD]">
              <h3
                className="text-[#0B3C5D] font-bold text-base mb-3"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Response Time
              </h3>
              <p
                className="text-[#475569] text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Evan typically responds within 24 hours. Lessons are available throughout the summer season.
              </p>
            </div>

          </div>
        </div>
      </div>
      <WaveDivider fill="#0B3C5D" background="#F8FAFC" />
    </section>
  );
}

const labelClass = "block text-[#0B3C5D] text-sm font-semibold mb-2";
const errorClass = "mt-1 text-red-500 text-xs";
const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-xl border text-sm text-[#1E293B] bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-[#38BDF8] transition-all ${
    hasError ? "border-red-400" : "border-[#E2E8F0] hover:border-[#CBD5E1]"
  }`;
