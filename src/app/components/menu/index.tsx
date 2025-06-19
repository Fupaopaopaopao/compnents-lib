"use client";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
import React, { useState } from "react";

type MenuProps = {
  items: MenuItem[];
};

export type MenuItem = {
  label: React.ReactNode;
  click: () => void;
  key: string;
  children?: MenuItem[];
};

export const Menu = (props: MenuProps) => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [active, setActive] = useState<string | null>(null);

  const renderItem = (menu: MenuItem[]) => {
    const handelOpen = (key: string) => {
      setOpenKeys((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
      );
    };

    const handelActive = (key: string) => {
      setActive(key);
    };

    return (
      <div>
        {menu.map((item, index) => (
          <div key={item.key} className="p-1">
            <div
              className={`flex justify-between transition ease-in-out rounded py-2 px-3 cursor-pointer transition ease-in-out duration-300 select-none
              ${
                active === item.key
                  ? "bg-slate-900 text-white shadow-lg"
                  : "hover:bg-slate-100"
              }`}
              onClick={() => {
                if (item.children) {
                  handelOpen(item.key);
                } else {
                  item.click();
                  handelActive(item.key);
                }
              }}
              key={index}
            >
              {item.label}
              {item.children && (
                <div
                  className={`transition-transform duration-300 ${
                    openKeys.includes(item.key) ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <UpOutlined />
                </div>
              )}
            </div>
            {item.children &&
              openKeys.includes(item.key) &&
              renderItem(item.children)}
          </div>
        ))}
      </div>
    );
  };
  return <div>{renderItem(props.items)}</div>;
};
