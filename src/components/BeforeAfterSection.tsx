import { motion } from "framer-motion";
import beforeAfterImg from "@/assets/before-after-real.png";

const BeforeAfterSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
            النتيجة <span className="text-gradient-gold">تتكلم</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-luxury">
            <img
              src={beforeAfterImg}
              alt="نتائج Oil Kamo قبل وبعد"
              className="w-full h-auto"
              loading="lazy"
              width={1280}
              height={640}
            />
            {/* Labels */}
            <div className="absolute bottom-0 inset-x-0 flex">
              <div className="flex-1 bg-destructive/80 backdrop-blur-sm py-3 text-center">
                <span className="font-body text-sm md:text-base font-semibold text-primary-foreground">
                  ❌ قبل الاستعمال
                </span>
              </div>
              <div className="flex-1 bg-secondary/90 backdrop-blur-sm py-3 text-center">
                <span className="font-body text-sm md:text-base font-semibold text-secondary-foreground">
                  ✅ بعد 3 إلى 4 أسابيع
                </span>
              </div>
            </div>
          </div>

          <p className="text-center font-body text-xs text-muted-foreground mt-4">
            * النتائج تختلف من شخص لآخر
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
