import React from 'react'

const Info = ({conut,title}) => {
  return (
    <div className='my-24 bg-black/90 border-zinc-700 rounded-md px-4 py-4 flex justify-center items-center flex-col'>
        <span className='text-3xl text-yellow-500 font-bold'>{conut}</span>
        <h1 className='text-xl text-zinc-400 font-semibold'>{title}</h1>
    </div>
  )
}

export default Info