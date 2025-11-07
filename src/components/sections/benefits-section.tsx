import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Globe, Rocket, HeartHandshake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: DollarSign,
    title: 'Ganhe em Dólar',
    description: 'Multiplique seu poder de compra e construa um patrimônio sólido em uma moeda forte, imune à inflação do real.',
  },
  {
    icon: Globe,
    title: 'Liberdade Geográfica',
    description: 'Trabalhe de qualquer lugar do mundo, seja da sua casa no Brasil ou como um nômade digital explorando novos países.',
  },
  {
    icon: Rocket,
    title: 'Oportunidades Internacionais',
    description: 'Acesse um mercado de trabalho global, com vagas em empresas inovadoras e projetos desafiadores que impulsionarão sua carreira.',
  },
  {
    icon: HeartHandshake,
    title: 'Qualidade de Vida',
    description: 'Tenha mais tempo, segurança financeira e liberdade para viver a vida nos seus termos, realizando seus maiores sonhos.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-black text-white">
            A vida que você <span className="text-primary">merece</span> está te esperando
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/80 font-light">
            Veja a transformação que acontece quando você decide assumir o controle da sua carreira e finanças.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="bg-white/10 backdrop-blur-lg border-primary/30 shadow-2xl shadow-primary/10 transform transition-transform duration-300 hover:-translate-y-2">
              <CardHeader className="items-center text-center">
                <div className="rounded-full bg-primary/20 p-4 border-2 border-primary/50">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="pt-4 font-headline text-2xl font-black text-white">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center font-light text-white/80">
                <p>{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href="https://pay.cakto.com.br/3edngwx_537534">
            <Button size="lg" className="h-16 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg animate-subtle-pulse w-full max-w-md">
                QUERO ESSA TRANSFORMAÇÃO
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
