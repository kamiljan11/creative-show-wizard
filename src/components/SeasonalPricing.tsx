import { useLang } from "@/i18n/LanguageContext";
import { Badge } from "@/components/ui/badge";

const SeasonalPricing = () => {
  const { lang, t } = useLang();

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-center mb-4">
          {t.pricing.title[lang]}{" "}
          <span className="text-gradient-warm">{t.pricing.titleAccent[lang]}</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-lg mx-auto">
          {t.pricing.subtitle[lang]}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {t.pricing.seasons.map((season, i) => (
            <div
              key={i}
              className={`rounded-lg p-6 border transition-all duration-300 ${
                i === 2
                  ? "border-primary/40 bg-primary/5 ring-1 ring-primary/20"
                  : "border-border bg-card hover:border-primary/20"
              }`}
            >
              <h3 className="font-heading font-semibold text-lg mb-1">{season.name[lang]}</h3>
              <p className="text-xs text-muted-foreground font-body mb-4">{season.months[lang]}</p>

              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-xs text-muted-foreground font-body">Eldvörp Suite</span>
                  <p className="text-2xl font-heading font-bold text-primary">
                    {season.eldvorp}
                    <span className="text-xs text-muted-foreground font-body ml-1">{t.pricing.perNight[lang]}</span>
                  </p>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-body">Jökull Room</span>
                  <p className="text-xl font-heading font-semibold text-foreground/80">
                    {season.jokull}
                    <span className="text-xs text-muted-foreground font-body ml-1">{t.pricing.perNight[lang]}</span>
                  </p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground font-body italic">{season.note[lang]}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Badge variant="outline" className="text-primary border-primary/30 font-body text-sm px-4 py-1">
            {t.pricing.directSave[lang]}
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default SeasonalPricing;
