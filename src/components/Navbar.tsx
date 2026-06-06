import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'documents', label: 'Документы' },
  { id: 'faq', label: 'Вопросы и ответы' },
  { id: 'contacts', label: 'Контакты' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg bg-[#486DAA]' : 'bg-[#486DAA]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="text-[#486DAA] font-montserrat font-black text-sm">М</span>
            </div>
            <div className="text-left">
              <div className="text-white font-montserrat font-bold text-sm leading-tight">Парковочный юрист</div>
              <div className="text-blue-200 text-xs leading-tight">Отмена штрафов в Москве</div>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 nav-link ${
                  currentPage === item.id
                    ? 'bg-white/20 text-white'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('complaint')}
              className="hidden md:flex items-center gap-2 bg-white text-[#486DAA] px-4 py-2 rounded-lg text-sm font-semibold font-montserrat hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Icon name="FileText" size={16} />
              Составить жалобу
            </button>
            <button
              onClick={() => onNavigate('cabinet')}
              className="hidden md:flex items-center gap-2 border border-white/40 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-200"
            >
              <Icon name="User" size={16} />
              Войти
            </button>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#335a93] border-t border-white/10 animate-fade-in">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-white/20 text-white'
                    : 'text-blue-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-2 pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => { onNavigate('complaint'); setMenuOpen(false); }}
                className="w-full bg-white text-[#486DAA] px-4 py-3 rounded-lg text-sm font-semibold font-montserrat"
              >
                Составить жалобу
              </button>
              <button
                onClick={() => { onNavigate('cabinet'); setMenuOpen(false); }}
                className="w-full border border-white/40 text-white px-4 py-3 rounded-lg text-sm font-medium"
              >
                Личный кабинет
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}