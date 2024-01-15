export function Button({children, ...rest}) {
  return (
    <button className='h-10 w-40 rounded-lg bg-indigo-400 text-lg font-semibold uppercase text-light' {...rest}>
      {children}
    </button>
  )
}
