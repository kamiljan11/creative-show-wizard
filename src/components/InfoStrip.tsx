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
    <section className="py-6 border-y border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-sm font-body">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-xs">{item.label}</p>
                {item.value && (
                  <p className="text-muted-foreground text-xs">{item.value}</p>
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
