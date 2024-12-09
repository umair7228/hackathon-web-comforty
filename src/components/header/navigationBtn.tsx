"use client"
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const NavigationBtn = () => {
  return (
    <nav className='w-full md:w-[80%] lg:h-12 xl:h-20 flex items-center justify-center lg:justify-between  overflow-x-hidden'>
      <div className='flex flex-col lg:flex-row items-center gap-8'>
        <Link
        href={'/'}>
            <Button variant={'link'} className='p-0'>
                Home
            </Button>
        </Link>

        <Link
        href={'/shop'}>
            <Button variant={'link'} className='p-0'>
                Shop
            </Button>
        </Link>

        <Link
        href={'/products'}>
            <Button variant={'link'} className='p-0'>
                Products
            </Button>
        </Link>

        <Link
        href={'/contact'}>
            <Button variant={'link'} className='p-0'>
                Contact Us
            </Button>
        </Link>

        <Link
        href={'/about'}>
            <Button variant={'link'} className='p-0'>
                About
            </Button>
        </Link>
      </div>

      <div className='hidden lg:flex items-center justify-center gap-2'>
        <h3 className='text-[#636270]'>Contact:</h3>
        <p>(92) 32123494</p>
      </div>
    </nav>
  )
}

export default NavigationBtn
