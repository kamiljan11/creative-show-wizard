import { Star, Award, ExternalLink } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const FeaturedOn = () => {
  const { lang, t } = useLang();

  const platforms = [
    { name: "Booking.com", score: "9.4", maxScore: "10", color: "bg-[hsl(220,70%,50%)]", reviews: "87" },
    { name: "TripAdvisor", score: "5.0", maxScore: "5", color: "bg-[hsl(140,50%,40%)]", reviews: "24" },
    { name: "Google", score: "4.9", maxScore: "5", color: "bg-[hsl(40,80%,50%)]", reviews: "16" },
  ];

  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-6">
        <p className="text-primary font-body text-xs tracking-[0.25em] uppercase text-center mb-8">
          {t.featuredOn.tag[lang]}
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-4 px-6 py-4 rounded-lg bg-card border border-border hover:border-primary/20 transition-colors"
            >
              <div className={`w-12 h-12 rounded-lg ${p.color} flex items-center justify-center shrink-0`}>
                <span className="text-white font-heading font-bold text-lg">{p.score}</span>
              </div>
              <div>
                <p className="font-heading font-semibold text-sm">{p.name}</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                  <span className="text-xs text-muted-foreground font-body ml-1">
                    ({p.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-primary/5 border border-primary/10">
            <Award className="w-5 h-5 text-primary" />
            <p className="text-sm text-foreground/80 font-body italic">
              "{t.featuredOn.items[3].quote[lang]}"
            </p>
            <span className="text-xs text-muted-foreground font-body">— {t.featuredOn.items[3].name}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
