import { Star, Quote } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

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

  return (
    <section id="reviews" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-center mb-4">
          {t.reviews.title[lang]} <span className="text-gradient-warm">{t.reviews.titleAccent[lang]}</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-6">
          {t.reviews.subtitle[lang]}
        </p>

        {/* Platform score badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {Object.entries(t.reviews.platforms).map(([key, p]) => (
            <div key={key} className="flex items-center gap-2 text-sm font-body">
              <div className={`w-8 h-8 rounded ${platformColors[p.en] || "bg-primary"} flex items-center justify-center`}>
                <Star className="w-4 h-4 text-white fill-white" />
              </div>
              <div>
                <span className="font-semibold text-foreground text-xs">{p.en}</span>
                <p className="text-xs text-muted-foreground">{p.score} ({p.reviews})</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((r) => (
            <div key={r.name} className="p-8 rounded-lg bg-secondary border border-border relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 font-body italic mb-6 leading-relaxed">"{r.text[lang]}"</p>
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-heading font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{r.country}</p>
                </div>
                <span className={`text-xs font-body px-2 py-0.5 rounded ${platformColors[r.platform]} text-white`}>
                  {r.platform}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
