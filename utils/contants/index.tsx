import { PaymentButton } from "@/components/animated-items/animated-button";
import DashboardPage from "@/components/animated-items/dashboard-variants";
import { HoverAnimatedCard } from "@/components/animated-items/hooks-exis";
import { LayoutCards } from "@/components/animated-items/layout-cards";
import { MotionHooks } from "@/components/animated-items/motion-hooks";
import { NavbarLayout } from "@/components/animated-items/navbar-layout";
import { SubscribeButton } from "@/components/animated-items/subscribe-button";
import { TextAnimation } from "@/components/animated-items/text-animated";
import { IconRocket } from "@tabler/icons-react";
import {
  BarChart3,
  CuboidIcon,
  IndianRupeeIcon,
  LayoutDashboardIcon,
  LayoutGridIcon,
  Navigation,
  Text,
} from "lucide-react";

export interface NavItem {
  name: string;
  url?: string;
  icon: React.ReactNode;
  code: string;
  preview?: React.ReactNode;
}

export const NAV_ITEMS: NavItem[] = [
  {
    preview: <SubscribeButton />,
    name: "Button",
    url: "/",
    icon: <LayoutDashboardIcon />,
    code: `
"use client";
import { motion } from "motion/react";

export const SubscribeButton = () => {
  return (
    <div
      className="[perspective::1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-950 flex flex-col gap-y-5 items-center justify-center"
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
        whileTap={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ translateZ: 100 }}
        className="relative group text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] cursor-pointer"
      >
        <p className="group-hover:text-cyan-500 duration-300 transition-colors">
          SUBSCRIBE
        </p>
        <span className="w-3/4 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent bottom-0 absolute h-px inset-x-0" />
        <span className="w-full mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent bottom-0 absolute h-1 inset-x-0 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
    </div>
  );
};`,
  },
  {
    preview: <HoverAnimatedCard />,
    name: "Card",
    url: "/",
    icon: <CuboidIcon />,
    code: `
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

export const Card = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
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
                className="mt-4 flex items-center gap-1 text-[10px] shadow-[...] px-2 py-1 rounded-lg hover:scale-95 duration-300 transition-all cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <Image
                  src={"/logo.webp"}
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
              <motion.div
                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                whileHover={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.3, type: "spring", stiffness: 150, damping: 15, mass: 1 }}
                className="absolute divide-y divide-neutral-200 w-full h-full bg-white rounded-lg inset-0 border border-dashed border-neutral-200"
              >
                {/* Icon Rows */}
                {/* Repeatable layout */}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};`,
  },
  {
    preview: <DashboardPage />,
    name: "Variants",
    url: "/dashboard",
    icon: <BarChart3 />,
    code: `
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
  const [open, setOpen] = useState(true);
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
    open: { width: "16rem" },
    closed: { width: "4.9rem" },
  };

  const parentVariant = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  return (
    <motion.div
      initial={false}
      animate={open ? "open" : "closed"}
      exit="closed"
      transition={{ duration: 0.3 }}
      className="h-screen border-r border-neutral-200 flex"
    >
      <motion.nav
        variants={sidebarVariant}
        className={cn("bg-white border-r space-y-4 shadow-md")}
      >
        <div className="flex items-center justify-between p-4 gap-x-6 ml-2 mb-6">
          {open && <h2 className="text-xl font-semibold">Dashboard</h2>}
          <ListCollapseIcon
            onClick={() => setOpen((prev) => !prev)}
            className="p-1 size-7 bg-neutral-300 rounded-full shadow-sm cursor-pointer hover:text-slate-100 hover:bg-neutral-700 transition-colors duration-300"
          />
        </div>
        <motion.ul variants={parentVariant} className="space-y-2 p-4">
          <NavItem icon={<Home className="w-5 h-5" />} label="Home" open={open} />
          <NavItem icon={<BarChart3 className="w-5 h-5" />} label="Analytics" open={open} />
          <NavItem icon={<Users className="w-5 h-5" />} label="Users" open={open} />
          <NavItem icon={<Settings className="w-5 h-5" />} label="Settings" open={open} />
        </motion.ul>
      </motion.nav>

      <main className="flex-1 bg-gray-50 p-6 overflow-auto">
        <h1 className="text-2xl font-semibold mb-4">Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="text-gray-500 text-sm font-medium mb-1">{metric.title}</div>
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

function NavItem({ icon, label, open }) {
  const childVariant = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
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
    `,
  },
  {
    preview: <MotionHooks />,
    name: "Motion Hooks",
    url: "/motion-hooks",
    icon: <IconRocket />,
    code: `
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
  const [backgroundColor, setBackgroundColor] = useState(backgrounds[0]);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.floor(latest * backgrounds.length);
    setBackgroundColor(backgrounds[index]);
  });

  return (
    <motion.div
      ref={containerRef}
      className="flex min-h-screen items-center justify-center bg-neutral-900"
      animate={{ backgroundColor }}
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-10 p-6 py-40">
        {features.map((feature, index) => (
          <Card key={index} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
};

const Card = ({ feature }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const translateContentY = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    { stiffness: 70, damping: 10, mass: 1 }
  );

  const translateOpacity = useTransform(scrollYProgress, [0, 0.5, 0.7, 1], [0, 1, 0.05, 0]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div ref={cardRef} className="grid grid-cols-2 gap-20 py-40">
      <motion.div
        style={{ filter: useMotionTemplate\`blur(\${blur}px)\`, scale }}
        className="flex flex-col gap-6"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p className="text-lg font-semibold text-neutral-400">{feature.description}</p>
      </motion.div>
      <motion.div
        style={{ y: translateContentY, opacity: translateOpacity }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};

const features = [
  {
    icon: <IconRocket className="size-8 text-neutral-200" />,
    title: "Generate Ultra Realistic Images in Seconds",
    description: "Use our advanced AI model to create stunning images that look like they were taken by a professional photographer.",
    content: (
      <div>
        <Image
          src="https://images.pexels.com/photos/20790476/pexels-photo-20790476.jpeg"
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
    description: "Experience the energy of the city with this vibrant urban scene.",
    content: (
      <div>
        <Image
          src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
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
          src="https://images.pexels.com/photos/34950/pexels-photo.jpg"
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
    description: "Marvel at the clean lines and bold shapes of modern buildings.",
    content: (
      <div>
        <Image
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
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
          src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
          alt="workspace"
          height={500}
          width={500}
          className="aspect-square rounded-lg object-cover"
        />
      </div>
    ),
  },
];
    `,
  },
  {
    preview: <LayoutCards />,
    name: "Layout Cards",
    url: "/layout-cards",
    icon: <LayoutGridIcon />,
    code: `
"use client";

import { Music4Icon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type CARD = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

const cards: CARD[] = [/* ...all cards here as in original ... */];

const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (ev: MouseEvent) => {
      if (ref.current && !ref.current.contains(ev.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);

  return ref;
};

export const LayoutCards = () => {
  const [currentCard, setCurrentCard] = useState<CARD | null>(null);
  const ref = useClickOutside(() => setCurrentCard(null));

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {currentCard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-10 h-full w-full bg-black/50 backdrop-blur-sm"
        />
      )}

      {currentCard && (
        <motion.div
          layoutId={\`card-\${currentCard.title}\`}
          ref={ref}
          className="fixed inset-0 z-20 m-auto h-[500px] w-80 overflow-hidden rounded-2xl border border-neutral-200 bg-white/85 p-6 shadow-lg backdrop-blur-sm"
        >
          <motion.img
            layoutId={\`card-image-\${currentCard.title}\`}
            src={currentCard.src}
            alt={currentCard.title}
            className="mx-auto mb-4 aspect-square rounded-xl"
          />
          <div className="flex flex-col items-start justify-between rounded-2xl p-4 shadow-inner">
            <div className="flex w-full flex-row items-center justify-between gap-2">
              <div className="flex flex-col justify-start gap-1 text-start">
                <motion.h2
                  layoutId={\`card-title-\${currentCard.title}\`}
                  className="text-xs font-semibold tracking-tight text-black"
                >
                  {currentCard.title}
                </motion.h2>
                <motion.p
                  layoutId={\`card-description-\${currentCard.title}\`}
                  className="text-[10px] font-medium text-neutral-400"
                >
                  {currentCard.description}
                </motion.p>
              </div>
              <motion.div layoutId={\`card-cta-\${currentCard.title}\`}>
                <Link
                  href={currentCard.ctaLink}
                  className="rounded-full bg-teal-500 px-4 py-1 text-xs text-white"
                >
                  {currentCard.ctaText}
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 h-40 overflow-y-auto [mask-image:linear-gradient(to_top,transparent_20%,black_80%)] pb-20"
            >
              {currentCard.content()}
            </motion.div>
          </div>
        </motion.div>
      )}

      <div className="mx-auto flex max-w-lg flex-col gap-10">
        {cards.map((card, index) => (
          <motion.button
            key={index}
            layoutId={\`card-\${card.title}\`}
            onClick={() => setCurrentCard(card)}
            className="flex cursor-pointer items-center justify-between rounded-xl border border-neutral-200 bg-white p-4"
          >
            <div className="flex items-center gap-4">
              <motion.img
                layoutId={\`card-image-\${card.title}\`}
                src={card.src}
                alt={card.title}
                className="aspect-square h-14 rounded-lg"
              />
              <div className="flex flex-col justify-start gap-2 text-start">
                <motion.h2
                  layoutId={\`card-title-\${card.title}\`}
                  className="text-xs font-semibold tracking-tight text-black"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={\`card-description-\${card.title}\`}
                  className="text-[10px] font-medium text-neutral-400"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.div
              layoutId={\`card-cta-\${card.title}\`}
              className="flex items-center gap-1 rounded-full bg-teal-500 px-4 py-1 text-xs text-white"
            >
              <Music4Icon className="size-3" />
              {card.ctaText}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
    `,
  },
  {
    preview: <NavbarLayout />,
    name: "Navbar",
    url: "/navbar",
    icon: <Navigation />,
    code: `
    "use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const navbarItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="py-40">
      <nav className="mx-auto flex max-w-xl rounded-full bg-gray-100 px-2 py-1 shadow-sm">
        {navbarItems.map((item, index) => (
          <Link
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            key={item.title}
            href={item.href}
            className="group relative w-full py-3 text-center text-sm"
          >
            <motion.span className="relative z-20 text-neutral-500 group-hover:text-neutral-100">
              {item.title}
            </motion.span>
            {hovered === index && (
              <motion.div
                layoutId="sameForAllListItems"
                className="absolute inset-0 h-full w-full rounded-full bg-teal-500"
              ></motion.div>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};`,
  },
  {
    preview: <TextAnimation />,
    name: "Text",
    url: "/#text",
    icon: <Text />,
    code: `
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
      },
    );
  };

  useEffect(() => {
    startAnimating();
  }, []);

  return (
    <div
      ref={scope}
      className="mx-auto max-w-4xl px-10 text-center text-4xl leading-12 font-bold text-white"
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
    `,
  },
  {
    preview: <PaymentButton />,
    name: "Payment Button",
    url: "/payment-button",
    icon: <IndianRupeeIcon />,
    code: `
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
      { y: [0, -10, 0] },
      { duration: 0.6, ease: "easeInOut" },
    ],
    [
      "#purchase-button",
      { y: [0, 5, 0] },
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
    <div
      ref={scope}
      className="relative flex h-20 w-[30rem] items-center justify-center rounded-4xl"
    >
      <motion.button
        id="purchase-button"
        onClick={startAnimating}
        initial={{ width: "30rem" }}
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
          style={{ opacity: 0, scale: 0.2 }}
          className="gradient-box absolute -bottom-5 m-auto h-5 w-full rounded-2xl bg-cyan-400 blur-xl"
        ></motion.span>
      </motion.button>

      <motion.svg
        style={{ opacity: 0 }}
        className="check-icon pointer-events-none absolute inset-0 z-50 m-auto h-8 w-8"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeOut",
          }}
          d="M5 13L9 17L19 7"
          stroke="currentColor"
          strokeWidth={3}
          className="check-icon-path pointer-events-none absolute inset-0 z-50 m-auto h-8 w-8 text-white"
        />
      </motion.svg>
    </div>
  );
};
    `,
  },
];
