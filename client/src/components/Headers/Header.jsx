import { NavLink } from 'react-router-dom'
import { CgHome, CgProfile } from 'react-icons/cg'
import { AiOutlineCompass } from 'react-icons/ai'
import { TbSquareRoundedPlus } from 'react-icons/tb'
import { RiSettings4Line } from 'react-icons/ri'
import { useAuthStore } from '../../store/auth'

export function Header () {
  const { authUser } = useAuthStore()

  return (
    <div className='z-10 bg-white p-2 fixed bottom-0 md:static md:p-5 object-contain w-full md:w-auto
      md:min-h-screen border-t-2 md:border-r-2 border-gray-100 shadow-sm min-w-[320px] md:min-w-min'
    >
      <div className='sticky top-0 py-0 md:py-5'>
        <nav className='flex justify-center md:flex-col gap-6'>
          <h1 className='pr-[10vw] font-semibold text-xl mb-6 hidden md:block'>
            Dyggram
          </h1>
          <NavLink to='/home' className='flex items-center gap-3 font-medium p-2 md:py-2  rounded-md hover:bg-gray-200'>
            <CgHome className='text-2xl' />
            <span className='hidden md:block'>Home</span>
          </NavLink>
          <NavLink to='/explore' className='flex items-center gap-3 font-medium p-2 md:py-2  rounded-md hover:bg-gray-200'>
            <AiOutlineCompass className='text-2xl' />
            <span className='hidden md:block'>Explore</span>
          </NavLink>
          <NavLink to='/create' className='flex items-center gap-3 font-medium p-2 md:py-2  rounded-md hover:bg-gray-200'>
            <TbSquareRoundedPlus className='text-2xl' />
            <span className='hidden md:block'>Create</span>
          </NavLink>
          <NavLink to={`/${authUser.username}`} className='flex items-center gap-3 font-medium p-2 md:py-2  rounded-md hover:bg-gray-200'>
            <CgProfile className='text-2xl' />
            <span className='hidden md:block'>Profile</span>
          </NavLink>
          <NavLink to='/' className='flex items-center gap-3 font-medium p-2 md:py-2  rounded-md hover:bg-gray-200'>
            <RiSettings4Line className='text-2xl' />
            <span className='hidden md:block'>Config</span>
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
