"use client";

import {
  BarChart3,
  CuboidIcon,
  IndianRupeeIcon,
  LayoutDashboardIcon,
  LayoutGridIcon,
  Navigation,
  Text,
} from "lucide-react";

import { IconRocket } from "@tabler/icons-react";
import { useState } from "react";
import { CodeBlock } from "./animated-items/code-block";
import { Button } from "./ui/button";
import { NAV_ITEMS, NavItem } from "@/utils/contants";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
}

export const SectionNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeComponent, setActiveComponent] = useState<NavItem | null>(
    NAV_ITEMS[0]
  );
  const [activeTab, setActiveTab] = useState<"code" | "preview">("preview");
  return (
    <div className="relative w-full lg:max-w-4xl mx-auto">
      <aside className="w-full min-h-full md:border-b border-indigo-900 p-4 bg-background/5 backdrop-blur-md shadow-md space-y-2 divide-y divide-secondary flex flex-col lg::flex-row lg:flex-wrap">
        <h2 className="mb-5 text-primary text-3xl font-semibold">
          Animated Components{" "}
        </h2>
        {NAV_ITEMS.map((section, index) => (
          <Button
            key={index}
            variant={activeIndex === index ? "default" : "ghost"}
            onClick={() => {
              setActiveIndex(index);
              setActiveComponent(section);
            }}
            className={cn(
              `flex items-center justify-start text-sm group 
             `,
              activeIndex !== index && "text-secondary-foreground"
            )}
          >
            {section.icon}
            <p className="group-hover:translate-x-2 duration-200 transition-all">
              {section.name}
            </p>
          </Button>
        ))}
      </aside>
      <main className="p-6 flex-1 pb-20">
        <div className="flex items-center w-fit p-1 rounded-full mb-5 bg-secondary/50">
          <button
            onClick={() => setActiveTab("code")}
            className={cn(
              "px-5 py-2 cursor-pointer rounded-full text-sm font-medium transition-colors",
              activeTab === "code"
                ? "bg-primary/70"
                : "text-zinc-400 hover:text-white"
            )}
          >
            CODE
          </button>
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "px-5 py-2 rounded-full cursor-pointer text-sm font-medium transition-colors",
              activeTab === "preview"
                ? "bg-primary/70"
                : "text-zinc-400 hover:text-white"
            )}
          >
            PREVIEW
          </button>
        </div>
        {/* Tab Content */}
        <div className="flex flex-col gap-y-4 divide-y">
          {activeComponent && activeTab === "code" && (
            <div key={activeComponent.name} className="mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Code for: {activeComponent.name}_
              </h2>
              <div className="max-w-3xl mx-auto w-full">
                <CodeBlock
                  language="tsx"
                  filename="DummyComponent.tsx"
                  code={activeComponent.code}
                />
              </div>
            </div>
          )}

          {activeComponent && activeTab === "preview" && (
            <div className="flex flex-col gap-y-3">
              <h2 className="text-3xl text-primary font-bold">
                Preview: {activeComponent.name}
              </h2>
              <div>{activeComponent.preview}</div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
