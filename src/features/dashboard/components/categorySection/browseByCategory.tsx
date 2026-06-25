import SectionHeader from "../sectionHeader";
import CategoryTile from "./categoryTile";
import LeftRightButtons from "../../../../components/leftRightButtons/leftRightButtons";
import { useCategories } from "../../../../hooks/useCategories";

export default function BrowseByCategories() {
    const { data: categories, isLoading, isError } = useCategories(8);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex w-full justify-between items-end">
                <SectionHeader labelText="Categories" headerText="Browse By Categories" />
                <LeftRightButtons />
            </div>
            {isLoading && <div className="text-gray-400 text-sm">Loading products...</div>}
            {isError && <div className="text-[#DB4444] text-sm">Failed to load products.</div>}
            {categories && (
                <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-8 gap-6">
                    {categories.map((category) => (
                        <CategoryTile key={category.name} urlPath={category.urlPath}>
                            {category.name}
                        </CategoryTile>
                    ))}
                </div>
            )}
        </div>
    );
}