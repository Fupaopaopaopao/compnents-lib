"use client";

import { Sider } from "../sider";
import { MenuItem } from "../menu";
import { label } from "framer-motion/client";

export const SiderWrapper = () => {
  const clickitem1 = () => console.log(111);
  const clickitem2 = () => console.log("烦死了");

  const items: MenuItem[] = [
    { label: <p>ITEM 1 MENUITEM</p>, click: clickitem1, key: "item1" },
    { label: <p>ITEM 2 MENUITEM</p>, click: clickitem2, key: "item2",children:[{label:<p>ITEM 2 SUBMENUITEM</p>,click:clickitem2,key:"subitem1"}] },
  ];

  return <Sider items={items} />;
};
