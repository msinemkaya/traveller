export function BlurCard({children}) {
  return (
    <div  className='backdrop-blur flex gap-8 min-w-96 max-w-screen-lg py-16 px-8 shadow-2xl drop-shadow-2xl rounded-2xl text-left bg-gradient-to-br from-light/20 to-dark/20'>
      {children}
    </div>
  )
}
