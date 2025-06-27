"use client";

import { IconRocket } from "@tabler/icons-react";
import {
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "motion/react";

export const MotionHooks = () => {
  const backgrounds = ["#171717", "#16213E", "#352F44", "#344C64", "#0B192C"];

  const [backgroundColor, setBackgroundColor] = useState<string>(
    backgrounds[0]
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    // ["viewport-start meets element-start", "element-end meets viewport-end"]
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll Progress:", latest);
    const finalValue = Math.floor(latest * backgrounds.length);
    setBackgroundColor(backgrounds[finalValue]);
  });

  return (
    <motion.div
      ref={containerRef}
      className="flex min-h-screen items-center justify-center bg-neutral-900"
      animate={{
        backgroundColor,
      }}
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-10 p-6 py-40">
        {features.map((feature, index) => (
          <Card key={index} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
};

const Card = ({ feature }: { feature: Feature }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
    // ["element-start meets viewport-end", "viewport-end meets element-start"]
  });
  const translateContentY = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    {
      stiffness: 70,
      damping: 10,
      mass: 1,
    }
  );
  const translateOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    [0, 1, 0.05, 0]
  );
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div ref={cardRef} className="grid grid-cols-2 gap-20 py-40">
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale,
        }}
        className="flex flex-col gap-6"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p className="text-lg font-semibold text-neutral-400">
          {feature.description}
        </p>
      </motion.div>
      <motion.div
        style={{
          y: translateContentY,
          opacity: translateOpacity,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content?: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: <IconRocket className="size-8 text-neutral-200" />,
    title: "Generate Ultra Realistic Images in Seconds",
    description:
      "Use our advanced AI model to create stunning images that look like they were taken by a professional photographer.",
    content: (
      <div>
        <Image
          src={
            "https://images.pexels.com/photos/20790476/pexels-photo-20790476.jpeg"
          }
          alt="car"
          height={500}
          width={500}
          className="aspect-square rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="size-8 text-neutral-200" />,
    title: "Vibrant City Life",
    description:
      "Experience the energy of the city with this vibrant urban scene.",
    content: (
      <div>
        <Image
          src={
            "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
          }
          alt="city"
          height={500}
          width={500}
          className="aspect-square rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="size-8 text-neutral-200" />,
    title: "Serene Nature",
    description: "Relax with a peaceful view of nature's beauty.",
    content: (
      <div>
        <Image
          src={"https://images.pexels.com/photos/34950/pexels-photo.jpg"}
          alt="nature"
          height={500}
          width={500}
          className="aspect-square rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="size-8 text-neutral-200" />,
    title: "Modern Architecture",
    description:
      "Marvel at the clean lines and bold shapes of modern buildings.",
    content: (
      <div>
        <Image
          src={
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
          }
          alt="architecture"
          height={500}
          width={500}
          className="aspect-square rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="size-8 text-neutral-200" />,
    title: "Creative Workspace",
    description: "Get inspired by this creative and productive workspace.",
    content: (
      <div>
        <Image
          src={
            "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
          }
          alt="workspace"
          height={500}
          width={500}
          className="aspect-square rounded-lg object-cover"
        />
      </div>
    ),
  },
];
