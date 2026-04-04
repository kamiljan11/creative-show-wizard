import { Button } from "@/components/ui/button";
import { Mountain } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLang } from "@/i18n/LanguageContext";

const Navbar = () => {
  const { lang, t } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Mountain className="w-5 h-5 text-primary" />
          <span className="font-heading font-semibold text-lg">Fjallsýn</span>
        </a>
        <div className="hidden md:flex items-center gap-8 font-body text-sm">
          <a href="#rooms" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.rooms[lang]}</a>
          <a href="#amenities" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.amenities[lang]}</a>
          <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.reviews[lang]}</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.contact[lang]}</a>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button size="sm" className="font-body">{t.nav.book[lang]}</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
