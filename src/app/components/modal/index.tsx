"use client"
import { CloseOutlined } from '@ant-design/icons'
import React from 'react'
type ModalProps ={
    title:string;
    paragraph:string;

}

export const CustomModal:React.FC<ModalProps> = (props) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40'>
        <div className='relative h-60 max-w-150 w-full rounded bg-white shadow-lg '>
            <div className='absolute h-10 w-10 mt-3 mr-3 top-0 right-0 rounded transition ease-in-out hover:bg-slate-100 flex items-center justify-center'>
                <CloseOutlined />
            </div>
            <button className='absolute bottom-0 right-0 mb-3 mr-6 bg-slate-900 text-white rounded w-20 h-7 transition ease-in-out hover:bg-slate-700'>OK</button>
            <button className='absolute bottom-0 right-10 mb-3 mr-20 rounded border-1 border-slate-900 w-20 h-7 transition ease-in-out hover:bg-slate-300'>Cancel</button>

            <div className='flex flex-col p-10'>
                <h1 className='text-xl font-bold'>{props.title}</h1>
                <p className='mt-3'>{props.paragraph}</p>
            </div>

            
        </div>
    </div>
  )
}
