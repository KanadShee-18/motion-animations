"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Home,
  ListCollapseIcon,
  Settings,
  Users,
} from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function DashboardPage() {
  const [open, setOpen] = useState<boolean>(true);
  const metrics = [
    {
      title: "Total Users",
      value: "2,543",
      change: "+12%",
      changeText: "Increased by 257 since last month",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      title: "Revenue",
      value: "$45,257",
      change: "+8%",
      changeText: "Increased by $3,257 since last month",
      badgeColor: "bg-green-100 text-green-800",
    },
    {
      title: "Active Sessions",
      value: "1,325",
      change: "+5%",
      changeText: "Increased by 103 since yesterday",
      badgeColor: "bg-yellow-100 text-yellow-800",
    },
    {
      title: "Conversion Rate",
      value: "12.3%",
      change: "-2%",
      changeText: "Decreased by 1.8% since last week",
      badgeColor: "bg-red-100 text-red-800",
    },
  ];

  const sidebarVariant = {
    open: {
      width: "16rem",
    },
    closed: {
      width: "4.9rem",
    },
  };

  const parentVariant = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <motion.div
      initial={false}
      animate={open ? "open" : "closed"}
      exit="closed"
      transition={{ duration: 0.3 }}
      className="h-fit border-r border-neutral-200 flex"
    >
      {/* Sidebar */}
      <motion.nav
        variants={sidebarVariant}
        className={cn("bg-white border-r space-y-4 shadow-md")}
      >
        <div className="flex items-center justify-between p-4 gap-x-6 ml-2 mb-6">
          {open && (
            <h2 className="text-xl font-semibold text-indigo-600">Dashboard</h2>
          )}
          <ListCollapseIcon
            onClick={() => setOpen((prev) => !prev)}
            className="p-1 size-7 bg-neutral-300 rounded-full shadow-sm shadow-slate-700 cursor-pointer hover:text-slate-100 hover:bg-neutral-700 transition-colors duration-300 hover:shadow-neutral-950"
          />
        </div>
        <motion.ul variants={parentVariant} className="space-y-2 p-4">
          <NavItem
            icon={<Home className="w-5 h-5" />}
            label="Home"
            open={open}
          />
          <NavItem
            open={open}
            icon={<BarChart3 className="w-5 h-5" />}
            label="Analytics"
          />
          <NavItem
            open={open}
            icon={<Users className="w-5 h-5" />}
            label="Users"
          />
          <NavItem
            open={open}
            icon={<Settings className="w-5 h-5" />}
            label="Settings"
          />
        </motion.ul>
      </motion.nav>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-auto">
        <h1 className="text-2xl font-semibold mb-4">Overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="text-gray-500 text-sm font-medium mb-1">
                  {metric.title}
                </div>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <span
                  className={cn(
                    "inline-block text-xs font-semibold px-2 py-0.5 rounded mb-1",
                    metric.badgeColor
                  )}
                >
                  {metric.change}
                </span>
                <p className="text-sm text-gray-500">{metric.changeText}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="h-64">
            <CardContent className="flex items-center justify-center h-full text-gray-400">
              Chart Placeholder
            </CardContent>
          </Card>
          <Card className="h-64">
            <CardContent className="flex items-center justify-center h-full text-gray-400">
              Chart Placeholder
            </CardContent>
          </Card>
        </div>
      </main>
    </motion.div>
  );
}

function NavItem({
  icon,
  label,
  open,
}: {
  icon: React.ReactNode;
  label: string;
  open: boolean;
}) {
  const childVariant = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <motion.li
      variants={childVariant}
      className="flex items-center space-x-3 text-gray-700 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md"
    >
      {icon}
      {open && <span className="text-sm font-medium">{label}</span>}
    </motion.li>
  );
}
