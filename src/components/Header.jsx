import sidebarIcon from '../assets/sidebar-icon.svg'
import foodIcon from '../assets/food-icon.png'
import settingsIcon from '../assets/settings-icon.svg'
import lightIcon from '../assets/light-icon.svg'
import darkIcon from '../assets/dark-icon.svg'

export default function Header() {
  return (
    <div className='flex fixed justify-between items-center right-0 left-0 h-14 border-b-[1px]' >
      <div className='flex items-center ml-4 mr-[6.4rem] hover:cursor-pointer'>
        <img src={sidebarIcon} className='w-8 hidden' alt='sidebarIcon'/> 
      </div>
      <div className='hidden md:flex items-center'> 
        <img src={foodIcon} className='w-12' alt='foodIcon'/>
        <h1 className='text-2xl text-blue-500'>Food</h1>
      </div>
      <div className='flex mr-2' >
        <button className='p-2 mr-1 rounded-lg hover:bg-gray-200 hover:text-blue-500'>Sign up</button>
        <button className='p-2 mr-1 rounded-lg hover:bg-gray-200 hover:text-blue-500'>Log in</button>
        <div  className=' flex relative'>
          <button className='peer'>
            <img src={settingsIcon} className='w-5' alt='settingsIcon'/>
          </button>
          <div className='absolute hidden peer-focus-within:block hover:block top-12 -left-24 h-30 p-1'>
            <div className='flex hover:cursor-pointer hover:text-blue-500'>
              <img className='w-5 mr-1' src={lightIcon} alt='light-icon'/>
              Light mode
            </div>
            <div className='flex hover:cursor-pointer hover:text-blue-500'>
              <img className='w-5 mr-1' src={darkIcon} alt='dark-icon'/>
              Dark mode
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}