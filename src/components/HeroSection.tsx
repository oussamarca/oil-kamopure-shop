import { motion } from "framer-motion";
import productImg from "@/assets/hero-oil-kamo.jpeg";

const WHATSAPP_ORDER_URL = "https://wa.me/212606312350?text=" + encodeURIComponent("مرحبا، بغيت نطلب Oil Kamo 🌿");

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-hero-dark flex items-center overflow-hidden" dir="rtl">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-right"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-cream">ودّع تساقط الشعر</span>
            <br />
            <span className="text-gradient-gold">وارجع الكثافة ديالك طبيعياً 🌿</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-cream/60 max-w-lg mx-auto lg:mx-0 lg:mr-0 mb-8 leading-relaxed">
            Oil Kamo زيت طبيعي كيقوي البصيلات وكيعاون على تقليل التساقط واسترجاع كثافة الشعر
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-body text-sm tracking-widest uppercase shadow-gold hover:brightness-110 transition-all duration-300 text-primary-foreground"
              style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
            >
              🛒 اطلب الآن
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gold/10 blur-[80px] scale-75" />
            <img
              src={productImg}
              alt="Oil Kamo زيت طبيعي للشعر"
              className="relative z-10 max-h-[550px] w-auto glow-gold drop-shadow-2xl"
              width={500}
              height={600}
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
