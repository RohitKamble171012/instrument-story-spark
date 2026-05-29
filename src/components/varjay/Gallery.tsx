import { GALLERY } from "./data";

export function Gallery() {
  const loop = [...GALLERY, ...GALLERY];
  return (
    <section id="gallery" className="bg-[#FEFAF1] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="font-mono text-xs text-[#F59E0B] tracking-widest mb-3">FROM OUR ACADEMY</p>
        <h2 className="font-display text-5xl md:text-6xl text-[#1C0A00] font-semibold">
          Life at Varjay
        </h2>
      </div>
      <div className="relative">
        <div className="flex gap-5 w-max animate-marquee-slow pause-on-hover">
          {loop.map((src, i) => (
            <div key={i} className="w-[280px] h-[200px] rounded-2xl overflow-hidden shrink-0 shadow-md">
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
