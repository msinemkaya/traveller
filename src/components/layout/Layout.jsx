import { Outlet } from 'react-router-dom'
import useAuth from '../../hooks/use-auth.js'
import { NavBar } from './NavBar.jsx'

export function Layout() {
  const { auth } = useAuth()
  return (
    <div className='relative flex flex-col min-h-svh'>

      <NavBar/>

      <div className='flex grow'>
        <div className={`${auth?.user ? 'basis-3/4' : 'basis-full' }`}>
          <Outlet/>
        </div>

        {auth?.user ? (
          <div className='z-30 min-w-0 basis-1/4'>
            {/*todo: sidebar'a vision board, user, log out konacak*/}
            sidebar
          </div> ) : null
        }
      </div>
    </div>
  )
}
