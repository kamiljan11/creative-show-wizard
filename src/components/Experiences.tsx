import auroraImg from "@/assets/experience-aurora.jpg";
import whaleImg from "@/assets/experience-whale.jpg";
import hikingImg from "@/assets/experience-hiking.jpg";
import hotspringImg from "@/assets/experience-hotspring.jpg";
import { Calendar } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { CompassAccent } from "@/components/SvgDecorations";
import { useScrollDots } from "@/hooks/use-scroll-dots";

const images = [auroraImg, whaleImg, hikingImg, hotspringImg];

const Experiences = () => {
  const { lang, t } = useLang();
  const { scrollRef, active, scrollTo } = useScrollDots(t.experiences.items.length);

  return (
    <section id="experiences" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center gap-2 mb-2 md:mb-4">
          <CompassAccent className="text-primary" />
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-center">
            {t.experiences.title[lang]}{" "}
            <span className="text-gradient-warm">{t.experiences.titleAccent[lang]}</span>
          </h2>
        </div>
        <p className="text-center text-muted-foreground font-body text-sm md:text-base mb-10 md:mb-16 max-w-lg mx-auto">
          {t.experiences.subtitle[lang]}
        </p>

        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-auto md:px-0 scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {t.experiences.items.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-lg overflow-hidden h-56 md:h-72 border border-border hover:border-primary/30 transition-all duration-500 min-w-[260px] w-[85vw] md:w-auto md:min-w-0 snap-center shrink-0 md:shrink"
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
              <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-6">
                <div className="flex items-center gap-2 mb-1 md:mb-2">
                  <Calendar className="w-3 h-3 text-primary" />
                  <span className="text-[10px] md:text-xs text-primary font-body tracking-wide uppercase">
                    {item.season[lang]}
                  </span>
                </div>
                <h3 className="text-base md:text-xl font-heading font-semibold mb-1 md:mb-2">{item.title[lang]}</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-body leading-relaxed line-clamp-2 md:line-clamp-none">
                  {item.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex md:hidden justify-center gap-2 mt-4">
          {t.experiences.items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-4 bg-primary" : "w-1.5 bg-primary/30"
              }`}
              aria-label={`Experience ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
