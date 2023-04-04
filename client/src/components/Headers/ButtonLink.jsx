import { NavLink } from 'react-router-dom'

export function ButtonLink ({ to, text, children }) {
  return (
    <NavLink to={to} className='flex items-center gap-3 font-medium p-2 md:py-2  rounded-md hover:bg-gray-200'>
      <span className='text-2xl'>
        {children}
      </span>
      <span className='hidden md:block'>{text}</span>
    </NavLink>
  )
}
