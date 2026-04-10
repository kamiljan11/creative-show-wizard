import { useState } from "react";
import { MapPin, Instagram, Facebook, Phone, Mail, ExternalLink } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import DemoDialog from "@/components/DemoDialog";

const Footer = () => {
  const { lang, t } = useLang();
  const [showDemo, setShowDemo] = useState(false);

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDemo(true);
  };

  return (
    <footer className="py-10 md:py-16 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-8 md:mb-10">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg md:text-xl font-heading font-semibold mb-2">Fjallsýn Cottage</h3>
            <p className="text-xs md:text-sm text-muted-foreground font-body flex items-center gap-1 mb-3 md:mb-4">
              <MapPin className="w-3 h-3" /> Vestfjörðar, Ísland
            </p>
            <div className="flex items-center gap-4">
              <button onClick={handleDemoClick} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </button>
              <button onClick={handleDemoClick} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-2 md:mb-3 text-xs md:text-sm">{t.nav.contact[lang]}</h4>
            <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground font-body">
              <button onClick={handleDemoClick} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-3 h-3" /> +354 888 1234
              </button>
              <button onClick={handleDemoClick} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-3 h-3" /> info@fjallsyn.is
              </button>
              <button onClick={handleDemoClick} className="flex items-center gap-2 hover:text-primary transition-colors">
                WhatsApp
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-2 md:mb-3 text-xs md:text-sm">{t.footer.quickLinks[lang]}</h4>
            <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm font-body">
              <a href="#rooms" className="block text-muted-foreground hover:text-primary transition-colors">{t.nav.rooms[lang]}</a>
              <a href="#experiences" className="block text-muted-foreground hover:text-primary transition-colors">{t.nav.experiences[lang]}</a>
              <a href="#amenities" className="block text-muted-foreground hover:text-primary transition-colors">{t.nav.amenities[lang]}</a>
              <a href="#reviews" className="block text-muted-foreground hover:text-primary transition-colors">{t.nav.reviews[lang]}</a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-2 md:mb-3 text-xs md:text-sm">{t.footer.usefulLinks[lang]}</h4>
            <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm font-body">
              <a href="https://www.road.is" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                road.is <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://en.vedur.is" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                vedur.is <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://safetravel.is" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                safetravel.is <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://www.visitwestfjords.is" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                visitwestfjords.is <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 py-4 md:py-6 border-t border-border mb-4 md:mb-6">
          <span className="text-[10px] md:text-xs text-muted-foreground font-body">Booking.com — 9.4/10</span>
          <span className="text-[10px] md:text-xs text-muted-foreground font-body">TripAdvisor — 5.0/5</span>
          <span className="text-[10px] md:text-xs text-muted-foreground font-body">Google — 4.9/5</span>
        </div>

        <div className="text-center">
          <p className="text-[10px] md:text-xs text-muted-foreground font-body">
            {t.footer.rights[lang]}
          </p>
        </div>
      </div>
      <DemoDialog open={showDemo} onOpenChange={setShowDemo} />
    </footer>
  );
};

export default Footer;
