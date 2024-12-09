"use client"
import React, { useState } from 'react'
import LogoSection from './logoSection'
import NavigationBtn from './navigationBtn'
import logo from '../../../public/Logo.png';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  // Function to toggle the sheet visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className='w-screen flex flex-col border-b items-center justify-center overflow-x-hidden'>
      <div className='bg-[#F0F2F3] w-screen hidden lg:flex flex-col items-center justify-center'>
        <LogoSection />
      </div>
      <div className="w-screen hidden lg:flex flex-col items-center justify-center">
        <NavigationBtn />
      </div>

      <Sheet open={isOpen} onOpenChange={toggleMenu}>
        <SheetTrigger className='block lg:hidden w-[80%] py-3 md:py-6'>
          <div className='flex items-center justify-between w-full'>
            <div className="flex items-center gap-2">
            <Link href={'/'}>
              <Image
                src={logo}
                alt="Logo"
                className='w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10'
              />
            </Link>

            <Link href={'/'}>
              <h2 className="text-lg md:text-xl lg:text-2xl font-medium">Comforty</h2>
            </Link>
          </div>
            <Menu />
          </div>
        </SheetTrigger>
        <SheetContent className='w-full'>
          <SheetHeader>
            <SheetTitle><LogoSection /> <hr /></SheetTitle>
            <SheetDescription onClick={closeMenu} >
              <NavigationBtn />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default Header
