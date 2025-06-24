import React from "react";
import { CustomHeader } from "../header";
import { SiderWrapper } from "../mySider";

type layoutProps = {
  children?: React.ReactNode;
};

export const MyLayout = (props: layoutProps) => {
  return (
    <div className="h-screen flex">
      <CustomHeader />
      <div className="flex flex-1 overflow-hidden">
        <SiderWrapper />
        <div className="flex-1 overflow-y-auto">{props.children}</div>
      </div>
    </div>
  );
};
