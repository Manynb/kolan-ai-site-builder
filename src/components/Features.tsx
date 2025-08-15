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
    badge: "Essencial"
  },
  {
    icon: Brain,
    title: "IA Integrada",
    description: "Gere textos e layouts automaticamente com nossa IA. Descreva sua ideia e veja ela ganhar vida.",
    badge: "AI Powered"
  },
  {
    icon: Zap,
    title: "Tempo Real",
    description: "Visualize suas mudanças instantaneamente com nossa pré-visualização em tempo real.",
    badge: "Instantâneo"
  },
  {
    icon: Globe,
    title: "Publicação Automática",
    description: "Deploy direto para Netlify ou GitHub Pages com um clique. Seu site online em segundos.",
    badge: "One-Click"
  },
  {
    icon: Code,
    title: "Exportação Limpa",
    description: "Código HTML/CSS otimizado e limpo. Leve seu projeto para qualquer lugar.",
    badge: "Código Limpo"
  },
  {
    icon: CreditCard,
    title: "Sistema de Créditos",
    description: "Comece com $5 grátis. Use IA por apenas $0.50 por mensagem. Recarregue quando precisar.",
    badge: "Flexível"
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Sites que funcionam perfeitamente em desktop, tablet e mobile. Design adaptativo automático.",
    badge: "Mobile-First"
  },
  {
    icon: Shield,
    title: "Hospedagem Segura",
    description: "SSL gratuito, CDN global e backups automáticos. Seu site sempre protegido e rápido.",
    badge: "Seguro"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
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