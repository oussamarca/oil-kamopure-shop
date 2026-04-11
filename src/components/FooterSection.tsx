import logo from "@/assets/oil-kamo-logo.png";
import { Instagram, Facebook } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-charcoal py-16">
      <div className="container mx-auto px-6 text-center">
        <img src={logo} alt="Oil Kamo" className="h-20 w-auto mx-auto mb-6" loading="lazy" width={80} height={80} />
        <p className="font-elegant text-lg text-cream/50 italic mb-8 max-w-md mx-auto">
          Pure nature, luxurious care. Experience the power of 50 herbs in every drop.
        </p>
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://www.instagram.com/oil_kamo155?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-cream/40 hover:text-gold transition-colors">
            <Instagram size={16} /> Instagram
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-cream/40 hover:text-gold transition-colors">
            <Facebook size={16} /> Facebook
          </a>
          <a href="https://www.tiktok.com/@oil_kamo155" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-cream/40 hover:text-gold transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/></svg>
            TikTok
          </a>
        </div>
        <p className="font-body text-xs text-cream/30">© 2026 Oil Kamo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
