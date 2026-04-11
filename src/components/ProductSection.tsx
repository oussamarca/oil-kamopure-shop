import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import productHerbes from "@/assets/product-herbes.jpg";
import productOilKamo from "@/assets/product-oil-kamo.jpg";
import productMasqueKamo from "@/assets/masque-kamo.jpeg";
import productCollection from "@/assets/oil-kamo-collection.jpeg";
import WhatsAppOrderDialog from "./WhatsAppOrderDialog";

interface Product {
  name: string;
  nameAr: string;
  price: string;
  image: string;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    name: "Oil Kamo Pure",
    nameAr: "زيت كامو",
    price: "150 MAD",
    image: productOilKamo,
    description:
      "Huile de Kamo Pure — a nourishing and brilliant elixir crafted from Morocco's finest botanicals. 50 ml / 1.7 fl.oz of pure, concentrated luxury.",
    features: [
      "Rich blend of 50 herbs",
      "Cold-pressed & chemical-free",
      "Strengthens & revitalizes",
      "Suitable for all hair types",
    ],
  },
  {
    name: "Masque Kamo",
    nameAr: "ماسك كامو",
    price: "120 MAD",
    image: productMasqueKamo,
    description:
      "Masque Kamo — an intense hair mask with a unique formula of 90 natural ingredients. Deep nourishment for damaged and dry hair.",
    features: [
      "90 natural ingredients",
      "Deep conditioning formula",
      "Repairs & hydrates",
      "Restores shine & softness",
    ],
  },
  {
    name: "Herbes de Beauté",
    nameAr: "أعشاب الجمال",
    price: "80 MAD",
    image: productHerbes,
    description:
      "Herbes de Beauté — a premium herbal blend for natural hair care rituals. Hand-selected botanicals for a luxurious at-home treatment.",
    features: [
      "Hand-picked herbal blend",
      "100% natural ingredients",
      "Traditional Moroccan recipe",
      "For hair rinses & masks",
    ],
  },
];

const ProductSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOrder = (product: Product) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  return (
    <section id="products" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Our Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Natural <span className="text-gradient-gold">Treasures</span>
          </h2>
        </motion.div>

        {/* Collection hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-20"
        >
          <img
            src={productCollection}
            alt="Oil Kamo full collection"
            className="rounded-3xl shadow-luxury max-h-[400px] w-auto object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative bg-background rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Image with overlay */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button
                    onClick={() => handleOrder(product)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-body text-sm font-semibold tracking-wide backdrop-blur-sm shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                    }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Commander via WhatsApp
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-1">
                  {product.nameAr}
                </p>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="font-elegant text-xs text-muted-foreground italic leading-relaxed mb-3">
                  {product.description}
                </p>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-1.5 font-body text-[11px] text-foreground/70"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Always-visible mobile button */}
                <button
                  onClick={() => handleOrder(product)}
                  className="mt-4 w-full flex md:hidden items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-body text-sm font-semibold tracking-wide shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Commander via WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <WhatsAppOrderDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          productName={selectedProduct.name}
          productPrice={selectedProduct.price}
        />
      )}
    </section>
  );
};

export default ProductSection;
