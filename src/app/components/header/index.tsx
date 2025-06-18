"use client";

import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { SearchPanel } from "../searchPanel";
import { Sun, Moon } from "lucide-react";

export const CustomHeader = () => {
  const [showPanel, setShowPanel] = useState(false);
  const handleShowPanel = () => {
    setShowPanel(true);
  };
  const handelCancelPanel = () => {
    setShowPanel(false);
  };
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark((prev) => !prev); // 取反即可 toggle
  };

  return (
    <div className="fixed top-0 z-50 flex w-full h-13 items-center">
      {/* header title */}
      <hr className="absolute w-full bottom-0 border-slate-200" />
      <div className="ml-40">
        <h1 className="font-bold">FUCHSIA LIB</h1>
      </div>

      {/* theme tab */}
      <div className="flex ml-auto gap-3 mr-4">
        <div
        className="rounded-full w-8 h-8 ml-auto flex justify-center items-center bg-slate-100 trainsition ease-in-out duration-100 hover:bg-slate-300"
        onClick={toggleTheme}
      >
        {dark ? <Moon size={16} /> : <Sun size={16} />}
      </div>
      {/* search btn */}
      <div
        className="flex w-30 h-8 rounded-full bg-slate-100 items-center select-none"
        onClick={handleShowPanel}
      >
        <p className="text-slate-400 ml-5">Search</p>
        <div className="flex bg-slate-200 rounded-full w-6 h-6 ml-5 justify-center items-center">
          <SearchOutlined />
        </div>
      </div>
      </div>
      

      <SearchPanel show={showPanel} onCancel={handelCancelPanel} />
    </div>
  );
};
