import { motion } from "framer-motion";
import { BookOpen, Users, CheckCircle2, Mic2 } from "lucide-react";

const items = [
  { Icon: BookOpen, title: "World Class Curriculum", desc: "Structured levels: Beginner → Intermediate → Advanced → Exam prep. Certified by ABGMV." },
  { Icon: Users, title: "Maximum 5–7 Per Batch", desc: "Not a factory. A family. Every student is known by name, not by seat number." },
  { Icon: CheckCircle2, title: "No Admission Fee", desc: "Zero registration charges. Zero hidden costs. Just one monthly fee: ₹1,500." },
  { Icon: Mic2, title: "Perform on Stage", desc: "Every student gets to perform at recitals. Because music is meant to be heard." },
];

export function WhyVarjay() {
  return (
    <section className="bg-[#0D9488] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-6xl text-center font-semibold mb-16">
          Why 150+ students chose Varjay
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x divide-white/20">
          {items.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="px-6 py-8 lg:py-0"
            >
              <Icon className="w-12 h-12 mb-5" strokeWidth={1.5} />
              <h3 className="font-display text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-white/80 leading-relaxed text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
