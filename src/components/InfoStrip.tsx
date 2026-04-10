import { Clock, Coffee, LogOut, Car, Wifi, Zap } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const InfoStrip = () => {
  const { lang, t } = useLang();

  const items = [
    { icon: Clock, label: t.infoStrip.checkin.label[lang], value: t.infoStrip.checkin.value },
    { icon: Coffee, label: t.infoStrip.breakfast.label[lang], value: t.infoStrip.breakfast.value },
    { icon: LogOut, label: t.infoStrip.checkout.label[lang], value: t.infoStrip.checkout.value },
    { icon: Car, label: t.infoStrip.parking.label[lang], value: null },
    { icon: Wifi, label: t.infoStrip.wifi.label[lang], value: null },
    { icon: Zap, label: t.infoStrip.ev.label[lang], value: null },
  ];

  return (
    <section className="py-4 md:py-6 border-y border-border bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Horizontal scroll on mobile */}
        <div className="grid grid-cols-3 gap-4 md:flex md:gap-x-10 md:gap-y-4 md:flex-wrap md:justify-center">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs md:text-sm font-body">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
              </div>
              <div className="whitespace-nowrap">
                <p className="font-semibold text-foreground text-[10px] md:text-xs">{item.label}</p>
                {item.value && (
                  <p className="text-muted-foreground text-[10px] md:text-xs">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoStrip;
