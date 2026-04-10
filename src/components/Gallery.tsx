import { useState } from "react";
import heroImg from "@/assets/hero-cabin.jpg";
import roomCozy from "@/assets/room-cozy.jpg";
import roomGlacier from "@/assets/room-glacier.jpg";
import hotTub from "@/assets/hot-tub.jpg";
import waterfall from "@/assets/gallery-waterfall.jpg";
import breakfast from "@/assets/gallery-breakfast.jpg";
import aurora from "@/assets/experience-aurora.jpg";
import hiking from "@/assets/experience-hiking.jpg";
import { X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const images = [
  { src: heroImg, alt: "Fjallsýn Cottage exterior" },
  { src: roomCozy, alt: "Eldvörp Suite" },
  { src: roomGlacier, alt: "Jökull Room" },
  { src: hotTub, alt: "Hot Tub" },
  { src: waterfall, alt: "Dynjandi Waterfall" },
  { src: breakfast, alt: "Icelandic Breakfast" },
  { src: aurora, alt: "Northern Lights" },
  { src: hiking, alt: "Hiking Trails" },
];

const Gallery = () => {
  const { lang, t } = useLang();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-center mb-10 md:mb-16">
            {t.gallery.title[lang]}{" "}
            <span className="text-gradient-warm">{t.gallery.titleAccent[lang]}</span>
          </h2>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="hidden md:grid grid-cols-4 gap-3 max-w-6xl mx-auto">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className={`overflow-hidden rounded-lg border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </button>
            ))}
          </div>

          {/* Mobile: horizontal scroll gallery */}
          <div className="flex md:hidden gap-3 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
            {images.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-border shrink-0 w-[70vw] h-48 snap-center"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex md:hidden justify-center gap-1.5 mt-3">
            {images.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-foreground/60 hover:text-foreground z-10"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <div className="flex items-center gap-2 md:gap-4 max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="text-2xl md:text-3xl text-foreground/40 hover:text-foreground font-body shrink-0 px-1 md:px-2"
              onClick={() => setLightbox((lightbox - 1 + images.length) % images.length)}
            >
              ‹
            </button>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-lg"
            />
            <button
              className="text-2xl md:text-3xl text-foreground/40 hover:text-foreground font-body shrink-0 px-1 md:px-2"
              onClick={() => setLightbox((lightbox + 1) % images.length)}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
