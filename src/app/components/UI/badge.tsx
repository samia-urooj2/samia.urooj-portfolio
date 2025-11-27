// components/UI/Badge.tsx
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'warning';
}

const Badge: React.FC<BadgeProps> = ({ children, color = 'primary' }) => {
  const colors = {
    primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200',
    secondary: 'bg-dark-100 text-dark-800 dark:bg-dark-700 dark:text-dark-200',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[color]}`}>
      {children}
    </span>
  );
};

export default Badge;