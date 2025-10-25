import React from 'react';
import '../styles/components/button.css';

interface ButtonProps {
  variant: 'solid' | 'outlined';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ variant, children, onClick, disabled = false }: ButtonProps) {
  const className = `lib-button lib-button-${variant}`;

  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
}