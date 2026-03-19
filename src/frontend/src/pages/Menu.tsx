import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  signature?: boolean;
  img?: string;
  veg?: boolean;
};

type MenuSection = {
  id: string;
  label: string;
  items: MenuItem[];
};

const menu: MenuSection[] = [
  {
    id: "starters",
    label: "Starters",
    items: [
      {
        name: "Crispy Lamb Seekh",
        desc: "Harissa-spiced minced lamb, chargrilled on skewers, served with saffron aioli and pickled cucumber.",
        price: "₹695",
        signature: true,
      },
      {
        name: "Burrata & Heirloom Tomato",
        desc: "Imported burrata, heirloom tomatoes, basil oil, aged balsamic pearls.",
        price: "₹595",
        veg: true,
      },
      {
        name: "Romeo Lane Chaat",
        desc: "Deconstructed Delhi-style chaat — crispy puri towers, tamarind gel, yogurt foam, pomegranate.",
        price: "₹445",
        signature: true,
        veg: true,
      },
      {
        name: "Seared Scallops",
        desc: "Pan-seared king scallops, cauliflower purée, pancetta crisp, micro herbs, truffle oil.",
        price: "₹895",
      },
      {
        name: "Wild Mushroom Crostini",
        desc: "Sourdough crostini, wild mushroom duxelles, truffle shavings, Gruyère fondue.",
        price: "₹495",
        veg: true,
      },
      {
        name: "Prawn Koliwada",
        desc: "Crispy coastal-spiced prawns, mango avocado salsa, chilli lime mayo.",
        price: "₹745",
      },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    items: [
      {
        name: "Romeo Lane Signature Steak",
        desc: "28-day dry-aged ribeye 250g, red wine reduction, truffle butter, seasonal vegetables, potato gratin.",
        price: "₹2,495",
        signature: true,
        img: "/assets/generated/signature-dish.dim_800x600.jpg",
      },
      {
        name: "Raan-e-Romeo",
        desc: "Slow-braised lamb shank, 12-hour dum cooking, saffron-infused jus, garlic naan, raita.",
        price: "₹1,695",
        signature: true,
      },
      {
        name: "Pan-Seared Sea Bass",
        desc: "Atlantic sea bass fillet, lemon caper beurre blanc, wilted spinach, saffron risotto.",
        price: "₹1,495",
      },
      {
        name: "Black Dal Romeo",
        desc: "Our signature dal makhani slow-cooked for 48 hours in the tandoor, finished with white truffle oil and cream.",
        price: "₹895",
        veg: true,
      },
      {
        name: "Lobster Thermidor",
        desc: "Whole lobster, cognac cream sauce, gruyère glaze, served with garlic butter linguine.",
        price: "₹3,200",
      },
      {
        name: "Vegetable Wellington",
        desc: "Wild mushroom & butternut squash wellington, red wine jus, truffle mash, seasonal greens.",
        price: "₹1,195",
        veg: true,
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      {
        name: "Dark Chocolate Sphere",
        desc: "Valrhona dark chocolate sphere, gold leaf, warm salted caramel sauce, raspberry sorbet.",
        price: "₹595",
        signature: true,
        img: "/assets/generated/dessert.dim_800x600.jpg",
      },
      {
        name: "Deconstructed Gulab Jamun",
        desc: "Slow-poached jamuns, rose-saffron syrup, cardamom cream, pistachio dust.",
        price: "₹445",
        veg: true,
      },
      {
        name: "Crème Brûlée",
        desc: "Classic Tahitian vanilla crème brûlée, caramelised sugar crust, seasonal berries.",
        price: "₹495",
        veg: true,
      },
      {
        name: "Romeo Lane Tasting Platter",
        desc: "A curated selection of our finest desserts — for two to share.",
        price: "₹995",
        signature: true,
        veg: true,
      },
    ],
  },
  {
    id: "cocktails",
    label: "Cocktails",
    items: [
      {
        name: "Romeo's Negroni",
        desc: "Maker's Mark bourbon, house-made sweet vermouth, Campari, smoked orange peel, dark chocolate bitters.",
        price: "₹695",
        signature: true,
        img: "/assets/generated/cocktails.dim_800x600.jpg",
      },
      {
        name: "Karnal Mule",
        desc: "Grey Goose vodka, fresh ginger beer, lime, muddled mint, gold leaf garnish.",
        price: "₹595",
      },
      {
        name: "Saffron Old Fashioned",
        desc: "Premium whiskey, saffron-infused honey syrup, walnut bitters, orange zest, burnt wood smoke.",
        price: "₹745",
        signature: true,
      },
      {
        name: "Lane 47",
        desc: "Hendrick's gin, elderflower tonic, cucumber ribbon, rose petals, premium ice sphere.",
        price: "₹645",
      },
      {
        name: "Spiced Margarita",
        desc: "Casamigos blanco, muddled jalapeño, fresh lime, agave nectar, Tajín rim.",
        price: "₹695",
      },
      {
        name: "After Dark",
        desc: "Espresso martini with cold brew, Kahlúa, Madagascar vanilla-washed vodka.",
        price: "₹745",
      },
    ],
  },
  {
    id: "mocktails",
    label: "Mocktails",
    items: [
      {
        name: "Virgin Romeo",
        desc: "Strawberry basil shrub, kombucha, pink grapefruit, activated charcoal salt rim.",
        price: "₹395",
        veg: true,
      },
      {
        name: "Saffron Sunrise",
        desc: "Fresh mango, saffron water, lemon, rose syrup, sparkling water.",
        price: "₹325",
        veg: true,
      },
      {
        name: "Karnal Garden",
        desc: "Cold-pressed cucumber, tulsi, lime, tonic, edible flowers.",
        price: "₹295",
        veg: true,
      },
      {
        name: "The Royale",
        desc: "Lychee, elderflower, fresh lime, mint, fever tree tonic water, gold flake.",
        price: "₹375",
        veg: true,
        signature: true,
      },
    ],
  },
  {
    id: "wine",
    label: "Wine & Spirits",
    items: [
      {
        name: "Sula Dindori Reserve Shiraz",
        desc: "Full-bodied Nashik red. Dark berries, pepper, hints of earth. Glass.",
        price: "₹595",
      },
      {
        name: "Grover La Reserve Rouge",
        desc: "Cabernet Sauvignon-Shiraz blend. Cassis, vanilla, silky tannins. Glass.",
        price: "₹645",
        signature: true,
      },
      {
        name: "Fratelli Sette Reserve Chardonnay",
        desc: "Oak-fermented Chardonnay. Butter, tropical fruit, long finish. Glass.",
        price: "₹595",
      },
      {
        name: "Moët & Chandon Impérial",
        desc: "The world's most iconic champagne. Bottle.",
        price: "₹12,500",
        signature: true,
      },
      {
        name: "Johnnie Walker Black Label",
        desc: "12-year blended Scotch. Dark fruit, spice, smooth finish. 30ml.",
        price: "₹595",
      },
      {
        name: "The Macallan 18",
        desc: "Exceptional single malt Scotch, 18 years. Dried fruit, oak, luxury. 30ml.",
        price: "₹3,200",
        signature: true,
      },
    ],
  },
];

export default function MenuPage() {
  const [active, setActive] = useState("starters");
  const current = menu.find((m) => m.id === active)!;

  return (
    <div>
      {/* Banner */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/indian-fusion.dim_800x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-10">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
            Culinary Journey
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-white mt-2 uppercase">
            The <span className="text-gold italic">Menu</span>
          </h1>
        </div>
      </section>

      <section className="section-pad max-w-7xl mx-auto px-6 lg:px-10">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-6">
          {menu.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setActive(m.id)}
              className={`text-[11px] uppercase tracking-widest px-6 py-2.5 border transition-all duration-200 ${
                active === m.id
                  ? "border-gold bg-gold text-luxury-black font-semibold"
                  : "border-border text-foreground/60 hover:border-gold/50 hover:text-gold"
              }`}
              data-ocid="menu.tab"
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Items */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-5"
        >
          {current.items.map((item, i) => (
            <div
              key={item.name}
              className="luxury-card p-6 flex gap-4"
              data-ocid={`menu.item.${i + 1}`}
            >
              {item.img && (
                <div className="w-20 h-20 shrink-0 overflow-hidden border border-gold/20">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-serif text-base text-gold">
                      {item.name}
                    </h3>
                    {item.signature && (
                      <Badge className="text-[9px] bg-burgundy text-white border-0 px-2 uppercase tracking-wider">
                        Signature
                      </Badge>
                    )}
                    {item.veg && (
                      <span className="w-4 h-4 border border-green-600 flex items-center justify-center shrink-0">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                      </span>
                    )}
                  </div>
                  <span className="text-gold font-semibold text-sm shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs text-foreground/55 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-14 p-8 border border-gold/20">
          <p className="text-xs text-foreground/50 mb-4 uppercase tracking-widest">
            Prices exclusive of taxes &amp; service charge
          </p>
          <p className="text-sm text-foreground/60 mb-6">
            For private dining menus, chef&apos;s tasting experiences, or large
            group reservations
          </p>
          <Link to="/reservations" data-ocid="menu.primary_button">
            <button type="button" className="btn-gold text-[11px]">
              Make a Reservation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
