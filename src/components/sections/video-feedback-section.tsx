import Script from 'next/script';

export default function VideoFeedbackSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-black text-white">
            Veja o que nossos alunos dizem em vídeo
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/80 font-light">
            Resultados que falam por si.
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto">
          <style>{`
            wistia-player[media-id='qt4e6fzpss']:not(:defined) { 
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/qt4e6fzpss/swatch'); 
              display: block; 
              filter: blur(5px); 
              padding-top:56.25%; 
            }
          `}</style>
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-2xl border-2 border-primary/30">
            <wistia-player media-id="qt4e6fzpss" aspect="1.7777777777777777"></wistia-player>
          </div>
        </div>
        <Script src="https://fast.wistia.com/player.js" async />
        <Script src="https://fast.wistia.com/embed/qt4e6fzpss.js" async type="module" />
      </div>
    </section>
  );
}
