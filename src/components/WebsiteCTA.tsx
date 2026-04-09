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
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-6">
            {w.tag[lang]}
          </p>

          <h2 className="text-3xl md:text-5xl font-heading font-semibold leading-tight mb-2">
            {w.title[lang]}
          </h2>
          <h2 className="text-3xl md:text-5xl font-heading italic text-primary mb-8">
            {w.titleAccent[lang]}
          </h2>

          <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {w.subtitle[lang]}
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground font-body">
                <f.icon className="w-5 h-5 text-primary/70" />
                <span>{f.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <Button size="lg" className="text-lg px-12 py-7 font-body tracking-wide uppercase">
              {w.cta[lang]} <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <span className="text-muted-foreground font-body">
              {w.price[lang]} <span className="text-primary font-semibold">{w.priceAccent[lang]}</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground/60 font-body flex items-center justify-center gap-1">
            <Zap className="w-3 h-3" />
            {w.badges[lang]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebsiteCTA;
