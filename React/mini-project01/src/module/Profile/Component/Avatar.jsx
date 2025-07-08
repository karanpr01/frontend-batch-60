import React from 'react'

const Avatar = ({imgUrl,Name}) => {
  return (
    <div className='flex flex-col justify-center items-center mt-10 '>
        <img src={imgUrl} alt="avatao" className='border-2 border-yellow-400 rounded-full' width={200} />
        <h2 className='text-3xl text-white font-bold mt-4 px-2 py-2 border-2 border-yellow-400 border-dashed rounded-md'>{Name}</h2>
    </div>
  )
}

export default Avatar