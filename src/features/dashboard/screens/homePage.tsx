import BestSellingProducts from "../components/bestSellingProducts";
import BrowseByCategories from "../components/categorySection/browseByCategory";
import ExploreProducts from "../components/explore";
import FlashSales from "../components/flashSales";
import Hero from "../components/hero/hero";
import NewArrivals from "../components/newArrival";
import SubFooter from "../components/subfooter";

export default function HomePage() {
    return (
        <div className="flex flex-col gap-16 py-10 px-6 md:px-12 lg:px-24 w-full">
            <Hero />
            <FlashSales />
            <BrowseByCategories />
            <BestSellingProducts />
            <ExploreProducts />
            <NewArrivals />
            <SubFooter />
        </div>
    )
}