'use client';

import CustomizedInput from '@/components/forms/input'
import Image from 'next/image'
import { Envelope, Key } from 'phosphor-react'

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col sm:flex-row items-center justify-center gap-16 bg-gray-200">
      <div className='flex flex-col space-y-12'>
        <Image 
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className='text-white-200 font-roboto text-5xl font-bold whitespace-nowrap' style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.4)' }}>
          Efetue o <span className='text-purple-700'>login</span> <br/> para continuar
        </div>
      </div>
      <div className=' bg-gray-300 w-[450px] h-[446px] p-12 rounded-[8px]'>
        <div className='flex flex-col gap-4'>
          <CustomizedInput placeholder='Email' icon={<Envelope className='w-5 h-5' name='teste' />}/>
          <CustomizedInput placeholder='Senha' icon={<Key className='w-5 h-5' weight="fill" />}/>
        </div>
        <a href='https://github.com/pedroantoniodigital/TS-FRONT/compare/main...develop' target='_blank'>
          <div className='font-roboto text-[12px] p-2 text-purple-700 hover:text-purple-600 transition ease-in-out duration-500'>
            Esqueceu sua senha?
          </div>
        </a>
        <div className='bg-purple-700 hover:bg-purple-600 transition ease-in-out duration-500 cursor-pointer font-roboto font-bold flex justify-center text-center mt-4 p-3 rounded-[8px]'>
          <button>
            ENTRAR
          </button>
        </div>
        <div className='flex justify-center mt-4'>
          Não tem uma conta? <span className=' text-purple-700 hover:text-purple-600 transition ease-in-out duration-500 ml-1'>Registre-se</span>
        </div>
        <div className='flex flex-row justify-around mt-4'>
          <div className='bg-gray-700 brightness-[0.7] w-[40%] h-[1px]'/>
          <div className='bg-gray-700 brightness-[0.7] w-[40%] h-[1px]'/>
        </div>
        <div className='flex flex-row items-center justify-around mt-4'>
          <div>
            Ou entre com
          </div>
          <div className='bg-[#323138] hover:bg-[#54525e] cursor-pointer text-center transition ease-in-out duration-500 w-[200px] h-[40px] flex items-center justify-center rounded-[8px]'>
            <Image 
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={40}
              height={40}
              priority
            />
            <span className='font-roboto font-bold ml-2 text-purple-600'>
              GITHUB
            </span>
          </div>
        </div>
      </div>  
    </main> 
  )
}
