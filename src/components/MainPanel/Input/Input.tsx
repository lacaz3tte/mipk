import React from 'react'
import Lens from './Lens/Lens'

const Input = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div>
        <input
          className="outline-none bg-transparent border-b-[1px] rounded-full w-[450px] p-2 focus:bg-gray-100 font-Ubuntu px-5"
          placeholder="НАЙТИ"
          type="text" />
        <div className="mx-2 px-5 p-2 bg-[#4E6BAD] rounded-full text-white active:opacity-40 font-Ubuntu inline-flex items-center justify-center hover:cursor-pointer hover:bg-sky-600 transition-all">
          ПОИСК
          <Lens />
        </div>
      </div>
    </div>
  )
}

export default Input