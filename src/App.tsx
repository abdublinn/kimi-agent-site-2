import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { Quote } from './sections/Quote';
import { Section } from './components/Section';
import { DataTable } from './components/DataTable';
import { InteractiveInsights } from './components/InteractiveInsights';
import { Footer } from './sections/Footer';

// Table column definitions
const wordstatColumns = [
  { key: 'query', label: 'Запрос (Яндекс.Wordstat)' },
  { key: 'feb2020', label: 'Февраль 2020', align: 'right' as const, isNumber: true },
  { key: 'feb2026', label: 'Февраль 2026', align: 'right' as const, isNumber: true },
  { key: 'change', label: 'Изменение', align: 'right' as const },
];

const wordstatData = [
  { query: '«купить диван»', feb2020: '883 855', feb2026: '454 457', change: <span className="text-negative font-semibold">−49%</span> },
  { query: '«купить шкаф»', feb2020: '509 652', feb2026: '314 374', change: <span className="text-negative font-semibold">−38%</span> },
  { query: '«купить кухню»', feb2020: '857 248', feb2026: '391 538', change: <span className="text-negative font-semibold">−54%</span> },
  { query: '«купить матрас»', feb2020: '453 584', feb2026: '229 332', change: <span className="text-negative font-semibold">−49%</span> },
];

const migrationColumns = [
  { key: 'category', label: 'Категория' },
  { key: 'yandex', label: 'Яндекс', align: 'right' as const, isNumber: true },
  { key: 'wb', label: 'WB запросы', align: 'right' as const, isNumber: true },
  { key: 'ozon', label: 'Ozon запросы', align: 'right' as const, isNumber: true },
  { key: 'ratio', label: 'Маркеты / Яндекс', align: 'right' as const },
];

const migrationData = [
  { category: 'Диван', yandex: '454 457', wb: '~1 380 000', ozon: '~888 000', ratio: <span className="text-accent font-semibold">×5.0</span> },
  { category: 'Шкаф', yandex: '314 374', wb: '~1 299 000', ozon: '~790 000', ratio: <span className="text-accent font-semibold">×6.6</span> },
  { category: 'Кухня', yandex: '391 538', wb: '~387 000', ozon: '~1 011 000', ratio: <span className="text-accent font-semibold">×3.6</span> },
  { category: 'Матрас', yandex: '229 332', wb: '~939 000', ozon: '~615 000', ratio: <span className="text-accent font-semibold">×6.8</span> },
];

const methodologyColumns = [
  { key: 'platform', label: 'Платформа' },
  { key: 'query', label: 'Метрика «запрос»' },
  { key: 'click', label: 'Метрика «клик в карточку»' },
];

const methodologyData = [
  { platform: <strong>Wildberries</strong>, query: '«Количество запросов» — прямой счётчик', click: '«Перешли в карточку товара» — суммарное число' },
  { platform: <strong>Ozon</strong>, query: '«Популярность запроса» — число покупателей', click: <span className="text-negative">❌ В выгрузке отсутствует</span> },
  { platform: <strong>Яндекс.Маркет</strong>, query: <span className="text-negative">❌ Публикуются показы, а не запросы</span>, click: '«Клики» — открытия карточек из поиска' },
];

const searchGeneralColumns = [
  { key: 'category', label: 'Категория' },
  { key: 'wb', label: 'WB запросы (топ-10)', align: 'right' as const, isNumber: true },
  { key: 'ozon', label: 'Ozon запросы (топ-10)', align: 'right' as const, isNumber: true },
  { key: 'wbPct', label: 'WB%', align: 'right' as const },
  { key: 'ozonPct', label: 'Ozon%', align: 'right' as const },
];

const searchGeneralData = [
  { category: 'Диван', wb: '1 379 864', ozon: '887 731', wbPct: <span className="text-accent font-semibold">61%</span>, ozonPct: '39%' },
  { category: 'Шкаф', wb: '1 299 097', ozon: '789 903', wbPct: <span className="text-accent font-semibold">62%</span>, ozonPct: '38%' },
  { category: 'Кровать', wb: '1 228 431', ozon: '824 129', wbPct: <span className="text-accent font-semibold">60%</span>, ozonPct: '40%' },
  { category: 'Матрас', wb: '938 891', ozon: '615 262', wbPct: <span className="text-accent font-semibold">60%</span>, ozonPct: '40%' },
  { category: 'Комод', wb: '887 460', ozon: '488 637', wbPct: <span className="text-accent font-semibold">64%</span>, ozonPct: '36%' },
  { category: 'Кухня', wb: '387 394', ozon: '1 010 992', wbPct: '28%', ozonPct: <span className="text-accent font-semibold">72%</span> },
];

const sofaColumns = [
  { key: 'query', label: 'Запрос' },
  { key: 'wb', label: 'WB запросы', align: 'right' as const, isNumber: true },
  { key: 'ozon', label: 'Ozon запросы', align: 'right' as const, isNumber: true },
  { key: 'wbPct', label: 'WB%', align: 'right' as const },
  { key: 'ozonPct', label: 'Ozon%', align: 'right' as const },
];

const sofaData = [
  { query: 'диван', wb: '301 663', ozon: '269 937', wbPct: '53%', ozonPct: <span className="font-semibold">47%</span> },
  { query: 'диван раскладной', wb: '294 611', ozon: '205 087', wbPct: <span className="font-semibold">59%</span>, ozonPct: '41%' },
  { query: 'диван угловой', wb: '94 865', ozon: '81 277', wbPct: '54%', ozonPct: <span className="font-semibold">46%</span> },
  { query: 'диван кровать', wb: '93 169', ozon: '81 090', wbPct: '53%', ozonPct: <span className="font-semibold">47%</span> },
  { query: 'покрывало на диван', wb: '160 829', ozon: '53 446', wbPct: <span className="text-accent font-semibold">75%</span>, ozonPct: '25%' },
  { query: 'диван бескаркасный', wb: '118 160', ozon: '42 941', wbPct: <span className="text-accent font-semibold">73%</span>, ozonPct: '27%' },
  { query: 'накидка на диван', wb: '86 207', ozon: '21 297', wbPct: <span className="text-accent font-semibold">80%</span>, ozonPct: '20%' },
];

const wardrobeColumns = [
  { key: 'query', label: 'Запрос' },
  { key: 'wb', label: 'WB запросы', align: 'right' as const, isNumber: true },
  { key: 'ozon', label: 'Ozon запросы', align: 'right' as const, isNumber: true },
  { key: 'wbPct', label: 'WB%', align: 'right' as const },
  { key: 'ozonPct', label: 'Ozon%', align: 'right' as const },
];

