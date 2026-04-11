import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "شنو هو Oil Kamo؟",
    a: "Oil Kamo هو زيت طبيعي 100% مصنوع من خليط ديال 50 عشبة مغربية، معصور على البارد بدون أي مواد كيماوية. كيغذي الشعر من الجذور حتى الأطراف.",
  },
  {
    q: "واش مناسب لجميع أنواع الشعر؟",
    a: "نعم، Oil Kamo مناسب لجميع أنواع الشعر: الجاف، الدهني، المتقصف، والعادي. التركيبة الطبيعية كتتكيف مع احتياجات كل نوع.",
  },
  {
    q: "شحال من مرة خصني نستعملو فالسيمانة؟",
    a: "كننصحو باستعمالو 2 مرات فالسيمانة باش تبان النتيجة. الانتظام هو المفتاح للحصول على شعر صحي ولامع.",
  },
  {
    q: "واش كاين شي آثار جانبية؟",
    a: "لا، المنتج طبيعي 100% وما فيه حتى مادة كيماوية. ولكن إلا عندك حساسية لشي عشبة معينة، جربيه على جزء صغير من الجلد أولاً.",
  },
  {
    q: "شحال الثمن وكيفاش نقدر نطلب؟",
    a: "Oil Kamo بـ 80 درهم، الماسك بـ 20 درهم، الأعشاب بـ 10 دراهم، والمجموعة الكاملة بـ 150 درهم. تقدر تطلب مباشرة عبر واتساب من الأزرار لي فالموقع.",
  },
  {
    q: "واش التوصيل متوفر لجميع المدن؟",
    a: "نعم، كنوصلو لجميع مدن المغرب. التوصيل كيكون في أقرب وقت ممكن حسب المدينة ديالك.",
  },
  {
    q: "فوقاش غادي تبان النتيجة؟",
    a: "النتائج الأولية كتبان من بعد أسبوعين ديال الاستعمال المنتظم. النتيجة الكاملة كتبان بعد شهر تقريباً.",
  },
];

const FAQSection = () => (
  <section className="py-24 bg-card relative overflow-hidden">
    <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
          FAQ
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
          ❓ الأسئلة الشائعة
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        dir="rtl"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background border border-border/50 rounded-xl px-5 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg transition-all duration-300"
            >
              <AccordionTrigger className="font-display text-sm md:text-base font-semibold text-foreground hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
