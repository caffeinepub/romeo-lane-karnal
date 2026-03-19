import { Link } from "@tanstack/react-router";
import { Crown, Flame, Star } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Crown,
    title: "Excellence",
    desc: "Every dish, every drink, every interaction is held to the highest standard. We compromise on nothing.",
  },
  {
    icon: Star,
    title: "Exclusivity",
    desc: "Romeo Lane is not just a restaurant — it's a membership to Karnal's most coveted dining circle.",
  },
  {
    icon: Flame,
    title: "Experience",
    desc: "We craft full sensory journeys — from the moment you step in to your last sip of our signature digestif.",
  },
];

export default function About() {
  return (
    <div>
      {/* Banner */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/ambiance.dim_800x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-12">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
            About Us
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-white mt-2 uppercase">
            Our <span className="text-gold italic">Story</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
              The Beginning
            </span>
            <div className="gold-divider my-4" />
            <h2 className="font-serif text-4xl text-white mb-6">
              A Vision to Redefine
              <br />
              <span className="text-gold italic">Haryana's Finest</span>
            </h2>
            <p className="text-sm text-foreground/65 leading-7 mb-5">
              Romeo Lane was born from a singular obsession: to create a dining
              destination in Karnal that rivals the finest establishments in
              Delhi, Mumbai, and beyond. Founded with a belief that luxury is
              not a privilege reserved for metro cities, we set out to craft an
              experience that the people of Haryana truly deserve.
            </p>
            <p className="text-sm text-foreground/65 leading-7 mb-5">
              Located at the iconic Namaste Chowk, Grand Trunk Road, our
              restaurant is a sanctuary from the ordinary — where the evening
              begins the moment you walk through our doors. The warm golden
              glow, the whisper of jazz, the scent of fresh herbs — everything
              is engineered to transport you.
            </p>
            <p className="text-sm text-foreground/65 leading-7">
              Our culinary team blends the rich traditions of Indian cuisine
              with contemporary global techniques, resulting in dishes that are
              simultaneously familiar and revelatory. This is not just dinner.
              This is Romeo Lane.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="border border-gold/20 p-2">
              <img
                src="/assets/generated/hero-dining.dim_1600x900.jpg"
                alt="Romeo Lane Karnal dining room"
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
              What We Stand For
            </span>
            <div className="gold-divider mx-auto my-4" />
            <h2 className="font-serif text-4xl text-white uppercase">
              Our <span className="text-gold italic">Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="luxury-card p-8 text-center"
                data-ocid={`values.card.${i + 1}`}
              >
                <div className="w-14 h-14 border border-gold/40 flex items-center justify-center mx-auto mb-5">
                  <v.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl text-gold mb-3">{v.title}</h3>
                <p className="text-xs text-foreground/60 leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance highlights */}
      <section className="section-pad max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
            Ambiance
          </span>
          <div className="gold-divider mx-auto my-4" />
          <h2 className="font-serif text-4xl text-white uppercase">
            The <span className="text-gold italic">Space</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gold/20 p-2 overflow-hidden group">
            <img
              src="/assets/generated/events-dining.dim_800x600.jpg"
              alt="Private dining at Romeo Lane"
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="border border-gold/20 p-2 overflow-hidden group">
            <img
              src="/assets/generated/cocktails.dim_800x600.jpg"
              alt="Bar at Romeo Lane Karnal"
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="text-center mt-12">
          <Link to="/reservations" data-ocid="about.primary_button">
            <button
              type="button"
              className="btn-burgundy text-[11px] border border-burgundy-light px-12 py-4"
            >
              Reserve Your Table
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
