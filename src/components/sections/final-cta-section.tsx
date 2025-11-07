import { Button } from '@/components/ui/button';
import { CheckCircle, Clock } from 'lucide-react';
import CountdownTimer from '@/components/countdown-timer';

const features = [
  "Acesso vitalício ao curso completo",
  "Estratégias para conseguir trabalho remoto",
  "Planilhas e modelos de currículo",
  "Comunidade exclusiva de alunos",
  "Melhores plataformas americanas para faturar em dolar",
  "Conheça os melhores empregos remotos",
  "Preparação para entrevista em ingles",
];

export default function FinalCtaSection() {
  return (
    <section id="oferta" className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-[20px] rounded-2xl shadow-2xl shadow-black/30 p-8 sm:p-12 border-2 border-primary/50 text-center">
          <div className="flex justify-center items-center gap-3 text-white font-bold">
            <Clock className="h-6 w-6 text-primary" />
            <span>OFERTA EXPIRA EM:</span>
          </div>

          <CountdownTimer initialMinutes={30} />
          
          <h2 className="font-headline text-3xl sm:text-4xl font-black text-white">
            Chegou a sua hora de virar o jogo
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/80 font-light">
            Tudo que você precisa para conquistar sua carreira internacional está aqui.
          </p>

          <div className="my-8 text-left max-w-sm mx-auto space-y-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-white/90 font-light">{feature}</span>
              </div>
            ))}
          </div>

          <div className="my-8">
            <p className="text-white/70 text-lg line-through">De R$197,00</p>
            <p className="font-light text-white">por apenas</p>
            <p className="font-headline text-6xl font-black text-white">R$ 49,90</p>
            <p className="text-white/70 text-lg">Pagamento único</p>
          </div>

          <a href="https://pay.cakto.com.br/3edngwx_537534">
            <Button size="lg" className="w-full max-w-md h-16 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg animate-subtle-pulse whitespace-normal sm:whitespace-nowrap text-center leading-tight">
              COMPRAR AGORA
            </Button>
          </a>
          <p className="mt-4 text-sm text-white/60">Garantia de 7 dias. Compra 100% segura.</p>
        </div>
      </div>
    </section>
  );
}
