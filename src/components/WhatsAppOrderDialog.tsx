import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const WHATSAPP_NUMBER = "212606312350";

const orderSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100),
  city: z.string().trim().min(1, "La ville est requise").max(100),
});

interface WhatsAppOrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
  productPrice: string;
}

const WhatsAppOrderDialog = ({
  open,
  onOpenChange,
  productName,
  productPrice,
}: WhatsAppOrderDialogProps) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState<{ name?: string; city?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = orderSchema.safeParse({ name, city });
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as "name" | "city"] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Save to database
    supabase.from("whatsapp_orders").insert({
      customer_name: result.data.name,
      city: result.data.city,
      product_name: productName,
      product_price: productPrice,
    }).then(({ error }) => {
      if (error) console.error("[Order] DB save error:", error);
    });

    const text = `Bonjour, je m'appelle ${result.data.name}, je suis de ${result.data.city}, je veux commander ${productName}. Merci 🙏`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setName("");
    setCity("");
    setErrors({});
    onOpenChange(false);
  };

  const inputClass =
    "w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-foreground flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            Commander via WhatsApp
          </DialogTitle>
          <DialogDescription className="font-body text-sm text-muted-foreground">
            Remplissez vos informations pour commander <strong>{productName}</strong>
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2" noValidate>
          <div>
            <input
              type="text"
              placeholder="Votre Nom"
              value={name}
              onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
              className={inputClass}
              maxLength={100}
            />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Votre Ville"
              value={city}
              onChange={(e) => { setCity(e.target.value); setErrors((p) => ({ ...p, city: undefined })); }}
              className={inputClass}
              maxLength={100}
            />
            {errors.city && <p className="text-destructive text-xs mt-1">{errors.city}</p>}
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-body text-sm font-semibold tracking-wide shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
          >
            <MessageCircle className="w-4 h-4" />
            Confirmer la commande
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppOrderDialog;
