import BrandDifference from '@/components/about/BrandDifference'
import HeroSection from '@/components/about/HeroSection'
import PopularProducts from '@/components/about/PopularProducts'
import React from 'react'

const About = () => {
  return (
    <main className='overflow-x-hidden'>
      <HeroSection />
      <BrandDifference />
      <PopularProducts />
    </main>
  )
}

export default About
