export function Button({children, ...rest}) {
  return (
    <button className='bg-indigo-400 text-light w-40 h-10 text-lg font-semibold rounded-lg uppercase' {...rest}>
      {children}
    </button>
  )
}
