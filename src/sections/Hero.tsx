import { useEffect, useRef } from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-white pt-16"
    >
      <div className="container-main text-center max-w-4xl">
        <div className="animate-item">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#6B6B6B] bg-gray-100 rounded-full mb-6">
            Март 2026
          </span>
        </div>

        <h1 className="animate-item text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
          Маркетплейсы для мебельной фабрики:
          <br />
          <span className="text-[#E53935]">стратегия</span> vs.{' '}
          <span className="text-[#6B6B6B]">тактика</span>
        </h1>

        <p className="animate-item text-lg sm:text-xl text-[#6B6B6B] mb-8 max-w-2xl mx-auto">
          Данные, методология и выводы для тех, кто хочет выйти правильно
        </p>

        <div className="animate-item flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={scrollToContent}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E53935] text-white font-medium rounded-lg hover:bg-red-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Читать отчет
            <ArrowDown className="w-4 h-4" />
          </button>
          <a
            href="https://t.me/AleksandrBorisovich73"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#E53935] text-[#E53935] font-medium rounded-lg hover:bg-red-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" />
            Связаться с автором
          </a>
        </div>

        <div className="animate-item pt-8 border-t border-gray-100">
          <p className="text-sm text-[#6B6B6B]">
            Автор:{' '}
            <span className="font-semibold text-[#1A1A1A]">
              Александр Борисович Дублин
            </span>
          </p>
          <p className="text-xs text-[#6B6B6B] mt-1">
            Бизнес-аналитик и консультант
          </p>
        </div>
      </div>
    </section>
  );
}
