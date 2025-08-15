import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated Background with gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-pink/5 to-background" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange/3 to-transparent" />
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-foreground/20 rounded-lg rotate-12 animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-pink/30 rounded-lg -rotate-12" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-orange/40 rounded-lg rotate-45" />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-foreground/10 rounded-lg -rotate-6" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 z-10 relative">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink/20 to-orange/20 border border-foreground/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-pink mr-2" />
                <span className="text-sm font-medium text-foreground">Powered by AI</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Crie sites
                <span className="bg-gradient-to-r from-pink to-red bg-clip-text text-transparent"> incríveis</span>
                <br />
                sem código
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                A plataforma no-code que transforma suas ideias em sites profissionais. 
                Com IA integrada, editor visual intuitivo e deploy automático.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group shadow-glow">
                  Começar Grátis
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="group border-foreground/20 hover:border-pink/50">
                  <Play className="w-4 h-4 mr-2" />
                  Ver Demo
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                  <Zap className="w-5 h-5 text-success" />
                  <span className="text-sm text-foreground font-medium">$5 créditos grátis</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span className="text-sm text-foreground font-medium">Sem cartão</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-orange rounded-full" />
                  <span className="text-sm text-foreground font-medium">Deploy instantâneo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative lg:order-2 z-10">
            <div className="relative">
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-foreground/10">
                <img 
                  src={heroImage} 
                  alt="Kolan Platform Interface" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink/20 via-transparent to-orange/10" />
              </div>
              
              {/* Floating cards around the image */}
              <div className="absolute -top-6 -left-6 p-4 bg-card border-2 border-foreground rounded-lg shadow-strong backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-foreground">Live Preview</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 p-4 bg-card border-2 border-foreground rounded-lg shadow-strong backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-pink" />
                  <span className="text-xs font-medium text-foreground">AI Builder</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 p-3 bg-card border-2 border-foreground rounded-lg shadow-strong backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-lg font-bold text-success">$5.00</div>
                  <div className="text-xs text-muted-foreground">Créditos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;