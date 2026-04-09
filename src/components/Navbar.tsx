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
    { href: "#amenities", label: t.nav.amenities[lang] },
    { href: "#reviews", label: t.nav.reviews[lang] },
    { href: "#contact", label: t.nav.contact[lang] },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Mountain className="w-5 h-5 text-primary" />
          <span className="font-heading font-semibold text-lg">Fjallsýn</span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-body text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button size="sm" className="font-body hidden sm:inline-flex">
            {t.nav.book[lang]}
          </Button>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-foreground/80 hover:text-foreground font-body py-2"
            >
              {l.label}
            </a>
          ))}
          <Button className="w-full font-body mt-2">{t.nav.book[lang]}</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
