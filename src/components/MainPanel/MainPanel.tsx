import React from 'react'
import Logo from './Logo/Logo'
import Links from './Links/Links'
import Input from './Input/Input'
import Info from './Info/Info'

const MainPanel = () => {
  return (
    <div className=" h-[133px] flex justify-between">
      <Logo />
      <Links />
      <Input />
      <Info />
    </div>
  )
}

export default MainPanel