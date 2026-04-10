import { Car, CloudSnow, HandMetal, MapPin } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const Location = () => {
  const { lang, t } = useLang();

  const info = [
    { icon: Car, ...t.location.drive },
    { icon: CloudSnow, ...t.location.road },
    { icon: HandMetal, ...t.location.pickup },
  ];

  return (
    <section id="location" className="py-16 md:py-24 bg-card scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-heading font-semibold text-center mb-2 md:mb-4">
          {t.location.title[lang]}{" "}
          <span className="text-gradient-warm">{t.location.titleAccent[lang]}</span>
        </h2>
        <p className="text-center text-muted-foreground font-body text-sm md:text-base mb-10 md:mb-16 max-w-lg mx-auto">
          {t.location.subtitle[lang]}
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10 items-start">
          <div className="space-y-3 md:space-y-4">
            {info.map((item, i) => (
              <div key={i} className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-lg bg-secondary border border-border">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xs md:text-sm mb-0.5 md:mb-1">{item.label[lang]}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground font-body">{item.value[lang]}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg overflow-hidden border border-border h-64 md:h-full md:min-h-[360px]">
            <iframe
              title="Fjallsýn Cottage Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d-23.2!3d65.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjXCsDQ1JzAwLjAiTiAyM8KwMTInMDAuMCJX!5e0!3m2!1sen!2sis!4v1700000000000"
              className="w-full h-full"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="text-center mt-6 md:mt-8">
          <a
            href="https://www.google.com/maps/place/65.75,-23.2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-body text-xs md:text-sm hover:underline"
          >
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
            {t.location.mapLabel[lang]}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
