import { BlurCard } from '../common/BlurCard.jsx'
import { AuthForm } from '../layout/AuthForm.jsx'
export function Auth({imageSrc, children, title, ...rest }) {
  return (
    <div className='relative grid place-items-center overflow-hidden auth'>
      <BlurCard>
        <div className='basis-3/5 px-2 user-none grid place-items-center'>
          <img src={imageSrc} alt='woman dreaming about travelling'/>
        </div>
        <div className='basis-2/5 m-auto'>
          <AuthForm title={title} {...rest}>
            {children}
          </AuthForm>
        </div>
      </BlurCard>
    </div>
  )
}
