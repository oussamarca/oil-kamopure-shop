import { motion } from "framer-motion";
import productBottle from "@/assets/product-hero-bottle.jpg";

const ProductShowcase = () => {
  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden" dir="rtl">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center order-2 lg:order-1"
        >
          <img
            src={productBottle}
            alt="Oil Kamo زيت طبيعي فاخر"
            className="max-h-[500px] w-auto rounded-2xl shadow-luxury"
            loading="lazy"
            width={800}
            height={800}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">المنتج</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Oil Kamo <span className="text-gradient-gold">Pure</span>
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
            زيت فاخر مصنوع من مزيج 50 عشبة طبيعية مختارة بعناية. بدون مواد كيميائية، بدون بارابين — فقط أجود خلاصات الطبيعة لشعر أقوى وأكثف.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {["50 عشبة طبيعية", "بدون مواد كيميائية", "مناسب لجميع أنواع الشعر", "معصور على البارد"].map((f) => (
              <div key={f} className="flex items-center gap-2 font-body text-sm text-foreground">
                <span className="text-primary">✓</span>
                {f}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
