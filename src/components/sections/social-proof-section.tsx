import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star } from 'lucide-react';
import type { FC } from 'react';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  avatarHint: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Juliana Paiva',
    role: 'Desenvolvedora Frontend',
    avatar: 'https://picsum.photos/200/200?random=4',
    avatarHint: 'woman portrait',
    quote: 'Este curso foi um divisor de águas. Em 3 meses, dobrei meu salário trabalhando para uma startup de Austin, Texas, sem sair de Florianópolis. A liberdade que isso me deu não tem preço.',
  },
  {
    name: 'Ricardo Alves',
    role: 'Designer UX/UI',
    avatar: 'https://picsum.photos/200/200?random=5',
    avatarHint: 'man smiling',
    quote: 'Eu achava que era impossível conseguir algo fora sem inglês fluente. O curso me mostrou os caminhos e hoje presto serviço para uma agência de marketing de Portugal. Estou realizado!',
  },
  {
    name: 'Mariana Costa',
    role: 'Assistente Virtual',
    avatar: 'https://picsum.photos/200/200?random=6',
    avatarHint: 'woman happy',
    quote: 'Eu estava desempregada e sem perspectiva. Hoje, tenho 3 clientes fixos dos EUA e ganho mais do que jamais imaginei. Minha vida mudou completamente, obrigada Dollar Leap!',
  },
];

const Stars: FC<{ rating: number }> = ({ rating }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-white/30'}`}
      />
    ))}
  </div>
);

export default function SocialProofSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-black text-white">
            Resultados Reais de Alunos Reais
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/80 font-light">
            Não acredite apenas em nossa palavra. Veja o que nossos alunos conquistaram.
          </p>
        </div>
        <div className="mt-16">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full bg-white/10 backdrop-blur-lg border-white/20 shadow-xl flex flex-col">
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <Stars rating={5} />
                        <p className="mt-4 font-light text-white/90 text-lg flex-grow">
                          "{testimonial.quote}"
                        </p>
                        <div className="mt-6 flex items-center gap-4 pt-4 border-t border-white/10">
                          <Avatar className="h-14 w-14">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} width={56} height={56}/>
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-white text-lg">{testimonial.name}</p>
                            <p className="text-sm text-white/60">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white hover:bg-primary hover:text-white left-4" />
            <CarouselNext className="text-white hover:bg-primary hover:text-white right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
