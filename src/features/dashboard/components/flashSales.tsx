import Countdown from "../../../components/timer/timer";
import SectionHeader from "./sectionHeader";
import ProductTile from "../../../components/productTile/productTile";
import LeftRightButtons from "../../../components/leftRightButtons/leftRightButtons";
import { useProducts } from "../../../hooks/useBestSellingProducts";
import { useRef } from "react";
import Button from "../../../components/button";

const TILE_WIDTH = 270;
const TILE_GAP = 24; //gap-6
const SCROLL_AMOUNT = TILE_WIDTH + TILE_GAP;

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
    <div
      ref={scrollRef}
      className="flex flex-col gap-6 scroll-smooth scrollbar-hide"
    >
      <div className="flex w-full justify-between items-end">
        <div className="flex gap-28 items-end">
          <SectionHeader headerText="Flash Sales" labelText="Today's" />
          <Countdown targetDate={new Date("2026-12-31T23:59:59")} />
        </div>
        <LeftRightButtons onPrev={scrollLeft} onNext={scrollRight} />
      </div>
      {isLoading && (
        <div className="text-gray-400 text-sm">Loading products...</div>
      )}
      {isError && (
        <div className="text-[#DB4444] text-sm">Failed to load products.</div>
      )}
      {products && (
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {products.map((product) => (
            <ProductTile
              key={product.id}
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
          ))}
        </div>
      )}
      <div className="w-full flex items-center justify-center my-4">
        <Button size="md" className="w-64">
          View All Products
        </Button>
      </div>
      <hr className="border-t border-gray-300" />
    </div>
  );
}
