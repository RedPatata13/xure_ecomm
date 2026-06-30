import AdSection from "../components/adSection/adSection";
import BestSellingProducts from "../components/bestSellingProducts";
import BrowseByCategories from "../components/categorySection/browseByCategory";
import ExploreProducts from "../components/explore";
import FlashSales from "../components/flashSales";
import Hero from "../components/hero/hero";
// import NewArrivals from "../components/newArrival";
import NewArrivals from "../newArrival/newArrival";
import SubFooter from "../components/subfooter";

export default function HomePage() {
    return (
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16 py-6 md:p-12 px-6 lg:p-24 w-full lg:py-12">
            <Hero />
            <FlashSales />
            <BrowseByCategories />
            <BestSellingProducts />
            <AdSection targetDate={new Date("2026-12-31T23:59:59")} />
            <ExploreProducts />
            <NewArrivals />
            <SubFooter />
        </div>
    )
}