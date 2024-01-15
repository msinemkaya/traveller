import { Link } from 'react-router-dom'
import { Rating } from './Rating.jsx'
import { TbHandClick } from 'react-icons/tb'
import { BlurCard } from './BlurCard.jsx'

export function PostCard({city, country, image, hhk, msk}) {
  return (
    <BlurCard className='rounded-3xl bg-white relative group w-96'>
      <Link to={`/posts/${city}`}>
        <div className='w-96 h-96  rounded-t-3xl overflow-hidden drop-shadow'>
          <img src={image} alt=''/>
        </div>
        <div className='px-5 py-6'>
          <div className='flex justify-between items-center '>
            <h3 className='font-extrabold text-2xl mb-4 capitalize text-dark'>{city}, {country} </h3>
            <div className='text-indigo-750 text-sm'>
              <div className='flex justify-between items-center gap-3'>
                <Rating rating={hhk}/>
                <p>HHK</p>
              </div>
              <div className='flex justify-between items-center gap-3'>
                <Rating rating={msk}/>
                <p>MSK</p>
              </div>
            </div>
          </div>
          <div className='absolute -right-6 -bottom-6 group-hover:animate-wiggle'><TbHandClick size={60} className='-rotate-45'/> </div>
        </div>
      </Link>
    </BlurCard>
  )
}
