import SectionHeader from "../../dashboard/components/sectionHeader";
import LeftRightButtons from "../../../components/leftRightButtons/leftRightButtons";
import { useState, useEffect } from "react";
import { useExecutives } from "../../../hooks/useExecutives";
import ExecutiveTile from "./executiveTile";

const PAGE_SIZE_SM = 2;
const PAGE_SIZE_LG = 4;
const BREAKPOINT_MD = 768;

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

export default function ExecutiveCarousel() {
  const [page, setPage] = useState(0);
  const pageSize = usePageSize();

  const { data: executives, isLoading, isError } = useExecutives();

  const totalPages = executives ? Math.ceil(executives.length / pageSize) : 0;

  const pages = executives
    ? Array.from({ length: totalPages }, (_, i) =>
        executives.slice(i * pageSize, i * pageSize + pageSize),
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
    <div className="w-full flex flex-col gap-6 items-center">
      <div className="flex w-full justify-between items-end">
        <SectionHeader
          labelText="The Figureheads"
          headerText="Meet Our Executives"
          
        />
        <LeftRightButtons
          onPrev={handleLeft}
          onNext={handleRight}
          disableLeft={safePage === 0}
          disableRight={safePage >= totalPages - 1}
        />
      </div>

      {isLoading && (
        <div className="text-gray-400 text-sm">Loading Executives...</div>
      )}

      {isError && (
        <div className="text-[#DB4444] text-sm">Failed to load Executives.</div>
      )}

      {pages.length > 0 && (
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${safePage * 100}%)` }}
          >
            {pages.map((pageItems, pageIndex) => (
              <div
                key={pageIndex}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full shrink-0"
              >
                {pageItems.map((executive, i) => (
                  <ExecutiveTile
                    key={`Executive-${i}`}
                    executiveName={executive.name}
                    executiveTitle={executive.title}
                    imgPath={executive.imgPath}
                    twitterUrl={executive.facebookUrl}
                    linkedinUrl={executive.linkedInUrl}
                    instagramUrl={executive.instagramUrl}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      <hr className="w-full border-t border-black/10" />
    </div>
  );
}
