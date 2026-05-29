import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#instruments" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">

      <nav
        className={`bg-white border-b border-amber-200 transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <a href="#" className="flex items-center">
            <img
              src="https://varjaymusic.com/wp-content/uploads/2024/05/logo.png"
              alt="Varjay Music Academy"
              className="h-20 w-26"
            />
          </a>
          <div className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-sm text-[#1C0A00] hover:text-[#F59E0B] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#F59E0B] text-[#1C0A00] font-semibold text-sm hover:bg-[#d97706] hover:text-white transition-all shadow-sm"
            >
              Register Now
            </a>
          </div>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-[#1C0A00]" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <img
              src="https://varjaymusic.com/wp-content/uploads/2024/05/logo.png"
              alt="Varjay"
              className="h-12"
            />
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="w-7 h-7 text-[#1C0A00]" />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-[#1C0A00]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center px-6 py-4 rounded-full bg-[#F59E0B] text-[#1C0A00] font-semibold"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
