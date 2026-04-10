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
    <section id="rooms" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-heading font-semibold text-center mb-2 md:mb-4">
          {t.rooms.title[lang]} <span className="text-gradient-warm">{t.rooms.titleAccent[lang]}</span>
        </h2>
        <p className="text-center text-muted-foreground font-body text-sm md:text-base mb-10 md:mb-16 max-w-lg mx-auto">
          {t.rooms.subtitle[lang]}
        </p>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {t.rooms.list.map((room, i) => (
            <div
              key={room.name}
              className="group rounded-lg overflow-hidden bg-secondary border border-border hover:border-primary/30 transition-all duration-500 min-w-[280px] w-[85vw] md:w-auto md:min-w-0 snap-center shrink-0 md:shrink"
            >
              <div className="overflow-hidden h-48 md:h-64">
                <img
                  src={roomImages[i]}
                  alt={room.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 md:p-6 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-heading font-semibold mb-1 md:mb-2">{room.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-body mb-3 md:mb-4 min-h-[3.5rem] md:min-h-[4.5rem]">{room.desc[lang]}</p>

                <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs text-muted-foreground font-body mb-2 md:mb-3">
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {roomMeta[i].guests} {t.rooms.guests[lang]}</span>
                  {room.sqm && (
                    <span className="flex items-center gap-1"><Maximize className="w-3 h-3" /> {room.sqm}m²</span>
                  )}
                  <span className="flex items-center gap-1"><Wifi className="w-3 h-3" /> Wi-Fi</span>
                </div>

                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4 min-h-[1.75rem]">
                  {room.bed && (
                    <span className="inline-flex items-center gap-1 text-[10px] md:text-xs font-body bg-primary/10 text-primary px-2 py-0.5 md:px-2.5 md:py-1 rounded-full">
                      <BedDouble className="w-3 h-3" /> {room.bed[lang]}
                    </span>
                  )}
                  {room.bathroom && (
                    <span className="inline-flex items-center gap-1 text-[10px] md:text-xs font-body bg-accent/10 text-accent-foreground px-2 py-0.5 md:px-2.5 md:py-1 rounded-full">
                      <Bath className="w-3 h-3" /> {room.bathroom[lang]}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-[10px] md:text-xs text-primary/70 font-body mb-3 md:mb-4">
                  <CheckCircle className="w-3 h-3" />
                  {t.rooms.breakfastIncluded[lang]}
                </div>

                <div className="mt-auto">
                  <span className="text-xl md:text-2xl font-heading font-bold text-primary">
                    {roomMeta[i].price ?? t.rooms.included[lang]}
                  </span>
                  {roomMeta[i].price && <span className="text-[10px] md:text-xs text-muted-foreground ml-1">{t.rooms.perNight[lang]}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator dots on mobile */}
        <div className="flex md:hidden justify-center gap-1.5 mt-4">
          {t.rooms.list.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
