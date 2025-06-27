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

const cards: CARD[] = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br />
          Her songs often explore themes of tragic romance, glamour, and
          melancholia, drawing inspiration from both contemporary and vintage
          pop culture. With a career that has seen numerous critically acclaimed
          albums, Lana Del Rey has established herself as a unique and
          influential figure in the music industry, earning a dedicated fan base
          and numerous accolades.
        </p>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br />
          His songs often reflect the struggles and triumphs of everyday life,
          capturing the essence of Punjabi culture and traditions. With a career
          spanning over two decades, Babu Maan has released numerous hit albums
          and singles that have garnered him a massive fan following both in
          India and abroad.
        </p>
      );
    },
  },
  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br />
          Their songs often reflect themes of aggression, social issues, and
          personal struggles, capturing the essence of the heavy metal genre.
          With a career spanning over four decades, Metallica has released
          numerous hit albums and singles that have garnered them a massive fan
          following both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "Led Zeppelin",
    title: "Stairway To Heaven",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry. Formed in
          London in 1968, they have become a cultural icon in the rock music
          world. <br /> <br />
          Their songs often reflect a blend of blues, hard rock, and folk music,
          capturing the essence of the 1970s rock era. With a career spanning
          over a decade, Led Zeppelin has released numerous hit albums and
          singles that have garnered them a massive fan following both in the
          United Kingdom and abroad.
        </p>
      );
    },
  },
  {
    description: "Mustafa Zahid",
    title: "Toh Phir Aao",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          "Awarapan", a Bollywood movie starring Emraan Hashmi, is renowned for
          its intense storyline and powerful performances. Directed by Mohit
          Suri, the film has become a significant work in the Indian film
          industry. <br /> <br />
          The movie explores themes of love, redemption, and sacrifice,
          capturing the essence of human emotions and relationships. With a
          gripping narrative and memorable music, "Awarapan" has garnered a
          massive fan following both in India and abroad, solidifying Emraan
          Hashmi's status as a versatile actor.
        </p>
      );
    },
  },
];

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
        ></motion.div>
      )}
      {currentCard && (
        <motion.div
          layoutId={`card-${currentCard.title}`}
          ref={ref}
          className="fixed inset-0 z-20 m-auto h-[500px] w-80 overflow-hidden rounded-2xl border border-neutral-200 bg-white/85 p-6 shadow-lg backdrop-blur-sm"
        >
          <motion.img
            layoutId={`card-image-${currentCard.title}`}
            src={currentCard.src}
            alt={currentCard.title}
            className="mx-auto mb-4 aspect-square rounded-xl"
          />
          <div className="flex flex-col items-start justify-between rounded-2xl p-4 shadow-inner">
            <div className="flex w-full flex-row items-center justify-between gap-2">
              <div className="flex flex-col justify-start gap-1 text-start">
                <motion.h2
                  layoutId={`card-title-${currentCard.title}`}
                  className="text-xs font-semibold tracking-tight text-black"
                >
                  {currentCard.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${currentCard.title}`}
                  className="text-[10px] font-medium text-neutral-400"
                >
                  {currentCard.description}
                </motion.p>
              </div>
              <motion.div layoutId={`card-cta-${currentCard.title}`}>
                <Link
                  href={currentCard.ctaLink}
                  className="rounded-full bg-teal-500 px-4 py-1 text-xs text-white"
                >
                  {currentCard.ctaText}
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
              }}
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
            layoutId={`card-${card.title}`}
            onClick={() => setCurrentCard(card)}
            className="flex cursor-pointer items-center justify-between rounded-xl border border-neutral-200 bg-white p-4"
          >
            <div className="flex items-center gap-4">
              <motion.img
                layoutId={`card-image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="aspect-square h-14 rounded-lg"
              />
              <div className="flex flex-col justify-start gap-2 text-start">
                <motion.h2
                  layoutId={`card-title-${card.title}`}
                  className="text-xs font-semibold tracking-tight text-black"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${card.title}`}
                  className="text-[10px] font-medium text-neutral-400"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.div
              layoutId={`card-cta-${card.title}`}
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
