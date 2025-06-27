"use client";

import { motion } from "motion/react";
// For 3D: [perspective::1000px] [transform-style:preserve-3d]
export const SubscribeButton = () => {
  return (
    <div
      className="[perspective::1000px] [transform-style:preserve-3d] h-[400px] w-full bg-neutral-950 flex flex-col gap-y-5 items-center justify-center"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(6,182,212,0.09) 1px, transparent 0)",
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{
          rotateY: 10,
          rotateX: 25,
          y: -5,
          boxShadow: "0px 20px 50px rgba(8, 112, 184, 0.7)",
        }}
        whileTap={{
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        style={{
          translateZ: 100,
        }}
        className="relative group text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] cursor-pointer"
      >
        <p
          className={`group-hover:text-cyan-500 duration-300 transition-colors`}
        >
          SUBSCRIBE
        </p>
        <span className="w-3/4 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent bottom-0 absolute h-px inset-x-0" />
        <span className="w-full mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent bottom-0 absolute h-1 inset-x-0 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
    </div>
  );
};
