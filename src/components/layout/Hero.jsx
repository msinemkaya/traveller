import hero from '../../assets/Hero.svg'
import { Section } from '../common/Section.jsx'

export function Hero() {
  return (
    <Section className='grid grid-cols-2 place-items-center relative h-svh'>
      <img src={hero} className='absolute top-0 right-0 h-full'  alt='woman with passport'/>
      <div className='w-4/5 mx-auto text-left'>
        <h1 className='text-8xl font-bold font-abode tracking-widest text-indigo-750 relative before:block before:w-1/6 before:h-1 before:absolute before:bottom-0 before:bg-indigo-750 mb-6'>Welcome to traveller!</h1>
        <p className='first-letter:uppercase font-medium text-primary/80'>we are happy to see you in our blog where we share our memories and experiences around the world</p>
      </div>
    </Section>
  )
}
