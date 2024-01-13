import { Form } from '../common/Form.jsx'

export function AuthForm({ title, children, ...rest }) {
  return (
    <>
      <h1 className='text-6xl text-center font-extrabold leading-10 font-abode mb-8'>{title}</h1>
      <Form {...rest}>
        {children}
      </Form>
    </>
  )
}
