import { Star, Quote } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { useScrollDots } from "@/hooks/use-scroll-dots";
import { AuroraWisp } from "@/components/SvgDecorations";

const reviews = [
  {
    name: "Anna & Piotr",
    country: "Polska 🇵🇱",
    platform: "Booking.com",
    text: {
      en: "The most beautiful place we've ever been. Northern lights straight from the hot tub — magical!",
      pl: "Najpiękniejsze miejsce, w jakim kiedykolwiek byliśmy. Zorza polarna prosto z hot tuba — magiczne!",
      is: "Fallegasti staðurinn sem við höfum verið á. Norðurljós beint úr heita pottinum — töfrandi!",
    },
    rating: 5,
  },
  {
    name: "Sarah K.",
    country: "Germany 🇩🇪",
    platform: "TripAdvisor",
    text: {
      en: "Absolute tranquility, breathtaking views. Guðrún was a wonderful host. The homemade breakfast with local skyr was exceptional. We're coming back!",
      pl: "Absolutna cisza, zapierające dech widoki. Guðrún była cudowną gospodnią. Domowe śniadanie z lokalnym skyrem było wyjątkowe. Wrócimy!",
      is: "Algjör friður, stórkostlegt útsýni. Guðrún var dásamlegur gestgjafi. Heimagerður morgunverður með staðbundnu skyri var einstakur. Við komum aftur!",
    },
    rating: 5,
  },
  {
    name: "James & Emily",
    country: "UK 🇬🇧",
    platform: "Google",
    text: {
      en: "Worth every penny. The breakfast with local skyr and homemade bread was exceptional. A hidden gem in the Westfjords. Clean, comfortable, beautiful rooms.",
      pl: "Warte każdej korony. Śniadanie z lokalnym skyrem i domowym chlebem było wyjątkowe. Ukryty klejnot Fiordów Zachodnich. Czyste, wygodne, piękne pokoje.",
      is: "Þess virði hverrar krónu. Morgunverður með staðbundnu skyri og heimabökuðu brauði var einstakur. Falinn gimsteinn á Vestfjörðum.",
    },
    rating: 5,
  },
];

const platformColors: Record<string, string> = {
  "Booking.com": "bg-[hsl(220,70%,50%)]",
  "TripAdvisor": "bg-[hsl(140,50%,40%)]",
  "Google": "bg-[hsl(40,80%,50%)]",
};

const Reviews = () => {
  const { lang, t } = useLang();
  const { scrollRef, active, scrollTo } = useScrollDots(reviews.length);

  return (
    <section id="reviews" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-heading font-semibold text-center mb-1 md:mb-2">
          {t.reviews.title[lang]} <span className="text-gradient-warm">{t.reviews.titleAccent[lang]}</span>
        </h2>
        <div className="flex justify-center mb-2 md:mb-4">
          <AuroraWisp className="text-primary" />
        </div>
        <p className="text-center text-muted-foreground font-body text-sm md:text-base mb-4 md:mb-6">
          {t.reviews.subtitle[lang]}
        </p>

        <div className="flex justify-center gap-3 md:gap-6 mb-8 md:mb-12">
          {Object.entries(t.reviews.platforms).map(([key, p]) => (
            <div key={key} className="flex items-center gap-2 text-xs md:text-sm font-body">
              <div className={`w-8 h-8 md:w-8 md:h-8 rounded ${platformColors[p.en] || "bg-primary"} flex items-center justify-center`}>
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-white fill-white" />
              </div>
              <div>
                <span className="font-semibold text-foreground text-[10px] md:text-xs">{p.en}</span>
                <p className="text-[10px] md:text-xs text-muted-foreground">{p.score}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-auto md:px-0 scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {reviews.map((r) => (
            <div key={r.name} className="p-5 md:p-8 rounded-lg bg-secondary border border-border relative min-w-[270px] w-[85vw] md:w-auto md:min-w-0 snap-center shrink-0 md:shrink">
              <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary/20 absolute top-4 right-4 md:top-6 md:right-6" />
              <div className="flex gap-1 mb-3 md:mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xs md:text-sm text-foreground/80 font-body italic mb-4 md:mb-6 leading-relaxed">"{r.text[lang]}"</p>
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-heading font-semibold text-xs md:text-sm">{r.name}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground font-body">{r.country}</p>
                </div>
                <span className={`text-[10px] md:text-xs font-body px-2 py-0.5 rounded ${platformColors[r.platform]} text-white`}>
                  {r.platform}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex md:hidden justify-center gap-2 mt-4">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-4 bg-primary" : "w-1.5 bg-primary/30"
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
