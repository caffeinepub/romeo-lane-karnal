import { Link } from "@tanstack/react-router";
import { Briefcase, Cake, Heart, Star, Users, Wine } from "lucide-react";
import { motion } from "motion/react";

const events = [
  {
    icon: Cake,
    title: "Birthday Celebrations",
    desc: "Make your birthday unforgettable. We offer curated menus, custom cakes, personalised décor, and dedicated service for the most exclusive birthday dining experience in Karnal.",
    highlight: "Custom cake · Décor · Dedicated host",
  },
  {
    icon: Heart,
    title: "Anniversary Dinners",
    desc: "Celebrate your love story in Karnal's most romantic setting. Private candlelit tables, rose petal arrangements, champagne on arrival, and a specially crafted tasting menu.",
    highlight: "Candlelit setup · Champagne · Tasting menu",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    desc: "From power lunches to client entertainment, Romeo Lane offers the perfect backdrop for high-level business interactions. Professional service, premium cuisine, private dining rooms.",
    highlight: "Private room · A/V setup · Business menu",
  },
  {
    icon: Users,
    title: "Private Dining",
    desc: "Reserve our exclusive private dining suite for intimate gatherings of up to 30 guests. Complete privacy, bespoke menu, personal sommelier, and white-glove service.",
    highlight: "Up to 30 guests · Personal sommelier · Bespoke menu",
  },
  {
    icon: Star,
    title: "Social Gatherings",
    desc: "Celebrate life's special moments with your circle. We host kitty parties, reunion dinners, festive celebrations, and social events with curated packages for every group.",
    highlight: "Group packages · Festive décor · DJ available",
  },
  {
    icon: Wine,
    title: "Cocktail Receptions",
    desc: "Pre-dinner cocktail receptions and standing receptions with canapés, flowing cocktails and our signature mocktail menu — perfect for product launches or engagement parties.",
    highlight: "Standing reception · Canapés · Premium bar",
  },
];

export default function Events() {
  return (
    <div>
      {/* Banner */}
      <section className="relative h-80 md:h-96 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/events-dining.dim_800x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/55 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-12">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
            Private Events
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-white mt-2 uppercase">
            Celebrate in <span className="text-gold italic">Style</span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 max-w-3xl mx-auto px-6 text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
          Events at Romeo Lane
        </span>
        <div className="gold-divider mx-auto my-4" />
        <p className="text-sm text-foreground/60 leading-relaxed">
          Whether you are marking a milestone, hosting clients, or simply
          celebrating life, Romeo Lane Karnal transforms every occasion into an
          extraordinary memory. Our dedicated events team crafts personalised
          experiences down to the last detail.
        </p>
      </section>

      {/* Event types */}
      <section className="section-pad bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl text-white uppercase">
              Event <span className="text-gold italic">Experiences</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((ev, i) => (
              <motion.div
                key={ev.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="luxury-card p-7 group"
                data-ocid={`events.card.${i + 1}`}
              >
                <div className="w-12 h-12 border border-gold/40 group-hover:border-gold flex items-center justify-center mb-5 transition-colors">
                  <ev.icon size={20} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl text-gold mb-3">
                  {ev.title}
                </h3>
                <p className="text-xs text-foreground/60 leading-relaxed mb-4">
                  {ev.desc}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-[10px] uppercase tracking-widest text-gold-muted">
                    {ev.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/ambiance.dim_800x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-luxury-black/80" />
        <div className="relative z-10 text-center px-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
            Enquire Now
          </span>
          <div className="gold-divider mx-auto my-4" />
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-5 uppercase">
            Plan Your <span className="text-gold italic">Event</span>
          </h2>
          <p className="text-sm text-foreground/60 mb-8 max-w-lg mx-auto">
            Contact our events team to discuss your requirements. We'll create a
            bespoke proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" data-ocid="events.primary_button">
              <button
                type="button"
                className="btn-burgundy border border-burgundy-light text-xs px-10 py-4"
              >
                Enquire About Events
              </button>
            </Link>
            <a
              href="https://wa.me/919109107900?text=Hello%20Romeo%20Lane%20Karnal!%20I%27d%20like%20to%20enquire%20about%20hosting%20a%20private%20event."
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="events.secondary_button"
            >
              <button
                type="button"
                className="btn-outline-gold text-xs px-10 py-4"
              >
                WhatsApp Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
