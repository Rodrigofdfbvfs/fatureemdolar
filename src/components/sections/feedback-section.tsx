import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { FC } from 'react';

interface Feedback {
  user: string;
  handle: string;
  avatar: string;
  comment: string;
  avatarHint: string;
}

const feedbacks: Feedback[] = [
  {
    user: 'Carla Dias',
    handle: '@carlad',
    avatar: 'https://picsum.photos/100/100?random=1',
    avatarHint: 'woman smiling',
    comment: 'Gente, esse curso é surreal. Em 2 meses já tô com meu primeiro trampo gringo ganhando em dólar. A sensação é outra!',
  },
  {
    user: 'Bruno Mendes',
    handle: '@brunomndz',
    avatar: 'https://picsum.photos/100/100?random=2',
    avatarHint: 'man glasses',
    comment: 'Pra quem é dev, esse curso é obrigatório. As dicas de como se posicionar pra vagas lá de fora são ouro puro. Valeu cada centavo!',
  },
  {
    user: 'Fernanda Lima',
    handle: '@fefe.lima',
    avatar: 'https://picsum.photos/100/100?random=3',
    avatarHint: 'woman nature',
    comment: 'Comprei com medo, mas foi a melhor decisão da minha vida. Adeus CLT, olá liberdade! 🚀 #workfromanywhere',
  },
];

const FeedbackCard: FC<{ feedback: Feedback }> = ({ feedback }) => (
  <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-primary/20">
    <CardContent className="p-0">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={feedback.avatar} alt={feedback.user} data-ai-hint={feedback.avatarHint} width={40} height={40}/>
          <AvatarFallback>{feedback.user.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-bold text-white">{feedback.user}</p>
          <p className="text-sm text-white/60">{feedback.handle}</p>
        </div>
      </div>
      <p className="mt-4 font-light text-white/90">{feedback.comment}</p>
    </CardContent>
  </Card>
);

export default function FeedbackSection() {
  return (
    <section className="py-20 sm:py-28 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-black text-white">
            O que estão comentando nas redes
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/80 font-light">
            A transformação é real e as pessoas estão falando sobre isso.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map((feedback) => (
            <FeedbackCard key={feedback.handle} feedback={feedback} />
          ))}
        </div>
      </div>
    </section>
  );
}
