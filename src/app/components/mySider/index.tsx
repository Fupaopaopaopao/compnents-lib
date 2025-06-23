"use client";

import { Sider } from "../sider";
import { MenuItem } from "../menu";
import {
  AppstoreOutlined,
  UserOutlined,
  SettingOutlined,
  HomeOutlined,
  LockOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import React from "react";

export const SiderWrapper = () => {
  const menuItems: MenuItem[] = [
    {
      key: "main-group",
      label: "Main Navigation",
      type: "group",
      children: [
        {
          key: "dashboard",
          label: "Dashboard",
          icon: <HomeOutlined />,
          click: () => console.log("Go to Dashboard"),
        },
        {
          key: "apps",
          label: "Applications",
          icon: <AppstoreOutlined />,
          click: () => console.log("Go to Applications"),
        },
      ],
    },
    {
      key: "user-group",
      label: "User Settings",
      type: "group",
      children: [
        {
          key: "user",
          label: "User",
          icon: <UserOutlined />,
          children: [
            {
              key: "profile",
              label: "Profile",
              icon: <UserOutlined />,
              click: () => console.log("Go to Profile"),
            },
            {
              key: "team",
              label: "Team",
              icon: <TeamOutlined />,
              click: () => console.log("Go to Team"),
            },
          ],
        },
        {
          key: "security",
          label: "Security",
          icon: <LockOutlined />,
          children: [
            {
              key: "password",
              label: "Password",
              icon: <LockOutlined />,
              click: () => console.log("Change Password"),
            },
            {
              key: "2fa",
              label: "Two-Factor Auth",
              icon: <LockOutlined />,
              click: () => console.log("2FA Settings"),
            },
          ],
        },
      ],
    },
    {
      key: "system",
      label: "System",
      icon: <SettingOutlined />,
      click: () => console.log("System settings"),
    },
  ];

  return <Sider items={menuItems} />;
};
