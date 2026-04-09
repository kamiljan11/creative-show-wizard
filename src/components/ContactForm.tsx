import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
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
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-heading font-semibold mb-2">Takk! / Thank you!</h3>
            <p className="text-muted-foreground font-body">
              {lang === "pl" ? "Odpowiemy wkrótce." : lang === "is" ? "Við svörum fljótlega." : "We'll get back to you soon."}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-center mb-4">
          {t.contactForm.title[lang]}{" "}
          <span className="text-gradient-warm">{t.contactForm.titleAccent[lang]}</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-lg mx-auto">
          {t.contactForm.subtitle[lang]}
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder={t.contactForm.name[lang]}
              required
              className="bg-card border-border font-body"
            />
            <Input
              type="email"
              placeholder={t.contactForm.email[lang]}
              required
              className="bg-card border-border font-body"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder={t.contactForm.dates[lang]}
              className="bg-card border-border font-body"
            />
            <Input
              placeholder={t.contactForm.guests[lang]}
              type="number"
              min="1"
              max="10"
              className="bg-card border-border font-body"
            />
          </div>
          <Textarea
            placeholder={t.contactForm.message[lang]}
            rows={4}
            required
            className="bg-card border-border font-body resize-none"
          />
          <Button type="submit" size="lg" className="w-full font-body">
            <Send className="w-4 h-4 mr-2" />
            {t.contactForm.send[lang]}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
