import { Settings, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AutoTech Solutions</span>
            </div>
            <p className="text-primary-foreground/80">
              Líderes en automatización industrial y sistemas logísticos inteligentes. 
              Transformamos operaciones con tecnología de vanguardia.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Soluciones</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#sga" className="hover:text-accent transition-colors">SGA - Gestión de Almacén</a></li>
              <li><a href="#wcs" className="hover:text-accent transition-colors">WCS - Control de Almacén</a></li>
              <li><a href="#plc" className="hover:text-accent transition-colors">Integración PLC</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Consultoría Técnica</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Soporte 24/7</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industrias</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Automotriz</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Farmacéutica</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Alimentaria</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Textil</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>info@autotech-solutions.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+34 900 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 AutoTech Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;