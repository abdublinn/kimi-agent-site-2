import { BarChart3, Brain, MessageCircle, Target } from 'lucide-react';

const expertiseItems = [
  { icon: BarChart3, title: 'Управленческий учет и системы отчетности' },
  { icon: Target, title: 'Стратегическое позиционирование и миссия' },
  { icon: Brain, title: 'Анализ данных с применением ИИ' },
  { icon: MessageCircle, title: 'Прямые консультации для бизнеса' },
];

export function AboutAuthor() {
  const imageBase = `${import.meta.env.BASE_URL}images/`;

  return (
    <section id="about-author" className="bg-[#eaf1fb] section-padding">
      <div className="container-main max-w-6xl">
        <div className="grid md:grid-cols-[220px_1fr] gap-7 lg:gap-9 items-start">
          <div className="w-full max-w-[220px]">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={`${imageBase}author-photo.png`}
                alt="Александр Дублин"
                className="w-full h-[270px] object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-2">Александр Дублин</h2>
            <p className="text-[#4b5563] mb-6 text-lg">
              Бизнес-аналитик и консультант. Работает на стыке аналитики, кибернетики и теории
              систем.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {expertiseItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 p-3 bg-white/80 rounded-lg border border-[#d8e3f2]"
                >
                  <div className="p-2 bg-[#f3f6fb] rounded-md">
                    <item.icon className="w-4 h-4 text-[#1f3b63]" />
                  </div>
                  <span className="text-sm text-[#334155]">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://t.me/ab_dublin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-[#334155] text-[#334155] hover:bg-white/70 transition-colors"
              >
                Telegram-канал автора
              </a>
              <a
                href="https://t.me/AleksandrBorisovich73"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-[#334155] text-[#334155] hover:bg-white/70 transition-colors"
              >
                Написать напрямую
              </a>
              <a
                href="https://dzen.ru/dbs_dubas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-[#334155] text-[#334155] hover:bg-white/70 transition-colors"
              >
                Блог на Дзене
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
