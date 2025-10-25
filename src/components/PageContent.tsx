import React from 'react';
import '../styles/components/page.css';

interface PageContentProps {
  children: React.ReactNode;
}

export function PageContent({ children }: PageContentProps) {
  return (
    <div className="lib-page">
      {children}
    </div>
  );
}
