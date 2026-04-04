import heroCabin from "@/assets/hero-cabin.jpg";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const Hero = () => {
  const { lang, t } = useLang();

  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      <img
        src={heroCabin}
        alt={t.hero.alt[lang]}
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl animate-fade-up">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-body tracking-wide uppercase">{t.hero.location[lang]}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-semibold leading-tight mb-4">
            Fjallsýn
            <span className="block text-gradient-warm">Cottage</span>
          </h1>
          
          <p className="text-lg text-muted-foreground font-body mb-2 max-w-lg">
            {t.hero.subtitle[lang]}
          </p>
          
          <div className="flex items-center gap-1 mb-8">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
            <span className="text-sm text-muted-foreground ml-2 font-body">{t.hero.rating[lang]}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6 font-body">
              {t.hero.bookNow[lang]}
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 font-body border-foreground/20">
              {t.hero.viewRooms[lang]}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
