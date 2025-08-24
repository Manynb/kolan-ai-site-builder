import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Zap, 
  Globe, 
  Code, 
  Brain, 
  CreditCard,
  Smartphone,
  Shield,
  Download
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Editor Visual",
    description: "Drag & drop intuitivo com blocos prontos para criar sites profissionais sem conhecimento técnico.",
    badge: "Essencial",
    color: "text-pink",
    bgColor: "bg-pink/10",
    hoverBg: "hover:bg-pink/20"
  },
  {
    icon: Brain,
    title: "IA Integrada",
    description: "Gere textos e layouts automaticamente com nossa IA. Descreva sua ideia e veja ela ganhar vida.",
    badge: "AI Powered",
    color: "text-red",
    bgColor: "bg-red/10",
    hoverBg: "hover:bg-red/20"
  },
  {
    icon: Zap,
    title: "Tempo Real",
    description: "Visualize suas mudanças instantaneamente com nossa pré-visualização em tempo real.",
    badge: "Instantâneo",
    color: "text-orange",
    bgColor: "bg-orange/10",
    hoverBg: "hover:bg-orange/20"
  },
  {
    icon: Globe,
    title: "Publicação Automática",
    description: "Deploy direto para Netlify ou GitHub Pages com um clique. Seu site online em segundos.",
    badge: "One-Click",
    color: "text-pink",
    bgColor: "bg-pink/10",
    hoverBg: "hover:bg-pink/20"
  },
  {
    icon: Code,
    title: "Exportação Limpa",
    description: "Código HTML/CSS otimizado e limpo. Leve seu projeto para qualquer lugar.",
    badge: "Código Limpo",
    color: "text-red",
    bgColor: "bg-red/10",
    hoverBg: "hover:bg-red/20"
  },
  {
    icon: CreditCard,
    title: "Sistema de Créditos",
    description: "Comece com $5 grátis. Use IA por apenas $0.50 por mensagem. Recarregue quando precisar.",
    badge: "Flexível",
    color: "text-orange",
    bgColor: "bg-orange/10",
    hoverBg: "hover:bg-orange/20"
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Sites que funcionam perfeitamente em desktop, tablet e mobile. Design adaptativo automático.",
    badge: "Mobile-First",
    color: "text-pink",
    bgColor: "bg-pink/10",
    hoverBg: "hover:bg-pink/20"
  },
  {
    icon: Shield,
    title: "Hospedagem Segura",
    description: "SSL gratuito, CDN global e backups automáticos. Seu site sempre protegido e rápido.",
    badge: "Seguro",
    color: "text-red",
    bgColor: "bg-red/10",
    hoverBg: "hover:bg-red/20"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Tudo que você precisa para criar
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma completa com todas as ferramentas necessárias para transformar 
            suas ideias em sites profissionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-foreground/30 bg-card/50 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 ${feature.hoverBg} transition-all duration-300 shadow-lg`}>
                    <feature.icon className={`w-7 h-7 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <Badge variant="secondary" className="text-xs font-medium">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className={`text-lg font-semibold text-foreground group-hover:${feature.color} transition-colors duration-300`}>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;