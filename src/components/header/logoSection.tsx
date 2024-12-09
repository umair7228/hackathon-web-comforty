import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/Logo.png';
import { ShoppingCart } from 'lucide-react';

const LogoSection = () => {
  return (
    <header className="w-full lg:w-[80%] mt-4 md:mt-0 py-6 lg:py-4 xl:py-6 flex flex-row items-center justify-between overflow-x-hidden">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href={'/'}>
          <Image 
            src={logo}
            alt="Logo"
            className='w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10'
          />
        </Link>

        <Link href={'/'}>
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium">Comforty</h2>
        </Link>
      </div>

      {/* Cart Section */}
      <div className="mt-0 bg-[#F0F2F3] lg:bg-white rounded-md w-28 sm:w-32 h-11 flex items-center justify-center">
        <Link
          href={'/cart'}
          className="flex items-center gap-2"
        >
          <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
          <span className="text-xs md:text-sm">Cart</span>
          <span className="text-xs md:text-sm text-white w-5 h-5 md:w-6 md:h-6 bg-[#007580] rounded-full flex items-center justify-center">
            2
          </span>
        </Link>
      </div>
    </header>
  );
};

export default LogoSection;
