import { Button } from './Button.jsx'

export function Form({ children, buttonText }) {
  return (
    <form className='w-80 mx-auto flex flex-col gap-8 items-center'>
      <div className='w-full space-y-5 text-center'>
        {children}
      </div>
      <Button>{buttonText}</Button>
    </form>
  )
}
