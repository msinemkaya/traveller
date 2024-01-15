import { PostCard } from '../common/PostCard.jsx'
import prague from '../../assets/prague.jpg'
import krakow from '../../assets/krakow.png'
import opole from '../../assets/opole.png'
import vienna from '../../assets/vienna.png'
import budapest from '../../assets/budapest.png'
import bucherest from '../../assets/bucherest.png'
export function Posts() {
  return (
    <div className='flex gap-x-9 gap-y-24 flex-wrap justify-between mx-24 mb-24'>
      <PostCard image={prague} city='prague' country='czech' hhk={2} msk={4}/>
      <PostCard image={krakow} city='krakow' country='poland' hhk={5} msk={5}/>
      <PostCard image={opole} city='opole' country='poland' hhk={2} msk={3}/>
      <PostCard image={vienna} city='vienna' country='austria' hhk={5} msk={5}/>
      <PostCard image={budapest} city='budapest' country='hungary' hhk={5} msk={5}/>
      <PostCard image={bucherest} city='bucherest' country='romania' hhk={3} msk={2}/>
    </div>
  )
}
