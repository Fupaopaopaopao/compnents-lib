"use client"
import Image from "next/image";
import { CustomButton } from "./components/button";
import { CustomCard } from "./components/card";
import { EditOutlined } from "@ant-design/icons";
import { CustomModal } from "./components/modal";
import { useState } from "react";
import { CustomDropDown } from "./components/dropdown";
import { p } from "framer-motion/client";

export default function Home() {
  const texts = "Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?"
  // const text1 = "This is a squirrel."
  const [show, setShow] = useState(false);
  const handleClick=()=>{
    setShow(true);
  }
  const handleCancel =()=>{
    setShow(false);
  }
  const clickItem1 = ()=>{
    setShow(true);
  }

const items = [
    {
  
    label: (
      <p>item 1</p>
    ),
    click:clickItem1
  },
  {
    
    label: (
      <p>item 2</p>
    ),
  click:clickItem1}
]


  return (
    <div>
      <div className="flex p-5 gap-2">
        <CustomButton label="Modal" icon={<EditOutlined />} onClick={handleClick}/>
        <CustomDropDown trigger="click" items={items}>
          <CustomButton label="Dropdown" icon={<EditOutlined />}/>
          </CustomDropDown>
      </div>
      <div className="p-5 flex flex-wrap gap-2">
        <CustomCard title="Title" subtitle="Subtitle" paragraph={texts} img="/images/test.png"/>
        <CustomCard title="This is a really long title test for testing the line." subtitle="Subtitle" paragraph={texts} img="/images/test1.jpg"/>
      </div>
      <div>
        <CustomModal title="Model" paragraph="This is a Modal using the motion module and tailwind!!!" show={show} onCancel={handleCancel}/>
      </div>
    </div>
  );
}
