"use client";

import { Sider } from "../sider";
import { MenuItem } from "../menu";
import {
  AppstoreOutlined,
  UserOutlined,
  SettingOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import React from "react";

export const SiderWrapper = () => {
  const handleClick = (label: string) => () => console.log(label);

  // 构造 20 个普通菜单项 + 1 个 group + 1 个 submenu
  const items: MenuItem[] = [
    {
      label: (
        <div className="flex items-center gap-2">
          <HomeOutlined />
          <span>Dashboard</span>
        </div>
      ),
      click: handleClick("Dashboard"),
      key: "dashboard",
    },
    ...Array.from({ length: 10 }, (_, i) => ({
      label: (
        <div className="flex items-center gap-2">
          <AppstoreOutlined />
          <span>Item {i + 1}</span>
        </div>
      ),
      click: handleClick(`Item ${i + 1}`),
      key: `item-${i + 1}`,
    })),
    {
      label: (
        <div className="flex items-center gap-2">
          <UserOutlined />
          <span>Users</span>
        </div>
      ),
      click: () => {},
      key: "group-users",
      type: "group",
      children: [
        {
          label: (
            <div className="flex items-center gap-2 pl-4">
              <span>User List</span>
            </div>
          ),
          click: handleClick("User List"),
          key: "user-list",
        },
      ],
    },
    {
      label: (
        <div className="flex items-center gap-2">
          <SettingOutlined />
          <span>Settings</span>
        </div>
      ),
      click: () => {},
      key: "settings",
      children: [
        {
          label: (
            <div className="flex items-center gap-2 pl-4">
              <span>General</span>
            </div>
          ),
          click: handleClick("General"),
          key: "settings-general",
        },
        {
          label: (
            <div className="flex items-center gap-2 pl-4">
              <span>Security</span>
            </div>
          ),
          click: handleClick("Security"),
          key: "settings-security",
        },
      ],
    },
  ];

  return <Sider items={items} />;
};
