import Image from 'next/image';

export default function WhoAmISection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div className="mx-auto">
            <Image
              src="https://i.ibb.co/MDrML2sm/IMG-20210930-WA0066.jpg"
              alt="Daiani Neumann, a criadora do curso"
              width={400}
              height={400}
              data-ai-hint="woman smiling"
              className="rounded-full border-4 border-primary/50 shadow-2xl shadow-primary/20 aspect-square object-cover"
            />
          </div>
          <div className="max-w-3xl text-center md:text-left">
            <h2 className="font-headline text-4xl sm:text-5xl font-black text-white">
              Quem é a <span className="text-primary">Daiani Neumann</span>
            </h2>
            <p className="mt-6 text-lg text-white/80 font-light">
              Olá, meu nome é Daiani Neumann. Com 17 anos de experiência internacional e 10 anos como English Teacher, atuei como Head Hunter International em Dublin e como Diretora de RH nos EUA, Canadá e Portugal.
            </p>
            <p className="mt-4 text-lg text-white/80 font-light">
              Durante essa jornada, aprendi os segredos para me destacar, mesmo sem ter um currículo 'perfeito'. Descobri como encontrar as melhores oportunidades, negociar salários em moeda forte e construir uma carreira sólida trabalhando para empresas estrangeiras.
            </p>
            <p className="mt-4 text-lg text-white/80 font-light">
             Agora, organizei todo o meu aprendizado no método <strong className="font-bold text-white">Ganhe em dólar</strong>, para te mostrar o caminho mais curto para conquistar sua independência financeira e a liberdade de trabalhar de onde quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
