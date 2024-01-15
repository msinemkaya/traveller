import { FaRegStar, FaStar } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

export function Rating({ rating }) {
  const [ stars, setStars ] = useState([])

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        setStars(curr => [
          ...curr,
          <FaStar key={i}/>,
        ])
      } else {
        setStars(curr => [
          ...curr,
          <FaRegStar key={i}/>,
        ])
      }
      console.log(stars)

    }

    return () => {
      setStars([])
    }
  }, [ rating ])
  return (
    <div className='flex'>
      {stars.map((star, index) => (
        <React.Fragment key={index}>
          {star}
        </React.Fragment>
      ))}
    </div>
  )
}
