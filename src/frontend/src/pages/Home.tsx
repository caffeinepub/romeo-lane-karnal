import { Link } from "@tanstack/react-router";
import { Award, Star, Users, UtensilsCrossed } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useAddReservation } from "../hooks/useQueries";

const galleryImages = [
  {
    src: "/assets/generated/hero-dining.dim_1600x900.jpg",
    caption: "The Main Dining Hall",
  },
  {
    src: "/assets/generated/signature-dish.dim_800x600.jpg",
    caption: "Signature Steak",
  },
  {
    src: "/assets/generated/cocktails.dim_800x600.jpg",
    caption: "Craft Cocktails",
  },
  {
    src: "/assets/generated/events-dining.dim_800x600.jpg",
    caption: "Private Events",
  },
  { src: "/assets/generated/ambiance.dim_800x600.jpg", caption: "The Lounge" },
  {
    src: "/assets/generated/dessert.dim_800x600.jpg",
    caption: "Luxury Desserts",
  },
];

const flavors = [
  {
    img: "/assets/generated/signature-dish.dim_800x600.jpg",
    title: "Signature Mains",
    desc: "Masterfully crafted steaks, slow-braised lamb, and contemporary Indian fusion that redefines fine dining.",
  },
  {
    img: "/assets/generated/cocktails.dim_800x600.jpg",
    title: "Handcrafted Cocktails",
    desc: "Our mixologists curate artisanal cocktails using premium spirits, house-made syrups, and exotic botanicals.",
  },
  {
    img: "/assets/generated/dessert.dim_800x600.jpg",
    title: "Artisan Desserts",
    desc: "From dark chocolate spheres with gold leaf to deconstructed gulab jamun — our desserts are edible art.",
  },
];

const stats = [
  { icon: Star, val: "4.8", unit: "★", label: "Google Rating" },
  { icon: UtensilsCrossed, val: "80+", unit: "", label: "Signature Dishes" },
  { icon: Users, val: "500+", unit: "", label: "Guests Weekly" },
  { icon: Award, val: "#1", unit: "", label: "In Karnal" },
];

