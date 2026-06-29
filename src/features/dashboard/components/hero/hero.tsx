import HeroCarousel from "./heroCarousel";
import HeroSidebar from "./heroSIdebar";
import SampleHeroSlide from "./slides/testSlide";

export default function Hero() {
  return (
    <div className="flex items-stretch">
      <div className="hidden lg:block w-48 lg:w-56 shrink-0 border-r border-gray-200">
        <HeroSidebar />
      </div>
      <HeroCarousel
        slides={[SampleHeroSlide, SampleHeroSlide, SampleHeroSlide]}
      />
    </div>
  );
}