const wardrobeData = [
  { query: 'шкаф для одежды', wb: '437 563', ozon: '306 657', wbPct: <span className="font-semibold">59%</span>, ozonPct: '41%' },
  { query: 'шкаф', wb: '222 367', ozon: '167 691', wbPct: <span className="font-semibold">57%</span>, ozonPct: '43%' },
  { query: <span className="font-semibold">шкаф для одежды в спальню</span>, wb: <span className="text-accent font-semibold">201 898</span>, ozon: '0', wbPct: <span className="text-accent font-semibold">100%</span>, ozonPct: '—' },
  { query: 'шкаф купе', wb: '58 627', ozon: '56 332', wbPct: <span className="font-semibold">51%</span>, ozonPct: <span className="font-semibold">49%</span> },
  { query: 'шкаф пенал', wb: '89 735', ozon: '44 501', wbPct: <span className="font-semibold">67%</span>, ozonPct: '33%' },
  { query: 'шкаф в прихожую', wb: '56 646', ozon: '45 451', wbPct: <span className="font-semibold">55%</span>, ozonPct: '45%' },
];

const dresserColumns = [
  { key: 'query', label: 'Запрос' },
  { key: 'wb', label: 'WB запросы', align: 'right' as const, isNumber: true },
  { key: 'ozon', label: 'Ozon запросы', align: 'right' as const, isNumber: true },
  { key: 'wbPct', label: 'WB%', align: 'right' as const },
  { key: 'ozonPct', label: 'Ozon%', align: 'right' as const },
];

const dresserData = [
  { query: 'комод', wb: '272 152', ozon: '176 659', wbPct: <span className="font-semibold">61%</span>, ozonPct: '39%' },
  { query: <span className="font-semibold">комод для вещей</span>, wb: <span className="text-accent font-semibold">229 494</span>, ozon: '5 098', wbPct: <span className="text-accent font-semibold">98%</span>, ozonPct: '2%' },
  { query: 'комод для вещей большой', wb: '119 787', ozon: '0', wbPct: <span className="text-accent font-semibold">100%</span>, ozonPct: '—' },
  { query: <span className="font-semibold">комод с ящиками</span>, wb: '85 629', ozon: <span className="text-accent font-semibold">127 724</span>, wbPct: '40%', ozonPct: <span className="text-accent font-semibold">60%</span> },
  { query: 'комод с ящиками для одежды', wb: '0', ozon: '52 202', wbPct: '—', ozonPct: <span className="text-accent font-semibold">100%</span> },
  { query: 'комод для одежды', wb: '0', ozon: '23 124', wbPct: '—', ozonPct: <span className="text-accent font-semibold">100%</span> },
];

const kitchenColumns = [
  { key: 'query', label: 'Запрос' },
  { key: 'wb', label: 'WB запросы', align: 'right' as const, isNumber: true },
  { key: 'ozon', label: 'Ozon запросы', align: 'right' as const, isNumber: true },
  { key: 'wbPct', label: 'WB%', align: 'right' as const },
  { key: 'ozonPct', label: 'Ozon%', align: 'right' as const },
];

const kitchenData = [
  { query: 'кухня мебель гарнитур комплект', wb: '88 422', ozon: '0', wbPct: <span className="text-accent font-semibold">100%</span>, ozonPct: '—' },
  { query: 'кухня', wb: '73 587', ozon: '104 564', wbPct: '41%', ozonPct: <span className="font-semibold">59%</span> },
  { query: 'кухня модульная', wb: '41 282', ozon: '0', wbPct: <span className="text-accent font-semibold">100%</span>, ozonPct: '—' },
  { query: 'стулья для кухни', wb: '0', ozon: '163 334', wbPct: '—', ozonPct: <span className="text-accent font-semibold">100%</span> },
  { query: 'смеситель для кухни', wb: '0', ozon: '159 003', wbPct: '—', ozonPct: <span className="text-accent font-semibold">100%</span> },
];

const clicksSofaColumns = [
  { key: 'query', label: 'Запрос' },
  { key: 'wb', label: 'WB карточки', align: 'right' as const, isNumber: true },
  { key: 'ym', label: 'YM клики', align: 'right' as const, isNumber: true },
  { key: 'wbPct', label: 'WB%', align: 'right' as const },
  { key: 'ymPct', label: 'YM%', align: 'right' as const },
];

const clicksSofaData = [
  { query: 'диван', wb: '505 661', ym: '142 026', wbPct: <span className="text-accent font-semibold">78%</span>, ymPct: '22%' },
  { query: 'диван раскладной', wb: '929 775', ym: '115 667', wbPct: <span className="text-accent font-semibold">89%</span>, ymPct: '11%' },
  { query: 'диван угловой', wb: '322 820', ym: '54 403', wbPct: <span className="text-accent font-semibold">86%</span>, ymPct: '14%' },
  { query: 'диван кровать', wb: '233 485', ym: '45 326', wbPct: <span className="text-accent font-semibold">84%</span>, ymPct: '16%' },
];

const clicksWardrobeColumns = [
  { key: 'query', label: 'Запрос' },
  { key: 'wb', label: 'WB карточки', align: 'right' as const, isNumber: true },
  { key: 'ym', label: 'YM клики', align: 'right' as const, isNumber: true },
  { key: 'wbPct', label: 'WB%', align: 'right' as const },
  { key: 'ymPct', label: 'YM%', align: 'right' as const },
];

const clicksWardrobeData = [
  { query: 'шкаф для одежды', wb: '1 600 105', ym: '144 620', wbPct: <span className="text-accent font-semibold">92%</span>, ymPct: '8%' },
  { query: 'шкаф', wb: '325 893', ym: '61 050', wbPct: <span className="text-accent font-semibold">84%</span>, ymPct: '16%' },
  { query: 'шкаф купе', wb: '147 141', ym: '23 071', wbPct: <span className="text-accent font-semibold">86%</span>, ymPct: '14%' },
  { query: 'шкаф пенал', wb: '271 488', ym: '10 725', wbPct: <span className="text-accent font-semibold">96%</span>, ymPct: '4%' },
];

const revenueColumns = [
  { key: 'category', label: 'Категория' },
  { key: 'wb', label: 'WB выручка', align: 'right' as const, isNumber: true },
  { key: 'ozon', label: 'Ozon выручка', align: 'right' as const, isNumber: true },
  { key: 'wbPct', label: 'WB%', align: 'right' as const },
  { key: 'ozonPct', label: 'Ozon%', align: 'right' as const },
];

