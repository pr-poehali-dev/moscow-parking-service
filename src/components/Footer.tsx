interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#1A1F36] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#0047AB] rounded-lg flex items-center justify-center">
                <span className="text-white font-montserrat font-black text-sm">М</span>
              </div>
              <div>
                <div className="font-montserrat font-bold text-lg">Парковочный юрист</div>
                <div className="text-gray-400 text-sm">Отмена штрафов в Москве</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Профессиональная юридическая помощь в отмене штрафов за платную парковку 
              и парковку на зелёных насаждениях в городе Москве.
            </p>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Навигация</h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'documents', label: 'Документы' },
                { id: 'faq', label: 'Вопросы и ответы' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Отмена штрафов за парковку</li>
              <li>Парковка на газоне</li>
              <li>Составление жалоб</li>
              <li>Представление в суде</li>
              <li>Юридические консультации</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2024 Парковочный юрист. Все права защищены.</p>
          <div className="flex items-center gap-6">
            <button className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Политика конфиденциальности</button>
            <button className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Пользовательское соглашение</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
