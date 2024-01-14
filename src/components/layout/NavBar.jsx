import { Logo } from '../common/Logo.jsx'
import { Button } from '../common/Button.jsx'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/use-auth.js'

export function NavBar() {

  const {auth} = useAuth()

  return (
    <nav className='z-20 absolute inset-0 flex items-center justify-between w-11/12 mx-auto h-14'>
      <Logo/>
      {!auth?.user ? (
        <div className='space-x-5'>
          <Button><Link to='/login'>Log in</Link></Button>
          <Button><Link to='/register'>Register</Link></Button>
        </div>
      ) : null}
    </nav>
  )
}