const revenueData = [
  { category: 'Диваны и кресла', wb: '2 330 млн ₽', ozon: '2 320 млн ₽', wbPct: '50%', ozonPct: <span className="font-semibold">50%</span> },
  { category: 'Шкафы', wb: '2 069 млн ₽', ozon: '2 307 млн ₽', wbPct: '47%', ozonPct: <span className="font-semibold">53%</span> },
  { category: 'Комоды и тумбы', wb: '1 967 млн ₽', ozon: '1 706 млн ₽', wbPct: <span className="font-semibold">54%</span>, ozonPct: '46%' },
  { category: 'Полки и стеллажи', wb: '1 828 млн ₽', ozon: '1 704 млн ₽', wbPct: <span className="font-semibold">52%</span>, ozonPct: '48%' },
  { category: 'Столы', wb: '1 407 млн ₽', ozon: '2 630 млн ₽', wbPct: '35%', ozonPct: <span className="font-semibold">65%</span> },
  { category: 'Стулья', wb: '2 116 млн ₽', ozon: '2 001 млн ₽', wbPct: <span className="font-semibold">51%</span>, ozonPct: '49%' },
  { category: 'Мебель для кухни', wb: '960 млн ₽', ozon: '908 млн ₽', wbPct: <span className="font-semibold">51%</span>, ozonPct: '49%' },
];

const avgCheckColumns = [
  { key: 'category', label: 'Категория' },
  { key: 'wb', label: 'WB средний чек', align: 'right' as const, isNumber: true },
  { key: 'ozon', label: 'Ozon средняя цена', align: 'right' as const, isNumber: true },
  { key: 'diff', label: 'Ozon дороже', align: 'right' as const },
];

const avgCheckData = [
  { category: 'Диваны и кресла', wb: '20 382 ₽', ozon: '28 646 ₽', diff: <span className="text-accent font-semibold">+40%</span> },
  { category: 'Шкафы', wb: '9 747 ₽', ozon: '14 424 ₽', diff: <span className="text-accent font-semibold">+48%</span> },
  { category: 'Комоды и тумбы', wb: '4 374 ₽', ozon: '7 441 ₽', diff: <span className="text-accent font-semibold">+70%</span> },
  { category: 'Мебель для кухни', wb: '6 200 ₽', ozon: '10 823 ₽', diff: <span className="text-accent font-semibold">+75%</span> },
  { category: 'Столы', wb: '6 660 ₽', ozon: '10 606 ₽', diff: <span className="text-accent font-semibold">+59%</span> },
  { category: 'Стулья', wb: '10 236 ₽', ozon: '7 463 ₽', diff: <span className="font-semibold">WB +37%</span> },
  { category: 'Полки и стеллажи', wb: '3 550 ₽', ozon: '2 656 ₽', diff: <span className="font-semibold">WB +34%</span> },
];

const summaryMatrixColumns = [
  { key: 'category', label: 'Категория' },
  { key: 'wbQueries', label: 'WB% запросов', align: 'right' as const },
  { key: 'wbRevenue', label: 'WB% выручки', align: 'right' as const },
  { key: 'priority', label: 'Приоритет' },
];

const summaryMatrixData = [
  { category: 'Диваны', wbQueries: <span className="font-semibold">61%</span>, wbRevenue: '50%', priority: <span className="font-semibold">Обе + разные сегменты</span> },
  { category: 'Шкафы', wbQueries: <span className="font-semibold">62%</span>, wbRevenue: '47%', priority: <span className="font-semibold">Ozon — дорогие, WB — массовые</span> },
  { category: 'Комоды', wbQueries: <span className="font-semibold">64%</span>, wbRevenue: <span className="font-semibold">54%</span>, priority: <span className="font-semibold">WB основной, Ozon доп.</span> },
  { category: 'Полки/стеллажи', wbQueries: <span className="font-semibold">~60%</span>, wbRevenue: <span className="font-semibold">52%</span>, priority: <span className="font-semibold">WB</span> },
  { category: 'Столы', wbQueries: '45%', wbRevenue: '35%', priority: <span className="font-semibold">Ozon приоритет</span> },
  { category: 'Стулья', wbQueries: '~55%', wbRevenue: <span className="font-semibold">51%</span>, priority: <span className="font-semibold">WB = Ozon</span> },
  { category: 'Кухни', wbQueries: <span className="font-semibold">~70%</span>, wbRevenue: <span className="font-semibold">51%</span>, priority: <span className="font-semibold">WB трафик, Ozon — дорогой сегм.</span> },
];

const brandCurrentColumns = [
  { key: 'brand', label: 'Бренд' },
  { key: 'wb', label: 'WB запросы', align: 'right' as const, isNumber: true },
  { key: 'ozon', label: 'Ozon запросы', align: 'right' as const, isNumber: true },
  { key: 'wbPct', label: 'WB%', align: 'right' as const },
  { key: 'ozonPct', label: 'Ozon%', align: 'right' as const },
];

const brandCurrentData = [
  { brand: <strong>Нонтон</strong>, wb: '7 588', ozon: '7 753', wbPct: '49%', ozonPct: <span className="font-semibold">51%</span> },
  { brand: <strong>Диван Босс</strong>, wb: '5 107', ozon: '9 291', wbPct: '35%', ozonPct: <span className="font-semibold">65%</span> },
  { brand: <strong>Уютная Логика</strong>, wb: '4 964', ozon: '2 960', wbPct: <span className="font-semibold">63%</span>, ozonPct: '37%' },
  { brand: <strong>Правила Мебели</strong>, wb: '2 779', ozon: '2 304', wbPct: <span className="font-semibold">55%</span>, ozonPct: '45%' },
  { brand: <strong>Много Мебели</strong>, wb: '1 732', ozon: '1 180', wbPct: <span className="font-semibold">59%</span>, ozonPct: '41%' },
  { brand: <strong>Диван Ру</strong>, wb: '1 107', ozon: '3 303', wbPct: '25%', ozonPct: <span className="font-semibold">75%</span> },
  { brand: <strong>Первый Мебельный</strong>, wb: '369', ozon: '768', wbPct: '32%', ozonPct: <span className="font-semibold">68%</span> },
];

const brandHistoryColumns = [
  { key: 'brand', label: 'Бренд' },
  { key: 'feb2020', label: 'Февраль 2020', align: 'right' as const, isNumber: true },
  { key: 'feb2026', label: 'Февраль 2026', align: 'right' as const, isNumber: true },
  { key: 'change', label: 'Изменение', align: 'right' as const },
];

