import { CheckCircle, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useAddReservation } from "../hooks/useQueries";

const times = [
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
];
const occasions = [
  "Regular Dining",
  "Birthday Celebration",
  "Anniversary Dinner",
  "Corporate Event",
  "Date Night",
  "Family Gathering",
  "Other",
];

export default function Reservations() {
  const mutation = useAddReservation();
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "Regular Dining",
    requests: "",
  });

  const set =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
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
        specialRequests: `${form.occasion}. ${form.requests}`.trim(),
      });
      const requests = form.requests
        ? ` Special requests: ${form.requests}`
        : "";
      const msg = encodeURIComponent(
        `Hello Romeo Lane Karnal! I'd like to confirm my reservation for ${form.name}, ${form.date} at ${form.time} for ${form.guests} guests. Occasion: ${form.occasion}.${requests}`,
      );
      setSuccess(true);
      setTimeout(() => {
        window.open(`https://wa.me/919109107900?text=${msg}`, "_blank");
      }, 800);
      toast.success("Reservation confirmed! Opening WhatsApp...");
    } catch {
      toast.error(
        "Something went wrong. Please try again or call us directly.",
      );
    }
  };

  const inputCls =
    "w-full bg-luxury-dark border border-border focus:border-gold outline-none px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 transition-colors";
  const labelCls = "block text-[10px] uppercase tracking-widest text-gold mb-2";

  return (
    <div>
      {/* Banner */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
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
            Karnal&apos;s Finest
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-white mt-2 uppercase">
            Book Your <span className="text-gold italic">Table</span>
          </h1>
        </div>
      </section>

      <section className="section-pad max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="luxury-card p-12 text-center"
                data-ocid="reservation.success_state"
              >
                <CheckCircle size={52} className="text-gold mx-auto mb-5" />
                <h3 className="font-serif text-3xl text-gold mb-3">
                  Reservation Confirmed
                </h3>
                <p className="text-sm text-foreground/60 mb-6">
                  We&apos;re redirecting you to WhatsApp to finalize your
                  booking. We look forward to welcoming you.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="btn-outline-gold text-[11px]"
                  data-ocid="reservation.secondary_button"
                >
                  Make Another Reservation
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="luxury-card p-8"
                data-ocid="reservation.panel"
              >
                <h2 className="font-serif text-2xl text-gold mb-2">
                  Reservation Details
                </h2>
                <div className="gold-divider mb-7" />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="res-name" className={labelCls}>
                      Full Name *
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your name"
                      className={inputCls}
                      required
                      data-ocid="reservation.input"
                    />
                  </div>
                  <div>
                    <label htmlFor="res-phone" className={labelCls}>
                      Phone Number *
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+91 XXXXX XXXXX"
                      className={inputCls}
                      required
                      data-ocid="reservation.input"
                    />
                  </div>
                  <div>
                    <label htmlFor="res-email" className={labelCls}>
                      Email Address
                    </label>
                    <input
                      id="res-email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="your@email.com"
                      className={inputCls}
                      data-ocid="reservation.input"
                    />
                  </div>
                  <div>
                    <label htmlFor="res-date" className={labelCls}>
                      Date *
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      value={form.date}
                      onChange={set("date")}
                      className={inputCls}
                      required
                      data-ocid="reservation.input"
                    />
                  </div>
                  <div>
                    <label htmlFor="res-time" className={labelCls}>
                      Time *
                    </label>
                    <select
                      id="res-time"
                      value={form.time}
                      onChange={set("time")}
                      className={inputCls}
                      required
                      data-ocid="reservation.select"
                    >
                      <option value="">Select time</option>
                      {times.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="res-guests" className={labelCls}>
                      Number of Guests
                    </label>
                    <select
                      id="res-guests"
                      value={form.guests}
                      onChange={set("guests")}
                      className={inputCls}
                      data-ocid="reservation.select"
                    >
                      {[
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "10",
                        "12",
                        "15",
                        "20+",
                      ].map((g) => (
                        <option key={g} value={g}>
                          {g} {g === "1" ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="res-occasion" className={labelCls}>
                      Occasion
                    </label>
                    <select
                      id="res-occasion"
                      value={form.occasion}
                      onChange={set("occasion")}
                      className={inputCls}
                      data-ocid="reservation.select"
                    >
                      {occasions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="res-requests" className={labelCls}>
                      Special Requests
                    </label>
                    <textarea
                      id="res-requests"
                      value={form.requests}
                      onChange={set("requests")}
                      rows={4}
                      placeholder="Dietary requirements, seating preferences, decorations..."
                      className={`${inputCls} resize-none`}
                      data-ocid="reservation.textarea"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="btn-gold w-full text-center mt-7 py-4 text-xs disabled:opacity-50"
                  data-ocid="reservation.submit_button"
                >
                  {mutation.isPending
                    ? "Processing..."
                    : "Confirm & Continue via WhatsApp"}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="luxury-card p-6">
              <h3 className="font-serif text-lg text-gold mb-4">
                Contact Us Directly
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:09109107900"
                  className="flex items-center gap-3 text-foreground/70 hover:text-gold transition-colors group"
                  data-ocid="reservation.link"
                >
                  <div className="w-10 h-10 border border-border group-hover:border-gold flex items-center justify-center transition-colors">
                    <Phone size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-0.5">
                      Call Us
                    </p>
                    <p className="text-sm">091091 07900</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/919109107900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/70 hover:text-gold transition-colors group"
                  data-ocid="reservation.link"
                >
                  <div className="w-10 h-10 border border-border group-hover:border-gold flex items-center justify-center transition-colors">
                    <MessageCircle size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-0.5">
                      WhatsApp
                    </p>
                    <p className="text-sm">+91 91091 07900</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="luxury-card p-6">
              <h3 className="font-serif text-lg text-gold mb-4">
                Dining Hours
              </h3>
              <div className="space-y-2 text-sm text-foreground/60">
                <div className="flex justify-between">
                  <span>Monday – Sunday</span>
                  <span className="text-gold">Open</span>
                </div>
                <div className="flex justify-between">
                  <span>Lunch</span>
                  <span>12:00 PM – 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Dinner</span>
                  <span>7:00 PM – 12:00 AM</span>
                </div>
              </div>
            </div>

            <div className="luxury-card p-6">
              <h3 className="font-serif text-lg text-gold mb-3">Location</h3>
              <p className="text-xs text-foreground/60 leading-relaxed">
                Namaste Chowk, Grand Trunk Rd,
                <br />
                near by Pass, Vijay Nagar,
                <br />
                Sector 4, Karnal,
                <br />
                Haryana 132001
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
