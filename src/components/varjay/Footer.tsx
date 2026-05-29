import { MapPin, Phone, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";
import { INSTRUMENTS } from "./data";

export function Footer() {
  return (
    <footer className="bg-[#1C0A00] text-white pt-20 pb-8" id="faqs">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 pb-12">
          <div className="md:col-span-1">
            <img
              src="https://varjaymusic.com/wp-content/uploads/2024/05/logo.png"
              alt="Varjay"
              className="h-14 bg-white/95 rounded-lg p-2 inline-block"
            />
            <p className="mt-5 font-display italic text-[#F59E0B] text-lg leading-snug">
              Where talent meets<br />tradition.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#F59E0B] tracking-widest mb-5">INSTRUMENTS</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {INSTRUMENTS.map((i) => (
                <li key={i.name}><a href="#instruments" className="hover:text-[#F59E0B]">{i.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#F59E0B] tracking-widest mb-5">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-[#F59E0B]">About Us</a></li>
              <li><a href="#instruments" className="hover:text-[#F59E0B]">Courses</a></li>
              <li><a href="#gallery" className="hover:text-[#F59E0B]">Gallery</a></li>
              <li><a href="#youtube" className="hover:text-[#F59E0B]">Performances</a></li>
              <li><a href="#contact" className="hover:text-[#F59E0B]">Register</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#F59E0B] tracking-widest mb-5">CONTACT</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-[#F59E0B]" />Sanpada, Navi Mumbai</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-[#F59E0B]" />+91 777 000 3036</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-[#F59E0B]" />info@varjaymusic.com</li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="https://www.youtube.com/channel/UCxrYgHmwDxVIpVjFvVadKYA" target="_blank" rel="noreferrer"
                 className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F59E0B] hover:text-[#1C0A00] flex items-center justify-center transition-colors">
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/p/Varjay-Music-Academy-100077740792261/" target="_blank" rel="noreferrer"
                 className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F59E0B] hover:text-[#1C0A00] flex items-center justify-center transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/varjay.music.academy/" target="_blank" rel="noreferrer"
                 className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F59E0B] hover:text-[#1C0A00] flex items-center justify-center transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F59E0B]/40 pt-6 text-center font-mono text-xs text-white/60">
          © 2024 Varjay Music Academy · Sanpada, Navi Mumbai
        </div>
      </div>
    </footer>
  );
}