/* ── Reusable kicker label with flanking hairlines ─────────── */
function Kicker({
  label,
  align = "center",
}: { label: string; align?: "center" | "left" }) {
  return align === "center" ? (
    <span className="section-kicker">{label}</span>
  ) : (
    <span className="section-kicker-left">{label}</span>
  );
}

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });
  const mutation = useAddReservation();

  const handleReservation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time) {
      toast.error("Please fill all required fields.");
      return;
    }
    try {
      await mutation.mutateAsync({
        date: form.date,
        time: form.time,
        guests: BigInt(form.guests),
        name: form.name,
        phone: form.phone,
        specialRequests: "",
      });
      const msg = encodeURIComponent(
        `Hello Romeo Lane Karnal! I'd like to confirm my reservation for ${form.name}, ${form.date} at ${form.time} for ${form.guests} guests.`,
      );
      window.open(`https://wa.me/919109107900?text=${msg}`, "_blank");
      toast.success("Reservation submitted! Redirecting to WhatsApp...");
      setForm({ name: "", phone: "", date: "", time: "", guests: "2" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      {/* ══════════════════════════════════════════════
          HERO — cinematic, Ken Burns, layered overlay
      ══════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Ken Burns background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-kenburns"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-dining.dim_1600x900.jpg')",
          }}
        />

        {/* Layer 1 — cinematic edge vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, transparent 30%, rgba(0,0,0,0.72) 100%)",
          }}
        />

        {/* Layer 2 — bottom-up dark pool for text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.35) 45%, transparent 75%)",
          }}
        />

        {/* Layer 3 — subtle top darkening */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 30%)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Badge pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-gold/90 border border-gold/30 px-6 py-2 mb-10">
              <span className="w-1 h-1 rounded-full bg-gold" />
              Top-Rated Fine Dining · Karnal, Haryana
              <span className="w-1 h-1 rounded-full bg-gold" />
            </span>
          </motion.div>

          {/* Three-tier typographic headline */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Line 1 — uppercase, white, tight */}
            <p className="font-serif text-2xl md:text-3xl text-white/80 uppercase tracking-[0.35em] mb-2">
              Karnal&apos;s Most
            </p>

            {/* Line 2 — the brand moment: oversized italic gold */}
            <h1
              className="font-serif text-6xl md:text-8xl lg:text-[7rem] text-gold leading-none mb-3"
              style={{ fontStyle: "italic", letterSpacing: "-0.01em" }}
            >
              Premium Dining
            </h1>

            {/* Line 3 — refined footnote in light sans */}
            <p
              className="text-sm md:text-base text-white/60 uppercase tracking-[0.5em] font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Experience
            </p>
          </motion.div>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="text-xs text-foreground/55 tracking-[0.3em] uppercase mt-7 mb-10"
          >
            Where luxury meets flavour in the heart of Haryana
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/reservations" data-ocid="hero.primary_button">
              <button
                type="button"
                className="btn-burgundy text-xs px-12 py-4 border border-burgundy-light"
              >
                Reserve a Table in Karnal
              </button>
            </Link>
            <Link to="/menu" data-ocid="hero.secondary_button">
              <button
                type="button"
                className="btn-outline-gold text-xs px-12 py-4"
              >
                Explore the Menu
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Animated scroll mouse indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <div className="scroll-mouse">
            <div className="scroll-dot" />
          </div>
          <span className="text-[8px] uppercase tracking-[0.45em] text-foreground/35">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          STATS — monumental numbers
      ══════════════════════════════════════════════ */}
      <section className="bg-luxury-charcoal border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4">
          {stats.map(({ icon: Icon, val, unit, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-1 py-6 px-4 group"
              style={{
                borderRight: i < 3 ? "1px solid oklch(0.22 0 0)" : undefined,
              }}
            >
              <Icon size={14} className="text-gold/60 mb-2" />
              {/* Monumental number */}
              <div className="flex items-baseline gap-0.5">
                <span className="font-serif text-5xl md:text-6xl text-gold leading-none">
                  {val}
                </span>
                {unit && (
                  <span className="font-serif text-2xl text-gold/70 leading-none">
                    {unit}
                  </span>
                )}
              </div>
              {/* Thin gold separator */}
              <div
                className="w-8 h-px my-2"
                style={{ background: "oklch(0.72 0.09 78 / 0.35)" }}
              />
              <span className="text-[9px] uppercase tracking-[0.4em] text-foreground/45">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          OUR STORY
      ══════════════════════════════════════════════ */}
      <section className="section-pad max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Kicker label="Our Story" align="left" />
            <div className="gold-divider my-5" />
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-[1.1]">
              Born to Redefine
              <br />
              <span className="text-gold italic">Luxury Dining</span>
            </h2>
            <p className="text-sm text-foreground/75 leading-[1.85] mb-5">
              Romeo Lane was born from a singular vision — to bring Karnal its
              most luxurious, immersive dining experience. Nestled at the heart
              of Haryana, we fuse the warmth of Indian culinary tradition with
              the sophistication of global fine dining.
            </p>
            <p className="text-sm text-foreground/75 leading-[1.85] mb-8">
              From the hand-selected wines to the bespoke ambiance, every detail
              at Romeo Lane is curated for those who expect nothing less than
              extraordinary.
            </p>

            {/* Editorial pullquote */}
            <div
              className="pl-5 mb-8"
              style={{ borderLeft: "2px solid oklch(0.72 0.09 78 / 0.55)" }}
            >
              <p className="font-serif text-xl text-foreground/40 italic leading-relaxed">
                &ldquo;Where every visit becomes a memory worth keeping.&rdquo;
              </p>
            </div>

            <Link to="/about" data-ocid="story.secondary_button">
              <button type="button" className="btn-outline-gold text-[11px]">
                Discover Our Story
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Gold frame */}
            <div className="border border-gold/25 p-2">
              <img
                src="/assets/generated/ambiance.dim_800x600.jpg"
                alt="Romeo Lane Karnal ambiance"
                className="w-full h-[26rem] object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative corner accents */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/20 pointer-events-none" />
            <div className="absolute -top-4 -right-4 w-20 h-20 border border-gold/15 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SIGNATURE FLAVORS
      ══════════════════════════════════════════════ */}
      <section className="section-pad bg-luxury-graphite">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <Kicker label="Culinary Excellence" />
            <div className="gold-divider mx-auto my-5" />
            <h2 className="font-serif text-4xl md:text-5xl text-white uppercase tracking-[0.08em]">
              Signature <span className="text-gold italic">Flavors</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {flavors.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="luxury-card group overflow-hidden"
                data-ocid={`flavors.card.${i + 1}`}
              >
                <div className="overflow-hidden h-56">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-gold mb-2">
                    {f.title}
                  </h3>
                  <p className="text-xs text-foreground/65 leading-[1.75]">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" data-ocid="flavors.primary_button">
              <button type="button" className="btn-gold text-[11px]">
                View Full Menu
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          QUICK RESERVATION — parallax bg
      ══════════════════════════════════════════════ */}
      <section className="section-pad relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('/assets/generated/events-dining.dim_800x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-luxury-black/82" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Kicker label="Reserve Now" />
          <div className="gold-divider mx-auto my-5" />
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-3 uppercase tracking-[0.05em]">
            Book Your Table
          </h2>
          <p className="text-xs text-foreground/50 tracking-widest mb-10 uppercase">
            Secure your experience at Karnal&apos;s finest dining destination
          </p>

          <form
            onSubmit={handleReservation}
            className="luxury-card p-8 text-left"
            data-ocid="quick_reservation.panel"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="qr-name"
                  className="block text-[10px] uppercase tracking-widest text-gold mb-2"
                >
                  Name *
                </label>
                <input
                  id="qr-name"
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Your full name"
                  className="w-full bg-luxury-dark border border-border focus:border-gold outline-none px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 transition-colors"
                  data-ocid="quick_reservation.input"
                />
              </div>
              <div>
                <label
                  htmlFor="qr-phone"
                  className="block text-[10px] uppercase tracking-widest text-gold mb-2"
                >
                  Phone *
                </label>
                <input
                  id="qr-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  placeholder="Your phone number"
                  className="w-full bg-luxury-dark border border-border focus:border-gold outline-none px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 transition-colors"
                  data-ocid="quick_reservation.input"
                />
              </div>
              <div>
                <label
                  htmlFor="qr-date"
                  className="block text-[10px] uppercase tracking-widest text-gold mb-2"
                >
                  Date *
                </label>
                <input
                  id="qr-date"
                  type="date"
                  value={form.date}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, date: e.target.value }))
                  }
                  className="w-full bg-luxury-dark border border-border focus:border-gold outline-none px-4 py-3 text-sm text-foreground transition-colors"
                  data-ocid="quick_reservation.input"
                />
              </div>
              <div>
                <label
                  htmlFor="qr-time"
                  className="block text-[10px] uppercase tracking-widest text-gold mb-2"
                >
                  Time *
                </label>
                <select
                  id="qr-time"
                  value={form.time}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, time: e.target.value }))
                  }
                  className="w-full bg-luxury-dark border border-border focus:border-gold outline-none px-4 py-3 text-sm text-foreground transition-colors"
                  data-ocid="quick_reservation.select"
                >
                  <option value="">Select time</option>
                  {[
                    "12:00 PM",
                    "1:00 PM",
                    "2:00 PM",
                    "7:00 PM",
                    "8:00 PM",
                    "9:00 PM",
                    "10:00 PM",
                    "11:00 PM",
                  ].map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="qr-guests"
                  className="block text-[10px] uppercase tracking-widest text-gold mb-2"
                >
                  Guests
                </label>
                <select
                  id="qr-guests"
                  value={form.guests}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, guests: e.target.value }))
                  }
                  className="w-full bg-luxury-dark border border-border focus:border-gold outline-none px-4 py-3 text-sm text-foreground transition-colors"
                  data-ocid="quick_reservation.select"
                >
                  {["1", "2", "3", "4", "5", "6", "7", "8", "10+"].map((g) => (
                    <option key={g} value={g}>
                      {g} {Number(g) === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              disabled={mutation.isPending}
              className="btn-gold w-full text-center mt-6 py-4 disabled:opacity-50"
              data-ocid="quick_reservation.submit_button"
            >
              {mutation.isPending
                ? "Confirming..."
                : "Confirm Reservation via WhatsApp"}
            </button>
          </form>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          GALLERY STRIP
      ══════════════════════════════════════════════ */}
      <section className="section-pad max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <Kicker label="Instagram-Worthy" />
          <div className="gold-divider mx-auto my-5" />
          <h2 className="font-serif text-4xl text-white uppercase tracking-[0.08em]">
            The <span className="text-gold italic">Experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden aspect-square cursor-pointer"
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-end p-3">
                <span className="text-[9px] text-gold uppercase tracking-widest">
                  {img.caption}
                </span>
              </div>
              {/* Gold border reveal */}
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/55 transition-colors duration-350 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery" data-ocid="gallery.primary_button">
            <button type="button" className="btn-outline-gold text-[11px]">
              View Full Gallery
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
