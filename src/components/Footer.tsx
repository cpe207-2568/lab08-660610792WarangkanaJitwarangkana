import React from 'react';
import  type{ FooterProps } from '../libs/types';

// Footer Component
const Footer: React.FC<FooterProps> = ({ year, fullName, studentId }) => {
  return (
    <footer className="text-secondary text-center p-2 bg-light mt-auto">
      Copyright © {year} {fullName} {studentId}
    </footer>
  );
};

export default Footer;