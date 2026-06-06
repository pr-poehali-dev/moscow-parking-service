import { useState } from 'react';
import Icon from '@/components/ui/icon';

const faqs = [
  {
    q: 'Как понять, можно ли отменить мой штраф?',
    a: 'В большинстве случаев есть основания для обжалования: ошибки в постановлении, нарушения при фотофиксации, неправильная квалификация нарушения, отсутствие или ненадлежащее расположение дорожных знаков. Оставьте заявку — я бесплатно оценю ваши шансы.',
  },
  {
    q: 'Сколько стоят ваши услуги?',
    a: 'Составление жалобы — от 1 500 ₽. Полное сопровождение дела (включая суд) — от 3 000 ₽. Оплата производится после подготовки документов. Стоимость всегда ниже, чем размер штрафа, который мы отменяем.',
  },
  {
    q: 'Каков срок обжалования штрафа?',
    a: 'По закону у вас есть 10 дней с момента получения постановления для подачи жалобы. Если срок пропущен по уважительной причине (болезнь, командировка и т.д.) — его можно восстановить через суд. Не затягивайте — обратитесь сразу.',
  },
  {
    q: 'Как проходит процесс работы?',
    a: 'Вы заполняете форму заявки и загружаете постановление. После оплаты я изучаю материалы и готовлю жалобу в течение 1–3 рабочих дней. Готовая жалоба с инструкцией по подаче появляется в вашем личном кабинете. При необходимости сопровождаю дело в суде.',
  },
  {
    q: 'Нужно ли мне приходить на встречу?',
    a: 'Нет. Всё взаимодействие происходит онлайн — через форму заявки и личный кабинет. Вы загружаете документы, я готовлю жалобу и присылаю готовый файл с инструкцией. Личная встреча возможна, но не обязательна.',
  },
  {
    q: 'Что делать, если постановление уже оплачено?',
    a: 'Оплата штрафа не лишает вас права на обжалование. Даже если вы уже заплатили, штраф можно признать незаконным и вернуть деньги. Срок исковой давности — 1 год с момента вступления постановления в силу.',
  },
  {
    q: 'Какие документы нужны для подачи жалобы?',
    a: 'Основные документы: копия постановления об административном правонарушении, копия СТС (свидетельства о регистрации ТС), фотографии места стоянки (при наличии). Дополнительно могут потребоваться документы, подтверждающие особые обстоятельства.',
  },
  {
    q: 'Работаете ли вы с юридическими лицами?',
    a: 'Да, работаем с организациями и ИП, чьи корпоративные автомобили получили штрафы. Для юридических лиц доступно абонентское обслуживание при большом количестве постановлений.',
  },
  {
    q: 'Что такое ГКУ «АМПП» и МАДИ?',
    a: 'ГКУ АМПП — Государственное казённое учреждение «Администратор Московского Парковочного Пространства». Выписывает штрафы за нарушение правил платной парковки. МАДИ — Московская административная дорожная инспекция, выносит постановления за различные нарушения ПДД, в том числе парковку на газонах.',
  },
  {
    q: 'Гарантируете ли вы результат?',
    a: 'Я не даю стопроцентных гарантий, так как закон не позволяет их давать. Однако статистика говорит сама за себя: 94% дел завершаются в пользу клиента. Перед началом работы честно оцениваю ваши шансы.',
  },
];

export default function FaqPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="moscow-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-4">
            <Icon name="HelpCircle" size={16} />
            Часто задаваемые вопросы
          </div>
          <h1 className="font-montserrat font-black text-4xl sm:text-5xl text-white mb-4">FAQ</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Ответы на самые популярные вопросы об отмене штрафов за парковку
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-montserrat font-semibold text-[#1A1F36] text-sm leading-snug">{faq.q}</span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                    open === i ? 'bg-[#486DAA] rotate-180' : 'bg-gray-100'
                  }`}
                >
                  <Icon
                    name="ChevronDown"
                    size={16}
                    className={open === i ? 'text-white' : 'text-gray-500'}
                  />
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5 animate-fade-in">
                  <div className="w-full h-px bg-gray-100 mb-4"></div>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-[#486DAA] to-[#5a7fba] rounded-3xl p-8 text-center">
          <Icon name="MessageCircle" size={40} className="text-white/60 mx-auto mb-4" />
          <h3 className="font-montserrat font-bold text-xl text-white mb-3">
            Не нашли ответ?
          </h3>
          <p className="text-blue-100 text-sm mb-6">
            Задайте вопрос напрямую или сразу оставьте заявку — оценю ваш случай бесплатно
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onNavigate('complaint')}
              className="flex items-center justify-center gap-2 bg-white text-[#486DAA] px-6 py-3 rounded-xl text-sm font-bold font-montserrat hover:bg-yellow-50 transition-all"
            >
              <Icon name="FileText" size={16} />
              Составить жалобу
            </button>
            <button
              onClick={() => onNavigate('contacts')}
              className="flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-white/10 transition-all"
            >
              <Icon name="Phone" size={16} />
              Связаться со мной
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}