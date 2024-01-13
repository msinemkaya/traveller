import { SocialLink } from './SocialLink.jsx'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6'

export function SocialBox({ text }) {
  return (
    <>
      <p className='before:m-auto after:m-auto flex before:flex-1 after:flex-1 before:border-b after:border-b before:border-b-primary/50 after:border-b-primary/50 before:mx-2.5 after:mx-2.5'>{text}</p>
      <div className='flex justify-center gap-6'>
        <SocialLink icon={<FcGoogle size={26}/>} />
        <SocialLink icon={<FaXTwitter size={26} color='black'/> } />
        <SocialLink icon={<FaFacebookF size={26} color='darkblue'/> } />
      </div>
    </>
  )
}
