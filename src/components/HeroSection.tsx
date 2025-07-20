import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, Gauge } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Industrial Automation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-slide-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Automatización
            <span className="block bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              Industrial Avanzada
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Sistemas integrados de última generación para SGA, WCS y control PLC. 
            Transformamos su logística con tecnología inteligente y eficiencia operativa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="accent" size="lg" className="text-lg px-8 py-3">
              Ver Demo Interactiva
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              Casos de Éxito
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
                <p className="text-white/80">Tiempo de Actividad</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
                <p className="text-white/80">Seguridad Industrial</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Gauge className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">85%</h3>
                <p className="text-white/80">Mejora Eficiencia</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Animated Data Flow Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-20 bg-accent/30 animate-data-flow hidden lg:block"></div>
      <div className="absolute top-1/3 right-20 w-2 h-16 bg-primary-glow/40 animate-data-flow hidden lg:block" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-12 bg-accent/20 animate-data-flow hidden lg:block" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default HeroSection;