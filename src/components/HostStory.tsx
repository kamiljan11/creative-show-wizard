import grandmaImg from "@/assets/grandma-1960s.jpg";
import gudrunImg from "@/assets/host-gudrun-modern.jpg";
import { useLang } from "@/i18n/LanguageContext";
import { NordicKnot } from "@/components/SvgDecorations";

const HostStory = () => {
  const { lang, t } = useLang();

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-6 md:gap-10 items-center">
          {/* Photo collage — grandma + Guðrún */}
          <div className="md:col-span-2">
            <div className="relative">
              {/* Guðrún — main modern photo */}
              <img
                src={gudrunImg}
                alt={t.host.name}
                loading="lazy"
                width={640}
                height={800}
                className="rounded-lg w-full object-cover aspect-[3/4]"
              />

              {/* Grandma — vintage overlay */}
              <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-6 w-[45%] rotate-[-3deg] group">
                <div className="bg-[#f5f0e8] p-1.5 md:p-2 rounded shadow-xl shadow-black/30">
                  <img
                    src={grandmaImg}
                    alt="Amma — 1960s"
                    loading="lazy"
                    width={640}
                    height={800}
                    className="rounded-sm w-full object-cover aspect-square grayscale"
                  />
                  <p className="text-[8px] md:text-[10px] text-center text-stone-500 font-body mt-1 italic">
                    Amma, ca. 1964
                  </p>
                </div>
              </div>

              {/* Name badge */}
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-primary text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-body text-xs md:text-sm font-semibold">
                {t.host.name}
              </div>
            </div>
          </div>

          <div className="md:col-span-3 mt-8 md:mt-0">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <NordicKnot className="text-primary" />
              <p className="text-primary font-body text-[10px] md:text-xs tracking-[0.25em] uppercase">
                {t.host.tag[lang]}
              </p>
            </div>
            <h2 className="text-2xl md:text-4xl font-heading font-semibold leading-tight mb-1 md:mb-2">
              {t.host.title[lang]}
            </h2>
            <h2 className="text-2xl md:text-4xl font-heading italic text-primary mb-4 md:mb-6">
              {t.host.titleAccent[lang]}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed mb-6 md:mb-8">
              {t.host.story[lang]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostStory;
