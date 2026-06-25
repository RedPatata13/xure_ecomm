import ProductThumbnail from "./productThumbnail";

export interface ProductTileProps {
    productName: string;
    originalPrice: number;
    discount: number;
    rating: number;
    ratingCount: number;
    liked?: boolean;
    watch?: boolean;
    imagePath: string;
    width?: string | number;
}
export default function ProductTile({
    productName,
    originalPrice,
    discount,
    rating,
    ratingCount,
    liked = false,
    watch = true,
    imagePath,
    width,
}: ProductTileProps) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    const price = Math.round(originalPrice * (1 - discount));

    const widthStyle = width !== undefined
        ? { width: typeof width === "number" ? `${width}px` : width }
        : undefined;

    return (
        <div className="flex flex-col gap-2 shrink-0" style={widthStyle}>
            <ProductThumbnail
                discount={discount}
                liked={liked}
                watch={watch}
                imagePath={imagePath}
            />
            <div className="flex flex-col gap-1 px-1">
                <p className="font-semibold text-sm truncate">{productName}</p>
                <div className="flex items-center gap-2">
                    <span className="text-[#DB4444] font-semibold text-sm">${price}</span>
                    {discount > 0
                        ? <span className="text-gray-400 line-through text-sm">${originalPrice}</span>
                        : <></>
                    }
                </div>
                <div className="flex items-center gap-1">
                    {Array.from({ length: fullStars }).map((_, i) => (
                        <span key={`full-${i}`} className="text-yellow-400 text-sm">★</span>
                    ))}
                    {Array.from({ length: emptyStars }).map((_, i) => (
                        <span key={`empty-${i}`} className="text-gray-300 text-sm">★</span>
                    ))}
                    <span className="text-gray-400 text-xs ml-1">({ratingCount})</span>
                </div>
            </div>
        </div>
    );
}