import { Button } from "@/components/ui/button";
import { Settings, Activity, Database, Cpu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <Settings className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary">AutoTech Solutions</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#sga" className="text-foreground hover:text-primary transition-colors font-medium">
            SGA
          </a>
          <a href="#wcs" className="text-foreground hover:text-primary transition-colors font-medium">
            WCS
          </a>
          <a href="#plc" className="text-foreground hover:text-primary transition-colors font-medium">
            PLC
          </a>
          <a href="#casos" className="text-foreground hover:text-primary transition-colors font-medium">
            Casos de Uso
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="tech" size="sm">
            Solicitar Demo
          </Button>
          <Button variant="industrial" size="sm">
            Contacto
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;