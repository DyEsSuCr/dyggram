import { CgHome, CgProfile } from 'react-icons/cg'
import { AiOutlineCompass } from 'react-icons/ai'
import { TbSquareRoundedPlus } from 'react-icons/tb'
import { RiSettings4Line } from 'react-icons/ri'
import { ButtonLink } from './ButtonLink'
import { useAuthStore } from '../../store/auth'

export function Header () {
  const { authUser } = useAuthStore()

  return (
    <div className='
      z-10 bg-white border-t-2 border-gray-100 shadow-sm min-w-[320px] p-2 fixed bottom-0
      w-full md:h-screen md:sticky md:border-t-0 md:border-r-2 md:min-w-min md:w-auto md:max-w-xs md:top-0 md:p-5'
    >
      <div className='p-0 md:pt-5'>
        <h1 className='pr-[10vw] font-semibold text-xl mb-8 hidden md:block'>
          DyGgram
        </h1>

        <nav className='flex justify-center md:flex-col gap-5'>
          <ButtonLink to='/home' text='Home'>
            <CgHome />
          </ButtonLink>
          <ButtonLink to='/explore' text='Explore'>
            <AiOutlineCompass />
          </ButtonLink>
          <ButtonLink to='/create' text='Create'>
            <TbSquareRoundedPlus className='text-3xl md:text-2xl' />
          </ButtonLink>
          <ButtonLink to={`/${authUser.username}`} text='Profile'>
            <CgProfile />
          </ButtonLink>
          <ButtonLink to='/' text='Config'>
            <RiSettings4Line />
          </ButtonLink>
        </nav>
      </div>
    </div>
  )
}
