import { CircleDollarSign, Gift, Handbag, Store } from "lucide-react";
import SubFooter from "../../dashboard/components/subfooter";
import StatsTile from "../components/statsTile";
import ExecutiveCarousel from "../components/executiveCarousel";
import SectionHeader from "../../dashboard/components/sectionHeader";

export default function AboutPage() {
  const X_PADDING = "px-12 lg:px-24";
  const TEXT_AREA_PADDING = "lg:pl-24 max-lg:px-12";
  return (
    <div className="flex flex-col py-6 w-fill gap-6">
      <div className={`flex gap-6 w-100 ${X_PADDING}`}>
        <div>Home</div>
        <div>/</div>
        <div>About</div>
      </div>

      <div
        className={`flex max-md:flex-col pl-24 ${TEXT_AREA_PADDING} gap-10 items-center`}
      >
        <div className="flex flex-col h-full justify-center gap-10">
          <div className="text-6xl">Our Story</div>
          <div className="text">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millions customers
            across the region.
            <br />
            <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </div>
        </div>
        <img
          className="md:w-[55%]"
          src="/twoblackgirls.png"
          alt="TwoBlackGirlsSmiling"
        />
      </div>
      {/* <hr className="border-t border border-gray-200" /> */}
      <div className={`"w-full flex flex-col gap-6 ${X_PADDING} my-12`}>
        <SectionHeader labelText="Numbers" headerText="Here in Exclusive" />
        <div
          id="stats"
          className={`
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-6
            px-6
            md:px-12
            lg:px-24
            w-full
            justify-items-center
            items-center
          `}
        >
          <StatsTile
            icon={Store}
            count={10_500_100}
            label="Sellers active our site"
          />
          <StatsTile
            icon={CircleDollarSign}
            count={33000}
            label="Monthly Product Sale"
          />
          <StatsTile
            icon={Gift}
            count={45500}
            label="Customers active in our site"
          />
          <StatsTile
            icon={Handbag}
            count={67000}
            label="Annual gross sale in our site"
          />
        </div>
      </div>
      <div id="executives" className="w-full flex items-center justify-center">
        <ExecutiveCarousel />
      </div>
      <SubFooter />
    </div>
  );
}
