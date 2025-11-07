import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, InfinityIcon, Users, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Guarantee {
  icon: LucideIcon;
  title: string;
  description: string;
}

const guarantees: Guarantee[] = [
  {
    icon: Smartphone,
    title: 'Acesso 100% digital',
    description: 'Aprenda de qualquer lugar e a qualquer hora, com acesso online aos conteúdos do infoproduto.',
  },
  {
    icon: Download,
    title: 'Download do conteúdo',
    description: 'Assista e baixe nosso conteúdo em qualquer lugar a qualquer hora.',
  },
  {
    icon: Users,
    title: 'Comunidade Exclusiva',
    description: 'Acesse nosso super grupo de whatsapp para tirar dúvidas e interagir com outros líderes focados nesse mesmo treinamento.',
  },
  {
    icon: InfinityIcon,
    title: 'Acesso vitalício',
    description: 'Você terá sempre acesso a esse super conteúdo, e poderá ter acesso também às novidades da plataforma.',
  },
];

export default function GuaranteesSection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-black text-white">
            Benefícios que você terá ao adquirir hoje
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((guarantee) => (
            <Card key={guarantee.title} className="bg-white/10 backdrop-blur-lg border-blue-400/30 shadow-2xl shadow-blue-500/10 transform transition-transform duration-300 hover:-translate-y-2 flex flex-col">
              <CardHeader className="items-center text-center">
                <div className="rounded-full bg-blue-500/20 p-4 border-2 border-blue-400/50">
                  <guarantee.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="pt-4 font-headline text-xl font-black text-white">{guarantee.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center font-light text-white/80 flex-grow">
                <p>{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
