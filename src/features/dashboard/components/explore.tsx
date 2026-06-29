import ProductTile from "../../../components/productTile/productTile";
import SectionHeader from "./sectionHeader";
import { useProducts } from "../../../hooks/useBestSellingProducts";
import LeftRightButtons from "../../../components/leftRightButtons/leftRightButtons";
import Button from "../../../components/button";
import { useState, useEffect } from "react";

const PAGE_SIZE_SM = 4;
const PAGE_SIZE_LG = 8;
const BREAKPOINT_MD = 768; //tailwind md

function usePageSize() {
  const [pageSize, setPageSize] = useState<number>(
    typeof window !== "undefined" && window.innerWidth < BREAKPOINT_MD
      ? PAGE_SIZE_SM
      : PAGE_SIZE_LG,
  );

  useEffect(() => {
    function handleResize() {
      setPageSize(
        window.innerWidth < BREAKPOINT_MD ? PAGE_SIZE_SM : PAGE_SIZE_LG,
      );
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return pageSize;
}

export default function BestSellingProducts() {
  const [page, setPage] = useState(0);
  const pageSize = usePageSize();

  const { data: products, isLoading, isError } = useProducts(pageSize * 10);

  const dupe = products
    ? Array.from({ length: 5 }, () => products).flat()
    : undefined;

  const totalPages = dupe ? Math.ceil(dupe.length / pageSize) : 0;

  const pages = dupe
    ? Array.from({ length: totalPages }, (_, i) =>
        dupe.slice(i * pageSize, i * pageSize + pageSize),
      )
    : [];

  const safePage = Math.min(page, Math.max(0, totalPages - 1));

  function handleLeft() {
    setPage(Math.max(0, safePage - 1));
  }

  function handleRight() {
    setPage(Math.min(totalPages - 1, safePage + 1));
  }

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex w-full justify-between items-end">
        <SectionHeader
          labelText="Our Products"
          headerText="Explore Our Products"
        />
        <LeftRightButtons
          onPrev={handleLeft}
          onNext={handleRight}
          disableLeft={safePage === 0}
          disableRight={safePage >= totalPages - 1}
        />
      </div>

      {isLoading && (
        <div className="text-gray-400 text-sm">Loading products...</div>
      )}

      {isError && (
        <div className="text-[#DB4444] text-sm">Failed to load products.</div>
      )}

      {pages.length > 0 && (
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${safePage * 100}%)`,
            }}
          >
            {pages.map((pageItems, pageIndex) => (
              <div
                key={pageIndex}
                className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-8 gap-6 w-full shrink-0"
              >
                {pageItems.map((product, i) => (
                  <ProductTile
                    key={`${product.id}-${i}`}
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
            ))}
          </div>
        </div>
      )}

      <hr className="border-t border-black" />

      <div className="w-full flex items-center justify-center my-4">
        <Button size="md" className="w-64">
          View All Products
        </Button>
      </div>
    </div>
  );
}
