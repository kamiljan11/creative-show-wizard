import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const CookieConsent = () => {
  const { lang, t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handle = (choice: string) => {
    localStorage.setItem("cookie-consent", choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-up">
      <div className="max-w-xl mx-auto bg-card border border-border rounded-xl p-5 shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="w-6 h-6 text-primary shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground font-body flex-1">
          {t.cookie.text[lang]}
        </p>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={() => handle("rejected")} className="font-body text-xs">
            {t.cookie.reject[lang]}
          </Button>
          <Button size="sm" onClick={() => handle("accepted")} className="font-body text-xs">
            {t.cookie.accept[lang]}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
