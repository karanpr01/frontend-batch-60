import React from 'react'

const EmptyState = ({imageSrc , title , description}) => {
  return (
    <div className='flex flex-col justify-center items-center  w-full mb-10'>
        <img src={imageSrc} alt="empty" className='w-124 h-124' />
        <h2 className='text-2xl font-bold text-black dark:text-white'>{title}</h2>
        <p className='dark:text-zinc-400 text-zinc-800'>{description}</p>
    </div>
  )
}

export default EmptyState