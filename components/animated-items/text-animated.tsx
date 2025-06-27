"use client";

import { motion, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";

export const TextAnimation = () => {
  const [scope, animate] = useAnimate();

  const text =
    "Welcome to Dons Profile. The first rule of Dons Profile is that you do not talk about Dons Profile. The second rule of Dons Profile is that you do not talk about Dons Profile. ";

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.02),
      }
    );
  };

  useEffect(() => {
    startAnimating();
  }, []);

  return (
    <div
      ref={scope}
      className="mx-auto max-w-4xl px-10 py-20 text-center text-4xl leading-12 font-bold text-white"
    >
      {/* <button
        onClick={startAnimating}
        className="mb-8 cursor-pointer rounded-full bg-neutral-700 px-4 py-2 hover:bg-zinc-600"
      >
        DON PROFILE
      </button> */}
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index + word}
          style={{
            opacity: 0,
            y: 15,
            filter: "blur(10px)",
            display: "inline-block",
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </div>
  );
};
