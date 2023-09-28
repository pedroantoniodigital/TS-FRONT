
import { HTMLProps, ReactNode } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
  icon?: ReactNode
}

export default function CustomizedInput({ icon, ...props }:InputProps) {

  return( 
    <div className="bg-gray-200 group p-2 min-h-[32px] items-center rounded-md flex flex-row border border-solid border-transparent focus-within:border-purple-600 transition ease-in-out duration-500">
      <div className="min-h-[32px] min-w-[32px] flex justify-center items-center text-gray-300 group-focus-within:text-purple-700 transition ease-in-out duration-500">
        {icon}
      </div>
      <input className='bg-transparent outline-none ring-0 pl-2 text-[#ffffff]' {...props}/>
    </div>
  )
} 