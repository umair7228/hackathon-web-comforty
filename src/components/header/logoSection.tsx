import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/Logo.png'
import { ShoppingCart } from 'lucide-react'

const LogoSection = () => {
  return (
    <header className='w-[80%] py-6 flex items-center justify-between'>
      {/* logo  */}
      <div className='flex items-center gap-2'>
        <Link
        href={'/'}
        >
            <Image 
            src={logo}
            alt='Logo'
            />
        </Link>

        <Link
        href={'/'}
        >
            <h2 className='text-2xl font-medium'>Comforty</h2>
        </Link>
      </div>

      <div className='bg-white rounded-md w-32 h-11 flex items-center justify-center'>
        <Link
        href={'/cart'}
        className='flex items-center gap-2'
        >
            <ShoppingCart className='w-6 h-6' />
            <span className='text-sm'>Cart</span>
            <span className='text-sm text-white w-6 h-6 bg-[#007580] rounded-full flex items-center justify-center'>0</span>
        </Link>
      </div>
    </header>
  )
}

export default LogoSection
