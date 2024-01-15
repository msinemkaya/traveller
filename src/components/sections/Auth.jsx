import { BlurCard } from '../common/BlurCard.jsx'
import { AuthForm } from '../layout/AuthForm.jsx'
export function Auth({imageSrc, children, title, ...rest }) {
  return (
    <div className='relative grid place-items-center overflow-hidden auth'>
      <BlurCard className='flex gap-8 py-16 px-8'>
        <div className='grid basis-3/5 place-items-center px-2 user-none'>
          <img src={imageSrc} alt='woman dreaming about travelling'/>
        </div>
        <div className='m-auto basis-2/5'>
          <AuthForm title={title} {...rest}>
            {children}
          </AuthForm>
        </div>
      </BlurCard>
    </div>
  )
}
