import { useQuery } from "@tanstack/react-query";
import { fetchBestSellingProducts } from "../api/products";

export function useProducts(limit?: number) {
  return useQuery({
    queryKey: ["best-selling-products"],
    queryFn: () => fetchBestSellingProducts(limit),
  });
}
