import React from 'react'

export default function FilterAnalyzeItems({title, description, price}) {
  return (
    <a href='/analyze/kal' className='w-full flex flex-col gap-5'>
        <div className='flex justify-between items-start'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-xl font-bold'>
                    {title}
                </h2>
                <p className='text-neutral-600 w-4/5'>
                    {description}
                </p>
            </div>
            <p className='whitespace-nowrap text-red-500 font-bold text-lg'>
                {price}
            </p>
        </div>
        <hr />
    </a>
  )
}
