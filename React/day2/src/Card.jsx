import React from 'react'

const Card = ({img,title,desc}) => {
  return (
    <div className='flex flex-col justify-center items-center m-10 shadow-2xl w-2xs'>
        <img src={img} alt="thumbnail" height={440} width={440} className=' rounded-3xl m-3'/>
        <h1 className='self-start p-3 font-extrabold stroke-3'>{title}</h1>
        <p className='p-3 '>{desc}</p>
    </div>
  )
}

export default Card