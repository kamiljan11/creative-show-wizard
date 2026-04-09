import { useLang } from "@/i18n/LanguageContext";
import { Badge } from "@/components/ui/badge";

const SeasonalPricing = () => {
  const { lang, t } = useLang();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-heading font-semibold text-center mb-2 md:mb-4">
          {t.pricing.title[lang]}{" "}
          <span className="text-gradient-warm">{t.pricing.titleAccent[lang]}</span>
        </h2>
        <p className="text-center text-muted-foreground font-body text-sm md:text-base mb-10 md:mb-16 max-w-lg mx-auto">
          {t.pricing.subtitle[lang]}
        </p>

        {/* Horizontal scroll on mobile */}
        <div className="flex lg:grid lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto overflow-x-auto snap-x snap-mandatory pb-4 lg:pb-0 -mx-4 px-4 lg:mx-auto lg:px-0 scrollbar-hide">
          {t.pricing.seasons.map((season, i) => (
            <div
              key={i}
              className={`rounded-lg p-5 md:p-6 border transition-all duration-300 min-w-[220px] w-[70vw] sm:w-[45vw] lg:w-auto lg:min-w-0 snap-center shrink-0 lg:shrink ${
                i === 2
                  ? "border-primary/40 bg-primary/5 ring-1 ring-primary/20"
                  : "border-border bg-card hover:border-primary/20"
              }`}
            >
              <h3 className="font-heading font-semibold text-base md:text-lg mb-1">{season.name[lang]}</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground font-body mb-3 md:mb-4">{season.months[lang]}</p>

              <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                <div>
                  <span className="text-[10px] md:text-xs text-muted-foreground font-body">Eldvörp Suite</span>
                  <p className="text-xl md:text-2xl font-heading font-bold text-primary">
                    {season.eldvorp}
                    <span className="text-[10px] md:text-xs text-muted-foreground font-body ml-1">{t.pricing.perNight[lang]}</span>
                  </p>
                </div>
                <div>
                  <span className="text-[10px] md:text-xs text-muted-foreground font-body">Jökull Room</span>
                  <p className="text-lg md:text-xl font-heading font-semibold text-foreground/80">
                    {season.jokull}
                    <span className="text-[10px] md:text-xs text-muted-foreground font-body ml-1">{t.pricing.perNight[lang]}</span>
                  </p>
                </div>
              </div>

              <p className="text-[10px] md:text-xs text-muted-foreground font-body italic">{season.note[lang]}</p>
            </div>
          ))}
        </div>

        <div className="flex lg:hidden justify-center gap-1.5 mt-4">
          {t.pricing.seasons.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" />
          ))}
        </div>

        <div className="text-center mt-6 md:mt-8">
          <Badge variant="outline" className="text-primary border-primary/30 font-body text-xs md:text-sm px-3 md:px-4 py-1">
            {t.pricing.directSave[lang]}
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default SeasonalPricing;
