import { Button } from './Button.jsx'

export function Form({ children, buttonText, ...rest }) {
  return (
    <form className='w-80 mx-auto flex flex-col gap-8 items-center' {...rest}>
      <div className='w-full space-y-5 text-center'>
        {children}
      </div>
      <Button>{buttonText}</Button>
    </form>
  )
}
