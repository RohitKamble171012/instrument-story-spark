import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const avatars = [
  { i: "AK", c: "from-amber-400 to-orange-500" },
  { i: "VK", c: "from-rose-400 to-pink-600" },
  { i: "NP", c: "from-teal-400 to-emerald-600" },
  { i: "RP", c: "from-violet-400 to-purple-600" },
  { i: "SG", c: "from-sky-400 to-blue-600" },
];

export function Hero() {
  return (
    <section className="relative bg-[#FEFAF1] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[55%_45%] gap-12 px-6 py-20 lg:py-28">
        {/* LEFT */}
        <div className="relative">
          {/* Animated staff */}
          <svg
            className="absolute -top-6 left-0 w-full h-20 opacity-60 pointer-events-none"
            viewBox="0 0 800 80"
            preserveAspectRatio="none"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="0"
                x2="800"
                y1={10 + i * 14}
                y2={10 + i * 14}
                stroke="#F59E0B"
                strokeWidth="1.5"
                className="staff-line"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </svg>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-[#92400E] font-mono text-xs mb-8"
          >
            EST. 2021 · SANPADA · NAVI MUMBAI
          </motion.div>

          <h1 className="font-display font-semibold leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}>
            {["Turn Your", "Talent Into", "A Musical Milestone."].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block"
                style={{
                  color: i === 0 ? "#1C0A00" : i === 1 ? "#F59E0B" : "#F43F5E",
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8"
          >
            <p className="font-sanskrit text-2xl text-[#F59E0B]">
              संगीतं परमानन्दं संगीतं परमं दयालुम्।
            </p>
            <p className="italic text-sm text-[#78716C] mt-1">
              Music is supreme bliss. Music is the most compassionate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#instruments"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#F59E0B] text-[#1C0A00] font-semibold hover:bg-[#d97706] hover:text-white transition-colors"
            >
              Explore Instruments <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#youtube"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-[#0D9488] text-[#0D9488] font-semibold hover:bg-[#0D9488] hover:text-white transition-colors"
            >
              <Play className="w-4 h-4 fill-current" /> Watch Us Play
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {avatars.map((a) => (
                <div
                  key={a.i}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${a.c} border-2 border-white text-white text-xs font-bold flex items-center justify-center`}
                >
                  {a.i}
                </div>
              ))}
            </div>
            <p className="font-mono text-xs text-[#78716C]">
              <span className="text-[#F59E0B]">★ 4.9</span> · 35+ students love us
            </p>
          </motion.div>
        </div>

        {/* RIGHT — mosaic */}
        <div className="relative h-[600px] lg:h-[680px]">
          <div className="absolute inset-0 bg-gradient-radial from-amber-200/50 to-transparent blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ y: 0 }}
            className="absolute top-0 right-0 w-[80%] h-[380px] rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://varjaymusic.com/wp-content/uploads/2024/07/tabla.jpg"
              alt="Tabla"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg px-4 py-3 font-mono text-xs text-[#1C0A00]">
              🎵 9 Instruments · 150+ Students
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-[300px] right-[15%] w-[70%] h-[260px] rounded-2xl overflow-hidden shadow-xl border-4 border-[#FEFAF1] z-10"
          >
            <img
              src="https://varjaymusic.com/wp-content/uploads/2024/05/SRG_1204-copy-scaled-1-1024x576.jpg"
              alt="Class"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute bottom-0 left-0 w-[55%] h-[220px] rounded-2xl overflow-hidden shadow-xl border-4 border-[#FEFAF1] z-20"
          >
            <img
              src="https://varjaymusic.com/wp-content/uploads/2024/05/how-to-play-acous123tic-guitar.jpg"
              alt="Guitar"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-y border-amber-200 bg-[#FEFAF1]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-amber-200">
          {[
            ["3+", "YEARS"],
            ["150+", "STUDENTS"],
            ["9", "INSTRUMENTS"],
            ["★ 4.9", "RATING"],
          ].map(([n, l]) => (
            <div key={l} className="p-8 text-center">
              <div className="font-display text-5xl text-[#F59E0B] font-semibold">{n}</div>
              <div className="font-mono text-xs text-[#78716C] mt-2 tracking-wider">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
