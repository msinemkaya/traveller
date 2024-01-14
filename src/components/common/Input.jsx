export function Input({ type = 'text', placeholder, icon, ...rest }) {
  return (
    <div className='relative flex items-center'>
      {icon ? <div className='absolute ml-2'>{icon}</div> : null}
      <input type={type}
             className={`box-border w-full bg-white/30 py-2 px-2.5 text-md font-medium transition-all rounded-lg outline-none focus:outline-none placeholder:capitalize placeholder:text-primary/70 ${icon ? 'pl-11': null}`}
             placeholder={placeholder}
             {...rest}
      />
    </div>
  )
}
