import classNames from 'classnames'

export function BlurCard({children, className}) {

  const classes = classNames('backdrop-blur min-w-96 max-w-screen-lg shadow-2xl drop-shadow-2xl rounded-2xl text-left bg-gradient-to-br from-light/20 to-dark/20', className)

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
