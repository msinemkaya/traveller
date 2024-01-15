import { Section } from '../common/Section.jsx'
import { SectionHeading } from '../common/SectionHeading.jsx'
import { Posts } from './Posts.jsx'

export function Stories() {
  return (
    <Section className='grid place-items-center'>
      <SectionHeading>We've been to various places we would love to share</SectionHeading>
      <Posts/>
    </Section>
  )
}
