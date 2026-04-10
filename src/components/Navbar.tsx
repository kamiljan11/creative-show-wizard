import { useState } from "react";
import { Menu, X, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLang } from "@/i18n/LanguageContext";

const Navbar = () => {
  const { lang, t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#rooms", label: t.nav.rooms[lang] },
    { href: "#experiences", label: t.nav.experiences[lang] },
    { href: "#reviews", label: t.nav.reviews[lang] },
    { href: "#location", label: t.nav.location[lang] },
    { href: "#contact", label: t.nav.contact[lang] },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1.5 md:gap-2">
          <Mountain className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          <span className="font-heading font-semibold text-base md:text-lg">Fjallsýn</span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-body text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <LanguageSwitcher />
          <a href="#contact-form">
            <Button size="sm" className="font-body hidden sm:inline-flex text-xs md:text-sm">
              {t.nav.book[lang]}
            </Button>
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 py-3 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-foreground/80 hover:text-foreground font-body py-2.5 text-sm"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact-form" onClick={() => setOpen(false)}>
            <Button className="w-full font-body mt-2 text-sm">{t.nav.book[lang]}</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
