import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLang } from "@/i18n/LanguageContext";

const FAQ = () => {
  const { lang, t } = useLang();

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-heading font-semibold text-center mb-10 md:mb-16">
          {t.faq.title[lang]}{" "}
          <span className="text-gradient-warm">{t.faq.titleAccent[lang]}</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
            {t.faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-lg px-4 md:px-6 bg-secondary/50"
              >
                <AccordionTrigger className="font-heading text-left text-sm md:text-base hover:no-underline py-4 md:py-5">
                  {item.q[lang]}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-xs md:text-sm leading-relaxed pb-4 md:pb-5">
                  {item.a[lang]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
