import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";
import { useAddContactMessage } from "../hooks/useQueries";

export default function Contact() {
  const mutation = useAddContactMessage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields.");
      return;
    }
    try {
      await mutation.mutateAsync(form);
      setSent(true);
      toast.success("Message sent! We'll get back to you shortly.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send. Please call us directly.");
    }
  };

  const inputCls =
    "w-full bg-luxury-dark border border-border focus:border-gold outline-none px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 transition-colors";
  const labelCls = "block text-[10px] uppercase tracking-widest text-gold mb-2";

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
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/55 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-10">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
            Get in Touch
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-white mt-2 uppercase">
            Contact <span className="text-gold italic">Us</span>
          </h1>
        </div>
      </section>

      <section className="section-pad max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left — Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl text-white mb-2">
              Visit <span className="text-gold italic">Romeo Lane</span>
            </h2>
            <div className="gold-divider my-4" />

            <div className="space-y-5 mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gold mb-1">
                    Address
                  </p>
                  <p className="text-sm text-foreground/65 leading-relaxed">
                    Namaste Chowk, Grand Trunk Rd, near by Pass,
                    <br />
                    Vijay Nagar, Sector 4, Karnal, Haryana 132001
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gold mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:09109107900"
                    className="text-sm text-foreground/65 hover:text-gold transition-colors"
                    data-ocid="contact.link"
                  >
                    091091 07900
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center shrink-0">
                  <SiWhatsapp size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gold mb-1">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919109107900"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/65 hover:text-gold transition-colors"
                    data-ocid="contact.link"
                  >
                    +91 91091 07900
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gold mb-1">
                    Hours
                  </p>
                  <p className="text-sm text-foreground/65">
                    Open Daily · Closes 12:00 AM
                  </p>
                  <p className="text-xs text-foreground/40 mt-0.5">
                    Lunch 12–3 PM · Dinner 7–12 AM
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-widest text-gold mb-4">
                Follow Us
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border hover:border-gold flex items-center justify-center text-foreground/60 hover:text-gold transition-all"
                  data-ocid="contact.link"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border hover:border-gold flex items-center justify-center text-foreground/60 hover:text-gold transition-all"
                  data-ocid="contact.link"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://wa.me/919109107900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border hover:border-gold flex items-center justify-center text-foreground/60 hover:text-gold transition-all"
                  data-ocid="contact.link"
                >
                  <SiWhatsapp size={16} />
                </a>
              </div>
            </div>

            {/* Map */}
            <div
              className="border border-gold/20 p-1 overflow-hidden"
              data-ocid="contact.panel"
            >
              <iframe
                src="https://maps.google.com/maps?q=Namaste+Chowk+Grand+Trunk+Rd+Vijay+Nagar+Sector+4+Karnal+Haryana+132001&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Romeo Lane Karnal Location"
                className="block"
              />
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {sent ? (
              <div
                className="luxury-card p-10 text-center h-full flex flex-col items-center justify-center"
                data-ocid="contact.success_state"
              >
                <div className="w-16 h-16 border border-gold flex items-center justify-center mx-auto mb-5">
                  <span className="text-gold text-2xl font-serif">✓</span>
                </div>
                <h3 className="font-serif text-2xl text-gold mb-3">
                  Message Received
                </h3>
                <p className="text-sm text-foreground/60 mb-6">
                  Thank you for reaching out. Our team will respond within 24
                  hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-outline-gold text-[11px]"
                  data-ocid="contact.secondary_button"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="luxury-card p-8"
                data-ocid="contact.panel"
              >
                <h2 className="font-serif text-2xl text-gold mb-2">
                  Send a Message
                </h2>
                <div className="gold-divider mb-7" />
                <div className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className={labelCls}>
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Full name"
                      className={inputCls}
                      required
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelCls}>
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="your@email.com"
                      className={inputCls}
                      required
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className={labelCls}>
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      value={form.message}
                      onChange={set("message")}
                      rows={6}
                      placeholder="How can we help you?"
                      className={`${inputCls} resize-none`}
                      required
                      data-ocid="contact.textarea"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="btn-gold w-full text-center mt-6 py-4 text-xs disabled:opacity-50"
                  data-ocid="contact.submit_button"
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
