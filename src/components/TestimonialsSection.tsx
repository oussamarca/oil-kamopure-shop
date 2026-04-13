import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "سارة م.", text: "بان الفرق فـ أسبوعين، شعري ولا أقوى وأكثف بزاف!" },
  { name: "فاطمة ز.", text: "نقص ليا التساقط بزاف، كنت كنخسر شعر كثير ودابا الحمد لله تحسن." },
  { name: "نجاة ب.", text: "رجع شعري كيكثف تدريجياً، ما توقعتش النتيجة تكون بهاد السرعة!" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background relative" dir="rtl">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">شهادات الزبونات</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            واش عجبهم <span className="text-gradient-gold">Oil Kamo</span>؟
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-luxury hover:shadow-gold transition-all duration-500"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-base text-foreground leading-relaxed mb-4">"{t.text}"</p>
              <p className="font-body text-sm text-muted-foreground font-semibold">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