const brandHistoryData = [
  { brand: <strong>Нонтон</strong>, feb2020: '50 027', feb2026: '182 680', change: <span className="text-positive font-semibold">+265%</span> },
  { brand: <strong>Диван Босс</strong>, feb2020: '17 321', feb2026: '73 762', change: <span className="text-positive font-semibold">+326%</span> },
  { brand: <strong>Уютная Логика</strong>, feb2020: '1 066', feb2026: '14 713', change: <span className="text-positive font-semibold">+1 280%</span> },
  { brand: <strong>Правила Мебели</strong>, feb2020: '0', feb2026: '28 828', change: <span className="text-[#6B6B6B]">бренд создан после 2020</span> },
  { brand: <strong>Диван Ру</strong>, feb2020: '59 143', feb2026: '162 240', change: <span className="text-positive font-semibold">+174%</span> },
  { brand: <strong>Много Мебели</strong>, feb2020: '458 166', feb2026: '116 189', change: <span className="text-negative font-semibold">−75%</span> },
  { brand: <strong>Первый Мебельный</strong>, feb2020: '75 507', feb2026: '36 677', change: <span className="text-negative font-semibold">−51%</span> },
];

const strategyMatrixColumns = [
  { key: 'category', label: 'Категория' },
  { key: 'wbQueries', label: 'WB% запросов', align: 'right' as const },
  { key: 'wbRevenue', label: 'WB% выручки', align: 'right' as const },
  { key: 'wbCheck', label: 'WB ср. чек', align: 'right' as const, isNumber: true },
  { key: 'ozonPrice', label: 'Ozon ср. цена', align: 'right' as const, isNumber: true },
  { key: 'priority', label: 'Приоритет' },
];

