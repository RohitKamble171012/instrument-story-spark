import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function CountUp({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v * 10) / 10}${suffix}`);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  return (
    <span ref={ref} className="inline-block">
      <motion.span>{display}</motion.span>
    </span>
  );
}

const stats = [
  { value: 3, suffix: "+", label: "YEARS" },
  { value: 150, suffix: "+", label: "STUDENTS" },
  { value: 9, suffix: "", label: "INSTRUMENTS" },
  { value: 4.9, prefix: "★ ", label: "RATING" },
];

export function Stats() {
  return (
    <section className="bg-[#FEFAF1] py-24 border-y border-amber-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-amber-300/60">
        {stats.map((s) => (
          <div key={s.label} className="text-center px-4">
            <div className="font-display font-semibold text-[#F59E0B]" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
              <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="font-mono text-xs text-[#78716C] tracking-widest mt-3">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
