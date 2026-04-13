import { motion } from "framer-motion";
import { Leaf, Sparkles, Droplets, Shield } from "lucide-react";

const benefits = [
  { icon: Droplets, title: "تقليل تساقط الشعر", desc: "تركيبة طبيعية كتساعد على تقليل التساقط من الأسابيع الأولى." },
  { icon: Shield, title: "تقوية بصيلات الشعر", desc: "كتغذي البصيلات بعمق وكتقويها من الجذور." },
  { icon: Sparkles, title: "ملء الفراغات", desc: "كتحفز نمو الشعر الجديد فالمناطق الفارغة." },
  { icon: Leaf, title: "إزالة القشرة وترطيب الفروة", desc: "كتنظف الفروة من القشرة وكتوفر ترطيب عميق." },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-card relative" dir="rtl">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">فوائد Oil Kamo</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            ليش <span className="text-gradient-gold">Oil Kamo</span>؟
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-background rounded-2xl p-8 text-center shadow-luxury hover:shadow-gold transition-shadow duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
