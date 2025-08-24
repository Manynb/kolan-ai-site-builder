import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Lightbulb, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Democratização",
      description: "Tornamos a criação de sites acessível para todos, independente do conhecimento técnico."
    },
    {
      icon: Target,
      title: "Simplicidade",
      description: "Interface intuitiva que permite focar no que realmente importa: seu conteúdo."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Utilizamos IA de ponta para acelerar e otimizar o processo criativo."
    },
    {
      icon: Heart,
      title: "Qualidade",
      description: "Sites profissionais com performance otimizada e design responsivo."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink/10 via-orange/5 to-red/10" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Sobre a
              <span className="bg-gradient-to-r from-pink to-red bg-clip-text text-transparent"> Kolan</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nascemos da paixão por democratizar a criação digital. Nossa missão é 
              empoderar pessoas e empresas a transformarem suas ideias em realidade na web.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Em 2024, percebemos que milhões de pessoas tinham ideias brilhantes mas 
                  enfrentavam barreiras técnicas para trazê-las à vida online. Começamos 
                  pequenos, com uma visão simples: criar a plataforma mais intuitiva do mundo.
                </p>
                <p>
                  Hoje, a Kolan potencializa criadores, empreendedores e empresas em todo o 
                  mundo, fornecendo ferramentas que transformam conceitos em experiências 
                  digitais profissionais.
                </p>
              </div>
              <Button variant="hero" size="lg">
                Comece sua jornada
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-pink">2024</div>
                  <div className="text-xl text-foreground">Ano de fundação</div>
                  <div className="text-muted-foreground">O começo de uma revolução</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e linha de código que escrevemos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-pink to-red p-3 group-hover:scale-110 transition-transform">
                    <value.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Pronto para criar algo incrível?
            </h2>
            <p className="text-xl text-muted-foreground">
              Junte-se a milhares de criadores que já transformaram suas ideias em realidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Começar Grátis
              </Button>
              <Button variant="outline" size="lg">
                Falar com vendas
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;