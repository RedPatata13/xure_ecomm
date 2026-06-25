import HeroSidebarItem from "./heroSidebarItem";

export default function HeroSidebar(){
    return (
        <div className="flex flex-col gap-4">
            <HeroSidebarItem>Woman's Fashion</HeroSidebarItem>
            <HeroSidebarItem>Men's Fashion</HeroSidebarItem>
            <HeroSidebarItem>Electronics</HeroSidebarItem>
            <HeroSidebarItem>Home & Lifestyle</HeroSidebarItem>
            <HeroSidebarItem>Medicine</HeroSidebarItem>
            <HeroSidebarItem>Sports & Outdoor</HeroSidebarItem>
            <HeroSidebarItem>Baby's & Toys</HeroSidebarItem>
            <HeroSidebarItem>Groceries & Pets</HeroSidebarItem>
            <HeroSidebarItem>Health & Beauty</HeroSidebarItem>
        </div>
    )
}