import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Iniciante",
    description: "Perfeito para começar",
    price: "Grátis",
    credits: "$5 em créditos",
    features: [
      "5 sites inclusos",
      "$5 em créditos IA",
      "Templates básicos",
      "Publicação Netlify",
      "Suporte por email",
      "SSL gratuito"
    ],
    popular: false,
    buttonText: "Começar Grátis",
    buttonVariant: "outline" as const
  },
  {
    name: "Profissional",
    description: "Para criadores sérios",
    price: "$19",
    period: "/mês",
    credits: "+$10 em créditos mensais",
    features: [
      "Sites ilimitados",
      "$10 créditos IA/mês",
      "Todos os templates",
      "Netlify + GitHub Pages",
      "Domínio personalizado",
      "Suporte prioritário",
      "Analytics avançado",
      "Backup automático"
    ],
    popular: true,
    buttonText: "Começar Teste",
    buttonVariant: "hero" as const
  },
  {
    name: "Empresarial",
    description: "Para equipes e agências",
    price: "$49",
    period: "/mês",
    credits: "+$25 em créditos mensais",
    features: [
      "Tudo do Profissional",
      "$25 créditos IA/mês",
      "Colaboração em equipe",
      "White-label completo",
      "API personalizada",
      "Suporte dedicado",
      "Onboarding personalizado",
      "SLA garantido"
    ],
    popular: false,
    buttonText: "Falar com Vendas",
    buttonVariant: "outline" as const
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Preços transparentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comece grátis com $5 em créditos. Escale conforme seu negócio cresce.
            Cancele a qualquer momento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'} hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-center text-sm text-success font-medium">
                    <Zap className="w-4 h-4 mr-1" />
                    {plan.credits}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full" 
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-sm text-muted-foreground">
            Precisou de mais créditos IA? Recarregue a partir de $5 a qualquer momento.
          </p>
          <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
            <span>✓ Sem taxas de setup</span>
            <span>✓ Cancele quando quiser</span>
            <span>✓ Suporte em português</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;