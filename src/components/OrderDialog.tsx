import { useState } from "react";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Banknote, CreditCard, Building2, CheckCircle2, Copy, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "212606312350";

const BANK_DETAILS = {
  name: "Oil Kamo",
  iban: "MA00 0000 0000 0000 0000 0000 00",
  bank: "Banque Populaire",
};

type PaymentMethod = "cod" | "paypal" | "bank" | null;

const orderSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100),
  city: z.string().trim().min(1, "La ville est requise").max(100),
  phone: z
    .string()
    .trim()
    .min(1, "Le numéro est requis")
    .regex(/^[+\d\s()-]{7,20}$/, "Numéro invalide"),
  note: z.string().trim().max(500).optional(),
  payment: z.enum(["cod", "paypal", "bank"], {
    required_error: "Choisissez un mode de paiement",
  }),
});

type FormErrors = Partial<Record<keyof z.infer<typeof orderSchema>, string>>;

interface OrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
  productPrice: string;
}

const paymentOptions: {
  id: PaymentMethod;
  icon: React.ReactNode;
  label: string;
  desc: string;
}[] = [
  {
    id: "cod",
    icon: <Banknote className="w-5 h-5" />,
    label: "Paiement à la livraison",
    desc: "Payez à la réception du produit",
  },
  {
    id: "paypal",
    icon: <CreditCard className="w-5 h-5" />,
    label: "Pay with PayPal",
    desc: "Paiement sécurisé en ligne",
  },
  {
    id: "bank",
    icon: <Building2 className="w-5 h-5" />,
    label: "Virement bancaire",
    desc: "Transférez directement sur notre compte",
  },
];

const OrderDialog = ({
  open,
  onOpenChange,
  productName,
  productPrice,
}: OrderDialogProps) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [payment, setPayment] = useState<PaymentMethod>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [step, setStep] = useState<"form" | "bank" | "success">("form");

  const resetForm = () => {
    setName("");
    setCity("");
    setPhone("");
    setNote("");
    setPayment(null);
    setErrors({});
    setStep("form");
  };

  const handleClose = (val: boolean) => {
    if (!val) resetForm();
    onOpenChange(val);
  };

  const trackEvent = (event: string, data: Record<string, string>) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", event, data);
    }
    console.log(`[Analytics] ${event}:`, data);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = orderSchema.safeParse({ name, city, phone, note, payment });
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as keyof FormErrors] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const d = result.data;

    trackEvent("order_submit", {
      product_name: productName,
      payment_method: d.payment,
    });

    if (d.payment === "cod") {
      const text = [
        `Bonjour, je souhaite commander :`,
        ``,
        `Produit : ${productName}`,
        `Taille : ${productPrice}`,
        ``,
        `Nom : ${d.name}`,
        `Ville : ${d.city}`,
        `Téléphone : ${d.phone}`,
        d.note ? `Note : ${d.note}` : "",
        `Paiement : À la livraison`,
        ``,
        `Lien : ${window.location.href}`,
      ]
        .filter(Boolean)
        .join("\n");
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer"
      );
      setStep("success");
    } else if (d.payment === "paypal") {
      // For now show success — replace with actual PayPal integration
      toast({
        title: "PayPal",
        description: "Redirection vers PayPal… (à configurer)",
      });
      setStep("success");
    } else if (d.payment === "bank") {
      setStep("bank");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copié !", description: text });
  };

  const inputClass =
    "w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300";

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-card border-border p-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {step === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-6"
            >
              <DialogHeader>
                <DialogTitle className="font-display text-xl text-foreground flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  Commander maintenant
                </DialogTitle>
                <DialogDescription className="font-body text-sm text-muted-foreground">
                  Remplissez vos informations pour commander{" "}
                  <strong>{productName}</strong>
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleSubmit}
                className="space-y-3 mt-4"
                noValidate
              >
                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Nom complet *"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrors((p) => ({ ...p, name: undefined }));
                    }}
                    className={inputClass}
                    maxLength={100}
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* City */}
                <div>
                  <input
                    type="text"
                    placeholder="Ville *"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                      setErrors((p) => ({ ...p, city: undefined }));
                    }}
                    className={inputClass}
                    maxLength={100}
                  />
                  {errors.city && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.city}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    placeholder="Numéro de téléphone *"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setErrors((p) => ({ ...p, phone: undefined }));
                    }}
                    className={inputClass}
                    maxLength={20}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Note */}
                <div>
                  <textarea
                    placeholder="Note (optionnel)"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className={`${inputClass} resize-none h-20`}
                    maxLength={500}
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <p className="font-body text-xs tracking-wide uppercase text-muted-foreground mb-2">
                    Mode de paiement *
                  </p>
                  <div className="grid gap-2">
                    {paymentOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setPayment(opt.id);
                          setErrors((p) => ({ ...p, payment: undefined }));
                        }}
                        className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl border text-left transition-all duration-200 ${
                          payment === opt.id
                            ? "border-primary bg-primary/10 ring-1 ring-primary/30"
                            : "border-border bg-background hover:border-primary/40"
                        }`}
                      >
                        <span
                          className={`flex-shrink-0 ${
                            payment === opt.id
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {opt.icon}
                        </span>
                        <div>
                          <p className="font-body text-sm font-medium text-foreground">
                            {opt.label}
                          </p>
                          <p className="font-body text-xs text-muted-foreground">
                            {opt.desc}
                          </p>
                        </div>
                        {payment === opt.id && (
                          <CheckCircle2 className="w-4 h-4 text-primary ml-auto flex-shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                  {errors.payment && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.payment}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-body text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Confirmer la commande
                </button>
              </form>
            </motion.div>
          )}

          {step === "bank" && (
            <motion.div
              key="bank"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-6"
            >
              <DialogHeader>
                <DialogTitle className="font-display text-xl text-foreground flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Virement bancaire
                </DialogTitle>
                <DialogDescription className="font-body text-sm text-muted-foreground">
                  Transférez le montant avec les informations ci-dessous
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 space-y-3">
                {[
                  { label: "Bénéficiaire", value: BANK_DETAILS.name },
                  { label: "Banque", value: BANK_DETAILS.bank },
                  { label: "IBAN", value: BANK_DETAILS.iban },
                  { label: "Référence", value: `CMD-${name.slice(0, 10).toUpperCase().replace(/\s/g, "")}` },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-2 bg-background border border-border rounded-xl px-4 py-3"
                  >
                    <div>
                      <p className="font-body text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-body text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(item.value)}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                ))}

                <p className="font-body text-xs text-muted-foreground text-center mt-2">
                  Envoyez-nous une confirmation de paiement via WhatsApp après le virement.
                </p>

                <div className="flex gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setStep("form")}
                    className="flex-1 px-4 py-3 rounded-full border border-border font-body text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    Retour
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const text = [
                        `Bonjour, j'ai effectué un virement bancaire :`,
                        ``,
                        `Produit : ${productName}`,
                        `Nom : ${name}`,
                        `Ville : ${city}`,
                        `Téléphone : ${phone}`,
                        `Paiement : Virement bancaire`,
                      ]
                        .join("\n");
                      window.open(
                        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
                        "_blank",
                        "noopener,noreferrer"
                      );
                      setStep("success");
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full text-white font-body text-sm font-semibold shadow-lg transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                    }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Confirmer
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Commande envoyée !
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Merci {name} ! Nous vous contacterons très bientôt pour confirmer votre commande.
              </p>
              <button
                type="button"
                onClick={() => handleClose(false)}
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase shadow-gold hover:brightness-110 transition-all duration-300"
              >
                Fermer
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
