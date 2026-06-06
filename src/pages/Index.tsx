import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from './HomePage';
import PortfolioPage from './PortfolioPage';
import DocumentsPage from './DocumentsPage';
import FaqPage from './FaqPage';
import ContactsPage from './ContactsPage';
import ComplaintPage from './ComplaintPage';
import CabinetPage from './CabinetPage';

type Page = 'home' | 'portfolio' | 'documents' | 'faq' | 'contacts' | 'complaint' | 'cabinet';

const noFooterPages: Page[] = ['complaint', 'cabinet'];

export default function Index() {
  const [page, setPage] = useState<Page>('home');

  const navigate = (p: string) => {
    setPage(p as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-golos">
      <Navbar currentPage={page} onNavigate={navigate} />
      <main className="flex-1">
        {page === 'home' && <HomePage onNavigate={navigate} />}
        {page === 'portfolio' && <PortfolioPage />}
        {page === 'documents' && <DocumentsPage />}
        {page === 'faq' && <FaqPage onNavigate={navigate} />}
        {page === 'contacts' && <ContactsPage onNavigate={navigate} />}
        {page === 'complaint' && <ComplaintPage onNavigate={navigate} />}
        {page === 'cabinet' && <CabinetPage onNavigate={navigate} />}
      </main>
      {!noFooterPages.includes(page) && <Footer onNavigate={navigate} />}
    </div>
  );
}
