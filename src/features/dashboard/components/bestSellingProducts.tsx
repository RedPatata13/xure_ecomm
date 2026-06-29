import ProductTile from "../../../components/productTile/productTile";
import SectionHeader from "./sectionHeader";
import { useProducts } from "../../../hooks/useBestSellingProducts";
import Button from "../../../components/button";
import { useRef } from "react";

// const TILE_WIDTH = 192 + 24;

export default function BestSellingProducts() {
  const { data: products, isLoading, isError } = useProducts(8);
  const containerRef = useRef<HTMLDivElement>(null);
  // const [visibleCount, setVisibleCount] = useState(4);

  return (
    <div className="flex flex-col gap-6" ref={containerRef}>
      <div className="flex w-full justify-between items-end">
        <SectionHeader
          labelText="This Month"
          headerText="Best Selling Products"
        />
        <Button size="lg">View All</Button>
      </div>
      {isLoading && (
        <div className="text-gray-400 text-sm">Loading products...</div>
      )}
      {isError && (
        <div className="text-[#DB4444] text-sm">Failed to load products.</div>
      )}
      {products && (
        <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-8 gap-6">
          {products.slice(0, 8).map((product) => (
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
            />
          ))}
        </div>
      )}
    </div>
  );
}
