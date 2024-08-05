"use client"
import { useState } from "react"

export default function Page() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='h-screen w-full bg-white flex justify-center items-center px-2'>
      <div className='shadow-3xl w-full max-w-[450px] flex flex-col gap-12 px-3 py-3 rounded-3xl'>
        <div className={`w-full py-1 px-1 bg-slate-100 flex relative rounded-2xl transition-all duration-300 ease-in-out ${isLogin ? 'justify-start' : 'justify-end'}`}>
          <div className="relative py-6 h-full w-1/2 bg-white rounded-xl transition-all duration-300 ease-in-out">
          </div>
          <button onClick={() => setIsLogin(true)} className="absolute top-0 left-0 h-full w-1/2 flex items-center justify-center rounded-xl">
            <p className={`z-10 text-xl py-4 transition-colors duration-300 ease-in-out ${isLogin ? 'text-red-400 font-semibold ' : 'text-neutral-400'}`}>
              Вход
            </p>
          </button>
          <button onClick={() => setIsLogin(false)} className="absolute top-0 right-0 h-full w-1/2 flex items-center justify-center rounded-xl">
            <p className={`z-10 text-xl py-4 transition-colors duration-300 ease-in-out ${!isLogin ? 'text-red-400 font-semibold ' : 'text-neutral-400'}`}>
              Регистрация
            </p>
          </button>
        </div>
        <div className="flex flex-col w-full gap-4">
          
        </div>
      </div>
    </div>
  )
}