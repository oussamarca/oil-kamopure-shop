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
    description: "Nourishing elixir from Morocco's finest botanicals. 50 ml.",
    features: ["Rich blend of 50 herbs", "Cold-pressed & chemical-free", "Strengthens & revitalizes", "Suitable for all hair types"],
  },
  {
    name: "Masque Kamo",
    nameAr: "ماسك كامو",
    price: "120 MAD",
    image: productMasqueKamo,
    description: "Intense hair mask with 90 natural ingredients.",
    features: ["90 natural ingredients", "Deep conditioning formula", "Repairs & hydrates", "Restores shine & softness"],
  },
  {
    name: "Herbes de Beauté",
    nameAr: "أعشاب الجمال",
    price: "80 MAD",
    image: productHerbes,
    description: "Premium herbal blend for natural hair care rituals.",
    features: ["Hand-picked herbal blend", "100% natural ingredients", "Traditional Moroccan recipe", "For hair rinses & masks"],
  },
  {
    name: "Collection Kamo",
    nameAr: "مجموعة كامو",
    price: "300 MAD",
    image: productCollection,
    description: "Complete set of Oil Kamo, Masque & Herbes de Beauté.",
    features: ["Full care routine", "Best value bundle", "Gift-ready packaging", "All hair types"],
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

        {/* Product cards — 2 col mobile, 3 col tablet, 4 col desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-background rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.03] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-1">
                  {product.nameAr}
                </p>
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="font-elegant text-xs text-muted-foreground italic leading-relaxed mb-2 line-clamp-1">
                  {product.description}
                </p>
                <p className="font-display text-lg font-bold text-primary mb-3">
                  {product.price}
                </p>

                {/* WhatsApp order button */}
                <button
                  onClick={() => handleOrder(product)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-white font-body text-xs md:text-sm font-semibold tracking-wide shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">Order via WhatsApp</span>
                  <span className="sm:hidden">Order</span>
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
