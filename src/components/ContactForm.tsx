import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, Tag } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const ContactForm = () => {
  const { lang, t } = useLang();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <section id="contact-form" className="py-16 md:py-24">
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

        {/* Direct booking badge — standard in Iceland */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Tag className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs md:text-sm text-primary font-body font-medium">
              {t.pricing.directSave[lang]}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-3 md:space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <Input
              placeholder={t.contactForm.name[lang]}
              required
              className="bg-card border-border font-body text-sm"
            />
            <Input
              type="email"
              placeholder={t.contactForm.email[lang]}
              required
              className="bg-card border-border font-body text-sm"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <Input
              placeholder={t.contactForm.dates[lang]}
              className="bg-card border-border font-body text-sm"
            />
            <Input
              placeholder={t.contactForm.guests[lang]}
              type="number"
              min="1"
              max="10"
              className="bg-card border-border font-body text-sm"
            />
          </div>
          <Textarea
            placeholder={t.contactForm.message[lang]}
            rows={4}
            required
            className="bg-card border-border font-body resize-none text-sm"
          />
          <Button type="submit" size="lg" className="w-full font-body text-sm md:text-base">
            <Send className="w-4 h-4 mr-2" />
            {t.contactForm.send[lang]}
          </Button>

          <p className="text-center text-[10px] md:text-xs text-muted-foreground/60 font-body">
            {lang === "pl" ? "Odpowiadamy w ciągu 24h • Bez opłat rezerwacyjnych" : lang === "is" ? "Svar innan 24 klst • Engin bókunargjöld" : "Response within 24h • No booking fees"}
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
