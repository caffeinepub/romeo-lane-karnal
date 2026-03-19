import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const images = [
  {
    src: "/assets/generated/hero-dining.dim_1600x900.jpg",
    caption: "The Grand Dining Hall",
    span: "lg:col-span-2",
  },
  {
    src: "/assets/generated/signature-dish.dim_800x600.jpg",
    caption: "Signature Steak",
  },
  {
    src: "/assets/generated/cocktails.dim_800x600.jpg",
    caption: "Craft Cocktail Bar",
  },
  {
    src: "/assets/generated/events-dining.dim_800x600.jpg",
    caption: "Private Events",
  },
  { src: "/assets/generated/ambiance.dim_800x600.jpg", caption: "The Lounge" },
  {
    src: "/assets/generated/dessert.dim_800x600.jpg",
    caption: "Artisan Desserts",
  },
  {
    src: "/assets/generated/indian-fusion.dim_800x600.jpg",
    caption: "Indian Fusion Cuisine",
    span: "lg:col-span-2",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<(typeof images)[0] | null>(null);

  return (
    <div>
      {/* Banner */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-dining.dim_1600x900.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-10">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
            Visual Journey
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-white mt-2 uppercase">
            The <span className="text-gold italic">Gallery</span>
          </h1>
        </div>
      </section>

      <section className="section-pad max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
            Romeo Lane Karnal
          </span>
          <div className="gold-divider mx-auto my-4" />
          <h2 className="font-serif text-3xl text-white">
            Captured <span className="text-gold italic">Moments</span>
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          data-ocid="gallery.table"
        >
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden cursor-pointer ${img.span ?? ""}`}
              onClick={() => setSelected(img)}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <div className="overflow-hidden">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <ZoomIn size={28} className="text-gold" />
                <span className="text-[11px] uppercase tracking-widest text-white">
                  {img.caption}
                </span>
              </div>
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/60 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
            data-ocid="gallery.modal"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute -top-12 right-0 text-foreground/60 hover:text-gold transition-colors"
                onClick={() => setSelected(null)}
                data-ocid="gallery.close_button"
              >
                <X size={28} />
              </button>
              <div className="border border-gold/30 p-2">
                <img
                  src={selected.src}
                  alt={selected.caption}
                  className="w-full max-h-[75vh] object-contain"
                />
              </div>
              <p className="text-center text-xs text-gold uppercase tracking-widest mt-4">
                {selected.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
