import { motion } from "framer-motion";
import { Leaf, Sparkles, Droplets, Shield } from "lucide-react";

const benefits = [
  { icon: Leaf, title: "50 Natural Herbs", desc: "A rich formula of 50 carefully selected botanical ingredients." },
  { icon: Sparkles, title: "Radiant Shine", desc: "Restores brilliance and luminosity to dull, lifeless hair." },
  { icon: Droplets, title: "Deep Nourishment", desc: "Penetrates deeply to hydrate and strengthen every strand." },
  { icon: Shield, title: "100% Pure", desc: "No chemicals, no parabens — only nature's finest extracts." },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">Why Oil Kamo</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Nature's <span className="text-gradient-gold">Luxury</span>
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
              className="group bg-card rounded-2xl p-8 text-center shadow-luxury hover:shadow-gold transition-shadow duration-500"
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
