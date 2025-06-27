"use client";

import { AnimationSequence, motion, useAnimate } from "motion/react";

export const PaymentButton = () => {
  const [scope, animate] = useAnimate();

  const sequences: AnimationSequence = [
    [".loader", { opacity: [0, 1], width: "2rem" }, { duration: 0.1 }],
    [".loader", { rotate: 360 * 4 }, { duration: 2 }],
    [
      ".loader",
      { opacity: [1, 0], width: "0rem", scale: [1, 0] },
      { duration: 0.2 },
    ],
    [
      ".text",
      { display: "none", opacity: 0, scale: [1, 0] },
      { duration: 0.1 },
    ],
    [
      "#purchase-button",
      {
        width: ["30rem", "5rem"],
        borderRadius: "1000px",
        backgroundImage: "linear-gradient(to right, #00ff99, #00ccff)",
      },
      { duration: 0.4, ease: "easeOut" },
    ],
    [
      "#purchase-button",
      {
        // opacity: [0, 1],
        scale: [1, 1.2, 0.8, 1],
      },
      { duration: 0.3, ease: "easeInOut" },
    ],
    [
      ".check-icon",
      { opacity: [0, 1], scale: [0, 1] },
      { duration: 0.1, ease: "easeOut" },
    ],
    [
      ".check-icon-path",
      { pathLength: 1 },
      { duration: 0.8, ease: "easeInOut" },
    ],
    [
      ".check-icon",
      {
        y: [0, -10, 0],
      },
      { duration: 0.6, ease: "easeInOut" },
    ],
    [
      "#purchase-button",
      {
        y: [0, 5, 0],
      },
      { duration: 0.4, ease: "easeInOut", at: "-0.4" },
    ],
    [
      ".gradient-box",
      { opacity: [0, 0.6], scale: [0.2, 1] },
      { duration: 0.4, ease: "easeInOut" },
    ],
  ];

  const startAnimating = async () => {
    animate(sequences);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div
        ref={scope}
        className="relative flex h-20 w-[30rem] items-center justify-center rounded-4xl py-40"
      >
        <motion.button
          id="purchase-button"
          onClick={startAnimating}
          initial={{
            width: "30rem",
          }}
          className="relative flex h-20 cursor-pointer items-center justify-center gap-3 rounded-4xl bg-gradient-to-l from-indigo-600 via-blue-600 to-purple-600 font-medium text-white"
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="loader h-5 w-5 text-white"
            initial={{ width: "0rem" }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 0.4,
              ease: "linear",
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a9 9 0 1 0 9 9" />
          </motion.svg>

          <span className="text">Purchase Now ($99.99)</span>
          <motion.span
            style={{
              opacity: 0,
              scale: 0.2,
            }}
            className="gradient-box absolute -bottom-5 m-auto h-5 w-full rounded-2xl bg-cyan-400 blur-xl"
          ></motion.span>
        </motion.button>
        <motion.svg
          style={{
            opacity: 0,
          }}
          className={
            "check-icon pointer-events-none absolute inset-0 z-50 m-auto h-8 w-8"
          }
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{
              pathLength: 0,
            }}
            transition={{
              duration: 0.3,
              type: "tween",
              ease: "easeOut",
            }}
            d="M5 13L9 17L19 7"
            stroke="currentColor"
            strokeWidth={3}
            className={
              "check-icon-path pointer-events-none absolute inset-0 z-50 m-auto h-8 w-8 text-white"
            }
          />
        </motion.svg>
      </div>
    </div>
  );
};
