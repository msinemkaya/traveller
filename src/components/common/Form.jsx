export function Form({ children, ...rest }) {
  return (
    <form className='w-80 mx-auto' {...rest}>
      <div className='space-y-5 text-center'>
        {children}
      </div>
    </form>
  )
}
