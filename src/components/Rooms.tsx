import roomCozy from "@/assets/room-cozy.jpg";
import roomGlacier from "@/assets/room-glacier.jpg";
import hotTub from "@/assets/hot-tub.jpg";
import { Users, Maximize, Wifi } from "lucide-react";

const rooms = [
  {
    name: "Eldvörp Suite",
    desc: "Przytulny salon z kominkiem i panoramicznym widokiem na góry. Idealny dla par.",
    img: roomCozy,
    guests: 2,
    size: "45m²",
    price: "24 900",
  },
  {
    name: "Jökull Room",
    desc: "Przestronna sypialnia z widokiem na lodowiec. Łóżko king-size, naturalne materiały.",
    img: roomGlacier,
    guests: 2,
    size: "38m²",
    price: "19 900",
  },
  {
    name: "Hot Tub & Relaks",
    desc: "Prywatna gorąca balia na tarasie z widokiem na wulkaniczny krajobraz. Dostępna dla wszystkich gości.",
    img: hotTub,
    guests: 4,
    size: "Outdoor",
    price: "W cenie",
  },
];

const Rooms = () => (
  <section id="rooms" className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-heading font-semibold text-center mb-4">
        Nasze <span className="text-gradient-warm">Pokoje</span>
      </h2>
      <p className="text-center text-muted-foreground font-body mb-16 max-w-lg mx-auto">
        Każdy pokój został zaprojektowany, by łączyć nordycki komfort z dziką naturą Islandii.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <div key={room.name} className="group rounded-lg overflow-hidden bg-secondary border border-border hover:border-primary/30 transition-all duration-500">
            <div className="overflow-hidden h-64">
              <img
                src={room.img}
                alt={room.name}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">{room.name}</h3>
              <p className="text-sm text-muted-foreground font-body mb-4">{room.desc}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground font-body mb-4">
                <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {room.guests} os.</span>
                <span className="flex items-center gap-1"><Maximize className="w-3 h-3" /> {room.size}</span>
                <span className="flex items-center gap-1"><Wifi className="w-3 h-3" /> Wi-Fi</span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-2xl font-heading font-bold text-primary">{room.price}</span>
                  {room.price !== "W cenie" && <span className="text-xs text-muted-foreground ml-1">ISK / noc</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Rooms;
