import { Siren } from 'lucide-react';

export default function UrgencyBanner() {
  const text = 'PROMOÇÃO POR TEMPO LIMITADO: Garanta sua vaga com 85% de desconto!';
  const items = Array(6).fill(text);

  return (
    <div className="bg-primary text-primary-foreground py-4 overflow-hidden">
      <div className="flex items-center gap-4 animate-scroll-x">
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 flex items-center justify-center gap-4 px-4">
            <Siren className="h-6 w-6" />
            <p className="text-lg sm:text-xl font-medium text-center whitespace-nowrap">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
