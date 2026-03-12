import { useEffect, useRef } from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageBase = `${import.meta.env.BASE_URL}images/`;

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const children = hero.querySelectorAll('.animate-item');
    children.forEach((child, index) => {
      const el = child as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'opacity 600ms ease-out, transform 600ms ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 + index * 100);
    });
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById('preface');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e3a5f]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-1/3 w-[160%] h-px rotate-[-18deg] bg-white/10" />
        <div className="absolute -left-24 top-2/3 w-[160%] h-px rotate-[-18deg] bg-white/10" />
      </div>

      <div className="relative z-10 container-main py-20">
        <div className="max-w-3xl">
          <h1 className="animate-item text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Маркетплейсы для мебельной фабрики: стратегия до тактики
          </h1>

          <p className="animate-item text-lg md:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed">
            Данные, методология и выводы для тех, кто хочет выйти правильно и арабатывать
          </p>

          <div className="animate-item flex items-center gap-4 text-sm text-white/40 mb-10">
            <span>Александр Дублин</span>
            <span>•</span>
            <span>Март 2026</span>
            <span>•</span>
            <span>Версия 2</span>
          </div>

          <div className="animate-item flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToContent}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f59e0b] text-white font-semibold rounded-md hover:bg-[#d97706] transition-all"
            >
              Читать отчет
              <ArrowDown className="w-4 h-4" />
            </button>
            <a
              href="https://t.me/AleksandrBorisovich73"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/75 hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Связаться с автором
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 right-12 hidden lg:block animate-item">
          <div className="flex flex-col items-center">
            <div className="w-32 h-40 rounded-xl border-2 border-white/20 overflow-hidden shadow-2xl">
              <img
                src={`${imageBase}author-hero.png`}
                alt="Александр Дублин"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-3 text-sm text-white/50">Александр Дублин</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#eaf1fb] to-transparent" />
    </section>
  );
}
