import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const pills = [
  { label: "🏆 ABGMV Certified", color: "bg-amber-100 text-amber-800 border-amber-300" },
  { label: "👥 Max 5–7 per batch", color: "bg-teal-100 text-teal-800 border-teal-300" },
  { label: "🎓 10+ Years Experience", color: "bg-violet-100 text-violet-800 border-violet-300" },
  { label: "💻 Online & Offline", color: "bg-rose-100 text-rose-800 border-rose-300" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section id="about" ref={ref} className="bg-[#FEF3C7] py-0 overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[680px]">
        <div className="relative h-[500px] lg:h-auto overflow-hidden">
          <motion.img
            style={{ y }}
            src="https://varjaymusic.com/wp-content/uploads/2024/05/SRG_1204-copy-scaled-1-1024x576.jpg"
            alt="Inside Varjay"
            className="absolute inset-0 w-full h-[120%] object-cover lg:rounded-r-[2rem]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 lg:p-16 flex flex-col justify-center"
        >
          <p className="font-mono text-xs text-[#F43F5E] tracking-widest mb-3">OUR STORY</p>
          <h2 className="font-display text-4xl md:text-5xl text-[#1C0A00] font-semibold leading-tight">
            Music, taught the way<br />it deserves to be.
          </h2>
          <div className="mt-6 space-y-4 text-[#1C0A00]/80 leading-relaxed">
            <p>
              Varjay Music Academy was born in January 2021 — in the middle of a
              pandemic — with one belief: great music education should be accessible
              to everyone. We started online, and on Diwali 2021 we opened our doors
              offline in Sanpada.
            </p>
            <p>
              Today, 150+ students from across India and abroad learn with us. Small
              batches of just 5–7 students. A certified curriculum. And a teacher who
              has been training for over 10 years.
            </p>
          </div>
          <p className="font-sanskrit text-xl text-[#F59E0B] mt-6">
            संगीतं परमानन्दं संगीतं परमं दयालुम्।
          </p>

          <div className="grid grid-cols-2 gap-3 mt-8">
            {pills.map((p) => (
              <div
                key={p.label}
                className={`px-4 py-3 rounded-full border text-xs font-medium font-body ${p.color}`}
              >
                {p.label}
              </div>
            ))}
          </div>

          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-2 text-[#F59E0B] font-semibold hover:gap-3 transition-all"
          >
            Read Our Story <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
