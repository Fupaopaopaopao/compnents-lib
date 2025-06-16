"use client";

import React, { useState } from "react";
import { ReactNode } from "react";

interface CustomButtonProps {
  label: string;
  icon?: ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ label, icon }) => {
  const [showPing, setShowPing] = useState(false);

  const handleClickPing = () => {
    setShowPing(true);
    setTimeout(() => setShowPing(false), 400);
  };

  return (
    <button
      onClick={handleClickPing}
      className="relative overflow-hidden px-6 py-1
       bg-slate-900 text-white text-lg rounded-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:shadow-lg dark:bg-slate-300 dark:text-slate-900 select-none"
    >
      {showPing && (
        <span className="absolute inset-0 animate-ping bg-slate-100 opacity-40 rounded-[inherit] pointer-events-none"></span>
      )}

      <div className="flex">
        <span>{icon}</span>
        {icon ? (
          <span className="pl-2">{label}</span>
        ) : (
          <span>{label}</span>
        )}
      </div>
    </button>
  );
};
