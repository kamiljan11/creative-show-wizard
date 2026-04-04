import { Flame, Wifi, Car, Mountain, Coffee, ShieldCheck, Bath, Utensils } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const icons = [Flame, Bath, Wifi, Car, Mountain, Coffee, Utensils, ShieldCheck];

const Amenities = () => {
  const { lang, t } = useLang();

  return (
    <section id="amenities" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-center mb-4">
          {t.amenities.title[lang]} <span className="text-gradient-warm">{t.amenities.titleAccent[lang]}</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-lg mx-auto">
          {t.amenities.subtitle[lang]}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.amenities.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="p-6 rounded-lg bg-card border border-border hover:border-primary/20 transition-colors text-center group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-1">{item.label[lang]}</h3>
                <p className="text-xs text-muted-foreground font-body">{item.desc[lang]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
