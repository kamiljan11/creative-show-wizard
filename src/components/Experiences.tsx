import auroraImg from "@/assets/experience-aurora.jpg";
import whaleImg from "@/assets/experience-whale.jpg";
import hikingImg from "@/assets/experience-hiking.jpg";
import hotspringImg from "@/assets/experience-hotspring.jpg";
import { Calendar } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const images = [auroraImg, whaleImg, hikingImg, hotspringImg];

const Experiences = () => {
  const { lang, t } = useLang();

  return (
    <section id="experiences" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-center mb-4">
          {t.experiences.title[lang]}{" "}
          <span className="text-gradient-warm">{t.experiences.titleAccent[lang]}</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-lg mx-auto">
          {t.experiences.subtitle[lang]}
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t.experiences.items.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-lg overflow-hidden h-72 border border-border hover:border-primary/30 transition-all duration-500"
            >
              <img
                src={images[i]}
                alt={item.title[lang]}
                loading="lazy"
                width={800}
                height={600}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-3 h-3 text-primary" />
                  <span className="text-xs text-primary font-body tracking-wide uppercase">
                    {item.season[lang]}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{item.title[lang]}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
