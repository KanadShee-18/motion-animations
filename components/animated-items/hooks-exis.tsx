"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  XIcon,
  MessageCircleCodeIcon,
  TimerIcon,
  AlignHorizontalJustifyEnd,
  CuboidIcon,
  PlusIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverAnimatedCard = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div className="w-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              filter: "blur(10px)",
            }}
            animate={{
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className={cn(
              "w-72 min-h-[28rem] h-[28rem] rounded-xl p-4 flex flex-col bg-white",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
            )}
          >
            <h2 className="font-bold text-[10px]">Aceternity UI Component</h2>
            <p className="text-neutral-600 mt-2 text-[10px]">
              A Collection of beautiful UI components, let's get on with it.
            </p>
            <div className="flex item-center justify-center">
              <button
                className="mt-4 flex items-center gap-1 text-[10px] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-2 py-1 rounded-lg hover:scale-95 duration-300 transition-all cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <Image
                  src={
                    "https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?semt=ais_items_boosted&w=740"
                  }
                  width={50}
                  height={50}
                  alt="aceternity_logo"
                  className="size-4"
                />
                Aceternity
                <XIcon className="text-neutral-400 size-3" />
              </button>
            </div>
            <div className="bg-gray-100 border border-dashed border-neutral-200 flex flex-1 mt-4 rounded-lg relative">
              {/* Motion Divs Start Here  */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  mass: 1,
                  ease: ["easeInOut"],
                }}
                className="absolute divide-y divide-neutral-200 w-full h-full bg-white rounded-lg inset-0 border border-dashed border-neutral-200"
              >
                <div className="flex gap-2 p-4">
                  <div className="size-7 flex shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-2 py-1 rounded-lg">
                    <MessageCircleCodeIcon className="size-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A Collection of UI Components
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="size-7 flex shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-2 py-1 rounded-lg">
                    <TimerIcon className="size-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      24 Hours Turnaround
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      Super fast delivery at warp speed.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="size-7 flex shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-2 py-1 rounded-lg">
                    <AlignHorizontalJustifyEnd className="size-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      More 360 degree Features
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      We are here to help you with all your needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="size-7 flex shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-2 py-1 rounded-lg">
                    <CuboidIcon className="size-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Some other feature
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      Here goes another feature that is really useful.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4 items-center justify-center">
                  <div className="size-7 flex shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-2 py-1 rounded-lg">
                    <PlusIcon className="size-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Create Project
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Motion Divs Ends Here  */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
