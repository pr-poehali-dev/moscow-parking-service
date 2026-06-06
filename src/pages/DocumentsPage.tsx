import { useState } from 'react';
import Icon from '@/components/ui/icon';

const documents = [
  {
    id: 1,
    title: 'Жалоба на постановление МАДИ (платная парковка)',
    desc: 'Образец жалобы на постановление о нарушении правил платной парковки для подачи в МАДИ',
    category: 'complaint',
    pages: 3,
    updated: 'Январь 2024',
    downloads: 1284,
    format: 'DOCX',
  },
  {
    id: 2,
    title: 'Жалоба на постановление о парковке на газоне',
    desc: 'Шаблон жалобы при нарушении правил парковки на зелёных насаждениях',
    category: 'complaint',
    pages: 3,
    updated: 'Февраль 2024',
    downloads: 876,
    format: 'DOCX',
  },
  {
    id: 3,
    title: 'Заявление о восстановлении срока обжалования',
    desc: 'Ходатайство о восстановлении пропущенного срока подачи жалобы по уважительным причинам',
    category: 'motion',
    pages: 2,
    updated: 'Декабрь 2023',
    downloads: 543,
    format: 'DOCX',
  },
  {
    id: 4,
    title: 'Жалоба в суд на решение МАДИ',
    desc: 'Шаблон жалобы для обжалования решения МАДИ в районный суд Москвы',
    category: 'court',
    pages: 4,
    updated: 'Март 2024',
    downloads: 2104,
    format: 'DOCX',
  },
  {
    id: 5,
    title: 'Запрос фотоматериалов нарушения',
    desc: 'Заявление для получения копий фотоматериалов, на основании которых составлено постановление',
    category: 'request',
    pages: 1,
    updated: 'Ноябрь 2023',
    downloads: 731,
    format: 'DOCX',
  },
  {
    id: 6,
    title: 'Жалоба при отсутствии знака платной парковки',
    desc: 'Шаблон жалобы при отсутствии или ненадлежащем установлении знаков платной зоны парковки',
    category: 'complaint',
    pages: 3,
    updated: 'Февраль 2024',
    downloads: 968,
    format: 'DOCX',
  },
];

const categories = [
  { id: 'all', label: 'Все документы' },
  { id: 'complaint', label: 'Жалобы' },
  { id: 'court', label: 'Суд' },
  { id: 'motion', label: 'Ходатайства' },
  { id: 'request', label: 'Запросы' },
];

const categoryColors: Record<string, string> = {
  complaint: 'bg-blue-50 text-blue-700',
  court: 'bg-purple-50 text-purple-700',
  motion: 'bg-amber-50 text-amber-700',
  request: 'bg-green-50 text-green-700',
};

const categoryLabels: Record<string, string> = {
  complaint: 'Жалоба',
  court: 'Суд',
  motion: 'Ходатайство',
  request: 'Запрос',
};

export default function DocumentsPage() {
  const [filter, setFilter] = useState('all');
  const [downloading, setDownloading] = useState<number | null>(null);

  const filtered = filter === 'all' ? documents : documents.filter((d) => d.category === filter);

  const handleDownload = (id: number) => {
    setDownloading(id);
    setTimeout(() => setDownloading(null), 1800);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="moscow-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-4">
            <Icon name="Download" size={16} />
            Бесплатные шаблоны
          </div>
          <h1 className="font-montserrat font-black text-4xl sm:text-5xl text-white mb-4">Документы</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Готовые шаблоны жалоб и заявлений для самостоятельной подачи
          </p>
        </div>
      </div>

      {/* Info banner */}
      <div className="bg-[#E8F0FE] border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={18} className="text-[#0047AB] flex-shrink-0 mt-0.5" />
            <p className="text-[#0047AB] text-sm">
              Все шаблоны доступны для бесплатного скачивания. Заполните документ самостоятельно или{' '}
              <button className="underline font-semibold hover:text-[#003380]">
                закажите профессиональную подготовку жалобы
              </button>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-[#0047AB] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Documents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover flex flex-col"
            >
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${categoryColors[doc.category]}`}>
                    {categoryLabels[doc.category]}
                  </span>
                  <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2 py-1 rounded">{doc.format}</span>
                </div>
                <div className="w-10 h-10 bg-[#E8F0FE] rounded-xl flex items-center justify-center mb-4">
                  <Icon name="FileText" size={22} className="text-[#0047AB]" />
                </div>
                <h3 className="font-montserrat font-semibold text-[#1A1F36] text-sm leading-snug mb-3">{doc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{doc.desc}</p>
              </div>
              <div className="px-6 pb-4 border-t border-gray-50 pt-4">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Icon name="FileText" size={12} />
                      {doc.pages} стр.
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Download" size={12} />
                      {doc.downloads.toLocaleString()}
                    </span>
                  </div>
                  <span>Обновлён: {doc.updated}</span>
                </div>
                <button
                  onClick={() => handleDownload(doc.id)}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    downloading === doc.id
                      ? 'bg-green-500 text-white'
                      : 'btn-moscow'
                  }`}
                >
                  {downloading === doc.id ? (
                    <>
                      <Icon name="Check" size={16} />
                      Скачано!
                    </>
                  ) : (
                    <>
                      <Icon name="Download" size={16} />
                      Скачать бесплатно
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
