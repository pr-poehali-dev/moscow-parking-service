import { useState } from 'react';
import Icon from '@/components/ui/icon';

type Step = 1 | 2 | 3;

export default function ComplaintPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState({
    lastName: '', firstName: '', middleName: '',
    phone: '', email: '', password: '',
    decreeNumber: '', decreeDate: '', situation: '',
    decreeFile: null as File | null,
    stsFile: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);

  const updateForm = (field: string, value: string | File | null) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleFile = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm(field, e.target.files?.[0] ?? null);
  };

  const handlePay = () => setSubmitted(true);

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-lg p-10 max-w-md w-full text-center animate-fade-in">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircle" size={40} className="text-green-500" />
          </div>
          <h2 className="font-montserrat font-bold text-2xl text-[#1A1F36] mb-3">Заявка принята!</h2>
          <p className="text-gray-500 mb-2">
            Карточка жалобы создана. Доступ в личный кабинет отправлен на почту:
          </p>
          <p className="font-semibold text-[#0047AB] mb-6">{form.email}</p>
          <p className="text-gray-400 text-sm mb-8">
            Юрист приступит к работе в течение 1 рабочего дня и свяжется с вами через личный кабинет.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => onNavigate('cabinet')}
              className="btn-moscow py-3 rounded-xl text-sm font-bold font-montserrat flex items-center justify-center gap-2"
            >
              <Icon name="User" size={16} />
              Перейти в личный кабинет
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="text-gray-400 text-sm hover:text-gray-600 transition-colors"
            >
              На главную
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="moscow-gradient py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-montserrat font-black text-3xl sm:text-4xl text-white mb-4">
            Составить жалобу онлайн
          </h1>
          <p className="text-blue-100">Заполните форму — я подготовлю жалобу за 1–3 рабочих дня</p>
        </div>
      </div>

      {/* Steps */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-2">
            {([1, 2, 3] as Step[]).map((s) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-montserrat transition-all ${
                    step >= s ? 'bg-[#0047AB] text-white' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {step > s ? <Icon name="Check" size={14} /> : s}
                </div>
                <span className={`text-xs font-medium hidden sm:block ${step >= s ? 'text-[#0047AB]' : 'text-gray-400'}`}>
                  {s === 1 ? 'Данные жалобы' : s === 2 ? 'Регистрация' : 'Оплата'}
                </span>
                {s < 3 && <div className={`flex-1 h-0.5 ${step > s ? 'bg-[#0047AB]' : 'bg-gray-200'}`}></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Step 1 */}
        {step === 1 && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 animate-fade-in">
            <h2 className="font-montserrat font-bold text-xl text-[#1A1F36] mb-6">Данные о нарушении</h2>

            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { field: 'lastName', label: 'Фамилия *', placeholder: 'Иванов' },
                  { field: 'firstName', label: 'Имя *', placeholder: 'Иван' },
                  { field: 'middleName', label: 'Отчество', placeholder: 'Иванович' },
                ].map((f) => (
                  <div key={f.field}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{f.label}</label>
                    <input
                      type="text"
                      value={form[f.field as keyof typeof form] as string}
                      onChange={(e) => updateForm(f.field, e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047AB] focus:border-transparent transition-all"
                      placeholder={f.placeholder}
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Номер постановления *</label>
                  <input
                    type="text"
                    value={form.decreeNumber}
                    onChange={(e) => updateForm('decreeNumber', e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047AB] focus:border-transparent transition-all"
                    placeholder="77 АА 000000000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Дата постановления *</label>
                  <input
                    type="date"
                    value={form.decreeDate}
                    onChange={(e) => updateForm('decreeDate', e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047AB] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Опишите ситуацию *</label>
                <textarea
                  rows={4}
                  value={form.situation}
                  onChange={(e) => updateForm('situation', e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047AB] focus:border-transparent transition-all resize-none"
                  placeholder="Где, когда и при каких обстоятельствах был выписан штраф? Какие знаки присутствовали? Есть ли особые обстоятельства?"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Копия постановления
                    <span className="text-gray-400 font-normal ml-1">(при наличии)</span>
                  </label>
                  <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-[#0047AB] hover:bg-[#E8F0FE]/30 transition-all">
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={handleFile('decreeFile')} />
                    {form.decreeFile ? (
                      <div className="text-center p-3">
                        <Icon name="FileCheck" size={24} className="text-green-500 mx-auto mb-1" />
                        <span className="text-xs text-green-600 font-medium">{form.decreeFile.name}</span>
                      </div>
                    ) : (
                      <div className="text-center p-3">
                        <Icon name="Upload" size={24} className="text-gray-300 mx-auto mb-1" />
                        <span className="text-xs text-gray-400">PDF, JPG, PNG</span>
                      </div>
                    )}
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Копия СТС
                    <span className="text-gray-400 font-normal ml-1">(при наличии)</span>
                  </label>
                  <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-[#0047AB] hover:bg-[#E8F0FE]/30 transition-all">
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={handleFile('stsFile')} />
                    {form.stsFile ? (
                      <div className="text-center p-3">
                        <Icon name="FileCheck" size={24} className="text-green-500 mx-auto mb-1" />
                        <span className="text-xs text-green-600 font-medium">{form.stsFile.name}</span>
                      </div>
                    ) : (
                      <div className="text-center p-3">
                        <Icon name="Upload" size={24} className="text-gray-300 mx-auto mb-1" />
                        <span className="text-xs text-gray-400">PDF, JPG, PNG</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setStep(2)}
                disabled={!form.lastName || !form.firstName || !form.decreeNumber || !form.situation}
                className="btn-moscow px-8 py-3.5 rounded-xl text-sm font-bold font-montserrat flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Далее
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 animate-fade-in">
            <h2 className="font-montserrat font-bold text-xl text-[#1A1F36] mb-2">Регистрация</h2>
            <p className="text-gray-500 text-sm mb-6">Создайте аккаунт для доступа к карточке жалобы. Пароль будет отправлен на email автоматически.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Телефон *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateForm('phone', e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047AB] focus:border-transparent transition-all"
                  placeholder="+7 (999) 000-00-00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047AB] focus:border-transparent transition-all"
                  placeholder="mail@example.com"
                />
              </div>
              <div className="bg-[#E8F0FE] rounded-xl p-4 flex items-start gap-3">
                <Icon name="Info" size={16} className="text-[#0047AB] flex-shrink-0 mt-0.5" />
                <p className="text-[#0047AB] text-sm">
                  Пароль от личного кабинета будет автоматически отправлен на указанный email после оплаты.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-600 text-sm transition-colors"
              >
                <Icon name="ArrowLeft" size={16} />
                Назад
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!form.phone || !form.email}
                className="btn-moscow px-8 py-3.5 rounded-xl text-sm font-bold font-montserrat flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                К оплате
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="animate-fade-in space-y-5">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h2 className="font-montserrat font-bold text-xl text-[#1A1F36] mb-6">Итог и оплата</h2>

              <div className="bg-gray-50 rounded-2xl p-5 mb-6">
                <h3 className="font-montserrat font-semibold text-sm text-gray-500 uppercase tracking-wider mb-4">Ваша заявка</h3>
                <div className="space-y-2">
                  {[
                    { label: 'ФИО', value: `${form.lastName} ${form.firstName} ${form.middleName}` },
                    { label: 'Постановление', value: form.decreeNumber || '—' },
                    { label: 'Email', value: form.email },
                    { label: 'Телефон', value: form.phone },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{row.label}</span>
                      <span className="font-medium text-[#1A1F36]">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Составление жалобы</span>
                  <span className="font-montserrat font-bold text-[#1A1F36]">3 000 ₽</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <span>Инструкция по подаче</span>
                  <span className="text-green-500 font-medium">бесплатно</span>
                </div>
                <div className="flex items-center justify-between font-montserrat font-bold text-lg mb-6">
                  <span className="text-[#1A1F36]">Итого</span>
                  <span className="text-[#0047AB]">3 000 ₽</span>
                </div>

                <div className="bg-[#E8F0FE] rounded-xl p-4 flex items-center gap-3 mb-6">
                  <Icon name="Shield" size={18} className="text-[#0047AB] flex-shrink-0" />
                  <p className="text-[#0047AB] text-sm">Безопасная оплата через ЮMoney. Данные карты не хранятся.</p>
                </div>

                <button
                  onClick={handlePay}
                  className="w-full btn-moscow py-4 rounded-xl text-base font-bold font-montserrat flex items-center justify-center gap-3"
                >
                  <Icon name="CreditCard" size={20} />
                  Оплатить через ЮMoney
                </button>
              </div>
            </div>

            <div className="flex justify-start">
              <button
                onClick={() => setStep(2)}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-600 text-sm transition-colors"
              >
                <Icon name="ArrowLeft" size={16} />
                Назад
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
