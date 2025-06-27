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

export const NavbarLayout = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="py-20">
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
};
