import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, Tag, CalendarDays, Users, ChevronDown } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const rooms = [
  { name: "Eldvörp Suite", price: "24 900", available: true },
  { name: "Jökull Room", price: "19 900", available: true },
  { name: "Hot Tub Cottage", price: null, available: false },
];

const ContactForm = () => {
  const { lang, t } = useLang();
  const [sent, setSent] = useState(false);
  const [step, setStep] = useState<"check" | "form">("check");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [checked, setChecked] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setChecked(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <section id="contact-form" className="py-16 md:py-24 scroll-mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-lg mx-auto text-center">
            <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 md:mb-6" />
            <h3 className="text-xl md:text-2xl font-heading font-semibold mb-2">Takk! / Thank you!</h3>
            <p className="text-sm text-muted-foreground font-body">
              {lang === "pl" ? "Odpowiemy w ciągu 24h." : lang === "is" ? "Við svörum innan 24 klst." : "We'll respond within 24 hours."}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-16 md:py-24 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-heading font-semibold text-center mb-2 md:mb-4">
          {t.contactForm.title[lang]}{" "}
          <span className="text-gradient-warm">{t.contactForm.titleAccent[lang]}</span>
        </h2>
        <p className="text-center text-muted-foreground font-body text-sm md:text-base mb-3 md:mb-4 max-w-lg mx-auto">
          {t.contactForm.subtitle[lang]}
        </p>

        <div className="flex justify-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Tag className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs md:text-sm text-primary font-body font-medium">
              {t.pricing.directSave[lang]}
            </span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Step 1: Check availability */}
          <form onSubmit={handleCheck} className="bg-card border border-border rounded-xl p-5 md:p-8 mb-6">
            <h3 className="font-heading font-semibold text-base md:text-lg mb-4 flex items-center gap-2">
              <CalendarDays className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              {lang === "pl" ? "Sprawdź dostępność" : lang === "is" ? "Athuga framboð" : "Check availability"}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              <div>
                <label className="text-[10px] md:text-xs text-muted-foreground font-body mb-1 block">
                  {lang === "pl" ? "Zameldowanie" : lang === "is" ? "Innritun" : "Check-in"}
                </label>
                <Input
                  type="date"
                  value={checkIn}
                  onChange={(e) => { setCheckIn(e.target.value); setChecked(false); }}
                  required
                  className="bg-secondary border-border font-body text-sm"
                />
              </div>
              <div>
                <label className="text-[10px] md:text-xs text-muted-foreground font-body mb-1 block">
                  {lang === "pl" ? "Wymeldowanie" : lang === "is" ? "Útritun" : "Check-out"}
                </label>
                <Input
                  type="date"
                  value={checkOut}
                  onChange={(e) => { setCheckOut(e.target.value); setChecked(false); }}
                  required
                  className="bg-secondary border-border font-body text-sm"
                />
              </div>
              <div>
                <label className="text-[10px] md:text-xs text-muted-foreground font-body mb-1 block">
                  {lang === "pl" ? "Goście" : lang === "is" ? "Gestir" : "Guests"}
                </label>
                <Input
                  type="number"
                  min="1"
                  max="6"
                  value={guests}
                  onChange={(e) => { setGuests(e.target.value); setChecked(false); }}
                  className="bg-secondary border-border font-body text-sm"
                />
              </div>
            </div>

            {!checked && (
              <Button type="submit" size="lg" className="w-full mt-4 font-body text-sm md:text-base">
                <CalendarDays className="w-4 h-4 mr-2" />
                {lang === "pl" ? "Sprawdź dostępność" : lang === "is" ? "Athuga framboð" : "Check availability"}
              </Button>
            )}
          </form>

          {/* Step 2: Show available rooms */}
          {checked && (
            <div className="space-y-3 mb-6 animate-fade-up">
              <p className="text-xs md:text-sm text-muted-foreground font-body px-1">
                {lang === "pl"
                  ? `Dostępne pokoje na ${checkIn} — ${checkOut}:`
                  : lang === "is"
                  ? `Laus herbergi ${checkIn} — ${checkOut}:`
                  : `Available rooms for ${checkIn} — ${checkOut}:`}
              </p>

              {rooms.map((room) => {
                const isAvailable = room.available || parseInt(guests) <= 2;
                return (
                  <button
                    key={room.name}
                    type="button"
                    onClick={() => isAvailable && setSelectedRoom(room.name)}
                    className={`w-full text-left p-4 md:p-5 rounded-lg border transition-all duration-200 ${
                      selectedRoom === room.name
                        ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                        : isAvailable
                        ? "border-border bg-card hover:border-primary/30"
                        : "border-border bg-card/50 opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!isAvailable}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-heading font-semibold text-sm md:text-base">{room.name}</h4>
                        <p className="text-[10px] md:text-xs text-muted-foreground font-body mt-0.5">
                          {isAvailable
                            ? (lang === "pl" ? "Dostępny" : lang === "is" ? "Laust" : "Available")
                            : (lang === "pl" ? "Niedostępny w tym terminie" : lang === "is" ? "Ekki laust" : "Not available for these dates")}
                        </p>
                      </div>
                      <div className="text-right">
                        {room.price ? (
                          <>
                            <span className="text-lg md:text-xl font-heading font-bold text-primary">{room.price}</span>
                            <span className="text-[10px] md:text-xs text-muted-foreground font-body ml-1">ISK/{lang === "pl" ? "noc" : lang === "is" ? "nótt" : "night"}</span>
                          </>
                        ) : (
                          <span className="text-xs text-muted-foreground font-body italic">
                            {lang === "pl" ? "W cenie pakietu" : lang === "is" ? "Innifalið" : "Included"}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Step 3: Booking form — shown after room selection */}
          {selectedRoom && (
            <form onSubmit={handleSubmit} className="bg-card border border-primary/20 rounded-xl p-5 md:p-8 animate-fade-up">
              <h3 className="font-heading font-semibold text-base md:text-lg mb-1">
                {lang === "pl" ? "Zarezerwuj" : lang === "is" ? "Bóka" : "Book"} {selectedRoom}
              </h3>
              <p className="text-[10px] md:text-xs text-muted-foreground font-body mb-4">
                {checkIn} → {checkOut} · {guests} {lang === "pl" ? "gości" : lang === "is" ? "gestir" : "guests"}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3">
                <Input placeholder={t.contactForm.name[lang]} required className="bg-secondary border-border font-body text-sm" />
                <Input type="email" placeholder={t.contactForm.email[lang]} required className="bg-secondary border-border font-body text-sm" />
              </div>
              <Textarea
                placeholder={t.contactForm.message[lang]}
                rows={3}
                className="bg-secondary border-border font-body resize-none text-sm mb-3"
              />
              <Button type="submit" size="lg" className="w-full font-body text-sm md:text-base">
                <Send className="w-4 h-4 mr-2" />
                {lang === "pl" ? "Wyślij zapytanie" : lang === "is" ? "Senda fyrirspurn" : "Send booking request"}
              </Button>
              <p className="text-center text-[10px] md:text-xs text-muted-foreground/60 font-body mt-3">
                {lang === "pl" ? "Odpowiadamy w ciągu 24h • Bez opłat rezerwacyjnych" : lang === "is" ? "Svar innan 24 klst • Engin bókunargjöld" : "Response within 24h • No booking fees"}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
