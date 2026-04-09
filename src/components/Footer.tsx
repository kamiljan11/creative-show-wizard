import { MapPin, Instagram, Facebook, Phone, Mail, ExternalLink } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const Footer = () => {
  const { lang, t } = useLang();

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-heading font-semibold mb-2">Fjallsýn Cottage</h3>
            <p className="text-sm text-muted-foreground font-body flex items-center gap-1 mb-4">
              <MapPin className="w-3 h-3" /> Vestfjörðar, Ísland
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-3 text-sm">{t.nav.contact[lang]}</h4>
            <div className="space-y-2 text-sm text-muted-foreground font-body">
              <a href="tel:+3548881234" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-3 h-3" /> +354 888 1234
              </a>
              <a href="mailto:info@fjallsyn.is" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-3 h-3" /> info@fjallsyn.is
              </a>
              <a href="https://wa.me/3548881234" className="flex items-center gap-2 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-3 text-sm">{t.footer.quickLinks[lang]}</h4>
            <div className="space-y-2 text-sm font-body">
              <a href="#rooms" className="block text-muted-foreground hover:text-primary transition-colors">{t.nav.rooms[lang]}</a>
              <a href="#experiences" className="block text-muted-foreground hover:text-primary transition-colors">{t.nav.experiences[lang]}</a>
              <a href="#amenities" className="block text-muted-foreground hover:text-primary transition-colors">{t.nav.amenities[lang]}</a>
              <a href="#reviews" className="block text-muted-foreground hover:text-primary transition-colors">{t.nav.reviews[lang]}</a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">{t.nav.contact[lang]}</a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-3 text-sm">{t.footer.usefulLinks[lang]}</h4>
            <div className="space-y-2 text-sm font-body">
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

        {/* Platform badges row */}
        <div className="flex flex-wrap justify-center gap-6 py-6 border-t border-border mb-6">
          <span className="text-xs text-muted-foreground font-body">Booking.com — 9.4/10</span>
          <span className="text-xs text-muted-foreground font-body">TripAdvisor — 5.0/5</span>
          <span className="text-xs text-muted-foreground font-body">Google — 4.9/5</span>
        </div>

        <div className="text-center">
          <p className="text-xs text-muted-foreground font-body">
            {t.footer.rights[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
