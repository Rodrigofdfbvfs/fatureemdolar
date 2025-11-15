import Script from 'next/script';

export default function VslSection() {
  return (
    <section className="py-20 sm:py-28 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-black text-white">
            Assista e descubra como você também pode
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/80 font-light">
            Dê o play e veja o caminho para transformar sua carreira e ganhar em dólar.
          </p>
        </div>
        <div className="mt-16 max-w-md mx-auto">
          <style>{`
            wistia-player[media-id='nbps2ualhu']:not(:defined) { 
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/nbps2ualhu/swatch'); 
              display: block; 
              filter: blur(5px); 
              padding-top:177.78%; 
            }
          `}</style>
          <div className="w-full rounded-lg overflow-hidden shadow-2xl border-2 border-primary/30">
            <wistia-player media-id="nbps2ualhu" aspect="0.5625"></wistia-player>
          </div>
        </div>
        <Script src="https://fast.wistia.com/player.js" async />
        <Script src="https://fast.wistia.com/embed/nbps2ualhu.js" async type="module" />
      </div>
    </section>
  );
}
