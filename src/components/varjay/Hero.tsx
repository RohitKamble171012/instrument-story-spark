import { motion } from "framer-motion";
import { Play, ArrowRight, MapPin, Phone } from "lucide-react";

const avatars = [
  { i: "AK", c: "from-amber-400 to-orange-500" },
  { i: "VK", c: "from-rose-400 to-pink-600" },
  { i: "NP", c: "from-teal-400 to-emerald-600" },
  { i: "RP", c: "from-violet-400 to-purple-600" },
  { i: "SG", c: "from-sky-400 to-blue-600" },
];

const floatingNotes = [
  { c: "♪", x: "8%", y: "20%", d: 0, s: "text-5xl text-[#F59E0B]/60" },
  { c: "♫", x: "92%", y: "12%", d: 0.6, s: "text-4xl text-[#F43F5E]/60" },
  { c: "♩", x: "15%", y: "75%", d: 1.2, s: "text-6xl text-[#0D9488]/40" },
  { c: "♬", x: "88%", y: "82%", d: 0.9, s: "text-5xl text-[#7C3AED]/50" },
  { c: "♪", x: "50%", y: "10%", d: 1.5, s: "text-3xl text-[#EA580C]/50" },
];

const marqueeWords = ["Tabla", "Guitar", "Piano", "Harmonium", "Violin", "Flute", "Dholak", "Ukulele", "Mandolin"];

export function Hero() {
  return (
    <section className="relative bg-[#FEFAF1] overflow-hidden">
      {/* Floating musical notes */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingNotes.map((n, i) => (
          <motion.span
            key={i}
            className={`absolute font-display ${n.s}`}
            style={{ left: n.x, top: n.y }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 12, -8, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: n.d,
              ease: "easeInOut",
            }}
          >
            {n.c}
          </motion.span>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[55%_45%] gap-12 px-6 pt-12 pb-16 lg:pt-20 lg:pb-24">
        {/* LEFT */}
        <div className="relative z-10">
          {/* Animated staff */}
          <svg
            className="absolute -top-4 left-0 w-full h-16 opacity-50 pointer-events-none"
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
            className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-[#92400E] font-mono text-xs mb-7"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            EST. 2021 · SANPADA · NAVI MUMBAI
          </motion.div>

          <h1
            className="font-display font-semibold leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
          >
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
            className="mt-7"
          >
            <p className="font-sanskrit text-xl md:text-2xl text-[#F59E0B]">
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
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#instruments"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#F59E0B] text-[#1C0A00] font-semibold hover:bg-[#d97706] hover:text-white transition-colors shadow-lg shadow-amber-500/30"
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

          {/* Trust + location chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatars.map((a) => (
                  <div
                    key={a.i}
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${a.c} border-2 border-[#FEFAF1] text-white text-[10px] font-bold flex items-center justify-center`}
                  >
                    {a.i}
                  </div>
                ))}
              </div>
              <p className="font-mono text-xs text-[#78716C]">
                <span className="text-[#F59E0B] font-bold">★ 4.9</span> · 35+ love us
              </p>
            </div>
            <span className="hidden sm:inline w-px h-5 bg-amber-200" />
            <a href="#contact" className="inline-flex items-center gap-1.5 font-mono text-xs text-[#78716C] hover:text-[#F59E0B]">
              <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" /> Sanpada, Navi Mumbai
            </a>
            <a href="tel:+917770003036" className="inline-flex items-center gap-1.5 font-mono text-xs text-[#78716C] hover:text-[#F59E0B]">
              <Phone className="w-3.5 h-3.5 text-[#F59E0B]" /> +91 777 000 3036
            </a>
          </motion.div>
        </div>

        {/* RIGHT — vinyl + mosaic */}
        <div className="relative h-[520px] md:h-[600px] lg:h-[680px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(245,158,11,0.25),transparent_60%)] blur-2xl" />

          {/* Rotating vinyl record */}
          <motion.div
            className="absolute -right-16 -top-8 w-[380px] h-[380px] lg:w-[460px] lg:h-[460px] hidden md:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
              <defs>
                <radialGradient id="vinylGrad" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#2a1a08" />
                  <stop offset="100%" stopColor="#0a0500" />
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="98" fill="url(#vinylGrad)" />
              {[35, 45, 55, 65, 75, 85].map((r) => (
                <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#3a2810" strokeWidth="0.5" />
              ))}
              <circle cx="100" cy="100" r="28" fill="#F59E0B" />
              <circle cx="100" cy="100" r="22" fill="#F43F5E" />
              <circle cx="100" cy="100" r="4" fill="#1C0A00" />
            </svg>
          </motion.div>

          {/* Top photo */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute top-0 right-4 w-[72%] h-[290px] md:h-[340px] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white z-10"
          >
            <img
              src="https://varjaymusic.com/wp-content/uploads/2024/07/tabla.jpg"
              alt="Tabla"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* "Now Playing" floating card */}
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute top-[80px] left-0 z-30 bg-white rounded-2xl shadow-2xl p-3 pr-5 flex items-center gap-3 max-w-[260px]"
          >
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#F43F5E] flex items-center justify-center text-white text-2xl font-display">
              ♪
            </div>
            <div>
              <p className="font-mono text-[10px] text-[#78716C] tracking-widest">NOW LEARNING</p>
              <p className="font-display text-sm font-semibold text-[#1C0A00]">Teen Taal · Tabla</p>
              <div className="flex items-end gap-0.5 mt-1 h-3">
                {[3, 8, 5, 11, 7, 4, 9, 6].map((h, i) => (
                  <motion.span
                    key={i}
                    className="w-0.5 bg-[#F59E0B] rounded-full"
                    animate={{ height: [`${h}px`, `${12 - h + 4}px`, `${h}px`] }}
                    transition={{ duration: 0.8 + i * 0.05, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Middle photo */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-[280px] md:top-[320px] right-0 w-[68%] h-[230px] md:h-[270px] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white z-20"
          >
            <img
              src="https://varjaymusic.com/wp-content/uploads/2024/05/SRG_1204-copy-scaled-1-1024x576.jpg"
              alt="Class"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur rounded-full px-3 py-1.5 font-mono text-[10px] text-[#1C0A00] shadow">
              🎵 9 instruments
            </div>
          </motion.div>

          {/* Bottom photo */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute bottom-0 left-2 w-[58%] h-[190px] md:h-[220px] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white z-30"
          >
            <img
              src="https://varjaymusic.com/wp-content/uploads/2024/05/how-to-play-acous123tic-guitar.jpg"
              alt="Guitar"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating live badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, type: "spring" }}
            className="absolute bottom-[60px] right-2 z-40 bg-[#0D9488] text-white rounded-full px-4 py-2 shadow-xl flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="font-mono text-[11px] tracking-widest">LIVE CLASSES TODAY</span>
          </motion.div>
        </div>
      </div>

      {/* Marquee strip of instrument names */}
      <div className="relative bg-[#1C0A00] text-[#FEFAF1] overflow-hidden py-4 border-y border-amber-900/40">
        <div className="flex gap-12 w-max animate-marquee">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <div key={i} className="flex items-center gap-12 shrink-0">
              <span className="font-display text-3xl md:text-4xl italic">{w}</span>
              <span className="text-[#F59E0B] text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-b border-amber-200 bg-[#FEFAF1]">
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
