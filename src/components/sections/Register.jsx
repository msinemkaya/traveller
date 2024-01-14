import { Auth } from './Auth.jsx'
import man from '../../assets/man.svg'
import { Input } from '../common/Input.jsx'
import { GiPostStamp, GiUnlocking } from "react-icons/gi";
import { BsPostcard } from "react-icons/bs";
import { SocialBox } from '../common/SocialBox.jsx'
import { Button } from '../common/Button.jsx'
import { AuthRedirection } from '../common/AuthRedirection.jsx'
import { useState } from 'react'
export function Register() {

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser('')
    setPassword('')
    setEmail('')
  }

  return (
    <Auth title='sign up' imageSrc={man} onSubmit={handleSubmit}>
      <Input type='email' icon={<BsPostcard size={30}/>} placeholder='email' value={email} onChange={({target}) => setEmail(target.value)} required/>
      <Input type='text' icon={<GiPostStamp size={30}/>} placeholder='username' value={user} onChange={({target}) => setUser(target.value)} required/>
      <Input type='password' icon={<GiUnlocking size={30}/>} placeholder='password' value={password} onChange={({target}) => setPassword(target.value)} required/>
      <SocialBox text='or register with'/>
      <Button>sign up</Button>
      <AuthRedirection type='login'/>
    </Auth>
  )
}
