import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_ORDER_URL = "https://wa.me/212606312350?text=" + encodeURIComponent("مرحبا، بغيت نطلب Oil Kamo 🌿");

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-hero-dark relative overflow-hidden" dir="rtl">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-6">
            اطلب <span className="text-gradient-gold">Oil Kamo</span> الآن
          </h2>
          <p className="font-body text-lg text-cream/50 mb-10 max-w-md mx-auto">
            🔥 عرض محدود – التوصيل لجميع مدن المغرب 🇲🇦
          </p>

          <a
            href={WHATSAPP_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full font-body text-base md:text-lg font-semibold tracking-wide shadow-gold hover:brightness-110 hover:scale-105 active:scale-[0.98] transition-all duration-300 text-primary-foreground"
            style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
          >
            <MessageCircle className="w-6 h-6" />
            اطلب Oil Kamo الآن
          </a>

          <p className="font-body text-xs text-cream/30 mt-6">
            الطلب عبر واتساب · رد سريع · توصيل آمن
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
