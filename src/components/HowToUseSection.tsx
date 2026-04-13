import { motion } from "framer-motion";

const steps = [
  { num: "1", icon: "💧", title: "ضع كمية قليلة على الفروة", desc: "خد كمية صغيرة من الزيت وطبقها مباشرة على فروة الرأس." },
  { num: "2", icon: "💆", title: "دلك بلطف لمدة 5 دقائق", desc: "دير مساج خفيف بأطراف الصوابع باش الزيت يتشرب مزيان." },
  { num: "3", icon: "🚿", title: "اتركه 2-3 ساعات ثم اغسله", desc: "خليه يخدم على شعرك، ومن بعد غسلو بالشامبو عادي." },
];

const HowToUseSection = () => (
  <section className="py-24 bg-card relative overflow-hidden" dir="rtl">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">طريقة الاستعمال</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
          🌿 كيفاش <span className="text-gradient-gold">تستعملو</span>؟
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-background rounded-2xl border border-border/50 p-8 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-500"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center font-display text-lg font-bold text-primary">
              {step.num}
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowToUseSection;
