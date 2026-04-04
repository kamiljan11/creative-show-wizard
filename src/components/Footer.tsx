import { MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-heading font-semibold mb-1">Fjallsýn Cottage</h3>
          <p className="text-sm text-muted-foreground font-body flex items-center gap-1">
            <MapPin className="w-3 h-3" /> Vestfjörðar, Ísland
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground font-body">
          © 2026 Fjallsýn Cottage. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
