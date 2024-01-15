import { Form } from '../common/Form.jsx'

export function AuthForm({ title, children, ...rest }) {
  return (
    <>
      <h1 className='mb-8 text-center text-6xl font-extrabold leading-10 font-abode'>{title}</h1>
      <Form {...rest}>
        {children}
      </Form>
    </>
  )
}
