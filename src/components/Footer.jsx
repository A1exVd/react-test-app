import instIcon from '../assets/ins-logo.svg'
import tiktokIcon from '../assets/tiktok-icon.svg'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="grid grid-cols-5 grid-rows-6 absolute bottom-0 left-0 w-full max-h-[15rem] gap-2 border-t text-sm hover:[&>div>ul>li]:cursor-pointer hover:[&>div>ul>li]:text-blue-500 [&>div>ul>li]:py-1">
          <div className="p-6 row-span-4 ">
            <h1 className="mb-1 font-bold text-blue-500">INFORMATION</h1>
            <ul >
              <li>Pricing</li>
              <li>About us</li>
              <li>Events</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="p-6 row-span-4">
            <h1 className="mb-1 font-bold text-blue-500">LEGAL</h1>
            <ul>
              <li>Terms of use</li>
              <li>License agreement</li>
              <li>Privacy policy</li>
              <li>Copyright information</li>
            </ul>
          </div>
          <div className="p-6 row-span-4">
            <h1 className="mb-1 font-bold text-blue-500">SUPPORT</h1>
            <ul>
              <li>FAQ</li>
              <li>Search quide</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="p-6 col-span-2 row-span-4 text-end">
              Here is some text...
          </div>
          <div className="col-span-5 self-center text-sm w-full flex justify-center">
            <img className='w-10 h-10' src={instIcon}/>
            <img className='w-10 h-10' src={tiktokIcon}/>
          </div>
          <div className="col-span-5 self-center text-sm w-full flex justify-center">@ 2024 Copyright. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
