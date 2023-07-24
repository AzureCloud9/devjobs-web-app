import {Outlet } from "react-router-dom"
import headerimg from '../assets/mobile/bg-pattern-header.svg'
import logo from '../assets/desktop/logo.svg'
import moon from '../assets/desktop/icon-moon.svg'
import sun from '../assets/desktop/icon-sun.svg'
import ToggleSwitch from "../components/ToggleSwitch"


export default function RootLayout() {
  return (

<>
    <div className="w-[100vw]">
        <div className="absolute flex flex-row-reverse justify-between items-center w-[100vw] mt-[32px]">
          <div className="flex mr-[24px]">
              <img src={sun} alt="pic"/>
              <ToggleSwitch/>
              <img src={moon} alt="pic"/>
          </div>
          <img src={logo} alt="pic" className="ml-[24px] "/>
        </div>
        
        <img src={headerimg} alt="pic" className="w-[100%] static -z-10"/>
    </div>     

        <main>
          <Outlet/>
        </main>

</>
    
  )
}
