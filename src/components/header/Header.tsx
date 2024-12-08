import React from 'react'
import LogoSection from './logoSection'
import NavigationBtn from './navigationBtn'

const Header = () => {
  return (
    <div className='w-screen flex flex-col border-b items-center justify-center'>
      <div className='bg-[#F0F2F3] w-screen flex flex-col items-center justify-center'>
        <LogoSection />
      </div>
      <NavigationBtn />
    </div>
  )
}

export default Header
