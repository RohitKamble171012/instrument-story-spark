import { TESTIMONIALS } from "./data";

export function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="bg-[#FEF3C7] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="font-mono text-xs text-[#F43F5E] tracking-widest mb-3">STUDENT VOICES</p>
        <h2 className="font-display text-5xl md:text-6xl text-[#1C0A00] font-semibold">
          Hear it from them.
        </h2>
      </div>

      <div className="relative">
        <div className="flex gap-6 w-max animate-marquee pause-on-hover">
          {loop.map((t, i) => (
            <div
              key={i}
              className="w-[320px] shrink-0 bg-white rounded-2xl shadow-sm p-6 border border-amber-100"
            >
              <div className="text-[#F59E0B] mb-3">★★★★★</div>
              <p className="italic text-[#1C0A00]/80 leading-relaxed line-clamp-3 text-sm">
                "{t.quote}"
              </p>
              <div className="mt-5 flex items-center justify-between">
                <p className="font-mono text-xs font-bold text-[#F43F5E]">{t.name}</p>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-mono">
                  {t.instrument}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
