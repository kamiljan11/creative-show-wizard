import { Button } from "@/components/ui/button";
import { CalendarDays, Phone, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const BookingCTA = () => {
  const { lang, t } = useLang();

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center rounded-2xl p-12 md:p-16 border border-primary/20 relative overflow-hidden"
          style={{ background: "var(--gradient-aurora)" }}>
          <div className="absolute inset-0 bg-background/60" />
          <div className="relative z-10">
            <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              {t.booking.title[lang]} <span className="text-primary">{t.booking.titleAccent[lang]}</span>
            </h2>
            <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
              {t.booking.subtitle[lang]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6 font-body">
                <CalendarDays className="w-5 h-5 mr-2" />
                {t.booking.checkAvailability[lang]}
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 font-body border-foreground/20">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.booking.whatsapp[lang]}
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground font-body">
              <a href="tel:+3548881234" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +354 888 1234
              </a>
              <a href="mailto:info@fjallsyn.is" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> info@fjallsyn.is
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
