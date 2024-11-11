import { useState } from 'react'
import sidebarIcon from '../assets/sidebar-icon.svg'

export default function Drawer() {
  const [ isOpen, setIsOpen ] = useState(false)
  const showDrawer = () => setIsOpen(!isOpen)
  return (
    <>
      <div className='flex fixed z-30 top-3 items-center ml-4 mr-[6.4rem] hover:cursor-pointer'>
        <button onClick={showDrawer}>
          <img src={sidebarIcon} className='w-8' alt='sidebarIcon'/> 
        </button>
      </div>
      <div className={`absolute w-full h-full z-20 ${isOpen ? 'backdrop-blur-sm': 'hidden'}` }></div>
      <div className={`fixed top-14 left-0 z-40 w-64 h-full transition-transform bg-gray-500 transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}></div>
    </>
  )
}