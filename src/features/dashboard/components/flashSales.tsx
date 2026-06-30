import Countdown from "../../../components/timer/timer";
import SectionHeader from "./sectionHeader";
import ProductTile from "../../../components/productTile/productTile";
import LeftRightButtons from "../../../components/leftRightButtons/leftRightButtons";
import { useProducts } from "../../../hooks/useBestSellingProducts";
import { useRef } from "react";
import Button from "../../../components/button";
import LoadingSpinner from "../../../components/loadingSpinner/loadingSpinner";
import { motion, type Variants } from "motion/react";

const TILE_WIDTH = 270;
const TILE_GAP = 24; // gap-6 intw
const SCROLL_AMOUNT = TILE_WIDTH + TILE_GAP;
const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const tileVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

export default function FlashSales() {
  const { data: products, isLoading, isError } = useProducts(8);
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  }
  function scrollRight() {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full justify-between items-end">
        <div className="flex gap-28 items-end">
          <SectionHeader
            headerText="Flash Sales"
            labelText="Today's"
            className="whitespace-nowrap"
          />
          <Countdown targetDate={new Date("2026-12-31T23:59:59")} />
        </div>
        <LeftRightButtons onPrev={scrollLeft} onNext={scrollRight} />
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-87.5 gap-4">
          <LoadingSpinner />
          <div className="text-lg text-gray-500">Loading...</div>
        </div>
      )}

      {isError && (
        <div className="flex justify-center items-center h-87.5 text-[#DB4444]">
          Failed to load products.
        </div>
      )}

      {products && (
        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={tileVariants}>
              <ProductTile
                productName={product.name}
                originalPrice={product.price}
                discount={product.discount}
                rating={product.rating}
                ratingCount={product.ratingsCount}
                imagePath={product.imagePath}
                watch={product.watched}
                liked={product.liked}
                width={TILE_WIDTH}
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      <div className="flex justify-center my-4">
        <Button size="md" className="w-64">
          View All Products
        </Button>
      </div>
      <hr className="border-t border-gray-300" />
    </div>
  );
}