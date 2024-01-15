import { Link } from 'react-router-dom'

export function AuthRedirection({type}) {
  return (
    <div>
      <small className='inline-block'>{type === 'register' ? 'don\'t' : 'already'} have an account ?</small> <Link to={`/${type}`} className='text-sm font-bold capitalize'>{type} here</Link>
    </div>
  )
}
