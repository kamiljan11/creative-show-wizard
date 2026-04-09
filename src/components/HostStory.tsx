import hostImg from "@/assets/host-gudrun.jpg";
import { Quote } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const HostStory = () => {
  const { lang, t } = useLang();

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="relative">
              <img
                src={hostImg}
                alt={t.host.name}
                loading="lazy"
                width={600}
                height={800}
                className="rounded-lg w-full object-cover aspect-[3/4]"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-body text-sm font-semibold">
                {t.host.name}
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-4">
              {t.host.tag[lang]}
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-tight mb-2">
              {t.host.title[lang]}
            </h2>
            <h2 className="text-3xl md:text-4xl font-heading italic text-primary mb-6">
              {t.host.titleAccent[lang]}
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              {t.host.story[lang]}
            </p>
            <div className="border-l-2 border-primary/30 pl-6">
              <Quote className="w-5 h-5 text-primary/40 mb-2" />
              <p className="font-heading italic text-foreground/80 text-lg">
                {t.host.quote[lang]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostStory;
