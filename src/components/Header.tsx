import React from 'react'
import MainPanel from './MainPanel/MainPanel'
import NavigatePanel from './NavigatePanel/NavigatePanel'

const Header = () => {
  return (
    <div className="fixed bg-[#F8F9FA] w-full flex justify-center">
      <div className="w-[1350px] ">
        <MainPanel />
        <NavigatePanel />
      </div>
    </div>
  )
}

export default Header