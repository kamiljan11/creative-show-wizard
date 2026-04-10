import { useState } from "react";
import heroCabin from "@/assets/hero-cabin.jpg";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ExternalLink } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import DemoDialog from "@/components/DemoDialog";

const Hero = () => {
  const { lang, t } = useLang();
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-end pb-12 md:pb-20 overflow-hidden">
      <img
        src={heroCabin}
        alt={t.hero.alt[lang]}
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-2xl animate-fade-up">
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm text-primary font-body tracking-wide uppercase">{t.hero.location[lang]}</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-heading font-semibold leading-tight mb-3 md:mb-4">
            Fjallsýn
            <span className="block text-gradient-warm">Cottage</span>
          </h1>
          
          <p className="text-sm md:text-lg text-muted-foreground font-body mb-2 max-w-lg">
            {t.hero.subtitle[lang]}
          </p>
          
          <div className="flex items-center gap-1 mb-6 md:mb-8">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-primary text-primary" />
            ))}
            <span className="text-xs md:text-sm text-muted-foreground ml-2 font-body">{t.hero.rating[lang]}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a href="#contact-form">
              <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-body w-full sm:w-auto">
                {t.hero.bookNow[lang]}
              </Button>
            </a>
            <Button variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-body border-foreground/20 w-full sm:w-auto" onClick={() => setShowDemo(true)}>
              Booking.com <ExternalLink className="w-3.5 h-3.5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-body border-foreground/20 w-full sm:w-auto" onClick={() => setShowDemo(true)}>
              Airbnb <ExternalLink className="w-3.5 h-3.5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
      <DemoDialog open={showDemo} onOpenChange={setShowDemo} />
    </section>
  );
};

export default Hero;
