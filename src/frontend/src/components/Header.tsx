import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Gallery", to: "/gallery" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-luxury-charcoal/95 backdrop-blur-md shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-col leading-none"
          data-ocid="nav.link"
        >
          <span
            className="font-serif text-2xl text-gold tracking-wide"
            style={{ fontStyle: "italic" }}
          >
            Romeo Lane
          </span>
          <span className="text-[9px] text-gold-muted tracking-[0.35em] uppercase font-light -mt-1">
            Karnal
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-xs uppercase tracking-widest text-foreground/70 hover:text-gold transition-colors duration-200 font-medium"
              activeProps={{ className: "text-gold" }}
              data-ocid="nav.link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/reservations" data-ocid="nav.primary_button">
            <button
              type="button"
              className="btn-burgundy text-[11px] px-6 py-2.5 border border-burgundy-light hover:border-gold transition-colors duration-300"
            >
              Book a Table
            </button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden text-foreground/80 hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-luxury-charcoal/98 backdrop-blur-xl border-t border-border px-6 pb-6"
          >
            <nav className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-xs uppercase tracking-widest py-3 border-b border-border/40 text-foreground/70 hover:text-gold transition-colors"
                  activeProps={{ className: "text-gold" }}
                  data-ocid="nav.link"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/reservations"
                onClick={() => setMobileOpen(false)}
                className="mt-4"
                data-ocid="nav.primary_button"
              >
                <button
                  type="button"
                  className="btn-burgundy w-full text-center py-3"
                >
                  Book a Table
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
