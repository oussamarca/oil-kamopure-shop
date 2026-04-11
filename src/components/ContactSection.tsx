import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Send, MessageCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  phone: z.string().trim().min(1, "Phone is required").max(30, "Phone too long"),
  message: z.string().trim().min(1, "Message is required").max(500, "Message too long"),
});

type ContactForm = z.infer<typeof contactSchema>;

const WHATSAPP_NUMBER = "212606312350";

const ContactSection = () => {
  const [form, setForm] = useState<ContactForm>({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [sent, setSent] = useState(false);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof ContactForm;
        fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const { name, phone, message } = result.data;

    // Save to database
    supabase.from("contact_submissions").insert({ name, phone, message }).then(({ error }) => {
      if (error) console.error("[Contact] DB save error:", error);
    });

    const text = `Hello Oil Kamo! 🌿\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full bg-charcoal/50 border border-gold/20 rounded-xl px-5 py-3.5 font-body text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all duration-300";

  return (
    <section id="contact" className="py-24 bg-hero-dark relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-light mb-3">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream">
            Order <span className="text-gradient-gold">Now</span>
          </h2>
          <p className="font-elegant text-lg text-cream/50 italic mt-4 max-w-md mx-auto">
            Send us your details and we'll connect with you on WhatsApp instantly.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={inputClass}
              maxLength={100}
            />
            {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone / WhatsApp Number"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className={inputClass}
              maxLength={30}
            />
            {errors.phone && <p className="text-destructive text-xs mt-1 font-body">{errors.phone}</p>}
          </div>
          <div>
            <textarea
              placeholder="Your message or order details..."
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={4}
              className={`${inputClass} resize-none`}
              maxLength={500}
            />
            {errors.message && <p className="text-destructive text-xs mt-1 font-body">{errors.message}</p>}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase shadow-gold hover:brightness-110 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Send via WhatsApp
            </button>
          </div>

          {sent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gold-light font-body text-sm flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Opening WhatsApp…
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
