import { ArrowRight, Phone } from "lucide-react";

const avatars = ["AK", "VK", "NP", "RP", "SG"];

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F43F5E 0%, #F59E0B 100%)" }}>
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="font-display font-semibold leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
          Ready to play your first note?
        </h2>
        <p className="mt-5 text-white/90 text-lg">
          No admission fee. No registration fee. Just you and your instrument.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/917770003036"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#F43F5E] font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            Register Now <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+917770003036"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-[#F43F5E] transition-colors"
          >
            <Phone className="w-5 h-5" /> +91 777 000 3036
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="flex -space-x-3">
            {avatars.map((a, i) => (
              <div key={a}
                className="w-10 h-10 rounded-full border-2 border-white text-white text-xs font-bold flex items-center justify-center"
                style={{ background: ["#7C3AED","#0D9488","#0EA5E9","#65A30D","#EA580C"][i] }}>
                {a}
              </div>
            ))}
          </div>
          <p className="font-mono text-xs text-white">Join 150+ students already learning</p>
        </div>
      </div>
    </section>
  );
}
