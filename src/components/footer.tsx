import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="w-full py-8">
      <div className="container mx-auto text-center text-sm text-white/60">
        <p>&copy; {new Date().getFullYear()} Dollar Leap. Todos os direitos reservados.</p>
        <p className="mt-2">Uma vida de liberdade financeira está a um clique de distância.</p>
      </div>
    </footer>
  );
};

export default Footer;
