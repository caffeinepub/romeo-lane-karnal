import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-burgundy-deep border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span
                className="font-serif text-3xl text-gold block"
                style={{ fontStyle: "italic" }}
              >
                Romeo Lane
              </span>
              <span className="text-[9px] text-gold-muted tracking-[0.35em] uppercase">
                Karnal
              </span>
            </div>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Karnal's most premium dining and nightlife destination. An
              experience crafted for the discerning palate.
            </p>
            <div className="gold-divider mt-6" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-gold mb-5 font-semibold">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                "/",
                "/about",
                "/menu",
                "/gallery",
                "/events",
                "/reservations",
                "/contact",
              ].map((path) => {
                const label =
                  path === "/"
                    ? "Home"
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
                return (
                  <li key={path}>
                    <Link
                      to={path}
                      className="text-xs text-foreground/60 hover:text-gold transition-colors tracking-wide"
                      data-ocid="nav.link"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-gold mb-5 font-semibold">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="text-xs text-foreground/60 leading-relaxed">
                  Namaste Chowk, Grand Trunk Rd, near by Pass,
                  <br />
                  Vijay Nagar, Sector 4,
                  <br />
                  Karnal, Haryana 132001
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={14} className="text-gold shrink-0" />
                <a
                  href="tel:09109107900"
                  className="text-xs text-foreground/60 hover:text-gold transition-colors"
                >
                  091091 07900
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Clock size={14} className="text-gold shrink-0" />
                <span className="text-xs text-foreground/60">
                  Open daily · Closes 12 AM
                </span>
              </li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-gold mb-5 font-semibold">
              Follow Us
            </h4>
            <div className="flex gap-4 mb-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-border hover:border-gold flex items-center justify-center text-foreground/60 hover:text-gold transition-all duration-300"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-border hover:border-gold flex items-center justify-center text-foreground/60 hover:text-gold transition-all duration-300"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://wa.me/919109107900"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-border hover:border-gold flex items-center justify-center text-foreground/60 hover:text-gold transition-all duration-300"
              >
                <SiWhatsapp size={15} />
              </a>
            </div>
            <Link to="/reservations" data-ocid="footer.primary_button">
              <button
                type="button"
                className="btn-gold text-[10px] w-full text-center py-3"
              >
                Reserve a Table
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-foreground/40 tracking-wide">
            © {year} Romeo Lane Karnal. All rights reserved.
          </p>
          <p className="text-[11px] text-foreground/40">
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
