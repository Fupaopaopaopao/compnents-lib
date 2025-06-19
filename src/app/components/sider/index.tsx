import React from 'react'
import { MenuItem } from '../menu';
import { Menu } from '../menu';


type SiderProps = {
    items:MenuItem[];
}

export const Sider = (props:SiderProps) => {
      
  return (
    <div className='fixed left-0 h-full w-80 border-r border-slate-100 '>
        <div className='py-t'><Menu items={props.items}/></div>

    </div>
  )
}
