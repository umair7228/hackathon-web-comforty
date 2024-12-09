import Image from 'next/image'
import React from 'react'

const Licence = () => {
  return (
    <div className='w-screen mt-10 border-t border-gray-300 flex items-center justify-center  overflow-x-hidden'>
      <div className="w-[80%] py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">
            © 2024 – Blogy – Designed & Developed by <span className="font-semibold">Umair Nawaz</span>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Image src="/footer-images/paypal.jpg" alt="PayPal" width={32} height={32} className='h-7 w-auto' />
            <Image src="/footer-images/visa.png" alt="Visa" width={32} height={32} className='h-7 w-auto' />
            <Image src="/footer-images/amex.png" alt="American Express" width={32} height={32} className='h-7 w-auto' />
          </div>
        </div>
    </div>
  )
}

export default Licence
