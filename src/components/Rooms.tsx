import roomCozy from "@/assets/room-cozy.jpg";
import roomGlacier from "@/assets/room-glacier.jpg";
import hotTub from "@/assets/hot-tub.jpg";
import { Users, Maximize, Wifi, Bath, BedDouble, CheckCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const roomImages = [roomCozy, roomGlacier, hotTub];
const roomMeta = [
  { guests: 2, price: "24 900" },
  { guests: 2, price: "19 900" },
  { guests: 4, price: null },
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

                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-body mb-3">
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {roomMeta[i].guests} {t.rooms.guests[lang]}</span>
                  {room.sqm && (
                    <span className="flex items-center gap-1"><Maximize className="w-3 h-3" /> {room.sqm}m²</span>
                  )}
                  <span className="flex items-center gap-1"><Wifi className="w-3 h-3" /> Wi-Fi</span>
                </div>

                {(room.bathroom || room.bed) && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.bed && (
                      <span className="inline-flex items-center gap-1 text-xs font-body bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                        <BedDouble className="w-3 h-3" /> {room.bed[lang]}
                      </span>
                    )}
                    {room.bathroom && (
                      <span className="inline-flex items-center gap-1 text-xs font-body bg-accent/10 text-accent-foreground px-2.5 py-1 rounded-full">
                        <Bath className="w-3 h-3" /> {room.bathroom[lang]}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-1 text-xs text-primary/70 font-body mb-4">
                  <CheckCircle className="w-3 h-3" />
                  {t.rooms.breakfastIncluded[lang]}
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
