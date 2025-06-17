"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

type DropdownProps ={
    trigger : 'click' | 'hover';
    children: React.ReactNode;
    items:DropdownItem[];
}
type DropdownItem = {
    label:React.ReactNode;
    click:()=>void;
    key:number;
}


export const CustomDropDown = (props: DropdownProps) => {
    const [showDrop,setShowDrop] = useState(false);

const handleClick=()=>{
    showDrop ? setShowDrop(false) : setShowDrop(true);
}
let timeoutId: NodeJS.Timeout;
const handleMouseEnter =()=>{
    clearTimeout(timeoutId);
    setShowDrop(true);
}
const handleMouseLeave = ()=>{
    timeoutId=setTimeout(() => setShowDrop(false), 400);
}

  
  return (
    <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div>{props.children}</div>
        <AnimatePresence>
            {showDrop &&(
            <motion.div className='absolute mt-2 rounded shadow-lg bg-white border border-slate-200 p-2 z-50 w-50'
               initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}> 
                {props.items.map((item)=>(
                    
                    <div className='transition ease-in-out rounded hover:bg-slate-300 py-1 px-3' onClick={()=>{
                        item.click();
                        setShowDrop(false);
                    }}>
                        {item.label}
                    </div>
                ))}
            </motion.div>
        )}
        </AnimatePresence>

    </div>
  )
}
