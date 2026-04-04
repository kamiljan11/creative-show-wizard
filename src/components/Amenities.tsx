import { Flame, Wifi, Car, Mountain, Coffee, ShieldCheck, Bath, Utensils } from "lucide-react";

const amenities = [
  { icon: Flame, label: "Kominek", desc: "Prawdziwy ogień w każdym pokoju" },
  { icon: Bath, label: "Hot Tub", desc: "Gorąca balia pod gołym niebem" },
  { icon: Wifi, label: "Wi-Fi", desc: "Szybki internet Starlink" },
  { icon: Car, label: "Parking", desc: "Bezpłatny prywatny parking" },
  { icon: Mountain, label: "Szlaki", desc: "Piesze wycieczki od progu" },
  { icon: Coffee, label: "Śniadanie", desc: "Lokalne islandzkie produkty" },
  { icon: Utensils, label: "Kuchnia", desc: "W pełni wyposażona" },
  { icon: ShieldCheck, label: "Bezpieczeństwo", desc: "24/7 kontakt z gospodarzem" },
];

const Amenities = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-heading font-semibold text-center mb-4">
        Co <span className="text-gradient-warm">oferujemy</span>
      </h2>
      <p className="text-center text-muted-foreground font-body mb-16 max-w-lg mx-auto">
        Wszystko, czego potrzebujesz do idealnego wypoczynku na krańcu świata.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {amenities.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="p-6 rounded-lg bg-card border border-border hover:border-primary/20 transition-colors text-center group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-semibold mb-1">{label}</h3>
            <p className="text-xs text-muted-foreground font-body">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Amenities;
