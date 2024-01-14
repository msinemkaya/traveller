import classNames from 'classnames'

export function Section({children, className}) {

  const classes = classNames(className, 'min-h-svh')

  return (
    <section className={classes}>
      {children}
    </section>
  )
}
