import { Form } from '../common/Form.jsx'

export function AuthForm({ title, children, buttonText, ...rest }) {
  return (
    <div className='basis-2/5 m-auto'>
      <h1 className='text-6xl text-center font-extrabold leading-10 font-abode mb-8'>{title}</h1>
      <Form buttonText={buttonText} {...rest}>
        {children}
      </Form>
    </div>
  )
}
