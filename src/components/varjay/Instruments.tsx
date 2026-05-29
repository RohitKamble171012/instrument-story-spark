import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { INSTRUMENTS } from "./data";

export function Instruments() {
  return (
    <section id="instruments" className="bg-[#FEFAF1] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-xs text-[#F59E0B] tracking-widest mb-3">
            WHAT WOULD YOU LIKE TO LEARN?
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-[#1C0A00] font-semibold">
            Pick Your Instrument
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {INSTRUMENTS.map((inst, i) => (
            <motion.a
              key={inst.name}
              href="#contact"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group relative block mb-6 overflow-hidden rounded-3xl break-inside-avoid cursor-pointer shadow-lg"
              style={{ height: inst.height }}
            >
              <img
                src={inst.img}
                alt={inst.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
                style={{
                  background: `linear-gradient(to bottom, transparent 30%, ${inst.color}e6 100%)`,
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="font-mono text-[11px] text-white/80 tracking-widest mb-1 uppercase">
                  {inst.category}
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-semibold">
                  {inst.name}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#F59E0B] text-[#F59E0B] font-semibold hover:bg-[#F59E0B] hover:text-white transition-colors"
          >
            Explore All <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
