"use client"
import React, { useState } from "react";
import { MenuItem } from "../menu";
import { Menu } from "../menu";
import { LeftOutlined } from "@ant-design/icons";

type SiderProps = {
  items: MenuItem[];
};

export const Sider = (props: SiderProps) => {
  const [collapse,setCollapse] = useState(false);
  const handelCollapse = () =>{
    console.log(collapse)
    setCollapse((prev)=>!prev)
  }

  
  return (
    <div className={`h-screen flex flex-col transtion duration-300 ease-in-out ${collapse?"w-15":"w-80"}`}>
      <div className="overflow-y-auto h-full py-4 px-2 mt-15 border-r border-slate-100  bg-slate-50">
        <Menu items={props.items} collapse={collapse}/>
      </div>
      <div className="absolute bottom-0 border-t border-r border-slate-200 bg-white h-10 w-[inherit] flex justify-center items-center trainsition duration-300 ease-in-out hover:bg-slate-100" onClick={handelCollapse}>
        <div className={`flex justify-center items-center transition duration-300 ease-in-out transform origin-center ${collapse ?"rotate-0":"rotate-180"}`}>
          <LeftOutlined />
        </div>
      </div>
    </div>
  );
};
