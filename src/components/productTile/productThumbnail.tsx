import { useState } from "react";

import { Heart, Eye } from "lucide-react";

export interface ProductThumbnailProps {
    discount: number;
    liked: boolean;
    watch: boolean;
    imagePath: string;
}

export default function ProductThumbnail({ discount, liked, watch, imagePath }: ProductThumbnailProps) {
    const [isLiked, setIsLiked] = useState(liked);
    const discountLabel = `${Math.round(discount * 100)}%`;

    return (
        <div className="relative bg-[#F5F5F5] rounded-md overflow-hidden group aspect-square">

            
            {
                discount > 0 
                    ? <div className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs font-semibold px-2 py-1 rounded">
                        -{discountLabel}
                        </div>
                    : <></>
            }

            
            <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button
                    onClick={() => setIsLiked(!isLiked)}
                    className="bg-white rounded-full p-1.5 shadow hover:scale-110 transition-transform"
                >
                    {isLiked
                        ? <Heart className="w-5 h-5 text-[#DB4444]" />
                        : <Heart className="w-5 h-5 text-black" />
                    }
                </button>
                {watch && (
                    <button className="bg-white rounded-full p-1.5 shadow hover:scale-110 transition-transform">
                        <Eye className="w-5 h-5 text-black" />
                    </button>
                )}
            </div>

            
            <img
                src={imagePath}
                alt="Product"
                className="w-full object-contain p-4 aspect-square"
            />

            
            <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-sm font-medium text-center py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer">
                Add To Cart
            </div>
        </div>
    )
}