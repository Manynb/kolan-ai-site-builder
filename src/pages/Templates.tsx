import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, Star } from "lucide-react";

const Templates = () => {
  const categories = [
    { name: "Todos", active: true },
    { name: "E-commerce", active: false },
    { name: "Portfolio", active: false },
    { name: "Blog", active: false },
    { name: "Corporativo", active: false },
    { name: "Landing Page", active: false }
  ];

  const templates = [
    {
      id: 1,
      name: "ModernStore",
      category: "E-commerce",
      description: "Loja online moderna com carrinho de compras integrado",
      image: "/placeholder.svg",
      rating: 4.8,
      downloads: 1200,
      tags: ["Responsivo", "E-commerce", "Moderno"],
      featured: true
    },
    {
      id: 2,
      name: "CreativePortfolio",
      category: "Portfolio",
      description: "Portfolio criativo para designers e artistas",
      image: "/placeholder.svg",
      rating: 4.9,
      downloads: 850,
      tags: ["Portfolio", "Criativo", "Animações"],
      featured: false
    },
    {
      id: 3,
      name: "TechBlog",
      category: "Blog",
      description: "Blog moderno focado em tecnologia",
      image: "/placeholder.svg",
      rating: 4.7,
      downloads: 650,
      tags: ["Blog", "Tech", "SEO"],
      featured: false
    },
    {
      id: 4,
      name: "BusinessPro",
      category: "Corporativo",
      description: "Site corporativo profissional e elegante",
      image: "/placeholder.svg",
      rating: 4.6,
      downloads: 900,
      tags: ["Corporativo", "Profissional", "Clean"],
      featured: true
    },
    {
      id: 5,
      name: "StartupLanding",
      category: "Landing Page",
      description: "Landing page otimizada para conversão",
      image: "/placeholder.svg",
      rating: 4.8,
      downloads: 1100,
      tags: ["Landing", "Conversão", "Startup"],
      featured: false
    },
    {
      id: 6,
      name: "RestaurantMenu",
      category: "E-commerce",
      description: "Cardápio digital para restaurantes",
      image: "/placeholder.svg",
      rating: 4.5,
      downloads: 400,
      tags: ["Restaurante", "Menu", "Mobile"],
      featured: false
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
              Templates
              <span className="bg-gradient-to-r from-pink to-red bg-clip-text text-transparent"> Profissionais</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Escolha entre centenas de templates prontos e personalize do seu jeito. 
              Todos otimizados, responsivos e prontos para usar.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "hero" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <Card key={template.id} className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                    <img 
                      src={template.image} 
                      alt={template.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {template.featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-pink to-red text-white">
                        Destaque
                      </Badge>
                    )}
                    
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" variant="hero">
                        Usar Template
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-foreground">{template.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {template.description}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{template.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{template.downloads}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button variant="outline" size="lg">
              Carregar mais templates
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Não encontrou o que procura?
            </h2>
            <p className="text-xl text-muted-foreground">
              Use nossa IA para criar um template personalizado em segundos.
            </p>
            <Button variant="hero" size="lg">
              Criar com IA
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Templates;