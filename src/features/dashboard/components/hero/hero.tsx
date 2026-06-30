import HeroCarousel from "./heroCarousel";
import HeroSidebar from "./heroSIdebar";
import SampleHeroSlide from "./slides/testSlide";
import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const sidebarVariants = {
  hidden: { x: -40, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

const carouselVariants = {
  hidden: { y: 16, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

export default function Hero() {
  return (
    <motion.div
      className="flex items-stretch"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="hidden lg:block w-48 lg:w-56 shrink-0 border-r border-gray-200"
        variants={sidebarVariants}
      >
        <HeroSidebar />
      </motion.div>

      <motion.div className="flex-1" variants={carouselVariants}>
        <HeroCarousel
          slides={[SampleHeroSlide, SampleHeroSlide, SampleHeroSlide]}
        />
      </motion.div>
    </motion.div>
  );
}