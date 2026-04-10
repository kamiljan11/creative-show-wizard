import { useState } from "react";
import roomCozy from "@/assets/room-cozy.jpg";
import roomSuite2 from "@/assets/room-suite-2.jpg";
import roomSuite3 from "@/assets/room-suite-3.jpg";
import roomGlacier from "@/assets/room-glacier.jpg";
import roomGlacier2 from "@/assets/room-glacier-2.jpg";
import hotTub from "@/assets/hot-tub.jpg";
import roomFjord from "@/assets/room-fjord.jpg";
import roomFjord2 from "@/assets/room-fjord-2.jpg";
import hotTub2 from "@/assets/hot-tub-2.jpg";
import { Users, Maximize, Wifi, Bath, BedDouble, CheckCircle, ChevronLeft, ChevronRight, Droplets } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const roomImages = [
  [roomCozy, roomSuite2, roomSuite3, hotTub],
  [roomGlacier, roomGlacier2, hotTub2],
  [roomFjord, roomFjord2, hotTub],
];

const roomMeta = [
  { guests: 2, price: "24 900" },
  { guests: 2, price: "19 900" },
  { guests: 2, price: "16 900" },
];

const ImageSlider = ({ images, alt }: { images: string[]; alt: string }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative overflow-hidden h-48 md:h-64 group/slider">
      <img
        src={images[current]}
        alt={`${alt} ${current + 1}`}
        loading="lazy"
        width={800}
        height={600}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === current ? "bg-primary w-3" : "bg-foreground/40"
                }`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

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

        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {t.rooms.list.map((room, i) => (
            <div
              key={room.name}
              className="group flex flex-col rounded-lg overflow-hidden bg-secondary border border-border hover:border-primary/30 transition-all duration-500 min-w-[280px] w-[85vw] md:w-auto md:min-w-0 snap-center shrink-0 md:shrink"
            >
              <ImageSlider images={roomImages[i]} alt={room.name} />

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

                <div className="space-y-1.5 mb-3 md:mb-4">
                  <div className="flex items-center gap-1 text-[10px] md:text-xs text-primary/70 font-body">
                    <CheckCircle className="w-3 h-3" />
                    {t.rooms.breakfastIncluded[lang]}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] md:text-xs text-primary/70 font-body">
                    <Droplets className="w-3 h-3" />
                    {t.rooms.hotTubShared[lang]}
                  </div>
                </div>

                <div className="mt-auto">
                  <span className="text-xl md:text-2xl font-heading font-bold text-primary">
                    {roomMeta[i].price}
                  </span>
                  <span className="text-[10px] md:text-xs text-muted-foreground ml-1">{t.rooms.perNight[lang]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

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
