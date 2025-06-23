import React from 'react'
import { MenuItem } from '../menu';
import { Menu } from '../menu';


type SiderProps = {
    items:MenuItem[];
}

export const Sider = (props:SiderProps) => {
      
  return (
    <div className='fixed left-0 top-0 h-screen w-80  flex flex-col '>
        <div className='overflow-y-auto h-full py-4 px-2 mt-15 border-r border-slate-100  bg-slate-50'><Menu items={props.items}/></div>

    </div>
  )
}
