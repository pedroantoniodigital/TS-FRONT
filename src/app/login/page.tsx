'use client';

import CustomizedInput from '@/components/forms/input'
import Image from 'next/image'
import { Envelope, Key } from 'phosphor-react'

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col sm:flex-row items-center justify-center gap-10 bg-gray-200">
      <div>
        <Image 
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div>
          Efetue o login para continuar
        </div>
      </div>
      <div className=' bg-gray-300 w-[450px] h-[446px] p-12'>
        <div className='flex flex-col gap-10'>
          <CustomizedInput placeholder='Email' icon={<Envelope className='w-5 h-5' />}/>
          <CustomizedInput placeholder='Senha' icon={<Key className='w-5 h-5' weight="fill" />}/>
        </div>
      </div>  
    </main> 
  )
}
