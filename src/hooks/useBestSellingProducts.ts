import { useQuery } from "@tanstack/react-query";
import { fetchBestSellingProducts } from "../api/products";

export function useBestSellingProducts(limit? : number) {
    return useQuery({
        queryKey: ["best-selling-products"],
        queryFn: () => fetchBestSellingProducts(limit),
    })
}