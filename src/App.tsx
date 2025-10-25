import { useState } from 'react';
import { ButtonPage } from './pages/components/buttonPage';
import { LinkPage } from './pages/components/linkPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('page1');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === 'page1' && <ButtonPage onNavigate={handleNavigate} />}
      {currentPage === 'page2' && <LinkPage onNavigate={handleNavigate} />}
    </>
  );
}