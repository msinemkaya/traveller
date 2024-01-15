import { Link } from 'react-router-dom'

export function SocialLink({ icon, to = '/NoPage' }) {
  return (
    <Link to={to} className='grid aspect-square w-10 place-items-center rounded-full border-2 border-primary'>
      {icon}
    </Link>
  )
}