const strategyMatrixData = [
  { category: 'Диваны и кресла', wbQueries: <span className="font-semibold">61%</span>, wbRevenue: '50%', wbCheck: '20 382 ₽', ozonPrice: '28 646 ₽', priority: <span className="font-semibold">Обе + разные сегменты</span> },
  { category: 'Шкафы', wbQueries: <span className="font-semibold">62%</span>, wbRevenue: '47%', wbCheck: '9 747 ₽', ozonPrice: '14 424 ₽', priority: <span className="font-semibold">Ozon — дорогие, WB — массовые</span> },
  { category: 'Комоды и тумбы', wbQueries: <span className="font-semibold">64%</span>, wbRevenue: <span className="font-semibold">54%</span>, wbCheck: '4 374 ₽', ozonPrice: '7 441 ₽', priority: <span className="font-semibold">WB основной, Ozon доп.</span> },
  { category: 'Полки и стеллажи', wbQueries: <span className="font-semibold">~60%</span>, wbRevenue: <span className="font-semibold">52%</span>, wbCheck: '3 550 ₽', ozonPrice: '2 656 ₽', priority: <span className="font-semibold">WB</span> },
  { category: 'Столы', wbQueries: '~45%', wbRevenue: '35%', wbCheck: '6 660 ₽', ozonPrice: '10 606 ₽', priority: <span className="font-semibold">Ozon приоритет</span> },
  { category: 'Стулья', wbQueries: '~55%', wbRevenue: <span className="font-semibold">51%</span>, wbCheck: '10 236 ₽', ozonPrice: '7 463 ₽', priority: <span className="font-semibold">WB = Ozon, разная аудитория</span> },
  { category: 'Кухни (гарнитуры)', wbQueries: <span className="font-semibold">~70%</span>, wbRevenue: <span className="font-semibold">51%</span>, wbCheck: '6 200 ₽', ozonPrice: '10 823 ₽', priority: <span className="font-semibold">WB трафик, Ozon — дорогой сегм.</span> },
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <Hero />
        
        <Quote>
          Маркетинг — это не то, что вы делаете с продуктом.
          <br />
          Это то, что вы понимаете о рынке — прежде чем что-либо делать.
        </Quote>

        {/* Preface */}
        <Section id="preface" title="Предисловие. Зачем этот отчёт">
          <p className="mb-4">
            На протяжении двух последних лет я наблюдаю одну и ту же сцену в разных декорациях. Мебельная фабрика принимает решение выйти на маркетплейсы или уже вышла, но что-то пошло не так. Активность высокая: фотографируют каталог, пишут карточки, нанимают менеджера по WB, настраивают рекламу, смотрят на CTR. А через полгода наступает разочарование: либо нет продаж, либо убыток. Но есть кто счастлив — за счет иллюзии успеха при плохой юнит-экономике.
          </p>
          <p className="mb-4">
            В чём причина? Почти всегда она в последовательности: <strong>начали с тактики, пропустив стратегию.</strong>
          </p>
          <p className="mb-4">
            Этот отчёт — это моя очередная попытка показать, что системный подход к маркетплейсам начинается не с карточки и не с рекламного бюджета. Он начинается с понимания рынка: где покупатель, сколько его, сколько он готов платить, как разные платформы делят между собой разные сегменты спроса.
          </p>
          <p>
            Данные для этого понимания существуют, и они открытые, инструменты для их обработки доступны. Разница — в привычке задавать правильные вопросы в правильном порядке.
          </p>
        </Section>

        {/* Part I */}
        <Section id="part1" title="Часть I. Три уровня Маркетинга">
          <p className="mb-6">
            Прежде чем перейти к цифрам, давайте договоримся о терминах. Я намеренно разделяю три уровня, которые в мебельной отрасли стабильно смешивают в одну кашу.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Маркетинг с большой буквы М — стратегия</h3>
          <p className="mb-4 text-[#6B6B6B] italic">
            Какую "работу" выполняет наша мебель? Какие ценности мы продаем? Кто мы? Зачем мы? Кто наш покупатель? Чего он хочет на самом деле — не что говорит, а что делает? Где и как он принимает решение о покупке? Какое позиционирование делает нас предпочтительнее конкурента? На каком рынке мы играем и зачем мы там нужны?
          </p>
          <p className="mb-4">
            Это вопросы, которые решаются один раз и надолго. Они требуют аналитики, опыта и, что принципиально важно, <strong>насмотренности</strong>, в том числе за пределами мебельной отрасли. Хороший стратегический маркетинг питается аналогиями: как ту же проблему решали в электронике, в одежде, в продуктах питания, когда они проходили похожий переход на маркетплейсы.
          </p>
          <p className="mb-4">
            Большая «М» требует <strong>владения методологиями</strong> — не набором советов, а системами мышления: анализ рынка и конкурентной среды, сегментирование, позиционирование, выбор каналов дистрибуции. Именно методология позволяет не просто дать рекомендацию «идите на Ozon», а объяснить механику: почему, при каких условиях, с какими ограничениями, что проверить.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Маркетинг со средней буквы «м» — ассортиментная политика</h3>
          <p className="mb-4 text-[#6B6B6B] italic">
            Какие SKU выводим? В каком ценовом диапазоне? Какая логика ассортиментной матрицы? Что является входной моделью (генерирует первые покупки), что флагманом (формирует восприятие бренда), что основной маржинальной позицией?
          </p>
          <p className="mb-4">
            Это решается <strong>после</strong> стратегии и только после неё. Создавать ассортиментную матрицу без понимания того, кто ваш покупатель на каждой платформе и сколько он готов платить — это строить дом без фундамента.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Маркетинг с маленькой буквы «м» — тактика и инструменты</h3>
          <p className="mb-4 text-[#6B6B6B] italic">
            Какие фотографии? Какое описание в карточке? Какой бюджет на внутреннюю рекламу? Как настроить автоставку? Какие ключевые слова использовать в SEO?
          </p>
          <p className="mb-4">
            Это важно, это нужно, но это <strong>последний шаг</strong>, а не первый. Инструмент, направленный не туда, работает безупречно в неправильном направлении.
          </p>
          <p className="mb-6">
            Большинство фабрик, с которыми я сталкивался, начинают с маленькой «м». Поэтому и результаты непредсказуемы: кто-то случайно угадывает, большинство — нет.
          </p>

          <div className="bg-[#F5F5F5] quote-border pl-6 pr-8 py-6 my-8">
            <p className="text-lg font-semibold text-[#1A1A1A]">
              Правильная последовательность: М → «м» → «м».
              <br />
              <span className="text-[#E53935]">Стратегия → ассортимент → инструменты.</span>
            </p>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">Три примера того, как это работает на практике</h3>
          <p className="mb-4">
            Абстракция понятна. Но она лучше усваивается через конкретное. Вот три ситуации, с которыми сталкивается каждая фабрика при выходе на маркетплейс — и два способа их решить.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">Пример 1. Фотография товара: ракурс и фон</h4>
          <p className="mb-4">
            <strong>Ситуация:</strong> фабрика заказывает фотосъёмку каталога для карточек. Фотограф — хороший, технически грамотный. Перед ним встаёт вопрос: белый студийный фон или интерьерная сцена? Угол сверху или на уровне глаз?
          </p>
          <p className="mb-4">
            <strong>Как решается обычно:</strong> фотограф выбирает то, что считает красивым. В лучшем случае менеджер говорит «сделайте как у конкурентов». Результат — решение, принятое на уровне маленькой «м» без какой-либо системы.
          </p>
          <p className="mb-4">
            <strong>Как должно быть:</strong> ответ на этот вопрос <strong>уже содержится в стратегии</strong>, если она сделана. Если мы знаем, какую работу выполняет наша мебель, что наш покупатель — молодая семья, которая обустраивает первую квартиру и ищет уют, а не статус, то фотография с тёплым интерьером, пледом и живым светом говорит с ним на его языке.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">Пример 2. Шрифты в визуальной идентичности бренда</h4>
          <p className="mb-4">
            <strong>Ситуация:</strong> фабрика делает брендбук, карточки на маркетплейсе, рекламные баннеры. Дизайнер предлагает три варианта шрифта. Руководитель выбирает тот, который «нравится» или «выглядит современно».
          </p>
          <p className="mb-4">
            <strong>Проблема:</strong> 90% маркетологов уровня маленькой «м» не знают или знают, но не используют, что <strong>шрифты не нейтральны</strong>. Они несут кодированные сообщения, которые аудитория считывает до того, как прочитает хоть одно слово.
          </p>
          <p className="mb-4">
            Засечные шрифты (serif) — традиция, основательность, авторитет, время. Рубленые шрифты (sans-serif) — современность, чистота, технологичность, доступность. Рукописные — эмоция, индивидуальность, рукотворность, теплота.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">Пример 3. Цвета: система Иттена и то, почему её не знают</h4>
          <p className="mb-4">
            <strong>Ситуация:</strong> та же — выбор цветовой палитры бренда или карточки. Обычное решение: берут фирменный цвет из логотипа, добавляют «что-то нейтральное», иногда — то, что «сейчас в тренде».
          </p>
          <p className="mb-4">
            Смешно, но факт: многие маркетологи уровня маленькой «м» не только не пользуются <strong>цветовой системой Иттена</strong> (Иоганнес Иттен, Баухаус, 1961), но даже не слышали о её существовании.
          </p>
          <p className="mb-4">
            Между тем это есть рабочий инструмент, который систематизирует психологическое и ассоциативное воздействие цвета, его температуру, контрасты и сочетания.
          </p>
          <p className="mb-4">
            Тёплые цвета (красный, оранжевый, жёлтый) — активность, энергия, импульсивность, доступность. Это язык акций, срочности, входных ценовых предложений. Холодные цвета (синий, зелёный, фиолетовый) — спокойствие, доверие, качество, обдуманность. Это язык премиума и долгосрочных отношений.
          </p>
        </Section>

        {/* Part II */}
        <Section id="part2" title="Часть II. Контекст: что произошло с рынком за шесть лет">
          <p className="mb-6">
            Этот отчёт опирается на массив открытых данных по мебельному спросу и продажам.
            Ключевой тезис: <strong>спрос на мебель не исчез — он мигрировал с Яндекса на маркетплейсы</strong>.
            Здесь фиксируем только самое важное для понимания текущей ситуации.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Обвал товарных запросов в Яндексе</h3>
          <DataTable columns={wordstatColumns} data={wordstatData} />
          <p className="text-sm text-[#6B6B6B] mt-4">
            За шесть лет мебельный Яндекс потерял почти половину коммерческого трафика. Покупатели не перестали покупать мебель. Они перестали искать её через Яндекс: теперь воронка начинается и заканчивается внутри маркетплейса.
          </p>

          <h3 className="text-xl font-bold mt-10 mb-4">Куда переместился спрос</h3>
          <p className="mb-4 text-sm text-[#6B6B6B]">
            Данные февраля 2026 по основным категориям (топ-10 запросов WB и Ozon за 28 дней):
          </p>
          <DataTable columns={migrationColumns} data={migrationData} />
          <p className="text-sm text-[#6B6B6B] mt-4">
            Объём поискового спроса на двух маркетплейсах превышает Яндекс в 4–7 раз. При этом важно понимать природу запросов: Яндекс — это «купить диван» (явное намерение), маркетплейс — это «диван» (выбор внутри площадки).
          </p>
        </Section>

        {/* Part III */}
        <Section id="part3" title="Часть III. Проблема сравнения трёх платформ: методологическое отступление">
          <p className="mb-6">
            Прежде чем переходить к данным по трём маркетплейсам, необходимо остановиться на том, что кажется технической деталью, но на самом деле является принципиальным вопросом: <strong>три платформы измеряют спрос по-разному</strong>.
          </p>
          <p className="mb-6">
            Это не мелочь. Если не учесть это, то при анализе можно сделать прямо противоположные выводы.
          </p>

          <DataTable columns={methodologyColumns} data={methodologyData} />

          <p className="mt-6 mb-4">Из этой асимметрии вытекают три следствия.</p>

          <p className="mb-4">
            <strong>Следствие первое.</strong> WB «запросы» и Ozon «популярность» — прямые аналоги. Их можно сравнивать напрямую: обе метрики означают «сколько покупателей ввели этот запрос».
          </p>
          <p className="mb-4">
            <strong>Следствие второе.</strong> WB «перешли в карточку» и YM «клики» — прямые аналоги. Их тоже можно сравнивать: обе метрики означают «сколько раз открыли карточку товара».
          </p>
          <p className="mb-4">
            <strong>Следствие третье.</strong> Ozon и YM напрямую несравнимы ни по одной метрике: Ozon не даёт кликов в карточку, YM не даёт числа запросов.
          </p>

          <div className="bg-[#F5F5F5] quote-border pl-6 pr-8 py-6 my-8">
            <p className="text-[#1A1A1A]">
              Это значит: корректное трёхстороннее сравнение требует <strong>двух уровней анализа</strong>, а не одного.
            </p>
          </div>

          <p className="mb-4">
            Я намеренно разбираю этот момент подробно: он иллюстрирует, что <strong>даже с открытыми данными можно прийти к ошибочным выводам, если не задать правильный методологический вопрос</strong>. Это и есть разница между анализом и аналитикой.
          </p>
        </Section>

        {/* Part IV */}
        <Section id="part4" title="Часть IV. Где ищут: сравнение поискового спроса WB vs Ozon">
          <h3 className="text-xl font-bold mt-4 mb-4">Общая картина по категориям</h3>
          <DataTable columns={searchGeneralColumns} data={searchGeneralData} />
          <p className="text-sm text-[#6B6B6B] mt-4">
            WB ведёт в большинстве категорий с результатом примерно 60/40. Но это агрегат, который скрывает куда более интересные детали на уровне конкретных запросов.
          </p>

          <h3 className="text-xl font-bold mt-10 mb-4">Диваны: аксессуары и мебель — разные рынки</h3>
          <DataTable columns={sofaColumns} data={sofaData} />
          <p className="text-sm text-[#6B6B6B] mt-4">
            Базовые запросы на сам диван — это паритет или минимальный перевес WB. Но «покрывало», «накидка» — это монополия WB (75–80%). Это не случайность: текстильные аксессуары — это типичный WB-товар с быстрым решением о покупке и низким чеком.
          </p>

          <h3 className="text-xl font-bold mt-10 mb-4">Шкафы: язык аудитории как стратегический сигнал</h3>
          <DataTable columns={wardrobeColumns} data={wardrobeData} />
          <p className="text-sm text-[#6B6B6B] mt-4">
            Обратите внимание на «шкаф для одежды в спальню» — <strong>202 000 запросов в месяц только на WB</strong>, на Ozon — ноль. Это не значит, что на Ozon не ищут шкафы в спальню. Это значит, что там их ищут <strong>другими словами</strong>. Разные аудитории, разный словарь, разный контекст принятия решения.
          </p>

          <h3 className="text-xl font-bold mt-10 mb-4">Комоды: феномен лингвистической сегментации</h3>
          <DataTable columns={dresserColumns} data={dresserData} />
          <p className="text-sm text-[#6B6B6B] mt-4">
            Это один из самых показательных примеров. Один и тот же товар: на WB его ищут как «комод для вещей» (229 000 запросов), на Ozon — как «комод с ящиками» (127 000). Это не SEO-нюанс. Это сигнал о том, что <strong>аудитории платформ буквально думают разными категориями</strong>.
          </p>

          <h3 className="text-xl font-bold mt-10 mb-4">Кухня: ловушка категориального числа</h3>
          <DataTable columns={kitchenColumns} data={kitchenData} />
          <p className="text-sm text-[#6B6B6B] mt-4">
            Агрегированная цифра «Ozon 72% по кухне» создаёт ложное впечатление. Топ запросов Ozon по слову «кухня» — это <strong>стулья</strong> (163K) и <strong>смесители</strong> (159K). Производитель кухонных гарнитуров и производитель стульев — не конкуренты за одного покупателя, это вообще разные рынки.
          </p>
          <div className="bg-[#F5F5F5] quote-border pl-6 pr-8 py-6 my-8">
            <p className="text-lg font-semibold text-[#1A1A1A]">
              Агрегат лжёт. Дьявол — в структуре запросов.
            </p>
          </div>
        </Section>

        {/* Part V */}
        <Section id="part5" title="Часть V. Где листают: WB vs Яндекс.Маркет по кликам в карточку">
          <p className="mb-6">
            Ozon на этом уровне анализа выпадает — метрики кликов в карточку в его выгрузке нет. Сравниваем WB «перешли в карточку» с YM «клики»: это однородные метрики, обе означают физическое открытие карточки товара.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Диваны</h3>
          <DataTable columns={clicksSofaColumns} data={clicksSofaData} />

          <h3 className="text-xl font-bold mt-8 mb-4">Шкафы</h3>
          <DataTable columns={clicksWardrobeColumns} data={clicksWardrobeData} />

          <h3 className="text-xl font-bold mt-8 mb-4">Что означает этот разрыв</h3>
          <p className="mb-4">
            По кликам в карточку WB забирает <strong>78–92%</strong> от суммарного показателя WB+YM. Это значимо выше, чем его доля по запросам (53–62%). Объяснение: покупатель на WB просматривает в 3–4 раза больше карточек за одну поисковую сессию, чем на YM.
          </p>
          <p className="mb-4">
            WB — это среда «листания», где пользователь сравнивает десятки позиций. YM — среда более целенаправленного поиска: пришёл с конкретным намерением, просмотрел меньше, но вдумчивее.
          </p>
          <div className="bg-[#F5F5F5] quote-border pl-6 pr-8 py-6 my-8">
            <p className="text-[#1A1A1A]">
              <strong>Для производителя кухонных гарнитуров в среднем и высоком сегменте:</strong> YM — это третий канал, который стоит рассматривать. Не вместо WB, а в дополнение.
            </p>
          </div>
        </Section>

        {/* Part VI */}
        <Section id="part6" title="Часть VI. Где деньги: сравнение выручки WB и Ozon">
          <p className="mb-6">
            Здесь начинается самое неожиданное. На основании данных о поиске закономерный вывод: WB доминирует. 60% запросов — не значит 60% рынка, ведь когда к анализу добавляются данные о продажах, картина меняется.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Выручка за 28 дней: WB vs Ozon</h3>
          <DataTable columns={revenueColumns} data={revenueData} />
          <p className="text-sm text-[#6B6B6B] mt-4">
            <em>¹ Кровати и матрасы отсутствуют в выгрузке WB как отдельные предметы.</em>
          </p>
          <p className="mt-4">
            <strong>Итого по сопоставимым категориям:</strong> WB 12,7 млрд ₽ / Ozon 17,7 млрд ₽ (42% vs 58%).
          </p>
          <div className="bg-[#F5F5F5] quote-border pl-6 pr-8 py-6 my-8">
            <p className="text-lg font-semibold text-[#1A1A1A]">
              WB генерирует на ~50% больше поисковых запросов, но получает <span className="text-[#E53935]">меньшую</span> выручку.
            </p>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">Механизм: средний чек всё объясняет</h3>
          <DataTable columns={avgCheckColumns} data={avgCheckData} />
          <p className="text-sm text-[#6B6B6B] mt-4">
            В большинстве корпусных категорий Ozon продаёт мебель в 1.4–1.75 раза дороже. Каждый покупатель, пришедший на Ozon с запросом «шкаф», оставляет на 48% больше денег, чем покупатель WB с тем же запросом.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Сводная матрица: запросы + выручка</h3>
          <DataTable columns={summaryMatrixColumns} data={summaryMatrixData} />
        </Section>

        {/* Part VII */}
        <Section id="part7" title="Часть VII. Брендовый трафик: кто где существует">
          <p className="mb-6">
            Анализ не был бы полным без брендового измерения. Здесь три источника объединяются: WB и Ozon (запросы, прямое сравнение) + Яндекс.Маркет (показы и клики, косвенная узнаваемость) + Яндекс.Wordstat (историческая динамика brand-search за 6 лет).
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Текущий срез: февраль 2026</h3>
          <DataTable columns={brandCurrentColumns} data={brandCurrentData} />

          <h3 className="text-xl font-bold mt-10 mb-4">Историческая динамика brand-search в Яндексе: 2020 → 2026</h3>
          <p className="mb-4 text-sm text-[#6B6B6B]">
            Пока товарный трафик в Яндексе падал вдвое, брендовый трафик вёл себя принципиально иначе.
          </p>
          <DataTable columns={brandHistoryColumns} data={brandHistoryData} />
          <p className="text-sm text-[#6B6B6B] mt-4">
            Картина раскалывается на два лагеря. Одни бренды росли в Яндексе на фоне общего падения товарного трафика — это признак работающего бренд-строительства. Другие рухнули вместе с рынком или сильнее него.
          </p>

          <h3 className="text-xl font-bold mt-10 mb-4">Портреты брендов</h3>
          
          <p className="mb-4">
            <strong>Нонтон</strong> — единственный бренд с полным паритетом WB/Ozon (49%/51%) и при этом наибольшим brand-search в Яндексе из всей семёрки (+265% с 2020). Нонтон не выбирал платформу — он <strong>строил бренд</strong>. Результат: аудитория сформировалась на всех платформах. Это и есть стратегия большой «М» в действии.
          </p>
          <p className="mb-4">
            <strong>Диван Босс</strong> — Ozon-нативный бренд. Перевес Ozon 65%/35% — это похоже стратегия, а не случайность. Яндекс-трафик вырос в 4 раза с 2020 (+326%). Сильный в своей нише, более уязвимый на нейтральной территории.
          </p>
          <p className="mb-4">
            <strong>Уютная Логика</strong> — WB-ориентированный бренд (63%/37%), но с неожиданным результатом: <strong>наибольшее число кликов в YM из всей семёрки</strong>. Рост в Яндексе +1 280% с 2020.
          </p>
          <p className="mb-4">
            <strong>Правила Мебели</strong> — бренд-феникс из ребрендинга Первого Мебельного. В 2020 году в Яндексе его не существовало. Сегодня — 28 828 запросов. Ребрендинг оказался правильным решением.
          </p>
          <p className="mb-4">
            <strong>Много Мебели</strong> — крупнейший бренд когорты в Яндексе в 2020 году (458 тыс. запросов). Сегодня — минус 75% (116 тыс.). <strong>Классический кейс стратегической инерции.</strong>
          </p>
          <p className="mb-4">
            <strong>Диван Ру</strong> — показательный тревожный случай. Ozon 75%/WB 25% — самый сильный перекос. Название содержит «диван» и «ру» — прямую отсылку к интернет-магазину. Но реальная аудитория давно живёт на Ozon. <strong>Диссонанс между именем бренда, его каналом продаж и реальным поведением аудитории.</strong>
          </p>
          <p className="mb-6">
            <strong>Первый Мебельный</strong> — завершённый цикл. В Яндексе −51% с 2020, на WB 369 запросов в месяц. Бренд жив юридически, но не существует в поисковом пространстве покупателей.
          </p>

          <div className="bg-[#F5F5F5] quote-border pl-6 pr-8 py-6 my-8">
            <p className="text-[#1A1A1A]">
              Данные по брендам демонстрируют одну ключевую закономерность: <strong>перекос присутствия на одну платформу — это всегда результат сознательного (или неосознанного) стратегического выбора</strong>. Случайных распределений здесь нет.
            </p>
          </div>
        </Section>

        {/* Part VIII */}
        <Section id="part8" title="Часть VIII. Стратегическая матрица «с чем и куда»">
          <p className="mb-6">
            Собираем три уровня данных (поиск, клики, выручка) в единую логику принятия решений.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Матрица по категориям и ценовым сегментам</h3>
          <DataTable columns={strategyMatrixColumns} data={strategyMatrixData} />

          <h3 className="text-xl font-bold mt-10 mb-4">Принципы, из которых строится стратегия</h3>

          <p className="mb-4">
            <strong className="text-[#E53935]">Принцип 1:</strong> не «WB или Ozon», а «какой продукт на какую платформу».
          </p>
          <p className="mb-6 text-sm text-[#6B6B6B]">
            Вопрос «нам WB или Ozon?» неверно сформулирован. Правильный вопрос: «наш диван за 35 000 ₽ — это WB или Ozon?». Ответ: скорее Ozon — там средний чек 28 646 ₽. Диван за 12 000 ₽ — это WB, где средний чек 20 382 ₽. Один завод, одна категория — разные платформы для разных ценовых позиций.
          </p>

          <p className="mb-4">
            <strong className="text-[#E53935]">Принцип 2:</strong> малая и большая мебель — разные платформенные логики.
          </p>
          <p className="mb-6 text-sm text-[#6B6B6B]">
            Малая мебель (комоды 4 374 ₽, полки 3 550 ₽) — это WB-сегмент. Высокий объём запросов, быстрое решение о покупке. Большая корпусная мебель (диваны 20–28K ₽, шкафы 10–14K ₽) — это Ozon-сегмент для дорогих позиций. Более длинный цикл принятия решения.
          </p>

          <p className="mb-4">
            <strong className="text-[#E53935]">Принцип 3:</strong> поисковый трафик и выручка могут показывать в разные стороны — и это ловушка.
          </p>
          <p className="mb-6 text-sm text-[#6B6B6B]">
            По шкафам Ozon лидирует в деньгах при меньшем трафике. Фабрика, принявшая решение только по данным поиска, системно недооценивает Ozon.
          </p>

          <p className="mb-4">
            <strong className="text-[#E53935]">Принцип 4:</strong> словарный разрыв — это стратегия, а не SEO.
          </p>
          <p className="mb-6 text-sm text-[#6B6B6B]">
            «Комод для вещей» — WB, «Комод с ящиками» — Ozon. Это не тонкость копирайтинга, это сигнал о том, что аудитории платформ думают в разных категориях.
          </p>

          <p className="mb-4">
            <strong className="text-[#E53935]">Принцип 5:</strong> YM — не конкурент маркетплейсам, а индикатор зрелости бренда.
          </p>
          <p className="mb-6 text-sm text-[#6B6B6B]">
            Яндекс.Маркет сохраняет значимое присутствие в «думательных» покупках. Признак того, что YM нужен: средний чек продукта выше 30–40 тыс. ₽ и есть собственный бренд с накопленной узнаваемостью.
          </p>
        </Section>

        {/* Part IX */}
        <Section id="part9" title="Часть IX. Чего в этом отчёте нет, намеренно">
          <p className="mb-6">
            Этот отчёт работает на категориальных данных и показывает <strong>общую структуру рынка</strong>. Это фундамент стратегии: необходимый, но не достаточный. Вот что остаётся за рамками и что является обязательным элементом полноценного стратегического анализа для конкретной фабрики.
          </p>

          <p className="mb-4">
            <strong>Региональная логистика.</strong> WB и Ozon имеют разную географию складов, разную стоимость фулфилмента, разные ограничения по габаритам. Для крупногабаритной мебели (диваны, шкафы, кровати) юнит-экономика критически зависит от расстояния между производством и потребителем.
          </p>

          <p className="mb-4">
            <strong>Подкатегорийный разрез.</strong> «Диваны» как категория усредняет диван-книжку за 8 000 ₽ и модульный угловой диван за 120 000 ₽. Данные по этим двум позициям будут разными на каждой платформе, и стратегия для них будет разная.
          </p>

          <p className="mb-4">
            <strong>Конкурентная среда.</strong> Знать объём категории — это ещё не знать, есть ли там место для нового игрока. Нужно понимать концентрацию топ-продавцов, барьеры входа, ценовые ниши с низкой конкуренцией.
          </p>

          <p className="mb-4">
            <strong>История и ДНК компании.</strong> Маркетинг с большой «М» не сводится к цифрам. Это ещё и ответ на вопрос «кто мы» — до любых каналов и карточек. Фабрика с 30-летней историей, известная в регионе, выходит на маркетплейсы с другим набором инструментов.
          </p>

          <p className="mb-6">
            <strong>Ассортиментная матрица.</strong> Когда стратегия определена, следующий шаг — это структура ассортимента для каждой платформы: входная модель (генерирует первые продажи), якорная позиция (основная маржа), флагман (формирует восприятие бренда).
          </p>
        </Section>

        {/* Conclusion */}
        <Section id="conclusion" title="Вместо заключения: три вопроса для директора фабрики">
          <p className="mb-6">
            Если вы дочитали до этого места, предлагаю задать себе три вопроса и честно на них ответить.
          </p>

          <div className="space-y-6">
            <div className="bg-[#F5F5F5] p-6 rounded-lg">
              <p className="font-semibold text-[#E53935] mb-2">Первый вопрос</p>
              <p>Когда вы принимали решение о выходе на маркетплейс — на каком уровне принималось это решение? На уровне «нас туда позвал партнёр / все вышли / давайте попробуем»? Или было исследование: какая платформа для какого продукта в нашем ценовом сегменте?</p>
            </div>

            <div className="bg-[#F5F5F5] p-6 rounded-lg">
              <p className="font-semibold text-[#E53935] mb-2">Второй вопрос</p>
              <p>Ваш текущий ассортимент на платформах соответствует аудитории этих платформ? Данные, которые приведены выше — открытые. Их можно поднять за один день. Вы это делали?</p>
            </div>

            <div className="bg-[#F5F5F5] p-6 rounded-lg">
              <p className="font-semibold text-[#E53935] mb-2">Третий вопрос</p>
              <p>Кто в вашей компании отвечает за стратегию присутствия на маркетплейсах, то есть за ответы на первые два вопроса? Или у вас есть только тот, кто отвечает за карточки и рекламный бюджет?</p>
            </div>
          </div>

          <p className="mt-8">
            Это не риторические вопросы. На каждый из них есть конкретный ответ: если есть данные, методология и опыт работы с аналогичными задачами в других отраслях, которые уже прошли этот путь раньше мебельной.
          </p>
        </Section>

        {/* Limitations */}
        <Section id="limitations" title="Ограничения анализа">
          <p className="mb-4">
            <strong>Период.</strong> WB: 09.02–10.03.2026 (30 дней). Ozon: 11.02–10.03.2026 (28 дней). YM: февраль 2026. Разница в стартовых датах минимальна — влияние на выводы несущественно. WB-данные нормированы на 28 дней для корректного сравнения с Ozon.
          </p>
          <p className="mb-4">
            <strong>Охват запросов.</strong> WB выдаёт расширенный топ запросов по категории. Ozon — ограниченный набор. YM — только вручную выгруженные запросы. Сравниваются пересечения и топы, а не полные массивы.
          </p>
          <p className="mb-4">
            <strong>Отсутствие данных WB по кроватям и матрасам.</strong> В предоставленной выгрузке WB эти категории не выделены как отдельные предметы.
          </p>
          <p className="mb-4">
            <strong>Ozon без кликов в карточку.</strong> Ozon не публикует эту метрику в аналитике продавца.
          </p>
          <p className="mb-4">
            <strong>Агрегация по категориям, не подкатегориям.</strong> Средний чек по «диванам» — это средняя температура по больнице. Реальная стратегия требует детализации до ценовых сегментов.
          </p>
        </Section>

        <InteractiveInsights />
      </main>

      <Footer />
    </div>
  );
}

export default App;
