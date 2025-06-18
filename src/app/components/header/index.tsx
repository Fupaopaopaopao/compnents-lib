import { SearchOutlined } from '@ant-design/icons'
import React from 'react'



export const CustomHeader = () => {
  return (
    <div className='fixed top-0 z-50 flex w-full h-13 items-center'>

        <hr className='absolute w-full bottom-0 border-slate-200'/>
        <div className='ml-40'>
            <h1 className='font-bold'>Fuchsia's Component Library</h1>
        </div>

        <div className='flex w-30 h-8 rounded-full bg-slate-100 items-center select-none ml-auto mr-4'>
            <p className='text-slate-400 ml-5'>Search</p>
            <div className='flex bg-slate-200 rounded-full w-6 h-6 ml-5 justify-center items-center'>
                <SearchOutlined />
            </div>
        </div>
        
    </div>
  )
}
