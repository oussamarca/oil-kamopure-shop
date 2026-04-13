import { motion } from "framer-motion";

const cards = [
  {
    icon: "🧴",
    title: "الاستعمال العادي",
    items: [
      "كنطبقو Oil Kamo على الشعر كامل (الجذور + الأطراف)",
      "كنديرو مساج خفيف للفروة باش يتشرب مزيان",
      "كنخليوه مدة 2 ساعات",
      "من بعد كنغسلو الشعر عادي بالشامبو",
    ],
    ordered: false,
  },
  {
    icon: "🌿",
    title: "طريقة الاستعمال كـ Mask طبيعي",
    items: [
      "كنخدو الأعشاب لي فالساشية",
      "كنغليوهم فـ ماء سخون",
      "منين يبرد شوية، كنصفّيو الماء",
      "كنخلطو داك الماء مع الماسك ديال الشعر",
      "كنطبقوه غير على جذور الشعر",
      "من بعد كندهنو شوية من Oil Kamo غير فـ أطراف الشعر",
      "كنخليوه مدة 2 ساعات",
      "ومن بعد كنغسلو الشعر",
    ],
    ordered: true,
  },
  {
    icon: "💡",
    title: "نصائح",
    items: [
      "ديريه 2 مرات فالسيمانة باش تبان النتيجة",
      "مفيد للشعر الجاف والمتقصف",
      "كيساعد على الترطيب والتطويل",
    ],
    ordered: false,
  },
];

const HowToUseSection = () => (
  <section className="py-24 bg-background relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
          🌿 طريقة الاستعمال
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" dir="rtl">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 hover:shadow-xl hover:border-primary/30 hover:scale-[1.02] transition-all duration-500"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
              <span className="text-2xl">{card.icon}</span>
              {card.title}
            </h3>

            {card.ordered ? (
              <ol className="space-y-3 list-decimal list-inside text-muted-foreground font-body text-sm leading-relaxed">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul className="space-y-3 text-muted-foreground font-body text-sm leading-relaxed">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowToUseSection;
