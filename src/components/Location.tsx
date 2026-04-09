import { Plane, Car, CloudSnow, HandMetal, MapPin, ExternalLink, AlertTriangle } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const Location = () => {
  const { lang, t } = useLang();

  const info = [
    { icon: Plane, ...t.location.airport },
    { icon: Car, ...t.location.drive },
    { icon: CloudSnow, ...t.location.road },
    { icon: HandMetal, ...t.location.pickup },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-center mb-4">
          {t.location.title[lang]}{" "}
          <span className="text-gradient-warm">{t.location.titleAccent[lang]}</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-lg mx-auto">
          {t.location.subtitle[lang]}
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            {info.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-lg bg-secondary border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm mb-1">{item.label[lang]}</h4>
                  <p className="text-sm text-muted-foreground font-body">{item.value[lang]}</p>
                </div>
              </div>
            ))}

            {/* Icelandic-specific travel links */}
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="https://www.road.is"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-body px-5"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                {t.location.roadLink[lang]}
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://safetravel.is"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-body px-5"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                {t.location.safetravel[lang]}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-border h-full min-h-[360px]">
            <iframe
              title="Fjallsýn Cottage Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d-23.2!3d65.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjXCsDQ1JzAwLjAiTiAyM8KwMTInMDAuMCJX!5e0!3m2!1sen!2sis!4v1700000000000"
              className="w-full h-full min-h-[360px]"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/65.75,-23.2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline"
          >
            <MapPin className="w-4 h-4" />
            {t.location.mapLabel[lang]}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
