import { motion } from "framer-motion";
import beforeAfter from "@/assets/before-after.png";

const ImageGallerySection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Real Results
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            See the <span className="text-gradient-gold">Transformation</span>
          </h2>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border/50 max-w-3xl"
          >
            <img
              src={beforeAfter}
              alt="Hair transformation before and after using Oil Kamo"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={768}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySection;
