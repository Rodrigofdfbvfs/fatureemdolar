import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingDown, ShieldOff, Lock, Frown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

const painPoints: PainPoint[] = [
  {
    icon: TrendingDown,
    title: 'Salários Baixos em Real',
    description: 'Sentindo que seu esforço não é recompensado e seu dinheiro perde valor a cada dia?',
  },
  {
    icon: Frown,
    title: 'Poucas Oportunidades',
    description: 'Cansado de um mercado de trabalho limitado, com poucas vagas que realmente te animam?',
  },
  {
    icon: ShieldOff,
    title: 'Insegurança Financeira',
    description: 'Preocupado com o futuro, sem conseguir economizar ou investir para realizar seus sonhos?',
  },
  {
    icon: Lock,
    title: 'Falta de Liberdade',
    description: 'Preso a um escritório, a um chefe, a uma rotina que não te permite viver a vida que você deseja?',
  },
];

export default function PainPointsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-black text-white">
            Você se identifica com essa realidade?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/80 font-light">
            Milhões de brasileiros se sentem presos em um ciclo de trabalho sem reconhecimento e com baixa remuneração. Mas não precisa ser assim.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point) => (
            <Card key={point.title} className="bg-white/10 backdrop-blur-lg border-primary/50 shadow-xl p-6">
              <CardHeader className="flex flex-row items-center gap-4 p-0">
                <point.icon className="h-8 w-8 text-white/70" />
                <CardTitle className="font-headline text-2xl font-black text-white">{point.title}</CardTitle>
              </CardHeader>
              <CardContent className="font-light text-white/80 p-0 mt-4">
                <p>{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
