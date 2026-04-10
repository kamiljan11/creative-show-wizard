import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Monitor, ArrowRight } from "lucide-react";

export type DemoContext =
  | "booking.com"
  | "airbnb"
  | "phone"
  | "email"
  | "whatsapp"
  | "instagram"
  | "facebook"
  | "contact-form"
  | "generic";

const contextMessages: Record<DemoContext, { title: string; description: string }> = {
  "booking.com": {
    title: "Booking.com redirect",
    description: "This would take you to the property's Booking.com listing, where you could read verified guest reviews, compare prices, and book instantly with free cancellation.",
  },
  airbnb: {
    title: "Airbnb redirect",
    description: "This would open the Airbnb listing with photos, host details, and the option to message Guðrún directly before booking.",
  },
  phone: {
    title: "Phone call",
    description: "This would start a phone call to +354 888 1234 — Guðrún usually picks up between 9:00–21:00 Reykjavík time.",
  },
  email: {
    title: "Send an email",
    description: "This would open your email client with a pre-filled message to info@fjallsyn.is — expect a reply within a few hours.",
  },
  whatsapp: {
    title: "WhatsApp message",
    description: "This would open a WhatsApp chat with Guðrún. Great for quick questions about availability, directions, or local tips.",
  },
  instagram: {
    title: "Instagram profile",
    description: "This would open the @fjallsyn Instagram page — behind-the-scenes photos, northern lights alerts, and guest stories.",
  },
  facebook: {
    title: "Facebook page",
    description: "This would open the Fjallsýn Cottage Facebook page with updates, seasonal offers, and community reviews.",
  },
  "contact-form": {
    title: "Inquiry sent",
    description: "Your booking inquiry would be emailed directly to Guðrún. She typically confirms availability and sends a payment link within 2–3 hours.",
  },
  generic: {
    title: "This is a demo",
    description: "This website is a fully functional demo of a guesthouse booking site. In a real version, this action would work — emails sent, bookings confirmed, payments processed.",
  },
};

interface DemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  context?: DemoContext;
}

const DemoDialog = ({ open, onOpenChange, context = "generic" }: DemoDialogProps) => {
  const msg = contextMessages[context];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md text-center">
        <DialogHeader className="items-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
            <Monitor className="w-6 h-6 text-primary" />
          </div>
          <DialogTitle className="font-heading text-xl">{msg.title}</DialogTitle>
          <DialogDescription className="font-body text-sm leading-relaxed">
            {msg.description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 p-4 rounded-lg bg-secondary border border-border">
          <p className="text-sm font-body font-medium text-foreground mb-1">
            Want a website like this for your business?
          </p>
          <p className="text-xs text-muted-foreground font-body mb-3">
            Custom-built, fully functional, ready to accept bookings.
          </p>
          <a href="#website-cta">
            <Button
              size="sm"
              className="font-body text-sm"
              onClick={() => onOpenChange(false)}
            >
              Learn more <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoDialog;
