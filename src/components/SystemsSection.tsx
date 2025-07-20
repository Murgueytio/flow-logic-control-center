import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Activity, 
  Cpu, 
  BarChart3, 
  Workflow, 
  Settings, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

const SystemsSection = () => {
  const systems = [
    {
      id: "sga",
      icon: Database,
      title: "SGA - Sistema de Gestión de Almacén",
      description: "Control total de inventario, optimización de espacios y trazabilidad completa de productos.",
      features: [
        "Gestión de inventario en tiempo real",
        "Optimización automática de ubicaciones",
        "Trazabilidad completa de productos",
        "Integración con ERP empresarial",
        "Reportes avanzados y analytics"
      ],
      color: "primary",
      gradient: "bg-gradient-to-br from-primary/10 to-primary-glow/5"
    },
    {
      id: "wcs",
      icon: Activity,
      title: "WCS - Sistema de Control de Almacén",
      description: "Coordinación inteligente de equipos automatizados y flujo optimizado de materiales.",
      features: [
        "Control de transportadores",
        "Coordinación de robots AGV",
        "Gestión de colas inteligente",
        "Monitoreo en tiempo real",
        "Algoritmos de optimización"
      ],
      color: "accent",
      gradient: "bg-gradient-to-br from-accent/10 to-accent/5"
    },
    {
      id: "plc",
      icon: Cpu,
      title: "Integración PLC",
      description: "Comunicación seamless con autómatas programables y sistemas de control industrial.",
      features: [
        "Protocolos industriales estándar",
        "Comunicación MODBUS/Ethernet IP",
        "Interfaz HMI personalizable",
        "Diagnósticos automáticos",
        "Redundancia y failover"
      ],
      color: "secondary",
      gradient: "bg-gradient-to-br from-secondary/20 to-muted/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-tech">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Tecnologías Avanzadas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sistemas de Automatización
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones integrales que transforman la logística industrial mediante 
            tecnología de vanguardia y control inteligente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {systems.map((system, index) => (
            <Card 
              key={system.id} 
              className={`${system.gradient} border-0 shadow-tech hover:shadow-industrial transition-all duration-300 animate-slide-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  system.color === 'primary' ? 'bg-gradient-hero' :
                  system.color === 'accent' ? 'bg-accent' : 'bg-primary'
                }`}>
                  <system.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {system.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {system.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {system.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={system.color === 'primary' ? 'industrial' : 
                           system.color === 'accent' ? 'accent' : 'tech'} 
                  className="w-full"
                >
                  Conocer Más
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Diagram */}
        <Card className="bg-white shadow-industrial border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-3">
              <Workflow className="w-8 h-8 text-primary" />
              Integración Total de Sistemas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <p className="font-semibold">SGA</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-1 bg-primary animate-tech-pulse"></div>
                <ArrowRight className="w-6 h-6 text-primary mx-2" />
                <div className="w-16 h-1 bg-primary animate-tech-pulse"></div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-10 h-10 text-white" />
                </div>
                <p className="font-semibold">WCS</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-1 bg-primary animate-tech-pulse"></div>
                <ArrowRight className="w-6 h-6 text-primary mx-2" />
                <div className="w-16 h-1 bg-primary animate-tech-pulse"></div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-10 h-10 text-white" />
                </div>
                <p className="font-semibold">PLC</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button variant="industrial" size="lg">
                <BarChart3 className="mr-2" />
                Ver Dashboard Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SystemsSection;