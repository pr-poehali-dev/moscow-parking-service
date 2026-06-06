import { useState } from 'react';
import Icon from '@/components/ui/icon';

type Role = 'user' | 'admin' | 'owner';

const mockComplaints = [
  {
    id: 'ZH-2024-001',
    title: 'Штраф МАДИ — ул. Тверская',
    status: 'in_progress',
    date: '15.03.2024',
    amount: '5 000 ₽',
    decree: '77АА0001234',
    messages: 2,
  },
  {
    id: 'ZH-2024-002',
    title: 'Парковка на газоне — ЦАО',
    status: 'completed',
    date: '28.02.2024',
    amount: '5 000 ₽',
    decree: '77АА0005678',
    messages: 5,
  },
];

const adminComplaints = [
  ...mockComplaints,
  {
    id: 'ZH-2024-003',
    title: 'Штраф ГИБДД — пр. Мира',
    status: 'new',
    date: '12.03.2024',
    amount: '2 500 ₽',
    decree: '77АА0009999',
    messages: 0,
  },
  {
    id: 'ZH-2024-004',
    title: 'Двойной штраф — ЗАО',
    status: 'waiting',
    date: '10.03.2024',
    amount: '10 000 ₽',
    decree: '77АА0003333',
    messages: 1,
  },
];

const statusLabels: Record<string, { label: string; color: string }> = {
  new: { label: 'Новая', color: 'bg-blue-100 text-blue-700' },
  in_progress: { label: 'В работе', color: 'bg-yellow-100 text-yellow-700' },
  waiting: { label: 'Ожидает клиента', color: 'bg-orange-100 text-orange-700' },
  completed: { label: 'Завершена', color: 'bg-green-100 text-green-700' },
};

