import { motion } from "framer-motion";
import productImg from "@/assets/product-hero.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-hero-dark flex items-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16 relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-light mb-4">
            100% Natural · 50 Herbs Blend
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-cream">The Power of</span>
            <br />
            <span className="text-gradient-gold">Pure Nature</span>
          </h1>
          <p className="font-elegant text-xl md:text-2xl text-cream/60 max-w-lg mx-auto lg:mx-0 mb-8 italic">
            A luxurious blend of 50 precious herbs, crafted for extraordinary hair transformation.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="#products"
              className="inline-block px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase shadow-gold hover:brightness-110 transition-all duration-300"
            >
              Discover
            </a>
            <a
              href="#benefits"
              className="inline-block px-8 py-3.5 rounded-full border border-gold/30 text-cream/80 font-body text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Product Image */}
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
              alt="Oil Kamo premium natural hair oil"
              className="relative z-10 max-h-[550px] w-auto glow-gold drop-shadow-2xl"
              width={500}
              height={600}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
