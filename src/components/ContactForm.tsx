import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useLang } from "@/i18n/LanguageContext";
import DemoDialog, { type DemoContext } from "@/components/DemoDialog";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
  const { lang, t } = useLang();
  const [showDemo, setShowDemo] = useState(false);
  const [demoCtx, setDemoCtx] = useState<DemoContext>("generic");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setDemoCtx("contact-form");
    setShowDemo(true);
    form.reset();
  }

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-2 text-center">
            {t.contact.title[lang]}
          </h2>
          <p className="text-muted-foreground font-body text-center mb-8">
            {t.contact.subtitle[lang]}
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body">{t.contact.name[lang]}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.contact.namePlaceholder[lang]} {...field} className="font-body" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body">{t.contact.email[lang]}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.contact.emailPlaceholder[lang]} {...field} className="font-body" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body">{t.contact.message[lang]}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={t.contact.messagePlaceholder[lang]} {...field} className="font-body min-h-[120px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full font-body py-6 text-lg">
                {t.contact.submit[lang]}
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <DemoDialog open={showDemo} onOpenChange={setShowDemo} context={demoCtx} />
    </section>
  );
};

export default ContactForm;
