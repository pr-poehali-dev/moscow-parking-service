import { useState } from 'react';
import Icon from '@/components/ui/icon';

const cases = [
  {
    id: 1,
    title: 'Штраф за платную парковку на ул. Тверской',
    amount: '5 000 ₽',
    result: 'Отменён',
    category: 'parking',
    date: 'Март 2024',
    description: 'Постановление МАДИ было составлено с нарушением — на фото отсутствовала видимость разметки платной зоны. Жалоба подана в суд, штраф отменён полностью.',
    law: 'ст. 8.25 КоАП г. Москвы',
    duration: '18 дней',
  },
  {
    id: 2,
    title: 'Парковка на газоне в ЦАО',
    amount: '5 000 ₽',
    result: 'Отменён',
    category: 'green',
    date: 'Февраль 2024',
    description: 'Автомобиль стоял на асфальтированной площадке, примыкающей к газону. Инспектор неверно квалифицировал нарушение. Жалоба в МАДИ удовлетворена.',
    law: 'ст. 8.25 КоАП г. Москвы',
    duration: '12 дней',
  },
  {
    id: 3,
    title: 'Штраф ГИБДД за парковку у знака',
    amount: '2 500 ₽',
    result: 'Отменён',
    category: 'parking',
    date: 'Январь 2024',
    description: 'Знак ограничения парковки был закрыт листвой дерева. Собраны доказательства, жалоба рассмотрена в пользу клиента.',
    law: 'ч. 1 ст. 12.19 КоАП РФ',
    duration: '24 дня',
  },
  {
    id: 4,
    title: 'Двойной штраф за одно нарушение',
    amount: '10 000 ₽',
    result: 'Отменён',
    category: 'parking',
    date: 'Декабрь 2023',
    description: 'Клиент получил два постановления за одну и ту же стоянку. Принцип non bis in idem применён судом, оба постановления аннулированы.',
    law: 'ч. 5 ст. 4.1 КоАП РФ',
    duration: '31 день',
  },
  {
    id: 5,
    title: 'Газон или парковочный карман?',
    amount: '5 000 ₽',
    result: 'Отменён',
    category: 'green',
    date: 'Ноябрь 2023',
    description: 'Территория была обозначена как парковочный карман на схеме ДГИ, но инспектор квалифицировал как газон. Представлена выписка из реестра — штраф отменён.',
    law: 'ст. 8.25 КоАП г. Москвы',
    duration: '15 дней',
  },
  {
    id: 6,
    title: 'Истёкший срок обжалования',
    amount: '5 000 ₽',
    result: 'Отменён',
    category: 'parking',
    date: 'Октябрь 2023',
    description: 'Клиент пропустил срок обжалования по уважительной причине. Ходатайство о восстановлении срока удовлетворено, штраф отменён по существу.',
    law: 'ст. 30.3 КоАП РФ',
    duration: '42 дня',
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<'all' | 'parking' | 'green'>('all');
  const [selected, setSelected] = useState<typeof cases[0] | null>(null);

  const filtered = filter === 'all' ? cases : cases.filter((c) => c.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="moscow-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-4">
            <Icon name="Trophy" size={16} />
            Реальные дела, реальные победы
          </div>
          <h1 className="font-montserrat font-black text-4xl sm:text-5xl text-white mb-4">Портфолио</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Истории клиентов и решения об отмене штрафов
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-3">
          {[
            { id: 'all', label: 'Все дела' },
            { id: 'parking', label: 'Платная парковка' },
            { id: 'green', label: 'Зелёные насаждения' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as typeof filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === f.id
                  ? 'bg-[#486DAA] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-gray-400 text-sm self-center">{filtered.length} дел</span>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover cursor-pointer group"
              onClick={() => setSelected(c)}
            >
              <div className="bg-gradient-to-r from-[#486DAA] to-[#5a7fba] p-5">
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    c.category === 'parking'
                      ? 'bg-white/20 text-white'
                      : 'bg-green-400/20 text-green-200'
                  }`}>
                    {c.category === 'parking' ? 'Платная парковка' : 'Зелёные насаждения'}
                  </span>
                  <span className="bg-green-400 text-green-900 text-xs px-3 py-1 rounded-full font-semibold">
                    ✓ {c.result}
                  </span>
                </div>
                <h3 className="font-montserrat font-semibold text-white text-base leading-snug">{c.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{c.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Icon name="Calendar" size={14} />
                      {c.date}
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Icon name="Clock" size={14} />
                      {c.duration}
                    </div>
                  </div>
                  <div className="font-montserrat font-bold text-[#486DAA]">{c.amount}</div>
                </div>
                <button className="mt-4 w-full flex items-center justify-center gap-2 text-[#486DAA] text-sm font-medium group-hover:underline">
                  Читать подробнее
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full shadow-2xl animate-fade-in overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-[#486DAA] to-[#5a7fba] p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-green-400 text-green-900 text-xs px-3 py-1 rounded-full font-semibold">
                  ✓ {selected.result}
                </span>
                <button onClick={() => setSelected(null)} className="text-white/70 hover:text-white transition-colors">
                  <Icon name="X" size={22} />
                </button>
              </div>
              <h2 className="font-montserrat font-bold text-xl text-white">{selected.title}</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed mb-6">{selected.description}</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Сумма штрафа', value: selected.amount, icon: 'Banknote' },
                  { label: 'Срок решения', value: selected.duration, icon: 'Clock' },
                  { label: 'Дата', value: selected.date, icon: 'Calendar' },
                ].map((item) => (
                  <div key={item.label} className="bg-[#EEF2F8] rounded-xl p-3 text-center">
                    <Icon name={item.icon} size={18} className="text-[#486DAA] mx-auto mb-1" />
                    <div className="font-montserrat font-bold text-[#486DAA] text-sm">{item.value}</div>
                    <div className="text-gray-500 text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
                <Icon name="Scale" size={18} className="text-[#486DAA] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Правовое основание</div>
                  <div className="font-medium text-[#1A1F36] text-sm">{selected.law}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}