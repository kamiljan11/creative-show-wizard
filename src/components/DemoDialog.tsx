import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Monitor, ArrowRight } from "lucide-react";

interface DemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoDialog = ({ open, onOpenChange }: DemoDialogProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-md text-center">
      <DialogHeader className="items-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
          <Monitor className="w-6 h-6 text-primary" />
        </div>
        <DialogTitle className="font-heading text-xl">This is a demo</DialogTitle>
        <DialogDescription className="font-body text-sm leading-relaxed">
          This website is a fully functional demo of a guesthouse booking site.
          In a real version, this action would work — emails sent, bookings confirmed, payments processed.
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

export default DemoDialog;
