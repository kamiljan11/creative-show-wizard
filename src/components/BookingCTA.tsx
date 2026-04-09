import { Button } from "@/components/ui/button";
import { CalendarDays, Phone, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const BookingCTA = () => {
  const { lang, t } = useLang();

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center rounded-2xl p-8 md:p-16 border border-primary/20 relative overflow-hidden"
          style={{ background: "var(--gradient-aurora)" }}>
          <div className="absolute inset-0 bg-background/60" />
          <div className="relative z-10">
            <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-3 md:mb-4" />
            <h2 className="text-2xl md:text-4xl font-heading font-semibold mb-3 md:mb-4">
              {t.booking.title[lang]} <span className="text-primary">{t.booking.titleAccent[lang]}</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-body mb-6 md:mb-8 max-w-md mx-auto">
              {t.booking.subtitle[lang]}
            </p>
            <div className="flex flex-col gap-3 md:flex-row md:gap-4 justify-center mb-6 md:mb-8">
              <Button size="lg" className="text-sm md:text-lg px-6 md:px-8 py-5 md:py-6 font-body">
                <CalendarDays className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                {t.booking.checkAvailability[lang]}
              </Button>
              <Button variant="outline" size="lg" className="text-sm md:text-lg px-6 md:px-8 py-5 md:py-6 font-body border-foreground/20">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                {t.booking.whatsapp[lang]}
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center text-xs md:text-sm text-muted-foreground font-body">
              <a href="tel:+3548881234" className="flex items-center justify-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" /> +354 888 1234
              </a>
              <a href="mailto:info@fjallsyn.is" className="flex items-center justify-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" /> info@fjallsyn.is
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