export default function CabinetPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [role, setRole] = useState<Role | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedComplaint, setSelectedComplaint] = useState<typeof adminComplaints[0] | null>(null);
  const [chatMessage, setChatMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('owner')) setRole('owner');
    else if (email.includes('admin')) setRole('admin');
    else setRole('user');
  };

  if (!role) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#0047AB] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="User" size={28} className="text-white" />
            </div>
            <h1 className="font-montserrat font-bold text-2xl text-[#1A1F36]">Личный кабинет</h1>
            <p className="text-gray-500 text-sm mt-2">Войдите для доступа к вашим жалобам</p>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047AB] transition-all"
                  placeholder="Введите email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Пароль</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047AB] transition-all"
                  placeholder="Введите пароль"
                />
              </div>
              <button type="submit" className="w-full btn-moscow py-3.5 rounded-xl text-sm font-bold font-montserrat">
                Войти
              </button>
            </form>
            <div className="mt-6 pt-5 border-t border-gray-100 text-center">
              <p className="text-gray-500 text-sm mb-3">Ещё нет аккаунта?</p>
              <button
                onClick={() => onNavigate('complaint')}
                className="text-[#0047AB] font-semibold text-sm hover:underline"
              >
                Составить жалобу — аккаунт создастся автоматически
              </button>
            </div>
            <div className="mt-4 bg-gray-50 rounded-xl p-3">
              <p className="text-gray-400 text-xs text-center">
                Демо: используйте "admin@" или "owner@" в email для демонстрации ролей
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const complaints = role === 'user' ? mockComplaints : adminComplaints;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#0047AB] rounded-lg flex items-center justify-center">
                <Icon name="User" size={16} className="text-white" />
              </div>
              <div>
                <span className="font-montserrat font-semibold text-[#1A1F36] text-sm">
                  {role === 'user' ? 'Личный кабинет' : role === 'admin' ? 'Кабинет администратора' : 'Кабинет владельца'}
                </span>
                <div className="text-xs text-gray-400">{email}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                role === 'owner' ? 'bg-purple-100 text-purple-700' :
                role === 'admin' ? 'bg-blue-100 text-blue-700' :
                'bg-gray-100 text-gray-600'
              }`}>
                {role === 'owner' ? 'Владелец' : role === 'admin' ? 'Администратор' : 'Пользователь'}
              </span>
              <button
                onClick={() => { setRole(null); setSelectedComplaint(null); }}
                className="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1"
              >
                <Icon name="LogOut" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Owner stats */}
        {role === 'owner' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Всего жалоб', value: '47', icon: 'FileText', color: 'bg-blue-50 text-blue-600' },
              { label: 'Пользователей', value: '38', icon: 'Users', color: 'bg-purple-50 text-purple-600' },
              { label: 'Завершено', value: '31', icon: 'CheckCircle', color: 'bg-green-50 text-green-600' },
              { label: 'В работе', value: '16', icon: 'Clock', color: 'bg-yellow-50 text-yellow-600' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${s.color}`}>
                  <Icon name={s.icon} size={20} />
                </div>
                <div className="font-montserrat font-black text-2xl text-[#1A1F36]">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Complaints list */}
          <div className={`${selectedComplaint && role !== 'user' ? 'lg:col-span-1' : 'lg:col-span-3'}`}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-montserrat font-bold text-base text-[#1A1F36]">
                  {role === 'user' ? 'Мои жалобы' : 'Реестр жалоб'}
                </h2>
                {role === 'user' && (
                  <button
                    onClick={() => onNavigate('complaint')}
                    className="btn-moscow px-4 py-2 rounded-xl text-xs font-semibold font-montserrat flex items-center gap-1.5"
                  >
                    <Icon name="Plus" size={14} />
                    Новая жалоба
                  </button>
                )}
              </div>
              <div className="divide-y divide-gray-50">
                {complaints.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => setSelectedComplaint(c)}
                    className={`p-5 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedComplaint?.id === c.id ? 'bg-[#E8F0FE]' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-xs text-gray-400 font-mono">{c.id}</span>
                        <h3 className="font-medium text-[#1A1F36] text-sm mt-0.5">{c.title}</h3>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0 ml-2 ${statusLabels[c.status].color}`}>
                        {statusLabels[c.status].label}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span>{c.date}</span>
                      <span className="font-montserrat font-semibold text-[#0047AB]">{c.amount}</span>
                      {c.messages > 0 && (
                        <span className="flex items-center gap-1">
                          <Icon name="MessageCircle" size={12} />
                          {c.messages}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Complaint detail */}
          {selectedComplaint && (
            <div className="lg:col-span-2 animate-fade-in">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400 font-mono mb-0.5">{selectedComplaint.id}</div>
                    <h3 className="font-montserrat font-bold text-base text-[#1A1F36]">{selectedComplaint.title}</h3>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusLabels[selectedComplaint.status].color}`}>
                    {statusLabels[selectedComplaint.status].label}
                  </span>
                </div>

                <div className="p-5">
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { label: 'Постановление', value: selectedComplaint.decree },
                      { label: 'Сумма штрафа', value: selectedComplaint.amount },
                      { label: 'Дата подачи', value: selectedComplaint.date },
                    ].map((item) => (
                      <div key={item.label} className="bg-gray-50 rounded-xl p-3">
                        <div className="text-xs text-gray-400 mb-0.5">{item.label}</div>
                        <div className="font-medium text-[#1A1F36] text-sm">{item.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Complaint document (admin attaches) */}
                  {role !== 'user' && (
                    <div className="mb-5 p-4 bg-[#E8F0FE] rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon name="FileText" size={20} className="text-[#0047AB]" />
                        <div>
                          <div className="text-sm font-semibold text-[#0047AB]">Прикрепить готовую жалобу</div>
                          <div className="text-xs text-blue-400">Документ увидит клиент</div>
                        </div>
                      </div>
                      <label className="cursor-pointer bg-[#0047AB] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#003380] transition-colors">
                        <input type="file" className="hidden" />
                        Загрузить
                      </label>
                    </div>
                  )}

                  {role === 'user' && selectedComplaint.status === 'completed' && (
                    <div className="mb-5 p-4 bg-green-50 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon name="FileCheck" size={20} className="text-green-600" />
                        <div>
                          <div className="text-sm font-semibold text-green-700">Жалоба готова</div>
                          <div className="text-xs text-green-500">Скачайте и подайте по инструкции</div>
                        </div>
                      </div>
                      <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-green-600 transition-colors flex items-center gap-1.5">
                        <Icon name="Download" size={14} />
                        Скачать
                      </button>
                    </div>
                  )}

                  {/* Chat */}
                  <div className="border border-gray-100 rounded-xl overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-100">
                      <h4 className="font-montserrat font-semibold text-sm text-[#1A1F36]">Переписка</h4>
                    </div>
                    <div className="p-4 space-y-3 min-h-[120px] max-h-[200px] overflow-y-auto">
                      <div className="flex gap-3">
                        <div className="w-7 h-7 bg-[#0047AB] rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="User" size={14} className="text-white" />
                        </div>
                        <div className="bg-[#E8F0FE] rounded-xl rounded-tl-none px-4 py-2.5 max-w-xs">
                          <p className="text-sm text-[#1A1F36]">Добрый день! Прикладываю фото места стоянки.</p>
                          <p className="text-xs text-gray-400 mt-1">14:22</p>
                        </div>
                      </div>
                      <div className="flex gap-3 flex-row-reverse">
                        <div className="w-7 h-7 bg-[#1A1F36] rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Scale" size={14} className="text-white" />
                        </div>
                        <div className="bg-white border border-gray-100 rounded-xl rounded-tr-none px-4 py-2.5 max-w-xs shadow-sm">
                          <p className="text-sm text-[#1A1F36]">Получил документы. Изучу и отвечу до конца дня.</p>
                          <p className="text-xs text-gray-400 mt-1">15:10</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-t border-gray-100 flex gap-2">
                      <input
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047AB] transition-all"
                        placeholder="Написать сообщение..."
                      />
                      <button className="w-9 h-9 bg-[#0047AB] rounded-xl flex items-center justify-center hover:bg-[#003380] transition-colors flex-shrink-0">
                        <Icon name="Send" size={16} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Owner: users registry */}
        {role === 'owner' && (
          <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-5 border-b border-gray-100">
              <h2 className="font-montserrat font-bold text-base text-[#1A1F36]">Реестр пользователей</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    {['ID', 'Имя', 'Email', 'Жалоб', 'Дата регистрации', 'Роль'].map((h) => (
                      <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { id: 'U-001', name: 'Иванов И.И.', email: 'ivanov@mail.ru', count: 2, date: '01.01.2024', role: 'Пользователь' },
                    { id: 'U-002', name: 'Петрова А.С.', email: 'petrova@gmail.com', count: 1, date: '14.02.2024', role: 'Пользователь' },
                    { id: 'U-003', name: 'Сидоров В.П.', email: 'sidorov@yandex.ru', count: 3, date: '05.03.2024', role: 'Пользователь' },
                  ].map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4 text-xs text-gray-400 font-mono">{user.id}</td>
                      <td className="px-5 py-4 text-sm font-medium text-[#1A1F36]">{user.name}</td>
                      <td className="px-5 py-4 text-sm text-gray-500">{user.email}</td>
                      <td className="px-5 py-4 text-sm text-[#0047AB] font-semibold">{user.count}</td>
                      <td className="px-5 py-4 text-sm text-gray-500">{user.date}</td>
                      <td className="px-5 py-4">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{user.role}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
