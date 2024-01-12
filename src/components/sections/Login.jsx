import useAuth from '../../hooks/use-auth.js'
import woman from '../../assets/woman.svg'
import { BlurCard } from '../common/BlurCard.jsx'
import { AuthForm } from '../layout/AuthForm.jsx'
import { Input } from '../common/Input.jsx'
import { Link } from 'react-router-dom'

export function Login() {
  const { setAuth } = useAuth()

  return (
    <div className='auth grid place-items-center relative overflow-hidden'>
      {/*<img src={balls} alt='' className='absolute -top-48 left-4 w-[30rem] rotate-45'/>*/}
      {/*<img src={balls} alt='' className='absolute right-1/3 -top-20 rotate-12 w-64'/>*/}
      {/*<img src={balls} alt='' className='absolute bottom-0 -right-32 rotate-45 w-[30rem]'/>*/}
      {/*<img src={balls} alt='' className='absolute top-8 right-44 -rotate-90'/>*/}
      {/*<img src={balls} alt='' className='absolute left-1/2 bottom-0'/>*/}
      {/*<img src={balls} alt='' className='absolute -left-40 -bottom-40 rotate-180 w-[35rem]'/>*/}
      <BlurCard>
        <div className='basis-3/5 px-2'>
          <img src={woman} alt='woman dreaming about travelling'/>
        </div>
        <AuthForm title='sign in' buttonText='sign in'>
          <Input type='text' placeholder='username'/>
          <Input type='password' placeholder='password'/>
          <Link className='text-xs font-medium capitalize inline-block' to='/reset'>
            forgot your password?
          </Link>
        </AuthForm>
      </BlurCard>
    </div>

  )
}
