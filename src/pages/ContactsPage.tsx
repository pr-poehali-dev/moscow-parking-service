import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function ContactsPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="moscow-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-4">
            <Icon name="Phone" size={16} />
            Свяжитесь со мной
          </div>
          <h1 className="font-montserrat font-black text-4xl sm:text-5xl text-white mb-4">Контакты</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Задайте вопрос или запишитесь на консультацию
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="section-divider mb-6"></div>
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-[#1A1F36] mb-8">
              Готов помочь
            </h2>

            <div className="space-y-5 mb-10">
              {[
                { icon: 'Phone', label: 'Телефон', value: '+7 (495) 000-00-00', sub: 'Пн–Пт, 9:00–20:00' },
                { icon: 'Mail', label: 'Email', value: 'info@parking-lawyer.ru', sub: 'Ответ в течение 2 часов' },
                { icon: 'MessageSquare', label: 'Telegram', value: '@parking_lawyer', sub: 'Быстрые ответы' },
                { icon: 'MapPin', label: 'Адрес', value: 'г. Москва', sub: 'Встречи по предварительной записи' },
              ].map((item) => (
                <div key={item.icon} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="w-11 h-11 bg-[#EEF2F8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={20} className="text-[#486DAA]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">{item.label}</div>
                    <div className="font-montserrat font-semibold text-[#1A1F36]">{item.value}</div>
                    <div className="text-gray-400 text-sm">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#486DAA] to-[#5a7fba] rounded-2xl p-6 text-white">
              <h3 className="font-montserrat font-bold text-lg mb-2">Нужна срочная помощь?</h3>
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                Помните: срок обжалования — 10 дней с момента получения постановления. Не упустите время!
              </p>
              <button
                onClick={() => onNavigate('complaint')}
                className="flex items-center gap-2 bg-white text-[#486DAA] px-5 py-3 rounded-xl text-sm font-bold font-montserrat hover:bg-yellow-50 transition-all"
              >
                <Icon name="FileText" size={16} />
                Составить жалобу сейчас
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Icon name="CheckCircle" size={40} className="text-green-500" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-[#1A1F36] mb-3">Сообщение отправлено!</h3>
                <p className="text-gray-500 mb-8">Я свяжусь с вами в ближайшее время.</p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-moscow px-6 py-3 rounded-xl text-sm font-semibold font-montserrat"
                >
                  Отправить ещё раз
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-montserrat font-bold text-xl text-[#1A1F36] mb-6">Напишите мне</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#486DAA] focus:border-transparent transition-all"
                      placeholder="Иван Иванович"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Телефон *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#486DAA] focus:border-transparent transition-all"
                        placeholder="+7 (999) 000-00-00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#486DAA] focus:border-transparent transition-all"
                        placeholder="mail@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Сообщение</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#486DAA] focus:border-transparent transition-all resize-none"
                      placeholder="Опишите вашу ситуацию..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-moscow py-4 rounded-xl text-sm font-bold font-montserrat flex items-center justify-center gap-2"
                  >
                    <Icon name="Send" size={16} />
                    Отправить сообщение
                  </button>
                  <p className="text-gray-400 text-xs text-center">
                    Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}