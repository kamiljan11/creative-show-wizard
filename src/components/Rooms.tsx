import roomCozy from "@/assets/room-cozy.jpg";
import roomGlacier from "@/assets/room-glacier.jpg";
import hotTub from "@/assets/hot-tub.jpg";
import { Users, Maximize, Wifi } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const roomImages = [roomCozy, roomGlacier, hotTub];
const roomMeta = [
  { guests: 2, size: "45m²", price: "24 900" },
  { guests: 2, size: "38m²", price: "19 900" },
  { guests: 4, size: "Outdoor", price: null },
];

const Rooms = () => {
  const { lang, t } = useLang();

  return (
    <section id="rooms" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-center mb-4">
          {t.rooms.title[lang]} <span className="text-gradient-warm">{t.rooms.titleAccent[lang]}</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-lg mx-auto">
          {t.rooms.subtitle[lang]}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {t.rooms.list.map((room, i) => (
            <div key={room.name} className="group rounded-lg overflow-hidden bg-secondary border border-border hover:border-primary/30 transition-all duration-500">
              <div className="overflow-hidden h-64">
                <img
                  src={roomImages[i]}
                  alt={room.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">{room.name}</h3>
                <p className="text-sm text-muted-foreground font-body mb-4">{room.desc[lang]}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-body mb-4">
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {roomMeta[i].guests} {t.rooms.guests[lang]}</span>
                  <span className="flex items-center gap-1"><Maximize className="w-3 h-3" /> {roomMeta[i].size}</span>
                  <span className="flex items-center gap-1"><Wifi className="w-3 h-3" /> Wi-Fi</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-2xl font-heading font-bold text-primary">
                      {roomMeta[i].price ?? t.rooms.included[lang]}
                    </span>
                    {roomMeta[i].price && <span className="text-xs text-muted-foreground ml-1">{t.rooms.perNight[lang]}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
