import { Star, Award } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const FeaturedOn = () => {
  const { lang, t } = useLang();

  const platforms = [
    { name: "Booking.com", score: "9.4", maxScore: "10", color: "bg-[hsl(220,70%,50%)]", reviews: "87" },
    { name: "TripAdvisor", score: "5.0", maxScore: "5", color: "bg-[hsl(140,50%,40%)]", reviews: "24" },
    { name: "Google", score: "4.9", maxScore: "5", color: "bg-[hsl(40,80%,50%)]", reviews: "16" },
  ];

  return (
    <section className="py-10 md:py-16 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-primary font-body text-[10px] md:text-xs tracking-[0.25em] uppercase text-center mb-6 md:mb-8">
          {t.featuredOn.tag[lang]}
        </p>

        {/* Horizontal scroll on mobile */}
        <div className="flex md:flex-wrap md:justify-center gap-3 md:gap-8 mb-6 md:mb-10 overflow-x-auto snap-x snap-mandatory pb-2 md:pb-0 scrollbar-hide">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 rounded-lg bg-card border border-border hover:border-primary/20 transition-colors snap-center shrink-0"
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${p.color} flex items-center justify-center shrink-0`}>
                <span className="text-white font-heading font-bold text-sm md:text-lg">{p.score}</span>
              </div>
              <div>
                <p className="font-heading font-semibold text-xs md:text-sm">{p.name}</p>
                <div className="flex items-center gap-0.5 md:gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 fill-primary text-primary" />
                  ))}
                  <span className="text-[10px] md:text-xs text-muted-foreground font-body ml-1">
                    ({p.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center px-2">
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 rounded-lg bg-primary/5 border border-primary/10">
            <Award className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
            <p className="text-xs md:text-sm text-foreground/80 font-body italic">
              "{t.featuredOn.items[3].quote[lang]}"
            </p>
            <span className="text-[10px] md:text-xs text-muted-foreground font-body whitespace-nowrap">— {t.featuredOn.items[3].name}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
