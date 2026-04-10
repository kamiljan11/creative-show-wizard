import { Globe, Camera, BarChart3, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";

const WebsiteCTA = () => {
  const { lang, t } = useLang();
  const w = t.websiteCta;

  const features = [
    { icon: Globe, label: w.features[0][lang] },
    { icon: Camera, label: w.features[1][lang] },
    { icon: BarChart3, label: w.features[2][lang] },
    { icon: Zap, label: w.features[3][lang] },
  ];

  return (
    <section id="website-cta" className="py-16 md:py-24 border-t border-border scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-body text-[10px] md:text-sm tracking-[0.25em] uppercase mb-4 md:mb-6">
            {w.tag[lang]}
          </p>

          <h2 className="text-2xl md:text-5xl font-heading font-semibold leading-tight mb-1 md:mb-2">
            {w.title[lang]}
          </h2>
          <h2 className="text-2xl md:text-5xl font-heading italic text-primary mb-6 md:mb-8">
            {w.titleAccent[lang]}
          </h2>

          <p className="text-muted-foreground font-body text-sm md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            {w.subtitle[lang]}
          </p>

          {/* Horizontal scroll on mobile */}
          <div className="flex md:flex-wrap md:justify-center gap-4 md:gap-8 mb-8 md:mb-12 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground font-body text-xs md:text-base shrink-0">
                <f.icon className="w-4 h-4 md:w-5 md:h-5 text-primary/70" />
                <span className="whitespace-nowrap">{f.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <Button size="lg" className="text-sm md:text-lg px-8 md:px-12 py-5 md:py-7 font-body tracking-wide uppercase w-full sm:w-auto">
              {w.cta[lang]} <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
            <span className="text-sm md:text-base text-muted-foreground font-body">
              {w.price[lang]} <span className="text-primary font-semibold">{w.priceAccent[lang]}</span>
            </span>
          </div>

          <p className="text-xs md:text-sm text-muted-foreground/60 font-body flex items-center justify-center gap-1">
            <Zap className="w-3 h-3" />
            {w.badges[lang]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebsiteCTA;
