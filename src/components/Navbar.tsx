import { Button } from "@/components/ui/button";
import { Mountain } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
    <div className="container mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" className="flex items-center gap-2">
        <Mountain className="w-5 h-5 text-primary" />
        <span className="font-heading font-semibold text-lg">Fjallsýn</span>
      </a>
      <div className="hidden md:flex items-center gap-8 font-body text-sm">
        <a href="#rooms" className="text-muted-foreground hover:text-foreground transition-colors">Pokoje</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Udogodnienia</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Opinie</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Kontakt</a>
      </div>
      <Button size="sm" className="font-body">Rezerwuj</Button>
    </div>
  </nav>
);

export default Navbar;
