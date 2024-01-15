import hero from '../../assets/Hero.svg'
import { Section } from '../common/Section.jsx'

export function Hero() {
  return (
    <Section className='relative grid grid-cols-2 place-items-center h-svh'>
      <img src={hero} className='absolute top-0 right-0 h-full'  alt='woman with passport'/>
      <div className='mx-auto w-4/5 text-left'>
        <h1 className='before:absolute relative before:bottom-0 mb-6 before:block before:h-1 before:w-1/6 text-8xl font-bold tracking-widest font-abode text-indigo-750 before:bg-indigo-750'>Welcome to traveller!</h1>
        <p className='font-medium first-letter:uppercase text-primary/80'>we are happy to see you in our blog where we share our memories and experiences around the world</p>
      </div>
    </Section>
  )
}
