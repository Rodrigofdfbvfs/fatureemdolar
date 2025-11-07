import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "Preciso falar inglês fluente?",
    answer: "Não necessariamente. Existem muitas vagas para falantes de português em empresas estrangeiras, especialmente em áreas como atendimento, vendas e marketing para o mercado brasileiro. O curso te mostrará como encontrar essas oportunidades.",
  },
  {
    question: "Funciona mesmo morando no Brasil?",
    answer: "Sim! A maioria dos nossos alunos mora no Brasil e trabalha remotamente para empresas do exterior. Você receberá seu pagamento em dólar em uma conta internacional e poderá usá-lo como quiser.",
  },
  {
    question: "Quanto tempo leva para ver os primeiros resultados?",
    answer: "Isso varia de aluno para aluno, mas com dedicação e aplicando as estratégias do curso, muitos conseguem o primeiro trabalho em dólar em menos de 3 meses. Alguns até conseguem em poucas semanas!",
  },
  {
    question: "Quais garantias eu tenho ao comprar o curso?",
    answer: "Você tem uma garantia incondicional de 7 dias. Se por qualquer motivo você achar que o curso não é para você, basta solicitar o reembolso e devolveremos 100% do seu dinheiro, sem perguntas.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-black text-white">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/80 font-light">
            Ainda tem dúvidas? A gente te ajuda a esclarecer tudo.
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/10 backdrop-blur-lg border-white/20 rounded-lg px-6 shadow-lg">
                <AccordionTrigger className="text-left font-headline font-black text-lg text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-light text-white/80 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
