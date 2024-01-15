export function Form({ children, ...rest }) {
  return (
    <form className='mx-auto w-80' {...rest}>
      <div className='text-center space-y-5'>
        {children}
      </div>
    </form>
  )
}
