import Icon from '@/components/ui/icon';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const services = [
  {
    icon: 'Car',
    title: 'Штрафы за платную парковку',
    desc: 'Отмена постановлений МАДИ и ГИБДД за нарушения на платных парковочных зонах Москвы',
    price: 'от 3 000 ₽',
  },
  {
    icon: 'Leaf',
    title: 'Парковка на зелёных насаждениях',
    desc: 'Оспаривание штрафов за парковку на газонах, клумбах и территориях зелёных насаждений',
    price: 'от 3 000 ₽',
  },
  {
    icon: 'FileEdit',
    title: 'Составление жалобы',
    desc: 'Подготовка мотивированной жалобы с правовым обоснованием для подачи в суд или МАДИ',
    price: 'от 1 500 ₽',
  },
  {
    icon: 'Scale',
    title: 'Представление в суде',
    desc: 'Полное сопровождение дела в судебных инстанциях от подачи иска до получения решения',
    price: 'по договору',
  },
];

const stats = [
  { value: '500+', label: 'Дел выиграно' },
  { value: '94%', label: 'Успешных решений' },
  { value: '7 лет', label: 'Опыт работы' },
  { value: '0 ₽', label: 'Предоплата' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="moscow-gradient hero-pattern min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Специализация: штрафы МАДИ и ГИБДД
              </div>
              <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-slide-up">
                Отменим штраф<br />
                <span className="text-yellow-300">за парковку</span><br />
                в Москве
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-8 animate-fade-in animate-stagger-2">
                Профессиональная юридическая помощь. Работаем с постановлениями 
                за платную парковку и парковку на зелёных насаждениях. 
                Оплата только после результата.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-stagger-3">
                <button
                  onClick={() => onNavigate('complaint')}
                  className="flex items-center justify-center gap-2 bg-white text-[#486DAA] px-8 py-4 rounded-xl text-base font-bold font-montserrat hover:bg-yellow-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <Icon name="FileText" size={20} />
                  Составить жалобу
                </button>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="flex items-center justify-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/10 hover:border-white transition-all duration-200"
                >
                  <Icon name="Trophy" size={20} />
                  Портфолио дел
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
                <div className="relative grid grid-cols-2 gap-4">
                  {stats.map((s, i) => (
                    <div
                      key={i}
                      className="glass-card rounded-2xl p-6 text-center animate-fade-in"
                      style={{ animationDelay: `${0.1 * i}s` }}
                    >
                      <div className="font-montserrat font-black text-3xl text-white mb-1">{s.value}</div>
                      <div className="text-blue-200 text-sm">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 lg:hidden">
            {stats.map((s, i) => (
              <div key={i} className="glass-card rounded-xl p-4 text-center">
                <div className="font-montserrat font-black text-2xl text-white mb-1">{s.value}</div>
                <div className="text-blue-200 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-divider mb-6"></div>
              <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-[#1A1F36] mb-6">
                Обо мне
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Меня зовут <strong className="text-[#486DAA]">Александр Петров</strong> — юрист с 7-летней специализацией 
                в области административного права и дорожного законодательства Москвы.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Специализируюсь на отмене штрафов, выписанных государственным казённым 
                учреждением «Администратор Московского Парковочного Пространства» (ГКУ АМПП) 
                и ГИБДД за нарушения правил парковки.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Знаю все процессуальные тонкости — от нарушений при фотофиксации до 
                ошибок в постановлениях. Именно поэтому 94% дел завершаются успехом.
              </p>
              <div className="flex flex-wrap gap-3">
                {['КоАП РФ', 'Административное право', 'Суды Москвы', 'МАДИ', 'АМПП'].map((tag) => (
                  <span key={tag} className="bg-[#EEF2F8] text-[#486DAA] px-4 py-2 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#EEF2F8] to-[#F0F4FF] rounded-3xl p-8">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { icon: 'GraduationCap', title: 'Образование', desc: 'МГЮА им. Кутафина, специальность «Юриспруденция»' },
                    { icon: 'Briefcase', title: 'Опыт', desc: '7 лет практики в судах Москвы и Московской области' },
                    { icon: 'Award', title: 'Достижения', desc: 'Более 500 успешно отменённых постановлений' },
                    { icon: 'Shield', title: 'Гарантия', desc: 'Оплата только после положительного решения' },
                  ].map((item) => (
                    <div key={item.icon} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                      <div className="w-10 h-10 bg-[#486DAA] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon} size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-montserrat font-semibold text-[#1A1F36] text-sm">{item.title}</div>
                        <div className="text-gray-500 text-sm mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6"></div>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-[#1A1F36] mb-4">
              Услуги
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Полный спектр юридической помощи при оспаривании штрафов за нарушения правил парковки в Москве
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover group"
              >
                <div className="w-12 h-12 bg-[#EEF2F8] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#486DAA] transition-colors duration-300">
                  <Icon name={s.icon} size={24} className="text-[#486DAA] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-montserrat font-semibold text-[#1A1F36] text-base mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="font-montserrat font-bold text-[#486DAA]">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6"></div>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-[#1A1F36] mb-4">
              Как это работает
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
            {[
              { n: '01', icon: 'ClipboardList', title: 'Заполните форму', desc: 'Укажите данные постановления и опишите ситуацию' },
              { n: '02', icon: 'CreditCard', title: 'Оплатите услугу', desc: 'Безопасная оплата через ЮMoney' },
              { n: '03', icon: 'MessageSquare', title: 'Общение', desc: 'Задавайте вопросы напрямую через личный кабинет' },
              { n: '04', icon: 'FileCheck', title: 'Получите жалобу', desc: 'Готовый документ с инструкцией по подаче' },
              { n: '05', icon: 'Trophy', title: 'Результат', desc: 'Штраф отменяется, деньги возвращаются' },
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {i < 4 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#486DAA] to-[#5a7fba] opacity-20 z-0"></div>
                )}
                <div className="relative z-10 w-16 h-16 bg-[#486DAA] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon name={step.icon} size={28} className="text-white" />
                </div>
                <div className="font-montserrat font-black text-xs text-[#486DAA] opacity-40 mb-1">{step.n}</div>
                <h4 className="font-montserrat font-semibold text-[#1A1F36] text-sm mb-2">{step.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 moscow-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-white mb-4">
            Получили штраф? Не спешите платить!
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            В 94% случаев штраф можно отменить. Бесплатная оценка вашего дела прямо сейчас.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('complaint')}
              className="flex items-center justify-center gap-2 bg-white text-[#486DAA] px-8 py-4 rounded-xl text-base font-bold font-montserrat hover:bg-yellow-50 transition-all shadow-xl hover:-translate-y-1"
            >
              <Icon name="FileText" size={20} />
              Составить жалобу онлайн
            </button>
            <button
              onClick={() => onNavigate('documents')}
              className="flex items-center justify-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/10 transition-all"
            >
              <Icon name="Download" size={20} />
              Скачать бесплатный шаблон
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}