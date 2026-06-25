import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/category";

export function useCategories(limit? : number) {
    return useQuery({
        queryKey: ["categories"],
        queryFn: () => fetchCategories(limit)
    })
}