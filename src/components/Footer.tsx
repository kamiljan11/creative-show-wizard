import { MapPin, Instagram, Facebook, Phone, Mail } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const Footer = () => {
  const { lang, t } = useLang();

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
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
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-3 text-sm">Quick links</h4>
            <div className="space-y-2 text-sm font-body">
              <a href="#rooms" className="block text-muted-foreground hover:text-primary transition-colors">{t.nav.rooms[lang]}</a>
              <a href="#experiences" className="block text-muted-foreground hover:text-primary transition-colors">{t.nav.experiences[lang]}</a>
              <a href="#amenities" className="block text-muted-foreground hover:text-primary transition-colors">{t.nav.amenities[lang]}</a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">{t.nav.contact[lang]}</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground font-body">
            {t.footer.rights[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
