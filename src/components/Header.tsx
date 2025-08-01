import React from 'react';
import type { HeaderProps } from '../libs/types';

// Header Component
const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="text-white bg-primary p-2 w-100">
      <h4>Note App</h4>
    </header>
  );
};

export default Header;
