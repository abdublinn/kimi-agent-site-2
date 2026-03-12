import { MessageCircle, BookOpen, ExternalLink, FileText } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 lg:py-16">
      <div className="container-main max-w-3xl">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold mb-2">Александр Борисович Дублин</h3>
          <p className="text-white/70 text-sm">
            Бизнес-аналитик и стратегический консультант
          </p>
          <p className="text-white/50 text-xs mt-1">
            Специализация: системный анализ рынков, маркетинговые стратегии, управленческий учёт, методологии принятия решений
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
            Блог
          </a>
          <a
            href="https://dbpjwctanie3w.ok.kimi.link/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
          >
            <FileText className="w-4 h-4" />
            Первый отчет
            <ExternalLink className="w-3 h-3" />
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
