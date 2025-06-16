"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CustomButton } from "../button";

type CustomCardProps = {
  title: string;
  subtitle: string;
  paragraph: string;
  img: string;
};

export const CustomCard: React.FC<CustomCardProps> = (props) => {
  const [enter, setEnter] = useState(false);
  const handleEnter = () => {
    setEnter(true);
  };
  const handleLeave = () => {
    setEnter(false);
  };

  return (
    <div
      className="group flex flex-col h-90 w-60 rounded border border-slate-200 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg overflow-hidden"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="aspect-[1/1.15] group-hover:aspect-[2/1] transition-all duration-500 overflow-hidden">
        <img
          src={props.img}
          alt="topic"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col px-3 py-2 transition-all duration-500 overflow-hidden">
        <span className="text-xl font-bold text-slate-900 line-clamp-2 group-hover:line-clamp-none">
          {props.title}
        </span>

        {enter && (
          <div>
            <span className="text-sm font-normal text-slate-400">
              {props.subtitle}
            </span>
            <p className="mt-5 text-base font-normal text-slate-700 line-clamp-4">
              {props.paragraph}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
