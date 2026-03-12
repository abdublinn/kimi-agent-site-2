import { MessageCircle, BookOpen } from 'lucide-react';

export function Footer() {
  const imageBase = `${import.meta.env.BASE_URL}images/`;

  return (
    <footer className="bg-[#1A1A1A] text-white py-12 lg:py-16">
      <div className="container-main max-w-3xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border border-white/20">
            <img
              src={`${imageBase}author-photo.png`}
              alt="Александр Борисович Дублин"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Александр Борисович Дублин</h3>
          <p className="text-white/70 text-sm">Бизнес-аналитик и консультант</p>
          <p className="text-white/50 text-xs mt-1">
            Специализация: системный анализ рынков, маркетинговые стратегии, управленческий учёт,
            методологии принятия решений
          </p>
          <p className="text-white/75 text-sm mt-4 max-w-xl mx-auto">
            Если вам нужен спокойный взгляд со стороны на стратегию выхода на маркетплейсы,
            буду рад обсудить вашу задачу в личном сообщении.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://t.me/AleksandrBorisovich73"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Telegram
          </a>
          <a
            href="https://t.me/ab_dublin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
          >
            <BookOpen className="w-4 h-4" />
            Telegram-блог
          </a>
          <a
            href="https://dzen.ru/dbs_dubas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
          >
            <BookOpen className="w-4 h-4" />
            Блог на Дзене
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-xs">
            Этот отчёт основан на открытых данных аналитики маркетплейсов WB и Ozon и Яндекс.Wordstat за февраль–март 2026 года
          </p>
          <p className="text-white/30 text-xs mt-2">
            Создано с помощью{' '}
            <a
              href="https://www.kimi.com/agent"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors"
            >
              Kimi Agent
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
