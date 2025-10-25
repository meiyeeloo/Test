import React from 'react';
import '../styles/components/group.css';

interface GroupProps {
  variant: 'ver-24' | 'hor-24';
  children: React.ReactNode;
}

export function Group({ variant, children }: GroupProps) {
  const className = `lib-group-${variant}`;

  return (
    <div className={className}>
      {children}
    </div>
  );
}
