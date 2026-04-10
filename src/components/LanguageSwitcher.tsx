import { useLang } from "@/i18n/LanguageContext";
import { Lang } from "@/i18n/translations";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const labels: Record<Lang, string> = { en: "EN", pl: "PL", is: "IS" };

const LanguageSwitcher = () => {
  const { lang, setLang } = useLang();

  return (
    <Select value={lang} onValueChange={(v) => setLang(v as Lang)}>
      <SelectTrigger className="w-auto gap-1.5 border-border/50 bg-transparent h-8 px-2 text-xs font-body">
        <Globe className="w-3.5 h-3.5" />
        <SelectValue>{flags[lang]} {labels[lang]}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {(["en", "pl", "is"] as Lang[]).map((l) => (
          <SelectItem key={l} value={l} className="text-sm">
            {flags[l]} {labels[l]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
