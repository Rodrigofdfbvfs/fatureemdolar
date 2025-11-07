import { Button } from '@/components/ui/button';
import { DollarSign } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  const floatingDollars = [
    { top: '10%', left: '15%', size: 'h-8 w-8', delay: '0s' },
    { top: '20%', left: '80%', size: 'h-12 w-12', delay: '1s' },
    { top: '70%', left: '10%', size: 'h-16 w-16', delay: '2s' },
    { top: '80%', left: '90%', size: 'h-10 w-10', delay: '3s' },
    { top: '50%', left: '50%', size: 'h-6 w-6', delay: '4s' },
    { top: '30%', left: '30%', size: 'h-10 w-10', delay: '5s' },
  ];

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-72 pb-24 sm:py-32 bg-cover bg-center sm:bg-none",
        "bg-[url('https://i.ibb.co/60jDCcPD/Design-sem-nome-5.webp')]"
      )}
    >
      <div className="absolute inset-0 pointer-events-none z-0 hidden sm:block">
        {floatingDollars.map((dollar, index) => (
          <DollarSign
            key={index}
            className={`absolute text-primary/10 animate-float ${dollar.size}`}
            style={{ 
              top: dollar.top, 
              left: dollar.left, 
              animationDelay: dollar.delay,
              animationDuration: '8s'
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 text-center">
        <div className="relative z-10 flex flex-col items-center">
          <div
            className="relative mb-4"
          >
            <Badge
              variant="outline"
              className="gradient-border-badge border-transparent bg-transparent py-2 px-4 text-sm font-light text-white/70 backdrop-blur-sm"
            >
              Sua oportunidade para viver recebendo 5x mais
            </Badge>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-8xl font-black text-white max-w-4xl leading-tight">
            Conquiste sua Carreira Global e <span className="bg-primary text-white px-2 sm:py-0 sm:px-4 rounded-md">Receba em Dólar</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80 font-light">
            O método passo a passo para você conseguir um trabalho remoto, ganhar 5x mais e ter a liberdade de morar onde quiser.
          </p>
          <div className="mt-10 w-full px-4 sm:px-0">
            <a href="#oferta">
              <Button size="lg" className="h-16 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg animate-subtle-pulse w-full max-w-md">
                Quero Ganhar em Dólar
              </Button>
            </a>
            <p className="mt-4 text-sm text-white/60">Acesso imediato por apenas R$27</p>
          </div>
        </div>
      </div>
    </section>
  );
}
