import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Factory, 
  Truck, 
  Package, 
  Zap, 
  TrendingUp, 
  Users, 
  ArrowRight 
} from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      industry: "Automotive",
      company: "AutoParts Manufacturing",
      icon: Factory,
      challenge: "Gestión de 50,000+ referencias con alta rotación",
      solution: "Implementación integral SGA + WCS + PLC",
      results: [
        { metric: "Eficiencia", value: "+75%", icon: TrendingUp },
        { metric: "Errores", value: "-90%", icon: Zap },
        { metric: "Tiempo", value: "-60%", icon: Package }
      ],
      technologies: ["SGA", "WCS", "PLC Siemens", "AGV", "Pick-to-Light"],
      color: "bg-gradient-to-br from-primary/10 to-primary-glow/5"
    },
    {
      industry: "E-commerce",
      company: "LogiCenter Distribution",
      icon: Truck,
      challenge: "Procesamiento de 10,000 pedidos diarios con precisión",
      solution: "Sistema WCS avanzado con IA predictiva",
      results: [
        { metric: "Throughput", value: "+120%", icon: TrendingUp },
        { metric: "Precisión", value: "99.8%", icon: Zap },
        { metric: "Personal", value: "-40%", icon: Users }
      ],
      technologies: ["WCS", "IA Predictiva", "Sorteo Automático", "API Integration"],
      color: "bg-gradient-to-br from-accent/10 to-accent/5"
    },
    {
      industry: "Pharmaceuticals",
      company: "PharmaLogistics Pro",
      icon: Package,
      challenge: "Trazabilidad completa con condiciones controladas",
      solution: "SGA con control ambiental y compliance",
      results: [
        { metric: "Compliance", value: "100%", icon: Zap },
        { metric: "Trazabilidad", value: "100%", icon: TrendingUp },
        { metric: "Auditorías", value: "-80%", icon: Users }
      ],
      technologies: ["SGA Validado", "Control Ambiental", "Blockchain", "RFID"],
      color: "bg-gradient-to-br from-secondary/20 to-muted/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Casos de Éxito
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transformación Comprobada
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reales de nuestras implementaciones en diferentes industrias. 
            Cada proyecto optimizado para máximo ROI y eficiencia operativa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((caseStudy, index) => (
            <Card 
              key={index}
              className={`${caseStudy.color} border-0 shadow-tech hover:shadow-industrial transition-all duration-300 animate-slide-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <caseStudy.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <Badge variant="outline" className="text-xs">
                      {caseStudy.industry}
                    </Badge>
                    <CardTitle className="text-lg mt-1">{caseStudy.company}</CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Desafío</h4>
                  <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Solución</h4>
                  <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Resultados</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className="text-center p-3 bg-white/50 rounded-lg">
                        <result.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                        <p className="text-lg font-bold text-primary">{result.value}</p>
                        <p className="text-xs text-muted-foreground">{result.metric}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tecnologías</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="tech" className="w-full mt-4">
                  Ver Caso Completo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-hero text-white border-0 shadow-industrial">
          <CardContent className="text-center py-12">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo para Transformar su Operación?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Únase a las empresas líderes que ya han optimizado sus procesos 
              logísticos con nuestras soluciones de automatización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="text-lg px-8">
                Análisis Gratuito
                <ArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
              >
                Descargar Catálogo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CasesSection;