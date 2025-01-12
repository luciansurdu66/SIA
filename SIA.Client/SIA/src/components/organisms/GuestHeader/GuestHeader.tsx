import GuestNavbar from '../../molecules/GuestNavbar/GuestNavbar';
import React from 'react';
interface GuestHeaderProps {}

const GuestHeader: React.FC<GuestHeaderProps> = () => {
  return (
    <header >
      <GuestNavbar />
    </header>
  );
};

export default GuestHeader;