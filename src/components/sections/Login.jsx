import useAuth from '../../hooks/use-auth.js'
import woman from '../../assets/woman.svg'
import { Input } from '../common/Input.jsx'
import { Link } from 'react-router-dom'
import {  useState } from 'react'
import { GiPostStamp, GiUnlocking } from "react-icons/gi";
import { SocialBox } from '../common/SocialBox.jsx'
import { Auth } from './Auth.jsx'
import { Button } from '../common/Button.jsx'
import { AuthRedirection } from '../common/AuthRedirection.jsx'

export function Login() {
  const { setAuth } = useAuth()

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setAuth({ user, password })
    setUser('')
    setPassword('')
  }

  return (
    <Auth title='sign in' imageSrc={woman} onSubmit={handleSubmit}>
      <Input type='text' placeholder='username' icon={<GiPostStamp size={30}/>} onChange={({target}) => setUser(target.value)} value={user} required/>
      <Input type='password' placeholder='password' icon={<GiUnlocking size={30}/>} onChange={({target}) => setPassword(target.value)} value={password} required/>
      <Link className='inline-block text-xs font-medium capitalize' to='/reset'>
        forgot your password?
      </Link>
      <SocialBox text="or login with"/>
      <Button>sign in</Button>
      <AuthRedirection type='register'/>
    </Auth>
  )
}
