import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Anna & Piotr",
    country: "Polska 🇵🇱",
    text: "Najpiękniejsze miejsce, w jakim kiedykolwiek byliśmy. Zorza polarna prosto z hot tuba — magiczne!",
    rating: 5,
  },
  {
    name: "Sarah K.",
    country: "Germany 🇩🇪",
    text: "Absolute Ruhe, atemberaubende Aussicht. Guðrún war eine wunderbare Gastgeberin. Wir kommen wieder!",
    rating: 5,
  },
  {
    name: "James & Emily",
    country: "UK 🇬🇧",
    text: "Worth every penny. The breakfast with local skyr and bread was exceptional. A hidden gem in the Westfjords.",
    rating: 5,
  },
];

const Reviews = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-heading font-semibold text-center mb-4">
        Opinie <span className="text-gradient-warm">gości</span>
      </h2>
      <p className="text-center text-muted-foreground font-body mb-16">
        4.9 / 5 na podstawie 127 recenzji
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="p-8 rounded-lg bg-secondary border border-border relative">
            <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-foreground/80 font-body italic mb-6 leading-relaxed">"{r.text}"</p>
            <div>
              <p className="font-heading font-semibold text-sm">{r.name}</p>
              <p className="text-xs text-muted-foreground font-body">{r.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
