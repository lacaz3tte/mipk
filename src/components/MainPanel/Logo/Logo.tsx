import React from 'react'

const Logo = () => {
  return (
    <div>
      <div className="w-[207px] h-[27px] bg-[#DEE8FF] rounded-sm flex justify-center items-center my-[7px]">
        <p className="font-Ubuntu font-semibold">Санкт-Петербург</p>
      </div>
      <div className='h-[62px] w-[181px] bg-cover overflow-hidden my-3 bg-center inline-block rounded-[10px] mr-5 bg-[url("../public/logo.jpg")]' />
    </div>
  )
}

export default Logo