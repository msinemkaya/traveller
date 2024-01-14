import { Link } from 'react-router-dom'

export function SocialLink({ icon, to = '/NoPage' }) {
  return (
    <Link to={to} className='rounded-full border-2 border-primary aspect-square w-10 grid place-items-center'>
      {icon}
    </Link>
  )
}
