import NewArrivalTile from "./newArrivalTile";
import SectionHeader from "./sectionHeader";

export default function NewArrivals() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader labelText="Featured" headerText="New Arrival" />
      <div className="flex flex-col md:flex-row gap-4 md:h-150">
        <NewArrivalTile
          productName="PlayStation 5"
          productDesc="Black and White version of the PS5 coming out on sale"
          imagePath="/newArrival/ps5.svg"
          className="w-full h-64 md:h-full md:flex-1"
        />

        {/* Right column */}
        <div className="flex flex-col gap-4 md:flex-1">
          {/* Women's Collections */}
          <NewArrivalTile
            productName="Women's Collections"
            productDesc="Feature woman collections that give you another vibe"
            imagePath="/newArrival/woman_posing.svg"
            className="w-full h-56 md:h-1/2"
          />

          {/* Bottom row: Speakers + Perfume */}
          <div className="flex gap-4 h-40 md:h-1/2">
            <NewArrivalTile
              productName="Speakers"
              productDesc="Amazon Wireless Speakers"
              imagePath="/newArrival/speaker.svg"
              className="flex-1 h-full"
            />
            <NewArrivalTile
              productName="Perfume"
              productDesc="GUCCI INTENSE OUO EDP"
              imagePath="/newArrival/perfume.png"
              className="flex-1 h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
