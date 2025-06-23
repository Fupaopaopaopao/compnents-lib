"use client";

import { DownOutlined } from "@ant-design/icons";
import React, { useState } from "react";

type MenuProps = {
  items: MenuItem[];
  collapse?: boolean;
};

export type MenuItem = {
  label: React.ReactNode;
  click?: () => void;
  key: string;
  children?: MenuItem[];
  type?: string;
  icon?: React.ReactNode;
};

export const Menu = (props: MenuProps) => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [active, setActive] = useState<string | null>(null);

  const shouldRenderChildren = (item: MenuItem) => {
    if (!item.children) return false;

    if (item.type === "group") {
      return true;
    }

    return openKeys.includes(item.key);
  };

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
            {item.type === "group" && item.children ? (
              !props.collapse && (
                <div className="text-slate-400 font-semibold px-3 py-1 select-none">
                  {item.label}
                </div>
              )
            ) : (
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
                    if (item.click) {
                      item.click();
                    }
                    handelActive(item.key);
                  }
                }}
                key={index}
              >
                <div className="flex items-center gap-2">
                  {props.collapse ? (
                    <div>{item.icon}</div>
                  ) : (
                    <>
                      {item.icon}
                      <span>{item.label}</span>
                    </>
                  )}
                </div>
                {!props.collapse && item.children && (
                  <div
                    className={`transition-transform duration-300 ${
                      openKeys.includes(item.key) ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <DownOutlined />
                  </div>
                )}
              </div>
            )}

            {shouldRenderChildren(item) &&
              !props.collapse &&
              renderItem(item.children!)}
          </div>
        ))}
      </div>
    );
  };
  return <div>{renderItem(props.items)}</div>;
};
